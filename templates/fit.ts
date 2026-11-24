// Type sizing from string length. Nothing here measures real glyphs: widths are estimates for
// Montserrat Bold/ExtraBold, a little wide on purpose, and the renderer's data-fit check is the
// backstop. Sizes always come from a short list of steps, so layouts stay on the type scale.

/** Estimated advance width of `text` in em, for Montserrat Bold. */
export function emWidth(text: string): number {
  let width = 0;
  for (const ch of text) {
    if (ch === " " || ch === "\u00a0") width += 0.28;
    else if ("iIjl.,:;!'|".includes(ch)) width += 0.31;
    else if ("ftr()-–·/".includes(ch)) width += 0.43;
    else if ("mwMW@".includes(ch)) width += 0.98;
    else if (ch >= "A" && ch <= "Z") width += 0.78;
    else if (ch >= "0" && ch <= "9") width += 0.66;
    else width += 0.64;
  }
  return width;
}

/** Width factors for the other faces, relative to the Montserrat Bold estimate (measured in Chromium). */
export const REGULAR = 0.98;
export const SERIF = 0.8;
/** The estimate runs up to 3% narrow on some strings; single lines keep this much spare. */
const SLACK = 1.05;

/**
 * Lines `text` needs at `size` px in a box `width` px wide: one when it fits with the usual
 * spare, otherwise as many as wrapping needs when it wastes about a tenth of every line.
 */
export function linesAt(text: string, size: number, width: number, factor = 1): number {
  const length = emWidth(text) * size * factor;
  return length * SLACK <= width ? 1 : Math.ceil(length / (width * 0.9));
}

/** Height of `text` at `size` px and `lineHeight` in a box `width` px wide. Empty text has none. */
export function textHeight(text: string, size: number, width: number, lineHeight: number, factor = 1): number {
  return text === "" ? 0 : linesAt(text, size, width, factor) * size * lineHeight;
}

/**
 * The largest of `sizes` at which `text` fits a `width` × `height` box with its longest word on
 * one line; undefined when even the smallest does not, so the caller can drop something else.
 */
export function fitBlock(
  text: string,
  width: number,
  height: number,
  sizes: readonly number[],
  lineHeight = 1.04,
  factor = 1,
): number | undefined {
  const word = Math.max(0, ...text.split(/\s+/).map(emWidth));
  return sizes.find(
    (size) => word * size * factor * SLACK <= width && textHeight(text, size, width, lineHeight, factor) <= height,
  );
}

/** The largest size, at most `max` and at least `min`, at which `text` fits one line of `width`. */
export function fitLine(text: string, width: number, max: number, min: number): number {
  return Math.max(min, Math.min(max, Math.floor(width / (emWidth(text) * SLACK) / 4) * 4));
}

export interface ListFit {
  size: number;
  /** How many items fit; fewer than the list only at the smallest size. */
  count: number;
}

/**
 * The largest of `sizes` at which every item fits a `width` × `height` box as a list with
 * `lineHeight` and `gap` (in em). `indent` em of the width go to the number chip, and a row
 * is never shorter than `rowMin` em. At the smallest size the list is cut to what fits.
 */
export function fitList(
  items: readonly string[],
  width: number,
  height: number,
  sizes: readonly number[],
  options: { lineHeight?: number; gap?: number; factor?: number; rowMin?: number; indent?: number } = {},
): ListFit {
  const { lineHeight = 1.25, gap = 0.6, factor = 1, rowMin = 0, indent = 0 } = options;
  const heightOf = (count: number, size: number) =>
    items
      .slice(0, count)
      .reduce(
        (sum, item) => sum + Math.max(rowMin, linesAt(item, size, width - indent * size, factor) * lineHeight) * size,
        0,
      ) +
    Math.max(0, count - 1) * size * gap;
  for (const size of sizes) {
    if (heightOf(items.length, size) <= height) return { size, count: items.length };
  }
  const size = sizes[sizes.length - 1] ?? 24;
  let count = items.length;
  while (count > 1 && heightOf(count, size) > height) count -= 1;
  return { size, count };
}
