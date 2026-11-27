// Cover: the theme in the biggest type the canvas allows, on ink. When and where is one quiet
// line here and on the first slide; decks add a slide about the series and the join slide.
import { discordUrl, displayUrl } from "../src/format.ts";
import type { Template, TemplateContext } from "../src/types.ts";
import { fitBlock, fitLine, SERIF, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  aboutMain,
  deck,
  FOOT,
  GAP,
  header,
  joinBar,
  joinMain,
  layoutOf,
  post,
  SOLO_WIDTH,
  TALL_WIDTH,
  tallRoom,
  schedule,
  tidy,
  WAVE_MIN,
  WIDE_GAP,
  WIDE_WAVE_MIN,
  type Block,
  wave,
  wideRoom,
} from "./parts.ts";

const TALL_SIZES = [216, 192, 172, 156, 140, 124, 108, 92, 80, 68];
const WIDE_SIZES = [152, 136, 120, 104, 88, 72, 60, 50, 42];
/** The theme is set with tight tracking, so it runs narrower than the estimate. */
const TRACKING = 0.93;
/** Gap between the schedule and the join bar of a tall cover. */
const COVER_GAP = 24;

/**
 * Series (or the SIG's name), the theme as large as `room` allows, and the session title as a
 * serif line when the theme can keep at least half of its largest size beside it.
 */
function block(ctx: TemplateContext, width: number, sizes: readonly number[], room: number): string {
  const { session, sig } = ctx;
  const isWide = layoutOf(ctx.format) === "wide";
  const gap = isWide ? 12 : 20;
  // A general community session without a series says what kind of session it is instead of repeating the name.
  const series = session.series ?? (sig.lockup === ctx.community.logo ? "Talk terbuka" : sig.name);
  // The everyday problem is what a scroller needs before the title; the title is in the caption and on the announcement.
  const line = session.problem ?? (session.title === session.theme ? (session.subtitle ?? "") : session.title);
  const themeRoom = room - textHeight(series.toUpperCase(), (isWide ? 22 : 28) * 1.16, width, 1.2) - gap;
  const lineHeight = gap + textHeight(line, isWide ? 28 : 44, width, 1.15, SERIF);
  // The problem is worth a smaller theme on the wide cover, which has little height to share.
  const large = sizes.filter((size) => size >= (sizes[0] ?? 0) / (isWide && session.problem ? 3 : 2));
  const withLine = line === "" ? undefined : fitBlock(session.theme, width, themeRoom - lineHeight, large, 0.98, TRACKING);
  const size = withLine ?? fitBlock(session.theme, width, themeRoom, sizes, 0.98, TRACKING) ?? sizes[sizes.length - 1];
  return `<div class="cover">
  <p class="cover__series">${e(series)}</p>
  <h1 class="cover__theme" style="font-size:${size}px">${e(session.theme)}</h1>
  ${withLine === undefined ? "" : `<p class="subtitle">${e(tidy(line))}</p>`}
</div>`;
}

const INTEGRAL = '<span class="integral" aria-hidden="true">∫</span>';

/** Wide cover: when and where on the left, the invite as a chip on the right, in one panel. */
function wideJoin(ctx: TemplateContext, url: string): Block {
  const sched = schedule(ctx, true);
  const size = fitLine(url, 300, 24, 18);
  const chip = size * 1.2 + 24;
  return {
    html: `<aside class="join join--bar join--row" data-fit>${sched.html}<p class="join__url" style="font-size:${size}px">${e(url)}</p></aside>`,
    height: Math.max(sched.height, chip) + 32,
  };
}

function single(ctx: TemplateContext): string {
  const isWide = layoutOf(ctx.format) === "wide";
  const url = displayUrl(discordUrl(ctx.session, ctx.community));
  // The join route is a panel, not fine print: tall covers show the day and time, then the join bar
  // (channel, listen-only line, invite chip); the wide cover has one row with all of it.
  const sched = schedule(ctx, false, false);
  const join = isWide ? wideJoin(ctx, url) : joinBar(ctx);
  const foot = isWide ? join.height : sched.height + COVER_GAP + join.height;
  // The wide cover has no side panel: header, block, wave and the join panel share one column.
  const room = isWide
    ? wideRoom(ctx, "ink") - 2 * WIDE_GAP - WIDE_WAVE_MIN - foot
    : tallRoom(ctx, "ink", foot + 34) - GAP - WAVE_MIN;
  return post(
    ctx,
    "ink",
    `${INTEGRAL}${header(ctx, "ink")}
<main class="main" data-fit>
  ${block(ctx, isWide ? SOLO_WIDTH : TALL_WIDTH, isWide ? WIDE_SIZES : TALL_SIZES, room)}
  ${wave(ctx.session.id, isWide ? 72 : 52)}
</main>
<div class="whisper" data-fit>${isWide ? "" : sched.html}${join.html}</div>`,
    "post--cover",
  );
}

function slides(ctx: TemplateContext): string[] {
  const where = schedule(ctx, false);
  const room = tallRoom(ctx, "ink", FOOT) - GAP - WAVE_MIN - where.height - GAP;
  return deck(
    ctx,
    "ink",
    "",
    [
      `${INTEGRAL}<main class="main" data-fit>
  ${block(ctx, TALL_WIDTH, TALL_SIZES, room)}
  ${wave(ctx.session.id, 52)}
  ${where.html}
</main>`,
      aboutMain(ctx, "ink", "Yang kita bahas", true, ctx.session.subtitle ?? ""),
    ],
    joinMain(ctx, "ink"),
  );
}

const cover: Template = (ctx) => (ctx.format.multi ? slides(ctx) : [single(ctx)]);

export default cover;
