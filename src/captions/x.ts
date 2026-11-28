import type { PostType } from "../types.ts";
import { aboutPerson, type Ctx, everyone, firstSentence, hashLine, nextAt, openDoor, PRACTICAL, practicalIndex, sentence, shape, shortName, sigAgenda, themeTag, uniqueTags } from "./context.ts";
import { joinNames } from "../format.ts";
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

/** The everyday problem as one short line, which a title may not say; none without one. */
const problem = (c: Ctx): string[] => (c.s.problem ? [sentence(c.s.problem)] : []);

/** The reminder's one practical detail. */
const practical = (c: Ctx): string => PRACTICAL[practicalIndex(c.s.id)];

/** One post if the lines fit, dropping optional ones from the end; a thread only when the rest cannot fit. */
function one(lines: Line[], parts: Line[][]): string[] {
  try {
    return [compose(lines)];
  } catch {
    return build(parts);
  }
}

/**
 * One concrete situation leads the single post: the host's note when it fits, else its first
 * sentence, else the session's plain problem. The image already shows the logistics, so when the
 * lead is long they shrink to one line. Nothing fits: the logistics alone.
 */
function hooked(c: Ctx, body: Line[], compact: Line[]): string[] {
  const leads = [c.s.note, c.s.note ? firstSentence(c.s.note) : firstSentence(c.s.description), ...problem(c)];
  for (const rest of [body, compact]) {
    for (const lead of leads) {
      if (!lead) continue;
      const text = [lead, ...rest.map((l) => l.text)].join("\n");
      if (xLength(text) <= LIMIT) return [text];
    }
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

/**
 * Who talks and what they will share, packed into as few posts as fit, so each person keeps
 * their line. Too many people for the thread: only the first, then a count.
 */
function speakersThread(c: Ctx): string[] {
  const people = everyone(c);
  const room = MAX_POSTS - 1;
  for (const withHandle of [true, false]) {
    const posts: string[] = [];
    for (const p of people) {
      const text = aboutPerson(c, p, withHandle);
      const last = posts.length - 1;
      if (last >= 0 && xLength(`${posts[last]}\n${text}`) <= LIMIT) posts[last] = `${posts[last]}\n${text}`;
      else posts.push(text);
    }
    if (posts.length <= room && posts.every((p) => xLength(p) <= LIMIT)) return posts;
  }
  const first = aboutPerson(c, people[0]!, false);
  if (xLength(first) <= LIMIT) return [first, `Ada ${people.length - 1} orang lagi, dipandu ${c.s.host.name}.`];
  return [`Ada ${c.s.speakers.length} pembicara, dipandu ${c.s.host.name}.`];
}

export function x(c: Ctx, type: PostType): string[] {
  const { s, sig } = c;
  const v = shape(c, `x|${type}`, 3);
  switch (type) {
    case "announce":
      return hooked(
        c,
        [
          ...(v === 0
            ? plain(s.title, `${c.dateShort}, ${c.range}`)
            : v === 1
              ? plain(s.title, `${c.dateShort} jam ${c.time}.`)
              : plain(`${c.dateShort} jam ${c.time}, kita kumpul di voice.`, s.title)),
          ...joinPart(c, v),
        ],
        [...plain(`${s.title}, ${c.dateShort} jam ${c.time}.`), ...joinPart(c, v)],
      );
    case "reminder": {
      const first = v === 0 ? `Nanti jam ${c.time}, ${s.title}.` : v === 1 ? `${s.title}, ${c.dateShort}, nanti jam ${c.time}.` : `Jam ${c.time} nanti, ${s.title}.`;
      // The problem outranks the practical detail: the poster's second slide already carries that one.
      const extra = [...problem(c), practical(c)].map((text) => ({ text, optional: true }));
      return one([{ text: first }, ...extra, ...joinPart(c, v)], [[{ text: first }, ...extra], joinPart(c, v)]);
    }
    case "live": {
      const first = v === 0 ? `${s.title} lagi jalan sekarang.` : v === 1 ? `Live sekarang, ${s.title}.` : `Sudah mulai jam ${c.time}, ${s.title}.`;
      const lines: Line[] = [{ text: first }, ...problem(c).map((text) => ({ text, optional: true })), ...joinPart(c, v, true)];
      return one(lines, [[{ text: first }, ...problem(c).map((text) => ({ text }))], joinPart(c, v, true)]);
    }
    case "recap":
      return recapThread(c);
    case "cover":
      return build([
        v === 1
          ? plain(s.title, ...problem(c), `${c.dateShort}, ${c.range}`)
          : s.problem
            ? plain(...problem(c), s.title, `${c.dateShort}, ${c.range}`)
            : plain(`${s.series ? `${c.series} bareng ${c.brand}.` : `Tema ${s.theme} bareng ${c.brand}.`}`, s.title, `${c.dateShort}, ${c.range}`),
        joinPart(c, v),
      ]);
    case "sig-intro": {
      // Names, then the agenda as bullets that drop from the end when the post is full. The agenda
      // items lose their parenthetical: the long explanation belongs to Instagram and LinkedIn.
      const people = sig.people ?? [];
      const names: Line[] = people.length > 0 ? [{ text: `Sekarang yang aktif ${joinNames(people.map(shortName))}.` }] : [];
      const items = sigAgenda(c).map((item) => item.replace(/\s*\(.*\)$/, ""));
      const work: Line[] = items.length > 0 ? [{ text: "Yang lagi dikerjakan.", optional: true }, ...items.map((text) => ({ text: `- ${text}`, optional: true }))] : [];
      const next = plain(`Sesi terdekat soal "${s.title}", ${s.date === undefined ? nextAt(c) : c.dateShort}.`);
      const intro = v === 1 ? plain(`${sig.tagline}`) : plain(`${c.introName}. ${sig.tagline}`);
      if (names.length + work.length === 0) return build([intro, next, joinPart(c, v)]);
      return build([intro, [...names, ...work], [...next, ...joinPart(c, v)]]);
    }
    case "speakers":
      return build([...speakersThread(c).map((text) => plain(text)), [...plain(`"${s.title}", mulai ${c.time}.`), ...joinPart(c, v)]]);
  }
}
