// SIG intro: what the SIG is, who it is for, how to join, and the nearest session. White
// surface with the lockup as the hero.
import { formatDateShort, formatTime } from "../src/format.ts";
import type { Template, TemplateContext } from "../src/types.ts";
import { fitList, REGULAR, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  type Block,
  byline,
  channel,
  deck,
  FOOT,
  fact,
  factHeight,
  GAP,
  header,
  heading,
  joinBar,
  joinMain,
  layoutOf,
  MAIN_WIDTH,
  post,
  TALL_WIDTH,
  tallRoom,
  tidy,
  WAVE_MIN,
  WIDE_GAP,
  wave,
  whenWhere,
  wide,
  wideRoom,
} from "./parts.ts";

const TAG = "Kenalan";

const TALL_SIZES = [68, 60, 52, 46, 40, 36];
const WIDE_SIZES = [46, 40, 36, 32, 28];
const NAME_SIZES = [176, 152, 128, 108, 88, 72];
const NEXT_SIZES = [88, 76, 66, 56, 48, 42];

const WHO = "Yang penasaran. Pemula juga boleh nanya";
const HOW = "Ngobrol lewat suara di voice channel Discord";

/** The nearest session, on the accent colour. `width` is the strip's inner width. */
function nextSession(ctx: TemplateContext, width: number, titleSize: number, withTitle = true, withChannel = false): Block {
  const { session } = ctx;
  const when = `${formatDateShort(session)} · ${formatTime(session)}`;
  // In the side panel the date wraps under the label.
  const meta = width < 400 ? 22 + 2 + 26 : 31;
  const title = withTitle ? `<p class="next__title">${e(tidy(session.title))}</p>` : "";
  return {
    html: `<div class="next" data-fit>
  <p class="next__meta"><span class="label">Sesi terdekat</span><span class="next__when">${e(when)}</span></p>
  ${title}
  ${withChannel ? `<p class="next__where">voice channel ${channel(session.voiceChannel)}</p>` : ""}
</div>`,
    height: 48 + meta + (withTitle ? 6 + textHeight(session.title, titleSize, width, 1.15) : 0) + (withChannel ? 6 + 26 * 1.3 : 0),
  };
}

/** The SIG's description at the largest of `sizes` that fits `room`; `fits` is false when none does. */
function description(ctx: TemplateContext, width: number, room: number, sizes: readonly number[]): Block & { fits: boolean } {
  const text = ctx.sig.description;
  const { size } = fitList([text], width, room, sizes, { lineHeight: 1.45, factor: REGULAR });
  const height = textHeight(text, size, width, 1.45, REGULAR);
  return { html: `<p class="lead" style="font-size:${size}px">${e(text)}</p>`, height, fits: height <= room };
}

function who(): Block {
  return {
    html: `<div class="facts facts--text">${fact("Untuk siapa", WHO)}${fact("Format", HOW)}</div>`,
    height: factHeight(Math.max(textHeight(WHO, 28, 448, 1.3), textHeight(HOW, 28, 448, 1.3))),
  };
}

function tall(ctx: TemplateContext): string {
  const bar = joinBar(ctx);
  const next = nextSession(ctx, TALL_WIDTH - 64, 32);
  const facts = who();
  const room = tallRoom(ctx, "paper", bar.height, true) - next.height - 2 * GAP - 8;
  const tagline = heading(ctx.sig.tagline, TALL_WIDTH, TALL_SIZES, room * 0.3);
  // "Who it is for" gives way when the description needs its room.
  const sizes = [34, 30, 28, 26, 24];
  const withFacts = description(ctx, TALL_WIDTH, room - tagline.height - facts.height - GAP, sizes);
  const about = withFacts.fits ? withFacts : description(ctx, TALL_WIDTH, room - tagline.height, sizes);
  return post(
    ctx,
    "paper",
    `${header(ctx, "paper", TAG, "head--hero")}
<main class="main" data-fit>
  ${tagline.html}
  ${about.html}
  ${withFacts.fits ? facts.html : ""}
  ${next.html}
</main>
${bar.html}`,
  );
}

function landscape(ctx: TemplateContext): string {
  const room = wideRoom(ctx, "paper") - WIDE_GAP;
  const tagline = heading(ctx.sig.tagline, MAIN_WIDTH, WIDE_SIZES, room * 0.5);
  return wide(
    ctx,
    "paper",
    `${header(ctx, "paper", TAG)}
${tagline.html}
${description(ctx, MAIN_WIDTH, room - tagline.height, [24, 22, 20]).html}`,
    [{ ...nextSession(ctx, 260, 24), fallback: nextSession(ctx, 260, 24, false) }],
  );
}

function slides(ctx: TemplateContext): string[] {
  const { sig, session } = ctx;
  const room = tallRoom(ctx, "paper", FOOT);
  const facts = who();
  const where = whenWhere(ctx);
  const by = byline(ctx, TALL_WIDTH);
  const nextRoom = room - 50 - by.height - 20 - where.height - 2 * GAP - 8;
  const upNext = nextSession(ctx, TALL_WIDTH - 64, 32, true, true);
  const nextTitle = heading(session.title, TALL_WIDTH, NEXT_SIZES, nextRoom * 0.45);
  return deck(
    ctx,
    "paper",
    TAG,
    [
      `<main class="main" data-fit>
  <div class="lede">
    <p class="kicker">Kenalan dengan ${e(sig.short)}</p>
    ${heading(sig.name, TALL_WIDTH, NAME_SIZES, room - 50 - 2 * 20 - 160 - 2 * GAP - WAVE_MIN - upNext.height).html}
    <p class="subtitle">${e(sig.tagline)}</p>
  </div>
  ${wave(session.id, 52)}
  ${upNext.html}
</main>`,
      `<main class="main" data-fit>
  <div class="lede">
    <p class="kicker">Soal ${e(sig.short)}</p>
    ${description(ctx, TALL_WIDTH, room - 50 - facts.height - GAP - 8, [48, 44, 40, 36, 32, 28]).html}
  </div>
  ${facts.html}
</main>`,
      `<main class="main" data-fit>
  <div class="lede">
    <p class="kicker">Sesi terdekat</p>
    ${nextTitle.html}
    ${by.html}
  </div>
  ${where.html}
</main>`,
    ],
    joinMain(ctx, "paper"),
  );
}

const sigIntro: Template = (ctx) => {
  if (ctx.format.multi) return slides(ctx);
  return [layoutOf(ctx.format) === "wide" ? landscape(ctx) : tall(ctx)];
};

export default sigIntro;
