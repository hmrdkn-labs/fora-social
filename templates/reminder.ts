// Reminder: posted earlier on the day, before the talk has started. One loud state on the SIG's
// accent colour, "NANTI" over the start time, and the full date in a small line. It never says
// "live" or "masuk sekarang"; templates/live.ts is the post for when the talk is running.
import { PRACTICAL, practicalIndex } from "../src/captions/context.ts";
import { formatDate, formatTime, formatTimeRange } from "../src/format.ts";
import type { Template, TemplateContext } from "../src/types.ts";
import { fitBlock, fitLine, REGULAR, textHeight } from "./fit.ts";
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

const TAG = "Hari ini";

const TALL_SIZES = [64, 56, 48, 42, 38, 34, 30];
const WIDE_SIZES = [44, 38, 34, 30, 26];
const SLIDE_SIZES = [104, 92, 80, 70, 60, 54, 48, 42];

/** "NANTI" over the outlined start time, each line as large as the width allows, up to `max`. */
function later(ctx: TemplateContext, width: number, max: number): Block {
  const time = `Jam ${formatTime(ctx.session)}`;
  const sizes = [fitLine("NANTI", width, max, 48), fitLine(time.toUpperCase(), width, Math.round(max * 0.55), 40)];
  return {
    html: `<div class="now">
  <p class="now__big" style="font-size:${sizes[0]}px">Nanti</p>
  <p class="now__time" style="font-size:${sizes[1]}px">${e(time)}</p>
</div>`,
    height: sizes.reduce((sum, size) => sum + size * TIGHT, 0),
  };
}

/** The full date in one small line, so the poster says which day "nanti" is. */
function dateLine(ctx: TemplateContext): Block {
  const date = formatDate(ctx.session);
  return { html: `<p class="byline">${e(date)}</p>`, height: textHeight(date, 28, TALL_WIDTH, 1.35) };
}

function tall(ctx: TemplateContext, foot: Block): string {
  const by = byline(ctx, TALL_WIDTH);
  const day = dateLine(ctx);
  // The wave is this post's second motif, so it keeps real height; the state gives way first.
  const room = tallRoom(ctx, "accent", foot.height) - by.height - day.height - 4 * GAP - 2.4 * WAVE_MIN;
  const body = stateAndTitle(ctx, TALL_WIDTH, TALL_SIZES, room, [176, 144, 120, 96], (max) => later(ctx, TALL_WIDTH, max));
  return `<main class="main" data-fit>
  ${body}
  ${day.html}
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
${stateAndTitle(ctx, MAIN_WIDTH, WIDE_SIZES, room, [104, 88, 72, 60], (max) => later(ctx, MAIN_WIDTH, max))}`,
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
    "soon",
  );
}


function slides(ctx: TemplateContext): string[] {
  const { session } = ctx;
  // The one thing to do before the talk, the same detail as the caption; channel and time are on the slide already.
  const READY = PRACTICAL[practicalIndex(session.id)];
  const where = whenWhere(ctx);
  const room = tallRoom(ctx, "accent", FOOT) - where.height - 2 * GAP;
  const title = lede(ctx, TALL_WIDTH, SLIDE_SIZES, room * 0.4, false);
  return deck(
    ctx,
    "accent",
    TAG,
    [
      tall(ctx, { html: "", height: FOOT }),
      `<main class="main" data-fit>
  ${title.html}
  <div class="lede">
    <p class="label">Sebelum ${e(formatTime(session))}</p>
    <p class="lead" style="font-size:${fitBlock(READY, TALL_WIDTH, room * 0.6 - 60, [56, 52, 48, 44, 40, 36], 1.4, REGULAR) ?? 36}px">${e(READY)}</p>
  </div>
  ${where.html}
</main>`,
    ],
    joinMain(ctx, "accent"),
  );
}

const reminder: Template = (ctx) => {
  if (ctx.format.multi) return slides(ctx);
  if (layoutOf(ctx.format) === "wide") return [landscape(ctx)];
  const bar = joinBar(ctx);
  return [post(ctx, "accent", `${header(ctx, "accent", TAG)}${tall(ctx, bar)}${bar.html}`)];
};

export default reminder;
