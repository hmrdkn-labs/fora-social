// Announcement: what, when, who, and how to join. White surface; the details sit on a ruled
// grid in tall formats and in the side panel in wide ones.
import { formatDate, formatTimeRange, joinNames } from "../src/format.ts";
import type { Template, TemplateContext } from "../src/types.ts";
import { fitLine, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  aboutMain,
  type Block,
  byline,
  channel,
  deck,
  FOOT,
  fact,
  factHeight,
  GAP,
  header,
  joinBar,
  joinMain,
  layoutOf,
  lede,
  MAIN_WIDTH,
  person,
  personHeight,
  post,
  TALL_WIDTH,
  tallRoom,
  WAVE_MIN,
  WIDE_GAP,
  WIDE_WAVE_MIN,
  wave,
  wide,
  wideRoom,
} from "./parts.ts";

const TAG = "Sesi mendatang";

const TALL_SIZES = [104, 92, 80, 70, 60, 54, 48, 42];
const WIDE_SIZES = [64, 56, 48, 42, 36, 32, 28];

/** Widths of the two columns of the facts grid. */
const LEFT = 506;
const RIGHT = 390;
/** At most this much height for kicker, title and subtitle, so a long title stays a title. */
const LEDE_CAP = 520;

function when(ctx: TemplateContext): Block {
  const { session } = ctx;
  return {
    html: fact("Tanggal", e(formatDate(session))) + fact("Waktu", e(formatTimeRange(session))),
    height: factHeight(40),
  };
}

/**
 * Who speaks and who hosts. Up to two speakers get a person line each, more are named in one
 * sentence; an open discussion says so instead of leaving a gap.
 */
function people(ctx: TemplateContext): Block {
  const { host, speakers } = ctx.session;
  const hostHeight = personHeight(host, RIGHT);
  if (speakers.length === 0) {
    const format = "Diskusi terbuka, tanpa tamu";
    return {
      html: fact("Host", person(host)) + fact("Format", format),
      height: factHeight(Math.max(personHeight(host, LEFT), textHeight(format, 34, RIGHT, 1.18))),
    };
  }
  if (speakers.length > 2) {
    const names = joinNames(speakers.map((p) => p.name));
    return {
      html: fact("Pembicara", e(names)) + fact("Host", person(host)),
      height: factHeight(Math.max(textHeight(names, 34, LEFT, 1.18), hostHeight)),
    };
  }
  const stacked = speakers.reduce((sum, p) => sum + personHeight(p, LEFT), 16 * (speakers.length - 1));
  return {
    html: fact("Pembicara", speakers.map((p) => person(p)).join("")) + fact("Host", person(host)),
    height: factHeight(Math.max(stacked, hostHeight)),
  };
}

function tall(ctx: TemplateContext): string {
  const bar = joinBar(ctx);
  const date = when(ctx);
  const who = people(ctx);
  const room = tallRoom(ctx, "paper", bar.height) - date.height - 28 - who.height - 2 * GAP - WAVE_MIN;
  return post(
    ctx,
    "paper",
    `${header(ctx, "paper", TAG)}
<main class="main" data-fit>
  ${lede(ctx, TALL_WIDTH, TALL_SIZES, Math.min(room, LEDE_CAP), true).html}
  ${wave(ctx.session.id, 52)}
  <div class="facts">${date.html}${who.html}</div>
</main>
${bar.html}`,
  );
}

function landscape(ctx: TemplateContext): string {
  const { session } = ctx;
  const [weekday = "", date = ""] = formatDate(session).split(", ");
  const room = wideRoom(ctx, "paper") - WIDE_GAP - WIDE_WAVE_MIN;
  return wide(
    ctx,
    "paper",
    `${header(ctx, "paper", TAG)}
${lede(ctx, MAIN_WIDTH, WIDE_SIZES, room, true).html}
${wave(session.id, 36)}`,
    [
      {
        html: `<div class="when">
  <p class="when__day">${e(weekday)}</p>
  <p class="when__date" style="font-size:${fitLine(date, 300, 34, 24)}px">${e(date)}</p>
  <p class="when__time">${e(formatTimeRange(session))}</p>
</div>`,
        height: 110,
      },
      byline(ctx, 304, 21),
    ],
  );
}

/** Speakers and host as cards: large for up to three people, smaller up to six, then a sentence. */
function cast(ctx: TemplateContext): string {
  const { host, speakers } = ctx.session;
  const hostCard = { ...host, role: ["Host", host.role].filter(Boolean).join(" · ") };
  const count = speakers.length + 1;
  const heading =
    speakers.length > 0 ? "Yang bakal cerita di depan." : "Bawa cerita dan pertanyaanmu.";
  const size = count <= 3 ? "person--card" : "person--mid";
  const cards =
    count <= 6
      ? [...speakers, hostCard].map((p) => person(p, size)).join("")
      : `<p class="lead">${e(joinNames(speakers.map((p) => p.name)))}</p>${person(hostCard, size)}`;
  return `<main class="main" data-fit>
  <div class="lede">
    <p class="kicker">${speakers.length > 0 ? "Bersama" : "Dipandu"}</p>
    ${count <= 3 ? `<h2 class="h2">${heading}</h2>` : ""}
  </div>
  <div class="cast">${cards}</div>
  <div class="facts">${when(ctx).html}</div>
</main>`;
}

function slides(ctx: TemplateContext): string[] {
  const { session } = ctx;
  const date = when(ctx);
  const place = `Voice channel ${session.voiceChannel} · Discord`;
  const open = "Dengerin aja boleh";
  const placeHeight = factHeight(Math.max(textHeight(place, 34, LEFT, 1.18), textHeight(open, 34, RIGHT, 1.18)));
  const room = tallRoom(ctx, "paper", FOOT) - date.height - 28 - placeHeight - 2 * GAP - WAVE_MIN;
  return deck(
    ctx,
    "paper",
    TAG,
    [
      `<main class="main" data-fit>
  ${lede(ctx, TALL_WIDTH, TALL_SIZES, Math.min(room, LEDE_CAP), true).html}
  ${wave(session.id, 52)}
  <div class="facts">${date.html}${fact("Tempat", `Voice channel ${channel(session.voiceChannel)} · Discord`)}${fact("Terbuka", open)}</div>
</main>`,
      aboutMain(ctx, "paper", session.topics.length > 0 ? "Yang kita bahas" : "Tentang sesi ini"),
      cast(ctx),
    ],
    joinMain(ctx, "paper"),
  );
}

const announce: Template = (ctx) => {
  if (ctx.format.multi) return slides(ctx);
  return [layoutOf(ctx.format) === "wide" ? landscape(ctx) : tall(ctx)];
};

export default announce;
