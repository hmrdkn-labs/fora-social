// Recap: "Recap" plus the title, then the takeaways. Light grey surface, serif numerals.
// Single images list the takeaway titles; decks give every takeaway its own slide between a
// cover and a closing slide with thanks, links and the join block.
import { displayUrl, formatDate, formatDateShort, joinNames } from "../src/format.ts";
import type { Link, RecapPoint, Template, TemplateContext } from "../src/types.ts";
import { fitBlock, fitList, REGULAR, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  type Block,
  deck,
  FOOT,
  fact,
  factHeight,
  GAP,
  header,
  heading,
  joinBar,
  kicker,
  kickerHeight,
  kickerText,
  layoutOf,
  MAIN_WIDTH,
  numbered,
  post,
  TALL_WIDTH,
  tallRoom,
  WAVE_MIN,
  WIDE_GAP,
  wave,
  wide,
  wideRoom,
} from "./parts.ts";

const TAG = "Recap";

const TALL_SIZES = [68, 58, 50, 44, 38, 34, 30];
const COVER_SIZES = [104, 92, 80, 70, 60, 52, 46];
const WIDE_SIZES = [40, 36, 32, 28, 24];
const POINT_SIZES = [84, 72, 62, 54, 46, 40];

/** At most this many takeaway slides, so a deck stays within seven slides. */
const MAX_POINT_SLIDES = 5;

function attendance(ctx: TemplateContext): string {
  const attendees = ctx.session.recap?.attendees ?? 0;
  return attendees > 0 ? `${attendees} orang ikut ngobrol` : "";
}

function thanks(ctx: TemplateContext): string {
  const { host, speakers } = ctx.session;
  if (speakers.length === 0) return `Terima kasih ${host.name} yang memandu, dan semua yang ikut ngobrol.`;
  return `Terima kasih ${joinNames(speakers.map((p) => p.name))} yang sudah berbagi, dan ${host.name} yang memandu.`;
}

function single(ctx: TemplateContext, points: readonly RecapPoint[]): string {
  const { session } = ctx;
  const bar = joinBar(ctx, "next");
  const meta = [formatDateShort(session), attendance(ctx)].filter((part) => part !== "").join(" · ");
  const credit = thanks(ctx);
  // Under the word "Recap", the kicker and the thanks, the title takes up to a third and the list the rest.
  const room =
    tallRoom(ctx, "mist", bar.height) -
    (88 + 20 + 20 + kickerHeight(meta, TALL_WIDTH)) -
    textHeight(credit, 28, TALL_WIDTH, 1.35) -
    2 * GAP -
    8;
  const title = heading(session.title, TALL_WIDTH, TALL_SIZES, room / 3);
  return post(
    ctx,
    "mist",
    `${header(ctx, "mist", TAG)}
<main class="main" data-fit>
  <div class="lede">
    <p class="recap-word">Recap</p>
    ${title.html}
    <p class="kicker">${e(meta)}</p>
  </div>
  ${numbered(points.map((point) => point.title), TALL_WIDTH, room - title.height, [38, 34, 30, 28, 26])}
  <p class="byline">${e(credit)}</p>
</main>
${bar.html}`,
  );
}

function landscape(ctx: TemplateContext, points: readonly RecapPoint[]): string {
  const { session } = ctx;
  const room = wideRoom(ctx, "mist") - WIDE_GAP;
  const title = heading(session.title, MAIN_WIDTH, WIDE_SIZES, room * 0.45);
  const attendees = session.recap?.attendees ?? 0;
  const stat: Block =
    attendees > 0
      ? {
          html: `<p class="stat"><span class="stat__n">${attendees}</span><span class="stat__label">orang ikut ngobrol</span></p>`,
          height: 90,
        }
      : { html: `<p class="when__day">${e(formatDateShort(session))}</p>`, height: 26 };
  const credit = thanks(ctx);
  // The word "Recap" takes the tag's place in the header, which leaves the column to the list.
  return wide(
    ctx,
    "mist",
    `${header(ctx, "mist", TAG, "head--word")}
${title.html}
${numbered(points.map((point) => point.title), MAIN_WIDTH, room - title.height, [24, 22, 20])}`,
    [stat, { html: `<p class="byline">${e(credit)}</p>`, height: textHeight(credit, 21, 304, 1.35, REGULAR), optional: true }],
    "next",
  );
}

/** One takeaway, large: serif numeral, title, body, and where it sits among the others. */
function pointMain(ctx: TemplateContext, point: RecapPoint, index: number, total: number): string {
  const label = `Catatan ${index + 1} dari ${total}`;
  const room = tallRoom(ctx, "mist", FOOT) - 224 - 44 - kickerHeight(kickerText(ctx, label), TALL_WIDTH) - 2 * 20 - GAP - 8;
  const body = point.body ?? "";
  const size = fitBlock(point.title, TALL_WIDTH, body === "" ? room : room * 0.6, POINT_SIZES) ?? 40;
  const bodyRoom = room - textHeight(point.title, size, TALL_WIDTH, 1.04);
  const bodySize = fitList([body], TALL_WIDTH, bodyRoom, [44, 40, 36, 32, 28, 24], { lineHeight: 1.4, factor: REGULAR }).size;
  const bodyHtml = body === "" ? "" : `<p class="lead" style="font-size:${bodySize}px">${e(body)}</p>`;
  const progress = Array.from({ length: total }, (_, at) => (at === index ? '<i class="on"></i>' : "<i></i>")).join("");
  return `<main class="main" data-fit>
  <div class="point">
    <p class="numeral">${String(index + 1).padStart(2, "0")}</p>
    <div class="lede">
      ${kicker(ctx, label)}
      <h2 class="title" style="font-size:${size}px">${e(point.title)}</h2>
      ${bodyHtml}
    </div>
  </div>
  <div class="progress" aria-hidden="true">${progress}</div>
</main>`;
}

