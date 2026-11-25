import type { PostType } from "../types.ts";
import { castLine, type Ctx, hashLine, openDoor, shape, themeTag, uniqueTags } from "./context.ts";
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

/** The host's note leads the single post, unchanged, when everything still fits in it; otherwise it is left out. */
function noted(c: Ctx, body: Line[]): string[] {
  if (c.s.note) {
    const text = [c.s.note, ...body.map((l) => l.text)].join("\n");
    if (xLength(text) <= LIMIT) return [text];
  }
  return build([body]);
}

/** How to join and that anyone can listen or talk: said once, worded two ways. */
function joinPart(c: Ctx, variant: number): Line[] {
  const open =
    variant % 2 === 0
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
  const mark = (i: number) => (v === 0 ? `${i + 1}.` : "-");
  const numbered = r.points.map((p, i): Line => ({ text: `${mark(i)} ${p.title}`, optional: i > 0 }));
  // Split the points over at most two posts, filling the first as far as it goes.
  const first: Line[] = v === 0 ? [{ text: "Intinya:" }] : [];
  const rest: Line[] = [];
  for (const line of numbered) {
    const fits = first.length === 0 || xLength([...first, line].map((l) => l.text).join("\n")) <= LIMIT;
    if (rest.length === 0 && fits) first.push(line);
    else rest.push(line);
  }
  const closing =
    v === 0
      ? plain(`Sesi berikutnya diumumkan di Discord FORA. ${openDoor(c, "x|recap")}`, c.url, tags(c))
      : plain(`Sesi berikutnya kita umumkan di Discord FORA. ${openDoor(c, "x|recap")}`, c.url, tags(c));
  const links = r.links?.length ? [{ text: `${r.links[0].label} ${r.links[0].url}`, optional: true }] : [];
  const posts = [compose(plain(head)), compose(first)];
  if (rest.length) posts.push(compose(rest));
  posts.push(compose([...links, ...closing]));
  if (posts.length > MAX_POSTS) throw new Error(`X thread has ${posts.length} posts, at most ${MAX_POSTS}`);
  return posts;
}

export function x(c: Ctx, type: PostType): string[] {
  const { s, sig } = c;
  const v = shape(c, `x|${type}`, 3);
  switch (type) {
    case "announce":
      return noted(c, [
          ...(v === 0
          ? plain(s.title, `${c.dateShort}, ${c.range}`)
          : v === 1
            ? plain(s.title, `${c.dateShort} jam ${c.time}.`)
            : plain(`${c.dateShort} jam ${c.time}, kita kumpul di voice.`, s.title)),
        ...joinPart(c, v),
      ]);
    case "reminder":
      return noted(c, [
          ...(v === 0
          ? plain(`Hari ini jam ${c.time}, ${s.title}.`)
          : v === 1
            ? plain(`${s.title} mulai ${c.time}.`, "Kalau sudah jalan, nyusul aja.")
            : plain(`Jam ${c.time} nanti, ${s.title}.`)),
        ...joinPart(c, v),
      ]);
    case "recap":
      return recapThread(c);
    case "cover":
      return noted(c, [
          ...(v === 1
          ? plain(s.title, `${c.series}, ${c.dateShort}, ${c.range}`)
          : plain(`${c.series} bareng ${c.brand}.`, s.title, `${c.dateShort}, ${c.range}`)),
        ...joinPart(c, v),
      ]);
    case "sig-intro":
      return build([
        v === 1 ? plain(`${sig.tagline}`) : plain(`${c.introName}. ${sig.tagline}`),
        plain(`Sesi terdekat soal "${s.title}", ${c.dateShort}.`),
        joinPart(c, v),
      ]);
    case "speakers": {
      // Handles go first when the sentence still fits one post; a long cast is counted instead of named.
      const intro =
        [castLine(c, true), castLine(c, false)].find((line) => xLength(line) <= LIMIT) ??
        `Ada ${s.speakers.length} pembicara, dipandu ${s.host.name}.`;
      return build([plain(intro), [...plain(`"${s.title}", mulai ${c.time}.`), ...joinPart(c, v)]]);
    }
  }
}
