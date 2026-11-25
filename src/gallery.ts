// examples/README.md: a gallery of every rendered image with its captions. Only the block between
// the markers is generated; the intro above it is kept.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, relative, sep } from "node:path";
import { buildCaptions } from "./captions/index.ts";
import { formatDate, formatTime } from "./format.ts";
import { captionPieces, fence } from "./markdown.ts";
import type { Output, SessionRun } from "./pipeline.ts";
import { type Community, type FormatId, POST_TYPES, type PostType } from "./types.ts";

export const GALLERY_START = "<!-- gallery:start -->";
export const GALLERY_END = "<!-- gallery:end -->";

const INTRO = `# Examples

Sample renders of every post type and format, made by \`pnpm examples\` from \`examples/sessions/\`.
`;

const POST_LABELS: Record<PostType, string> = {
  announce: "Announce",
  reminder: "Reminder",
  recap: "Recap",
  cover: "Cover",
  "sig-intro": "SIG intro",
  speakers: "Speakers",
};

const PLATFORMS: { label: string; formats: FormatId[] }[] = [
  { label: "Instagram", formats: ["ig-feed", "ig-carousel", "ig-story"] },
  { label: "X", formats: ["x"] },
  { label: "LinkedIn", formats: ["li-link", "li-doc"] },
];

/** Writes examples/README.md: whole file if it is missing, otherwise only the marked block. */
export function writeGallery(readme: string, runs: SessionRun[], community: Community): void {
  const block = `${GALLERY_START}\n\n${galleryMarkdown(runs, community, dirname(readme))}\n${GALLERY_END}`;
  if (!existsSync(readme)) {
    writeFileSync(readme, `${INTRO}\n${block}\n`);
    return;
  }
  const current = readFileSync(readme, "utf8");
  const start = current.indexOf(GALLERY_START);
  const end = current.indexOf(GALLERY_END);
  if (start < 0 || end < start) {
    throw new Error(`${readme}: put ${GALLERY_START} and ${GALLERY_END} around the gallery`);
  }
  writeFileSync(readme, current.slice(0, start) + block + current.slice(end + GALLERY_END.length));
}

export function galleryMarkdown(runs: SessionRun[], community: Community, dir: string): string {
  if (runs.length === 0) return "No sample sessions yet.";
  return [...runs]
    .sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0))
    .map((run) => sessionMarkdown(run, community, dir))
    .join("\n\n");
}

function sortKey(run: SessionRun): string {
  return `${run.session.sig}\n${run.session.date}\n${run.session.id}`;
}

function sessionMarkdown(run: SessionRun, community: Community, dir: string): string {
  const { session, sig } = run;
  const lines = [
    `## ${session.title}`,
    "",
    `${sig.short} · ${formatDate(session)} · ${formatTime(session)} · \`${session.id}\``,
    "",
  ];
  for (const postType of POST_TYPES) {
    const outputs = run.outputs.filter((output) => output.postType === postType);
    if (outputs.length === 0) continue;
    lines.push(`### ${POST_LABELS[postType]}`, "");
    for (const platform of PLATFORMS) {
      const items = outputs.filter((output) => platform.formats.includes(output.format.id));
      if (items.length === 0) continue;
      lines.push(`**${platform.label}**`, "", items.map((output) => item(output, postType, dir)).join(" "), "");
    }
    const captions = buildCaptions(session, sig, community, postType);
    const pieces = captionPieces(captions).map((piece) => `**${piece.label}**\n\n${fence(piece.text)}`);
    lines.push("<details>", "<summary>Captions</summary>", "", pieces.join("\n\n"), "", "</details>", "");
  }
  return lines.join("\n");
}

/** An <img> sized for GitHub (about 270 px for portrait, 400 px for landscape), or a PDF link. */
function item(output: Output, postType: PostType, dir: string): string {
  const src = relative(dir, output.path).split(sep).join("/");
  if (output.path.endsWith(".pdf")) return `[PDF](${src})`;
  const width = output.format.width > output.format.height ? 400 : 270;
  return `<img src="${src}" width="${width}" alt="${POST_LABELS[postType]}, ${output.format.id}">`;
}
