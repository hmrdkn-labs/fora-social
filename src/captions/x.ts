import type { PostType } from "../types.ts";
import { aboutPerson, cap, type Ctx, everyone, firstSentence, hashLine, openDoor, shape, themeTag, uniqueTags } from "./context.ts";
import { xLength } from "./xlength.ts";

const LIMIT = 280;
const MAX_POSTS = 4;

/** One line of a post. `optional` lines are dropped (from the end) when the post is too long. */
interface Line {
  text: string;
  optional?: boolean;
}

function compose(lines: Line[]): string {
  const kept = [...lines];
  const render = () => kept.map((l) => l.text).join("\n");
  while (xLength(render()) > LIMIT) {
    let i = kept.length - 1;
    while (i >= 0 && !kept[i].optional) i--;
    if (i < 0) throw new Error(`X post cannot fit in ${LIMIT} characters: ${render()}`);
    kept.splice(i, 1);
  }
  return render();
}

/** One post if all parts fit together, otherwise one post per part. */
function build(parts: Line[][]): string[] {
  const single = parts.flat().map((l) => l.text).join("\n");
  if (xLength(single) <= LIMIT) return [single];
  const posts = parts.map(compose).filter(Boolean);
  if (posts.length > MAX_POSTS) throw new Error(`X thread has ${posts.length} posts, at most ${MAX_POSTS}`);
  return posts;
}

/** One tag: the theme if it is a searchable word, else the SIG's own. */
function tags(c: Ctx): string {
  return hashLine(uniqueTags(themeTag(c.s), c.sig.hashtags.slice(0, 1)).slice(0, 1));
}

const plain = (...texts: string[]): Line[] => texts.map((text) => ({ text }));

/**
 * One concrete situation leads the single post: the host's note when it fits, else the first
 * sentence of the description, else nothing. The image already shows the logistics, so they
 * stay short.
 */
function hooked(c: Ctx, body: Line[]): string[] {
  const rest = body.map((l) => l.text);
  for (const lead of [c.s.note, firstSentence(c.s.description)]) {
    if (!lead) continue;
    const text = [lead, ...rest].join("\n");
    if (xLength(text) <= LIMIT) return [text];
  }
  return build([body]);
}

/** How to join and that anyone can listen or talk: said once, worded two ways. */
function joinPart(c: Ctx, variant: number, live = false): Line[] {
  const open = live
    ? variant % 2 === 0
      ? `Langsung masuk ke ${c.voice} di Discord FORA. ${openDoor(c, "x|join")}`
      : `Masuk lewat link ini, ke ${c.voice}. ${openDoor(c, "x|join")}`
    : variant % 2 === 0
      ? `Di ${c.voice} Discord FORA. ${openDoor(c, "x|join")}`
      : `Masuk aja ke ${c.voice} di Discord FORA. ${openDoor(c, "x|join")}`;
  return [...plain(open, c.url), { text: tags(c) }];
}

function recapThread(c: Ctx): string[] {
  const r = c.s.recap;
  if (!r) throw new Error(`session ${c.s.id} has no recap`);
  const v = shape(c, "x|recap", 2);
  const crowd = r.attendees ? `${r.attendees} orang ngobrol di voice channel` : "Makasih yang sudah mampir ke voice channel";
  const head =
    v === 0
      ? `Rekap "${c.s.title}". ${crowd}. Makasih ${c.thanks}.`
      : `${crowd} buat "${c.s.title}". Makasih ${c.thanks}, ini catatannya.`;
  // The middle post spends its room on one point, explained, not on a list of titles.
  const withBody = r.points.filter((p) => p.body);
  const pick = withBody.length > 0 ? withBody[shape(c, "x|recap|point", withBody.length)]! : r.points[0]!;
  const explained = pick.body ? `${pick.title}. ${pick.body}` : pick.title;
  const middle = [{ text: explained }];
  const links = r.links?.length ? [{ text: `${r.links[0].label} ${r.links[0].url}`, optional: true }] : [];
  const prompt = r.question ?? "";
  const closing = plain(`Sesi berikutnya diumumkan di Discord FORA. ${openDoor(c, "x|recap")}`, c.url, tags(c));
  const posts = [compose(plain(head)), compose(middle), compose([...(prompt ? [{ text: prompt, optional: true }] : []), ...links, ...closing])];
  if (posts.length > MAX_POSTS) throw new Error(`X thread has ${posts.length} posts, at most ${MAX_POSTS}`);
  return posts;
}

/** Who talks and what they will share, as many people as fit one post; a long cast is counted. */
function speakersIntro(c: Ctx): string {
  const people = everyone(c);
  const fits = (text: string) => xLength(text) <= LIMIT;
  for (const withHandle of [true, false]) {
    const all = people.map((p) => aboutPerson(c, p, withHandle)).join("\n");
    if (fits(all)) return all;
  }
  for (const withHandle of [true, false]) {
    const first = aboutPerson(c, people[0]!, withHandle);
    if (fits(first)) return first;
  }
  return `Ada ${c.s.speakers.length} pembicara, dipandu ${c.s.host.name}.`;
}

export function x(c: Ctx, type: PostType): string[] {
  const { s, sig } = c;
  const v = shape(c, `x|${type}`, 3);
  switch (type) {
    case "announce":
      return hooked(c, [
        ...(v === 0
          ? plain(s.title, `${c.dateShort}, ${c.range}`)
          : v === 1
            ? plain(s.title, `${c.dateShort} jam ${c.time}.`)
            : plain(`${c.dateShort} jam ${c.time}, kita kumpul di voice.`, s.title)),
        ...joinPart(c, v),
      ]);
    case "reminder":
      return build([
        v === 0
          ? plain(`Nanti jam ${c.time}, ${s.title}.`)
          : v === 1
            ? plain(`${s.title}, ${c.dateShort}, nanti jam ${c.time}.`)
            : plain(`Jam ${c.time} nanti, ${s.title}.`, `${cap(c.who)}.`),
        joinPart(c, v),
      ]);
    case "live":
      return build([
        v === 0
          ? plain(`${s.title} lagi jalan sekarang.`)
          : v === 1
            ? plain(`Live sekarang, ${s.title}.`)
            : plain(`Sudah mulai jam ${c.time}, ${s.title}.`),
        joinPart(c, v, true),
      ]);
    case "recap":
      return recapThread(c);
    case "cover":
      return build([
        v === 1
          ? plain(s.title, `${c.series}, ${c.dateShort}, ${c.range}`)
          : plain(`${s.series ? `${c.series} bareng ${c.brand}.` : `Tema ${s.theme} bareng ${c.brand}.`}`, s.title, `${c.dateShort}, ${c.range}`),
        joinPart(c, v),
      ]);
    case "sig-intro":
      return build([
        v === 1 ? plain(`${sig.tagline}`) : plain(`${c.introName}. ${sig.tagline}`),
        plain(`Sesi terdekat soal "${s.title}", ${c.dateShort}.`),
        joinPart(c, v),
      ]);
    case "speakers":
      return build([plain(speakersIntro(c)), [...plain(`"${s.title}", mulai ${c.time}.`), ...joinPart(c, v)]]);
  }
}
