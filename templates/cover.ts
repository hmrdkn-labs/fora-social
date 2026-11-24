// Cover: the theme in the biggest type the canvas allows, on ink. The join information is one
// quiet line here; decks add an "about" slide and the join slide.
import { discordUrl, displayUrl } from "../src/format.ts";
import type { Template, TemplateContext } from "../src/types.ts";
import { fitBlock, SERIF, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  aboutMain,
  deck,
  FOOT,
  GAP,
  header,
  joinMain,
  layoutOf,
  post,
  SOLO_WIDTH,
  TALL_WIDTH,
  tallRoom,
  tidy,
  WAVE_MIN,
  WIDE_GAP,
  WIDE_WAVE_MIN,
  wave,
  wideRoom,
} from "./parts.ts";

const TALL_SIZES = [216, 192, 172, 156, 140, 124, 108, 92, 80, 68];
const WIDE_SIZES = [152, 136, 120, 104, 88, 72, 60, 50];
/** The theme is set with tight tracking, so it runs narrower than the estimate. */
const TRACKING = 0.93;

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
  const line = session.title === session.theme ? (session.subtitle ?? "") : session.title;
  const themeRoom = room - textHeight(series.toUpperCase(), (isWide ? 22 : 28) * 1.16, width, 1.2) - gap;
  const lineHeight = gap + textHeight(line, isWide ? 28 : 44, width, 1.15, SERIF);
  const large = sizes.filter((size) => size >= (sizes[0] ?? 0) / 2);
  const withLine = line === "" ? undefined : fitBlock(session.theme, width, themeRoom - lineHeight, large, 0.98, TRACKING);
  const size = withLine ?? fitBlock(session.theme, width, themeRoom, sizes, 0.98, TRACKING) ?? sizes[sizes.length - 1];
  return `<div class="cover">
  <p class="cover__series">${e(series)}</p>
  <h1 class="cover__theme" style="font-size:${size}px">${e(session.theme)}</h1>
  ${withLine === undefined ? "" : `<p class="subtitle">${e(tidy(line))}</p>`}
</div>`;
}

const INTEGRAL = '<span class="integral" aria-hidden="true">∫</span>';

function single(ctx: TemplateContext): string {
  const isWide = layoutOf(ctx.format) === "wide";
  const url = displayUrl(discordUrl(ctx.session, ctx.community));
  // The wide cover has no side panel: header, block, wave and the join line share one column.
  const room = isWide
    ? wideRoom(ctx, "ink") - 2 * WIDE_GAP - WIDE_WAVE_MIN - 26
    : tallRoom(ctx, "ink", 68) - GAP - WAVE_MIN;
  return post(
    ctx,
    "ink",
    `${INTEGRAL}${header(ctx, "ink")}
<main class="main" data-fit>
  ${block(ctx, isWide ? SOLO_WIDTH : TALL_WIDTH, isWide ? WIDE_SIZES : TALL_SIZES, room)}
  ${wave(ctx.session.id, isWide ? 72 : 52)}
</main>
<p class="whisper" data-fit><span>Voice channel · Discord · dengerin aja boleh</span><b>${e(url)}</b></p>`,
    "post--cover",
  );
}

function slides(ctx: TemplateContext): string[] {
  const room = tallRoom(ctx, "ink", FOOT) - GAP - WAVE_MIN;
  return deck(
    ctx,
    "ink",
    "",
    [
      `${INTEGRAL}<main class="main" data-fit>
  ${block(ctx, TALL_WIDTH, TALL_SIZES, room)}
  ${wave(ctx.session.id, 52)}
</main>`,
      aboutMain(ctx, "ink", "Tentang sesi ini"),
    ],
    joinMain(ctx, "ink"),
  );
}

const cover: Template = (ctx) => (ctx.format.multi ? slides(ctx) : [single(ctx)]);

export default cover;
