// The loud state block of reminder and live posts, with the session title under it. The state
// shrinks, step by step, until the title fits under it; only then does the title go smaller.
import type { TemplateContext } from "../src/types.ts";
import { type Block, layoutOf, lede, wave } from "./parts.ts";

/** Line height of the big state lines, as set in base.css. */
export const TIGHT = 0.94;

/**
 * The state block above the session title. The state shrinks until the title fits under it in
 * `room` at one of its three largest sizes; only when no step leaves that much room does the
 * title go smaller. `state(step)` builds the block for each step of `steps`.
 */
export function stateAndTitle(
  ctx: TemplateContext,
  width: number,
  sizes: readonly number[],
  room: number,
  steps: readonly number[],
  state: (step: number) => Block,
): string {
  const motif = layoutOf(ctx.format) === "wide" ? "" : wave(ctx.session.id, 52);
  let html = "";
  for (const allowed of [sizes.slice(0, 3), sizes]) {
    for (const step of steps) {
      const block = state(step);
      const title = lede(ctx, width, allowed, room - block.height, false);
      html = `${block.html}\n${motif}\n${title.html}`;
      if (title.fits) return html;
    }
  }
  return html;
}
