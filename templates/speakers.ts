// Speakers: who talks in this session, with their portraits as the main thing. Ink surface, so
// the photos and their accent rings carry the post; the title and date stay small. Up to three
// people get equal large portraits, more share a grid; decks give each person a slide between a
// cover and the join slide.
import { formatDate, formatDateShort, formatTime, formatTimeRange, joinNames, speakerLine } from "../src/format.ts";
import type { Person, Template, TemplateContext } from "../src/types.ts";
import { fitBlock, fitLine, REGULAR, SERIF, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  avatar,
  type Block,
  deck,
  everyone,
  FOOT,
  faces,
  facesWidth,
  fact,
  factHeight,
  GAP,
  header,
  heading,
  joinBar,
  joinMain,
  kicker,
  kickerHeight,
  kickerText,
  layoutOf,
  lede,
  MAIN_WIDTH,
  person,
  personHeight,
  post,
  TALL_WIDTH,
  tallRoom,
  tidy,
  WAVE_MIN,
  wave,
  whenWhere,
  wide,
  wideRoom,
} from "./parts.ts";

const TAG = "Kenalan";
const MODIFIER = "post--speakers";

/** Type sizes of a portrait card: the name's largest and smallest size, role and handle, and the part label. */
interface Scale {
  name: readonly [max: number, min: number];
  meta: number;
  part: number;
}

/** By number of people, one to three. Tall formats keep to the 24-unit minimum of brand/README.md. */
const TALL_SCALES: readonly Scale[] = [
  { name: [80, 44], meta: 34, part: 26 },
  { name: [56, 36], meta: 28, part: 24 },
  { name: [40, 28], meta: 24, part: 24 },
];
const WIDE_SCALES: readonly Scale[] = [
  { name: [44, 28], meta: 24, part: 20 },
  { name: [32, 22], meta: 20, part: 18 },
  { name: [24, 20], meta: 18, part: 18 },
];
const SLIDE_SCALE: Scale = { name: [104, 56], meta: 40, part: 28 };

const INFO_SIZES = [52, 46, 40, 34, 30];
const COVER_SIZES = [104, 92, 80, 70, 60, 54, 48, 42];

/** "Host" for the host, "Pembicara" for everyone else. */
function partOf(ctx: TemplateContext, p: Person): string {
  return p === ctx.session.host ? "Host" : "Pembicara";
}

/** One size for every name of a row, so the cards stay equal: the largest at which the longest fits a line. */
function nameSize(people: readonly Person[], width: number, scale: Scale): number {
  return Math.min(...people.map((p) => fitLine(p.name, width, scale.name[0], scale.name[1])));
}

/** Part, name, role and handle of one person, `width` wide. */
function text(ctx: TemplateContext, p: Person, width: number, scale: Scale, size: number, withPart = true): Block {
  const handle = p.handle ? `@${p.handle}` : "";
  const meta = [p.role ?? "", handle].filter((part) => part !== "");
  const part = withPart ? `<p class="spot__part">${e(partOf(ctx, p))}</p>` : "";
  const metaHtml = meta.length > 0 ? `<p class="spot__meta">${meta.map((item) => `<span>${e(item)}</span>`).join("")}</p>` : "";
  return {
    html: `<div class="spot__text">${part}<p class="spot__name">${e(p.name)}</p>${metaHtml}</div>`,
    height:
      (withPart ? scale.part * 1.2 + 6 : 0) +
      textHeight(p.name, size, width, 1.08) +
      (meta.length > 0 ? 8 : 0) +
      meta.reduce((sum, item) => sum + textHeight(item, scale.meta, width, 1.25, REGULAR), 0),
  };
}

function scaleStyle(scale: Scale, size: number): string {
  return `--name:${size}px;--meta:${scale.meta}px;--part:${scale.part}px`;
}

/**
 * More than three people: no large portraits, since they would not stay equal. Tall formats list
 * everyone as a card in two columns (beyond six, the speakers become one sentence beside the
 * host's card); wide ones show the faces in a row over the sentence that names them.
 */
