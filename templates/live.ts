// Live: posted at the start time, while the talk is running. Present tense, "LIVE SEKARANG" in
// the biggest type the canvas allows over the time it began, and the join block says to come in
// now. Same accent surface as the reminder, so the two read as one family with two states.
import { formatDate, formatDateShort, formatTime, formatTimeRange } from "../src/format.ts";
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
import { stateAndTitle, TIGHT } from "./state.ts";

const TAG = "Live";

/** Air between the outlined time and the date under it. */
const DATE_GAP = 16;

const TALL_SIZES = [64, 56, 48, 42, 38, 34, 30];
const WIDE_SIZES = [44, 38, 34, 30, 26];
const SLIDE_SIZES = [104, 92, 80, 70, 60, 54, 48, 42];

/**
 * "LIVE SEKARANG" over the outlined time the talk began, each line as wide as `width` allows.
 * `scale` shrinks the three sizes together.
 */
function liveNow(ctx: TemplateContext, width: number, scale: number): Block {
  const time = `Sejak ${formatTime(ctx.session)}`;
  const date = formatDateShort(ctx.session);
  const sizes = [
    fitLine("LIVE", width, 320 * scale, 48),
    fitLine("SEKARANG", width, 176 * scale, 48),
    fitLine(time.toUpperCase(), width, 104 * scale, 40),
    fitLine(date.toUpperCase(), width, 72 * scale, 32),
  ];
  return {
    html: `<div class="now">
  <p class="now__big" style="font-size:${sizes[0]}px">Live</p>
  <p class="now__big" style="font-size:${sizes[1]}px">Sekarang</p>
  <p class="now__time" style="font-size:${sizes[2]}px">${e(time)}</p>
  <p class="now__big" style="font-size:${sizes[3]}px;margin-top:${DATE_GAP}px">${e(date)}</p>
</div>`,
    height: sizes.reduce((sum, size) => sum + size * TIGHT, 0) + DATE_GAP,
  };
}

function tall(ctx: TemplateContext, foot: Block): string {
  const by = byline(ctx, TALL_WIDTH);
  const room = tallRoom(ctx, "accent", foot.height) - by.height - 3 * GAP - 2.4 * WAVE_MIN;
  const body = stateAndTitle(ctx, TALL_WIDTH, TALL_SIZES, room, [1, 0.85, 0.7, 0.55], (scale) => liveNow(ctx, TALL_WIDTH, scale));
  return `<main class="main" data-fit>
  ${body}
  ${by.html}
</main>`;
}

function landscape(ctx: TemplateContext): string {
  const { session } = ctx;
  const [weekday = "", date = ""] = formatDate(session).split(", ");
  const room = wideRoom(ctx, "accent") - WIDE_GAP;
  return wide(
    ctx,
    "accent",
    `${header(ctx, "accent", TAG)}
${stateAndTitle(ctx, MAIN_WIDTH, WIDE_SIZES, room, [0.5, 0.42, 0.34, 0.28], (scale) => liveNow(ctx, MAIN_WIDTH, scale))}`,
    [
      {
        html: `<div class="when">
  <p class="when__day">${e(weekday)}</p>
  <p class="when__date">${e(date)}</p>
  <p class="when__time">${e(formatTimeRange(session))}</p>
</div>`,
        height: 110,
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
    <p class="label">Yang lagi dibahas</p>
    ${about}
  </div>
  ${where.html}
</main>`,
    ],
    joinMain(ctx, "accent", "now"),
  );
}

const live: Template = (ctx) => {
  if (ctx.format.multi) return slides(ctx);
  if (layoutOf(ctx.format) === "wide") return [landscape(ctx)];
  const bar = joinBar(ctx, "now");
  return [post(ctx, "accent", `${header(ctx, "accent", TAG)}${tall(ctx, bar)}${bar.html}`)];
};

export default live;