/** Several takeaways on one slide, for sessions with more than five. */
function groupMain(ctx: TemplateContext, group: readonly RecapPoint[], start: number, total: number): string {
  const label = `Catatan ${start + 1}–${start + group.length} dari ${total}`;
  const room = tallRoom(ctx, "mist", FOOT) - kickerHeight(kickerText(ctx, label), TALL_WIDTH) - GAP - 8;
  const width = TALL_WIDTH - 100;
  const heightAt = (size: number) =>
    group.reduce(
      (sum, point) =>
        sum +
        Math.max(
          1.5 * size,
          textHeight(point.title, size, width, 1.15) + textHeight(point.body ?? "", size * 0.7, width, 1.4, REGULAR) + 0.3 * size,
        ),
      (group.length - 1) * size,
    );
  const size = [48, 44, 40, 36, 32, 28].find((candidate) => heightAt(candidate) <= room) ?? 28;
  const items = group
    .map((point, index) => {
      const body = point.body ? `<p class="points__body">${e(point.body)}</p>` : "";
      return `<li><span class="n">${start + index + 1}</span><div><p class="points__title">${e(point.title)}</p>${body}</div></li>`;
    })
    .join("");
  return `<main class="main main--top" data-fit>
  ${kicker(ctx, label)}
  <ol class="points" style="font-size:${size}px">${items}</ol>
</main>`;
}

function linkBlock(link: Link): Block {
  const url = displayUrl(link.url);
  return {
    html: `<li><span class="links__label">${e(link.label)}</span><span class="links__url">${e(url)}</span></li>`,
    height: textHeight(link.label, 26, TALL_WIDTH, 1.3) + textHeight(url, 26, TALL_WIDTH, 1.3, REGULAR),
  };
}

/** Thanks, up to three links, and the join block; links and the wave give way when it gets tight. */
function closingMain(ctx: TemplateContext): string {
  const { session } = ctx;
  const bar = joinBar(ctx, "next");
  const credit = thanks(ctx);
  const count = attendance(ctx);
  const head = 50 + 150 + 20 + textHeight(credit, 36, TALL_WIDTH, 1.4, REGULAR);
  const room = tallRoom(ctx, "mist", FOOT) - head - bar.height - GAP - 8;
  const links = (session.recap?.links ?? []).slice(0, 3).map(linkBlock);
  const linksHeight = () => (links.length === 0 ? 0 : links.reduce((sum, link) => sum + link.height + 14, 25 - 14 + GAP));
  let withWave = true;
  while (linksHeight() + (withWave ? WAVE_MIN + GAP : 0) > room && (withWave || links.length > 0)) {
    if (withWave) withWave = false;
    else links.pop();
  }
  return `<main class="main" data-fit>
  <div class="lede">
    <p class="kicker">${e(count === "" ? "Terima kasih" : `Terima kasih · ${count}`)}</p>
    <h2 class="h2">Sampai ketemu di sesi berikutnya.</h2>
    <p class="lead">${e(credit)}</p>
  </div>
  ${withWave ? wave(session.id, 52) : ""}
  ${links.length > 0 ? `<ul class="links">${links.map((link) => link.html).join("")}</ul>` : ""}
  ${bar.html}
</main>`;
}

function slides(ctx: TemplateContext, points: readonly RecapPoint[]): string[] {
  const { session } = ctx;
  const notes = `${points.length} hal yang kami bawa pulang`;
  const facts = factHeight(Math.max(40, textHeight(notes, 34, 390, 1.18)));
  const coverRoom = tallRoom(ctx, "mist", FOOT) - facts - 2 * GAP - WAVE_MIN - 160 - 20;
  // One takeaway per slide; with more than five, several share a slide.
  const perSlide = Math.ceil(points.length / MAX_POINT_SLIDES);
  const pointMains: string[] = [];
  for (let start = 0; start < points.length; start += perSlide) {
    const group = points.slice(start, start + perSlide);
    const [first] = group;
    pointMains.push(
      group.length === 1 && first ? pointMain(ctx, first, start, points.length) : groupMain(ctx, group, start, points.length),
    );
  }
  return deck(
    ctx,
    "mist",
    TAG,
    [
      `<main class="main" data-fit>
  <div class="lede">
    <p class="recap-word recap-word--big">Recap</p>
    ${heading(session.title, TALL_WIDTH, COVER_SIZES, Math.min(coverRoom, 340)).html}
  </div>
  ${wave(session.id, 52)}
  <div class="facts">${fact("Tanggal", e(formatDate(session)))}${fact("Catatan", e(notes))}</div>
</main>`,
      ...pointMains,
    ],
    closingMain(ctx),
  );
}

const recap: Template = (ctx) => {
  const points = ctx.session.recap?.points ?? [];
  if (ctx.format.multi) return slides(ctx, points);
  return [layoutOf(ctx.format) === "wide" ? landscape(ctx, points) : single(ctx, points)];
};

export default recap;