function crowd(ctx: TemplateContext, width: number, room: number, isWide: boolean): Block {
  const { host, speakers } = ctx.session;
  const people = everyone(ctx);
  if (isWide) {
    const shown = people.slice(0, 6);
    const face = Math.floor(Math.min(120, width / (facesWidth(shown.length, 1) || 1)));
    const line = speakerLine(ctx.session);
    const sentence = line.charAt(0).toUpperCase() + line.slice(1);
    const size = fitBlock(sentence, width, room - face - 20, [30, 26, 22, 20], 1.3) ?? 20;
    return {
      html: `<div class="crowd">${faces(ctx, shown, face)}<p class="crowd__names" style="font-size:${size}px">${e(sentence)}</p></div>`,
      height: face + 20 + textHeight(sentence, size, width, 1.3),
    };
  }
  const hostCard = { ...host, role: ["Host", host.role].filter(Boolean).join(" · ") };
  const column = (width - 40) / 2;
  if (people.length <= 6) {
    const cards = [...speakers, hostCard];
    const rows = Math.ceil(cards.length / 2);
    return {
      html: `<div class="cast cast--grid">${cards.map((p) => person(ctx, p, "person--mid")).join("")}</div>`,
      height: rows * Math.max(88, ...cards.map((p) => personHeight(p, column) * 1.25)) + (rows - 1) * 28,
    };
  }
  const names = joinNames(speakers.map((p) => p.name));
  const size = fitBlock(names, width, room - 88 - 28, [36, 32, 28, 24], 1.4, REGULAR) ?? 24;
  return {
    html: `<div class="cast"><p class="lead" style="font-size:${size}px">${e(names)}</p>${person(ctx, hostCard, "person--mid")}</div>`,
    height: textHeight(names, size, width, 1.4, REGULAR) + 28 + 88,
  };
}

/**
 * The portraits, as large as `width` × `room` allows. One person: the portrait beside or above
 * the text, whichever leaves it larger. Two or three: equal columns, portrait above the text.
 */
function spotlight(ctx: TemplateContext, width: number, room: number): Block {
  const isWide = layoutOf(ctx.format) === "wide";
  const people = everyone(ctx);
  const count = people.length;
  const scale = (isWide ? WIDE_SCALES : TALL_SCALES)[count - 1];
  if (scale === undefined) return crowd(ctx, width, room, isWide);

  const gap = isWide ? 24 : 28;
  const lift = isWide ? 14 : 22;
  const column = (width - gap * (count - 1)) / count;
  const size = nameSize(people, column, scale);
  const texts = people.map((p) => text(ctx, p, column, scale, size));
  const textRoom = Math.max(...texts.map((block) => block.height));
  const above = Math.floor(Math.min(column, room - textRoom - lift));

  const [only] = people;
  const beside = Math.floor(Math.min(room, width / 2));
  if (count === 1 && only && beside > above) {
    const rowGap = isWide ? 28 : 36;
    const textWidth = width - beside - rowGap;
    const rowSize = nameSize(people, textWidth, scale);
    return {
      html: `<div class="spots" style="${scaleStyle(scale, rowSize)}"><div class="spot spot--row" style="gap:${rowGap}px">${avatar(ctx, only, beside)}${text(ctx, only, textWidth, scale, rowSize).html}</div></div>`,
      height: beside,
    };
  }

  const portrait = Math.max(96, above);
  const cards = people.map((p, index) => `<div class="spot" style="gap:${lift}px">${avatar(ctx, p, portrait)}${texts[index]?.html ?? ""}</div>`);
  return {
    html: `<div class="spots" style="${scaleStyle(scale, size)};gap:${gap}px;grid-template-columns:repeat(${count},minmax(0,1fr))">${cards.join("")}</div>`,
    height: portrait + lift + textRoom,
  };
}

/** Series and theme, the title, and the date and time: small, under the portraits. */
function info(ctx: TemplateContext): Block {
  const { session } = ctx;
  const when = `${formatDate(session)} · ${formatTimeRange(session)}`;
  const title = heading(session.title, TALL_WIDTH, INFO_SIZES, 112);
  return {
    html: `<div class="lede lede--tight">${kicker(ctx)}${title.html}<p class="byline">${e(when)}</p></div>`,
    height: kickerHeight(kickerText(ctx, ""), TALL_WIDTH) + title.height + textHeight(when, 28, TALL_WIDTH, 1.35) + 2 * 14,
  };
}

function tall(ctx: TemplateContext): string {
  const bar = joinBar(ctx);
  const about = info(ctx);
  const room = tallRoom(ctx, "ink", bar.height) - about.height - 2 * GAP - WAVE_MIN;
  return post(
    ctx,
    "ink",
    `${header(ctx, "ink", TAG)}
<main class="main" data-fit>
  ${spotlight(ctx, TALL_WIDTH, room).html}
  ${wave(ctx.session.id, 52)}
  ${about.html}
</main>
${bar.html}`,
    MODIFIER,
  );
}

