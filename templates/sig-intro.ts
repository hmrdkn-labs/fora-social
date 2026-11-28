// SIG intro: what the SIG is, who it is for, how to join, and the nearest session. White
// surface with the lockup as the hero.
import { formatDateShort, formatTime, joinNames } from "../src/format.ts";
import type { Person, Template, TemplateContext } from "../src/types.ts";
import { emWidth, fitList, REGULAR, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";
import {
  avatar,
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
  withFaces,
} from "./parts.ts";

const TAG = "Kenalan";

const TALL_SIZES = [68, 60, 52, 46, 40, 36];
const WIDE_SIZES = [46, 40, 36, 32, 28];
const NAME_SIZES = [176, 152, 128, 108, 88, 72];
const NEXT_SIZES = [88, 76, 66, 56, 48, 42];

const WHO = "Yang penasaran. Pemula juga boleh nanya";
const HOW = "Ngobrol lewat suara di voice channel Discord";

/** The nearest session, on the accent colour. `width` is the strip's inner width. */
function nextSession(ctx: TemplateContext, width: number, titleSize: number, withTitle = true, withChannel = false, stacked = false): Block {
  const { session } = ctx;
  const day = formatDateShort(session);
  const time = formatTime(session);
  const when = `${day} · ${time}`;
  const title = withTitle ? `<p class="next__title">${e(tidy(session.title))}</p>` : "";
  const titleHeight = withTitle ? 6 + textHeight(session.title, titleSize, width, 1.15) : 0;
  if (stacked) {
    // The side panel: day and time as two big lines, easy to take in at a glance. A day that is
    // still open ("Minggu depan, harinya menyusul") wraps onto more lines.
    return {
      html: `<div class="next" data-fit>
  <p class="label">Sesi terdekat</p>
  <p class="next__big">${e(day)}</p>
  <p class="next__big">${e(time)}</p>
  ${title}
</div>`,
      height: 48 + 22 + 2 * 6 + textHeight(day, 30, width, 1.1) + textHeight(time, 30, width, 1.1) + titleHeight,
    };
  }
  // Label and day share a line when both fit; otherwise the day wraps under the label.
  const labelWidth = emWidth("SESI TERDEKAT") * 24 * 1.1 + 13 * 2.4;
  const shared = labelWidth + 24 + emWidth(when) * 20 * 1.05 <= width;
  const meta = shared ? 31 : 22 + 2 + textHeight(when, 20, width, 1.3);
  return {
    html: `<div class="next" data-fit>
  <p class="next__meta"><span class="label">Sesi terdekat</span><span class="next__when">${e(when)}</span></p>
  ${title}
  ${withChannel ? `<p class="next__where">voice channel ${channel(session.voiceChannel)}</p>` : ""}
</div>`,
    height: 48 + meta + titleHeight + (withChannel ? 6 + 26 * 1.3 : 0),
  };
}

/** The description's second sentence: the everyday example, short enough for the wide image. */
const example = (text: string): string => text.split(/(?<=[.!?])\s+/)[1] ?? text;

/** The first `count` sentences of `text`. */
const sentences = (text: string, count: number): string => text.split(/(?<=[.!?])\s+/).slice(0, count).join(" ");

/** `text` (the SIG's description by default) at the largest of `sizes` that fits `room`; `fits` is false when none does. */
function description(ctx: TemplateContext, width: number, room: number, sizes: readonly number[], text = ctx.sig.description): Block & { fits: boolean } {
  const { size } = fitList([text], width, room, sizes, { lineHeight: 1.45, factor: REGULAR });
  const height = textHeight(text, size, width, 1.45, REGULAR);
  return { html: `<p class="lead" style="font-size:${size}px">${e(text)}</p>`, height, fits: height <= room };
}


/** Sizes of one person card of the crew list. */
interface CrewScale {
  avatar: number;
  name: number;
  about: number;
  gap: number;
}

const CREW_TALL: readonly CrewScale[] = [
  { avatar: 72, name: 30, about: 26, gap: 18 },
  { avatar: 64, name: 28, about: 24, gap: 14 },
  { avatar: 56, name: 26, about: 24, gap: 10 },
];
const CREW_SLIDE: readonly CrewScale[] = [
  { avatar: 104, name: 40, about: 30, gap: 26 },
  { avatar: 88, name: 36, about: 28, gap: 22 },
  { avatar: 72, name: 30, about: 26, gap: 16 },
];
const CREW_PAD = 18;

/** The people active in the SIG, one card per row: silhouette or photo, name, and what they are doing. */
function crew(ctx: TemplateContext, people: readonly Person[], width: number, s: CrewScale): Block {
  const textWidth = width - s.avatar - CREW_PAD;
  // An `about` is a fragment that follows the name in captions ("lagi persiapan …"); on its own line it starts with a capital.
  const about = (p: Person) => (p.about ? p.about.charAt(0).toUpperCase() + p.about.slice(1) : "");
  const heights = people.map((p) =>
    Math.max(s.avatar, textHeight(p.name, s.name, textWidth, 1.2) + (p.about ? 4 + textHeight(about(p), s.about, textWidth, 1.3, REGULAR) : 0)),
  );
  const cards = people.map(
    (p) => `<div class="crew__card">${avatar(ctx, p, s.avatar)}<p class="crew__text"><span class="crew__name">${e(p.name)}</span>${p.about ? `<span class="crew__about">${e(about(p))}</span>` : ""}</p></div>`,
  );
  return {
    html: `<div class="crew" style="--name:${s.name}px;--about:${s.about}px;gap:${s.gap}px">${cards.join("")}</div>`,
    height: heights.reduce((sum, h) => sum + h, 0) + s.gap * Math.max(0, people.length - 1),
  };
}

/** The first scale of `scales` whose crew takes at most `room`; the smallest when none does. */
function fitCrew(ctx: TemplateContext, people: readonly Person[], width: number, room: number, scales: readonly CrewScale[]): Block & { fits: boolean } {
  let block: Block = { html: "", height: 0 };
  for (const s of scales) {
    block = crew(ctx, people, width, s);
    if (block.height <= room) return { ...block, fits: true };
  }
  return { ...block, fits: false };
}

/** The SIG's agenda as a numbered list at the largest of `sizes` that holds every item in `room`. */
function agenda(items: readonly string[], width: number, room: number, sizes: readonly number[]): Block & { fits: boolean } {
  const options = { lineHeight: 1.25, gap: 0.6, factor: 1, rowMin: 1.5, indent: 2.1 };
  const height = (size: number) =>
    items.reduce((sum, item) => sum + Math.max(1.5, textHeight(item, size, width - 2.1 * size, 1.25) / size) * size, 0) + Math.max(0, items.length - 1) * 0.6 * size;
  const { size, count } = fitList(items, width, room, sizes, options);
  const rows = items.map((item, index) => `<li><span class="n">${index + 1}</span><p>${e(item)}</p></li>`);
  return { html: `<ol class="list" style="font-size:${size}px">${rows.join("")}</ol>`, height: height(size), fits: count === items.length };
}

/** "Dika, Hamzah dan Ammar": the people of the SIG on one line, for wide posts. */
const crewNames = (people: readonly Person[]): string => joinNames(people.map((p) => p.name));

function who(): Block {
  return {
    html: `<div class="facts facts--text">${fact("Untuk siapa", WHO)}${fact("Format", HOW)}</div>`,
    height: factHeight(Math.max(textHeight(WHO, 28, 448, 1.3), textHeight(HOW, 28, 448, 1.3))),
  };
}

function tall(ctx: TemplateContext): string {
  const { sig } = ctx;
  const bar = joinBar(ctx);
  const next = nextSession(ctx, TALL_WIDTH - 64, 32);
  const facts = who();
  const sizes = [34, 30, 28, 26, 24];
  const people = sig.people ?? [];
  const items = sig.agenda ?? [];
  const minimum = heading(sig.tagline, TALL_WIDTH, [TALL_SIZES[TALL_SIZES.length - 1] ?? 36], Infinity).height;
  // What is left under the tagline, once the strip with the nearest session and `pieces` more
  // blocks (each followed by a gap) are placed.
  const spare = (pieces: number) => tallRoom(ctx, "paper", bar.height, true) - next.height - pieces * GAP - 8;

  // Who is active and what they work on come first, as large as both fit with the tagline; the
  // description and "who it is for" take what is left, and give way, the description last.
  const crewSteps = people.length > 0 ? CREW_TALL : [undefined];
  const agendaSteps = items.length > 0 ? [30, 28, 26, 24] : [undefined];
  let crewBlock: Block | undefined;
  let agendaBlock: Block | undefined;
  let left = 0;
  search: for (const scale of crewSteps) {
    for (const size of agendaSteps) {
      crewBlock = scale ? crew(ctx, people, TALL_WIDTH, scale) : undefined;
      agendaBlock = size ? agenda(items, TALL_WIDTH, Infinity, [size]) : undefined;
      const used = (crewBlock?.height ?? 0) + (agendaBlock?.height ?? 0);
      left = spare(1 + (crewBlock ? 1 : 0) + (agendaBlock ? 1 : 0)) - used - minimum;
      if (left >= 0) break search;
    }
  }

  let about: (Block & { fits: boolean }) | undefined;
  let withFacts = false;
  for (const text of [sig.description, sentences(sig.description, 2)]) {
    for (const keepFacts of [true, false]) {
      const extra = GAP + (keepFacts ? facts.height + GAP : 0);
      const candidate = description(ctx, TALL_WIDTH, left - extra, sizes, text);
      if (candidate.fits && left - extra > 0) {
        about = candidate;
        withFacts = keepFacts;
        break;
      }
    }
    if (about) break;
  }
  const spent = (about ? about.height + GAP : 0) + (withFacts ? facts.height + GAP : 0);
  const tagline = heading(sig.tagline, TALL_WIDTH, TALL_SIZES, Math.max(minimum, Math.min(minimum + left - spent, tallRoom(ctx, "paper", bar.height, true) * 0.3)));
  return post(
    ctx,
    "paper",
    `${header(ctx, "paper", TAG, "head--hero")}
<main class="main" data-fit>
  ${tagline.html}
  ${about?.html ?? ""}
  ${crewBlock?.html ?? ""}
  ${agendaBlock?.html ?? ""}
  ${withFacts ? facts.html : ""}
  ${next.html}
</main>
${bar.html}`,
  );
}

function landscape(ctx: TemplateContext): string {
  const { sig } = ctx;
  const room = wideRoom(ctx, "paper") - WIDE_GAP;
  const tagline = heading(sig.tagline, MAIN_WIDTH, WIDE_SIZES, room * 0.5);
  // Names and faces only: the wide image has no room for what each person is doing.
  const people = sig.people ?? [];
  const names = people.length > 0 ? withFaces(ctx, people, crewNames(people), MAIN_WIDTH, 24) : undefined;
  const namesRoom = names ? names.height + WIDE_GAP : 0;
  const about = description(ctx, MAIN_WIDTH, room - tagline.height - namesRoom - WIDE_GAP, [34, 30, 28, 26, 24], example(sig.description));
  // With no people to show the description keeps the room it always had; with them it is dropped when it does not fit.
  const showAbout = names === undefined || about.fits;
  return wide(
    ctx,
    "paper",
    `${header(ctx, "paper", TAG)}
${tagline.html}
${names?.html ?? ""}
${showAbout ? about.html : ""}`,
    [{ ...nextSession(ctx, 260, 24, true, false, true), fallback: nextSession(ctx, 260, 24, false, false, true) }],
  );
}

/** The slide about who is active now and what they work on, when the SIG has either. */
function crewMain(ctx: TemplateContext): string | undefined {
  const { sig } = ctx;
  const people = sig.people ?? [];
  const items = sig.agenda ?? [];
  if (people.length === 0 && items.length === 0) return undefined;
  const room = tallRoom(ctx, "paper", FOOT) - 2 * GAP;
  const label = 50;
  const labelled = (people.length > 0 ? label + 20 : 0) + (items.length > 0 ? label + 20 : 0) + (people.length > 0 && items.length > 0 ? GAP : 0);
  const agendaBlock = items.length > 0 ? agenda(items, TALL_WIDTH, room - labelled - (people.length > 0 ? 300 : 0), [36, 32, 30, 28, 26, 24]) : undefined;
  const crewBlock = people.length > 0 ? fitCrew(ctx, people, TALL_WIDTH, room - labelled - (agendaBlock?.height ?? 0), CREW_SLIDE) : undefined;
  const sections = [
    crewBlock ? `<div class="lede"><p class="kicker">Yang aktif sekarang</p>${crewBlock.html}</div>` : "",
    agendaBlock ? `<div class="lede"><p class="kicker">Yang lagi dikerjakan</p>${agendaBlock.html}</div>` : "",
  ];
  return `<main class="main" data-fit>
  ${sections.filter(Boolean).join("\n  ")}
</main>`;
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
  const crewSlide = crewMain(ctx);
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
      ...(crewSlide ? [crewSlide] : []),
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
