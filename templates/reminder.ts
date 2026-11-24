// Reminder: one loud state on the SIG's accent colour. Feed, X and LinkedIn say "HARI INI"
// with the start time; the story, posted when the talk starts, says "LIVE SEKARANG".
import { formatTime, formatTimeRange } from "../src/format.ts";
import type { Template, TemplateContext } from "../src/types.ts";
import { fitLine } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  type Block,
  byline,
  deck,
  FOOT,
  GAP,
  header,
  joinBar,
  joinMain,
  layoutOf,
  lede,
  MAIN_WIDTH,
  numbered,
  post,
  TALL_WIDTH,
  tallRoom,
  WAVE_MIN,
  WIDE_GAP,
  wave,
  whenWhere,
  wide,
  wideRoom,
} from "./parts.ts";

const TAG = "Live";

const TALL_SIZES = [64, 56, 48, 42, 38, 34, 30];
const WIDE_SIZES = [44, 38, 34, 30, 26];
const SLIDE_SIZES = [104, 92, 80, 70, 60, 54, 48, 42];

/** Line height of the big state lines, as set in base.css. */
const TIGHT = 0.94;

/** "HARI INI" over the outlined start time, both at the size the wider line allows, up to `max`. */
function today(ctx: TemplateContext, width: number, max: number): Block {
  const time = formatTime(ctx.session);
  const size = Math.min(fitLine("HARI INI", width, max, 48), fitLine(time, width, max, 48));
  return {
    html: `<div class="now" style="font-size:${size}px">
  <p class="now__big">Hari ini</p>
  <p class="now__time">${e(time)}</p>
</div>`,
    height: 2 * size * TIGHT,
  };
}

/** "LIVE SEKARANG" over the outlined start time, each line as wide as the canvas allows. */
function liveNow(ctx: TemplateContext, scale: number): Block {
  const time = `Mulai ${formatTime(ctx.session)}`;
  const sizes = [
    fitLine("LIVE", TALL_WIDTH, 320 * scale, 48),
    fitLine("SEKARANG", TALL_WIDTH, 176 * scale, 48),
    fitLine(time.toUpperCase(), TALL_WIDTH, 104 * scale, 48),
  ];
  return {
    html: `<div class="now">
  <p class="now__big" style="font-size:${sizes[0]}px">Live</p>
  <p class="now__big" style="font-size:${sizes[1]}px">Sekarang</p>
  <p class="now__time" style="font-size:${sizes[2]}px">${e(time)}</p>
</div>`,
    height: sizes.reduce((sum, size) => sum + size * TIGHT, 0),
  };
}

/**
 * The state block above the session title. The state shrinks, step by step, until the title
 * fits under it in `room` at one of its three largest sizes; only when no step leaves that much
 * room does the title go smaller. `state(step)` builds the block for each step of `steps`.
 */
function stateAndTitle(
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

function tall(ctx: TemplateContext, foot: Block): string {
  const story = layoutOf(ctx.format) === "story";
  const by = byline(ctx, TALL_WIDTH);
  // The wave is this post's second motif, so it keeps real height; the state gives way first.
  const room = tallRoom(ctx, "accent", foot.height) - by.height - 3 * GAP - 2.4 * WAVE_MIN;
  const body = story
    ? stateAndTitle(ctx, TALL_WIDTH, TALL_SIZES, room, [1, 0.85, 0.7, 0.55], (scale) => liveNow(ctx, scale))
    : stateAndTitle(ctx, TALL_WIDTH, TALL_SIZES, room, [176, 144, 120, 96], (max) => today(ctx, TALL_WIDTH, max));
  return `<main class="main" data-fit>
  ${body}
  ${by.html}
</main>`;
}

function landscape(ctx: TemplateContext): string {
  const { session } = ctx;
  const room = wideRoom(ctx, "accent") - WIDE_GAP;
  return wide(
    ctx,
    "accent",
    `${header(ctx, "accent", TAG)}
${stateAndTitle(ctx, MAIN_WIDTH, WIDE_SIZES, room, [104, 88, 72, 60], (max) => today(ctx, MAIN_WIDTH, max))}`,
    [
      {
        html: `<div class="when">
  <p class="when__day">Hari ini</p>
  <p class="when__date">${e(formatTimeRange(session))}</p>
</div>`,
        height: 71,
      },
      byline(ctx, 304, 21),
      { html: wave(session.id, 20), height: 44, optional: true },
    ],
    "now",
  );
}

function slides(ctx: TemplateContext): string[] {
  const { session } = ctx;
  const where = whenWhere(ctx);
  const room = tallRoom(ctx, "accent", FOOT) - where.height - 2 * GAP;
  const title = lede(ctx, TALL_WIDTH, SLIDE_SIZES, room * 0.4, false);
  const about =
    numbered(session.topics, TALL_WIDTH, room * 0.6 - 60, [44, 40, 36, 32, 28]) ||
    `<p class="lead">${e(session.description)}</p>`;
  return deck(
    ctx,
    "accent",
    TAG,
    [
      tall(ctx, { html: "", height: FOOT }),
      `<main class="main" data-fit>
  ${title.html}
  <div class="lede">
    <p class="label">Yang kita bahas hari ini</p>
    ${about}
  </div>
  ${where.html}
</main>`,
    ],
    joinMain(ctx, "accent", "now"),
  );
}

const reminder: Template = (ctx) => {
  if (ctx.format.multi) return slides(ctx);
  if (layoutOf(ctx.format) === "wide") return [landscape(ctx)];
  const bar = joinBar(ctx, "now");
  return [post(ctx, "accent", `${header(ctx, "accent", TAG)}${tall(ctx, bar)}${bar.html}`)];
};

export default reminder;