function landscape(ctx: TemplateContext): string {
  const { session } = ctx;
  const [weekday = "", date = ""] = formatDate(session).split(", ");
  const label = kickerText(ctx, "");
  const titleSize = fitBlock(session.title, 304, 96, [28, 24, 22, 20], 1.15) ?? 20;
  return wide(
    ctx,
    "ink",
    `${header(ctx, "ink", TAG)}
<div class="stage">${spotlight(ctx, MAIN_WIDTH, wideRoom(ctx, "ink")).html}</div>`,
    [
      {
        html: `<div class="about">
  <p class="about__label">${e(label)}</p>
  <p class="about__title" style="font-size:${titleSize}px">${e(tidy(session.title))}</p>
</div>`,
        height: textHeight(label.toUpperCase(), 18 * 1.1, 304, 1.2) + 6 + textHeight(session.title, titleSize, 304, 1.15),
      },
      {
        html: `<div class="when">
  <p class="when__day">${e(weekday)}</p>
  <p class="when__date" style="font-size:${fitLine(date, 300, 34, 24)}px">${e(date)}</p>
  <p class="when__time">${e(formatTimeRange(session))}</p>
</div>`,
        height: 110,
        // A short panel drops the large date: weekday and date on one line, the start time on the next.
        fallback: {
          html: `<div class="when">
  <p class="when__day">${e(formatDateShort(session))}</p>
  <p class="when__time">${e(formatTime(session))}</p>
</div>`,
          height: 66,
          fallback: {
            html: `<p class="when__day">${e(`${formatDateShort(session)} · ${formatTime(session)}`)}</p>`,
            height: 52,
          },
        },
      },
    ],
    "soon",
    MODIFIER,
  );
}

/** The deck's cover: the session, everyone's faces in one row, and the date. */
function coverMain(ctx: TemplateContext): string {
  const { session } = ctx;
  const shown = everyone(ctx).slice(0, 5);
  const face = Math.floor(Math.min(240, TALL_WIDTH / facesWidth(shown.length, 1)));
  const line = speakerLine(session);
  const names = line.charAt(0).toUpperCase() + line.slice(1);
  const room = tallRoom(ctx, "ink", FOOT) - face - 20 - textHeight(names, 28, TALL_WIDTH, 1.35) - factHeight(40) - 2 * GAP;
  return `<main class="main" data-fit>
  ${lede(ctx, TALL_WIDTH, COVER_SIZES, Math.min(room, 420), true).html}
  <div class="lede">${faces(ctx, shown, face)}<p class="byline">${e(names)}</p></div>
  <div class="facts">${fact("Tanggal", e(formatDate(session)))}${fact("Waktu", e(formatTimeRange(session)))}</div>
</main>`;
}

/** The first sentence of the host's note. */
function firstSentence(note: string): string {
  return note.match(/^.*?[.?!](?=\s|$)/s)?.[0] ?? note;
}

/** One person, large: the portrait with their part beside it in the serif, then name, role and handle. */
function personMain(ctx: TemplateContext, p: Person): string {
  const { session } = ctx;
  const where = whenWhere(ctx);
  const size = nameSize([p], TALL_WIDTH, SLIDE_SCALE);
  const about = text(ctx, p, TALL_WIDTH, SLIDE_SCALE, size, false);
  const foot = kickerHeight(session.title, TALL_WIDTH) + 12 + where.height;
  const free = tallRoom(ctx, "ink", FOOT) - foot - about.height - 2 * GAP - 28;
  // Only the host's own words are quoted, and only their first sentence.
  const said = p === session.host && session.note ? firstSentence(session.note) : "";
  const quoteWidth = TALL_WIDTH - 32;
  const quoteSize = fitBlock(said, quoteWidth, free - 320 - GAP, [44, 40, 36, 32, 28], 1.25, SERIF) ?? 28;
  const quote: Block =
    said === ""
      ? { html: "", height: 0 }
      : {
          html: `<p class="spot__quote" style="font-size:${quoteSize}px">${e(said)}</p>`,
          height: textHeight(said, quoteSize, quoteWidth, 1.25, SERIF) + GAP,
        };
  const portrait = Math.floor(Math.max(240, Math.min(560, free - quote.height)));
  const part = partOf(ctx, p);
  const partSize = fitLine(part, (TALL_WIDTH - portrait - 36) / SERIF, 104, 48);
  return `<main class="main" data-fit>
  <div class="spots" style="${scaleStyle(SLIDE_SCALE, size)}">
    <div class="spot" style="gap:28px">
      <div class="spot__hero">${avatar(ctx, p, portrait)}<p class="spot__word" style="font-size:${partSize}px">${e(part)}</p></div>
      ${about.html}
    </div>
  </div>
  ${quote.html}
  <div class="lede lede--tight"><p class="kicker">${e(session.title)}</p>${where.html}</div>
</main>`;
}

const speakers: Template = (ctx) => {
  if (ctx.format.multi) {
    const people = everyone(ctx).map((p) => personMain(ctx, p));
    return deck(ctx, "ink", TAG, [coverMain(ctx), ...people], joinMain(ctx, "ink"));
  }
  return [layoutOf(ctx.format) === "wide" ? landscape(ctx) : tall(ctx)];
};

export default speakers;
