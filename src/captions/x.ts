import type { PostType } from "../types.ts";
import { type Ctx, hashLine, themeTag, uniqueTags } from "./context.ts";
import { xLength } from "./xlength.ts";

const LIMIT = 280;
const MAX_POSTS = 4;

/** One line of a post. `optional` lines are dropped (from the end) when the post is too long. */
interface Line {
  text: string;
  optional?: boolean;
  /** Left out when the whole caption fits in a single post. */
  threadOnly?: boolean;
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
  const single = parts.flat().filter((l) => !l.threadOnly).map((l) => l.text).join("\n");
  if (xLength(single) <= LIMIT) return [single];
  const posts = parts.map(compose).filter(Boolean);
  if (posts.length > MAX_POSTS) throw new Error(`X thread has ${posts.length} posts, at most ${MAX_POSTS}`);
  return posts;
}

function tags(c: Ctx): string {
  return hashLine(uniqueTags(c.sig.hashtags.slice(0, 1), c.community.hashtags.slice(0, 1), themeTag(c.s)).slice(0, 2));
}

const plain = (...texts: string[]): Line[] => texts.map((text) => ({ text }));

function topicLines(c: Ctx, heading: string): Line[] {
  if (c.s.topics.length === 0) return [];
  return [
    { text: heading, threadOnly: true },
    ...c.s.topics.map((t): Line => ({ text: `• ${t}`, optional: true, threadOnly: true })),
  ];
}

function joinPart(c: Ctx, lead: string): Line[] {
  return [...plain(lead, c.url), { text: tags(c) }];
}

function recapThread(c: Ctx): string[] {
  const r = c.s.recap;
  if (!r) throw new Error(`session ${c.s.id} has no recap`);
  const head = r.attendees
    ? `Rangkuman "${c.s.title}". ${r.attendees} orang ngobrol di voice channel. Makasih ${c.thanks}!`
    : `Rangkuman "${c.s.title}". Makasih ${c.thanks} dan semua yang ikut ngobrol di voice channel!`;
  const numbered = r.points.map((p, i): Line => ({ text: `${i + 1}. ${p.title}`, optional: i > 0 }));
  // Split the points over at most two posts, filling the first as far as it goes.
  const first: Line[] = [{ text: "Poin-poin utamanya:" }];
  const rest: Line[] = [];
  for (const line of numbered) {
    if (rest.length === 0 && xLength([...first, line].map((l) => l.text).join("\n")) <= LIMIT) first.push(line);
    else rest.push(line);
  }
  const closing = plain(`Sesi berikutnya diumumkan di Discord FORA. Gabung dulu, siapa pun boleh ikut ngobrol dan bertanya:`, c.url, tags(c));
  const links = r.links?.length ? [{ text: `Bacaan: ${r.links[0].label} ${r.links[0].url}`, optional: true }] : [];
  const posts = [compose(plain(head)), compose(first)];
  if (rest.length) posts.push(compose(rest));
  posts.push(compose([...links, ...closing]));
  return posts;
}

export function x(c: Ctx, type: PostType): string[] {
  const { s, sig } = c;
  switch (type) {
    case "announce":
      return build([
        plain(`🎙 ${s.title}`, `${c.dateShort}, ${c.range}`),
        topicLines(c, "Yang kita bahas:"),
        joinPart(c, `Ngobrol santai di ${c.voice} Discord FORA, siapa pun boleh ikut bicara dan bertanya.`),
      ]);
    case "reminder":
      return build([
        plain(`🔴 Hari ini ${c.time}`, s.title),
        topicLines(c, "Hari ini kita bahas:"),
        joinPart(c, `Sudah mulai? Langsung join ke ${c.voice} Discord FORA. Siapa pun boleh ngobrol dan bertanya.`),
      ]);
    case "recap":
      return recapThread(c);
    case "cover":
      return build([
        plain(`${c.series} bareng ${c.brand}`, `Sesi: ${s.title}`, `${c.dateShort}, ${c.range}`),
        joinPart(c, `Ngobrol santai di ${c.voice} Discord FORA, siapa pun boleh ikut bicara dan bertanya.`),
      ]);
    case "sig-intro":
      return build([
        plain(`Kenalan sama ${c.introName}: ${sig.tagline}`, `Sesi terdekat: ${s.title}, ${c.dateShort}.`),
        joinPart(c, `Ngobrol santai di ${c.voice} Discord FORA, pemula boleh banget ikut.`),
      ]);
  }
}
