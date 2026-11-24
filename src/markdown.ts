// Caption text as it appears in captions/<post-type>.md and in the gallery.
import type { Captions } from "./types.ts";

export interface Piece {
  label: string;
  text: string;
}

/** Instagram, each X post (labelled 1/3, 2/3, ... for a thread), then LinkedIn. */
export function captionPieces(captions: Captions): Piece[] {
  const { x } = captions;
  return [
    { label: "Instagram", text: captions.instagram.trim() },
    ...x.map((post, index) => ({
      label: x.length > 1 ? `X ${index + 1}/${x.length}` : "X",
      text: post.trim(),
    })),
    { label: "LinkedIn", text: captions.linkedin.trim() },
  ];
}

/** captions/<post-type>.md: one heading per platform, one per X post. */
export function captionsMarkdown(title: string, captions: Captions): string {
  const sections = captionPieces(captions).map((piece) => `## ${piece.label}\n\n${piece.text}\n`);
  return `# ${title}\n\n${sections.join("\n")}`;
}

/** A fenced block for caption text; the fence is longer than any backtick run inside. */
export function fence(text: string): string {
  const longest = Math.max(2, ...(text.match(/`+/g) ?? []).map((run) => run.length));
  const ticks = "`".repeat(longest + 1);
  return `${ticks}text\n${text}\n${ticks}`;
}
