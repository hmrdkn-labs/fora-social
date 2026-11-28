// `pnpm posts <session-id>` writes posts/<session-id>/README.md: the committed images of one
// session grouped by platform, each post type with its images and a collapsible caption.
// Copy the rendered images into posts/<session-id>/ first (see posts/README.md).
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildCaptions } from "./captions/index.ts";
import { formatDate, formatTime, formatTimeRange } from "./format.ts";
import { loadCommunity, loadSession, loadSig } from "./load.ts";
import { fence } from "./markdown.ts";
import { REPO_ROOT } from "./paths.ts";
import type { Captions, Community, FormatId, PostType, Session, Sig } from "./types.ts";

interface Section {
  platform: "Instagram" | "X" | "LinkedIn";
  /** Image groups in order; `width` is the <img> width in px. */
  groups: { label: string; format: FormatId; width: number; pdf?: boolean }[];
  caption(captions: Captions): string[];
}

const SECTIONS: Section[] = [
  {
    platform: "Instagram",
    groups: [
      { label: "Feed", format: "ig-feed", width: 360 },
      { label: "Carousel", format: "ig-carousel", width: 180 },
      { label: "Story", format: "ig-story", width: 180 },
    ],
    caption: (c) => [c.instagram],
  },
  { platform: "X", groups: [{ label: "Image", format: "x", width: 360 }], caption: (c) => c.x },
  {
    platform: "LinkedIn",
    groups: [
      { label: "Image", format: "li-link", width: 360 },
      { label: "Document (upload the PDF)", format: "li-doc", width: 180, pdf: true },
    ],
    caption: (c) => [c.linkedin],
  },
];

/** Posts are listed in the order they are published. */
const ORDER: PostType[] = ["announce", "reminder", "live", "recap", "cover", "speakers", "sig-intro"];

function heading(type: PostType, session: Session): string {
  const day = formatDate(session).split(",")[0];
  switch (type) {
    case "announce":
      return "Announce (post now)";
    case "reminder":
      return `Reminder (${day} siang)`;
    case "live":
      return `Live (${day} ${formatTime(session).replace(" WIB", "")})`;
    case "recap":
      return "Recap (after the session)";
    case "cover":
      return "Cover";
    case "speakers":
      return session.speakers.length > 0 ? "Speakers" : "Host";
    case "sig-intro":
      return "Kenalan FORA";
  }
}

/** Image file names of one post type inside a format folder: `type.png` or `type-NN.png`, in order. */
function images(dir: string, format: FormatId, type: PostType): string[] {
  const folder = join(dir, format);
  if (!existsSync(folder)) return [];
  const pattern = new RegExp(`^${type}(-\\d+)?\\.png$`);
  return readdirSync(folder).filter((name) => pattern.test(name)).sort();
}

function postBlock(dir: string, section: Section, type: PostType, captions: Captions): string[] {
  const lines: string[] = [];
  for (const group of section.groups) {
    const names = images(dir, group.format, type);
    if (names.length === 0) continue;
    lines.push(`**${group.label}**${group.pdf ? ` · [PDF](${group.format}/${type}.pdf)` : ""}`, "");
    lines.push(names.map((name) => `<img src="${group.format}/${name}" width="${group.width}">`).join(" "), "");
  }
  const posts = section.caption(captions).map((text) => fence(text.trim()));
  const body = posts.length === 1 ? posts[0]! : posts.map((post, i) => `**${i + 1}/${posts.length}**\n\n${post}`).join("\n\n");
  lines.push("<details><summary>Caption</summary>", "", body, "", "</details>", "");
  return lines;
}

export function postsReadme(dir: string, session: Session, sig: Sig, community: Community): string {
  const lines = [
    `# ${session.title} · posts`,
    "",
    `${formatDate(session)}, ${formatTimeRange(session)} · voice channel \`${session.voiceChannel}\` · host ${session.host.name}.`,
    `Rendered from [\`sessions/${session.id}.yaml\`](../../sessions/${session.id}.yaml) with \`pnpm render\`. Copy the caption, attach the images.`,
    "",
    `Jump to: ${SECTIONS.map((s) => `[${s.platform}](#${s.platform.toLowerCase()})`).join(" · ")}`,
    "",
  ];
  const types = ORDER.filter((type) => SECTIONS.some((s) => s.groups.some((g) => images(dir, g.format, type).length > 0)));
  for (const section of SECTIONS) {
    lines.push(`## ${section.platform}`, "");
    for (const type of types) {
      if (!section.groups.some((g) => images(dir, g.format, type).length > 0)) continue;
      lines.push(`### ${heading(type, session)}`, "");
      lines.push(...postBlock(dir, section, type, buildCaptions(session, sig, community, type)));
    }
  }
  return `${lines.join("\n").trimEnd()}\n`;
}

export function main(argv: readonly string[]): number {
  const [id, ...rest] = argv;
  if (!id || rest.length > 0) {
    console.error("usage: pnpm posts <session-id>   write posts/<session-id>/README.md");
    return 2;
  }
  const dir = join(REPO_ROOT, "posts", id);
  const session = loadSession(join(REPO_ROOT, "sessions", `${id}.yaml`), join(REPO_ROOT, "sigs"));
  const sig = loadSig(join(REPO_ROOT, "sigs", `${session.sig}.yaml`));
  const community = loadCommunity(join(REPO_ROOT, "community.yaml"));
  writeFileSync(join(dir, "README.md"), postsReadme(dir, session, sig, community));
  console.log(`wrote posts/${id}/README.md`);
  return 0;
}

if (import.meta.main) process.exitCode = main(process.argv.slice(2));
