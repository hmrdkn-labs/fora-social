// Shared pieces of every post: the canvas shell, header with logos, kicker and title, join
// block, person line, fact cell, voice-wave motif, slide footer and the slide deck with its
// closing "join" slide. Post types only arrange these; none of them writes this markup itself.
//
// Every post is designed on a canvas 1080 units wide and scaled to the format's pixels, so the
// two landscape formats share one layout and type sizes follow `width / 1080` (brand/README.md).
//
// Nothing overflows because every layout budgets its height here, from string lengths: a piece
// reports the height it will take, and the title, lists and optional pieces are sized or dropped
// to fit what is left. The numbers mirror templates/base.css; change them together.
import { readFileSync } from "node:fs";
import { join as joinPath } from "node:path";
import { discordUrl, displayUrl, formatDateShort, formatTime, formatTimeRange, speakerLine } from "../src/format.ts";
import { REPO_ROOT } from "../src/paths.ts";
import type { Format, Person, TemplateContext } from "../src/types.ts";
import { emWidth, fitBlock, fitLine, fitList, REGULAR, SERIF, textHeight } from "./fit.ts";
import { escapeHtml as e } from "./html.ts";

/** Surface of a post: white, light grey, near-black, or the SIG's accent colour. */
export type Theme = "paper" | "mist" | "ink" | "accent";

/** `tall` 4:5, `story` 9:16 with platform safe areas, `wide` landscape with a side panel. */
export type Layout = "tall" | "story" | "wide";

/** A piece of a layout with the height it is expected to take. */
export interface Block {
  html: string;
  height: number;
  /** Dropped, last first, when the layout runs out of room. */
  optional?: boolean;
  /** A shorter version to use, before dropping anything, when the layout runs out of room. */
  fallback?: Block;
}

const DESIGN_WIDTH = 1080;
/** Content width of tall and story posts. */
export const TALL_WIDTH = 936;
/** Content width of the main column of a wide post that has a side panel. */
export const MAIN_WIDTH = 580;
/** Content width of a wide post without a side panel. */
export const SOLO_WIDTH = 960;
/** Content width of the side panel. */
const SIDE_WIDTH = 304;
/** Gap between the pieces inside `<main>` of a tall post, and between those of a wide one. */
export const GAP = 32;
export const WIDE_GAP = 22;
/** Smallest height the wave is drawn at. */
export const WAVE_MIN = 40;
export const WIDE_WAVE_MIN = 24;
/** Height of the slide footer. */
export const FOOT = 48;

export function layoutOf(format: Format): Layout {
  if (format.width > format.height) return "wide";
  return format.height / format.width > 1.5 ? "story" : "tall";
}

/** The canvas: sets the scale, the theme and the SIG's colours. `modifier` adds classes. */
export function post(ctx: TemplateContext, theme: Theme, inner: string, modifier = ""): string {
  const scale = ctx.format.width / DESIGN_WIDTH;
  const style = [
    `--k:${scale.toFixed(6)}`,
    `--h:${(ctx.format.height / scale).toFixed(3)}px`,
    `--accent:${e(ctx.sig.color)}`,
    `--accent-ink:${e(ctx.sig.colorInk)}`,
  ].join(";");
  const layout = layoutOf(ctx.format);
  const classes = ["post", `post--${layout}`, `t-${theme}`, modifier].filter(Boolean).join(" ");
  // Stories keep content out of the bottom 340 px; a faint wave there stops it looking unfinished.
  const zone = layout === "story" && !modifier.includes("post--cover") ? wave(ctx.session.id, 26, "wave--zone") : "";
  return `<div class="${classes}" style="${style}">${zone}${inner}</div>`;
}

function headHeight(layout: Layout, theme: Theme, hero: boolean): number {
  if (layout === "wide") return theme === "accent" ? 104 : 84;
  if (hero) return 152;
  return theme === "accent" ? 124 : 116;
}

/**
 * Height left for `<main>` on a tall or story post, under the header and above a join bar or
 * slide footer `foot` units high (0 for none).
 */
export function tallRoom(ctx: TemplateContext, theme: Theme, foot: number, hero = false): number {
  const layout = layoutOf(ctx.format);
  const inner = layout === "story" ? 1920 - 266 - 356 : 1350 - 144;
  return inner - headHeight(layout, theme, hero) - foot - 36 * (foot > 0 ? 2 : 1);
}

/** Height left under the header in the main column of a wide post. `padding` is top plus bottom. */
export function wideRoom(ctx: TemplateContext, theme: Theme): number {
  const units = ctx.format.height / (ctx.format.width / DESIGN_WIDTH);
  return units - 120 - headHeight("wide", theme, false) - WIDE_GAP;
}

/**
 * Logos on the left, the post-type tag on the right. On ink the lockup's `-white` variant is
 * used (brand/README.md: every logo has one). A general FORA post shows the mark with the
 * community's full name, since the mark alone is small.
 */
export function header(ctx: TemplateContext, theme: Theme, tag = "", modifier = ""): string {
  const { sig, community } = ctx;
  const path = theme === "ink" ? sig.lockup.replace(/\.svg$/, "-white.svg") : sig.lockup;
  const isCommunity = sig.lockup === community.logo;
  const alt = isCommunity ? community.name : `${sig.short} × ${community.name}`;
  const name = isCommunity ? `<span class="brand__name">${e(community.fullName)}</span>` : "";
  const brand = `<div class="brand"><img class="brand__logo" src="${e(ctx.asset(path))}" alt="${e(alt)}">${name}</div>`;
  const tagHtml = tag ? `<p class="tag">${e(tag)}</p>` : "";
  return `<header class="${["head", modifier].filter(Boolean).join(" ")}">${brand}${tagHtml}</header>`;
}

/** The voice channel's name in bold; a short name never breaks at its hyphens. */
export function channel(name: string): string {
  return `<b${name.length <= 24 ? ' class="nowrap"' : ""}>${e(name)}</b>`;
}

/**
 * Keeps short tokens with their neighbour, so a balanced title never breaks around them:
 * "Argo CD:" stays together, and "di" or "ke" stays with the word it introduces.
 */
export function tidy(text: string): string {
  const words = text.split(" ");
  return words
    .map((word, index) => {
      if (index === 0) return word;
      const short = /^[A-Z0-9]{1,3}$/.test(word.replace(/[:,.;!?]+$/, ""));
      const afterParticle = /^[a-z]{1,2}$/.test(words[index - 1] ?? "");
      return (short || afterParticle ? "\u00a0" : " ") + word;
    })
    .join("");
}

/** A heading at the largest of `sizes` that fits `room` units of height, with the height it takes. */
export function heading(text: string, width: number, sizes: readonly number[], room: number): Block {
  const size = fitBlock(text, width, room, sizes) ?? sizes[sizes.length - 1] ?? 24;
  return {
    html: `<h1 class="title" style="font-size:${size}px">${e(tidy(text))}</h1>`,
    height: textHeight(text, size, width, 1.04),
  };
}

/** Series and theme after `lead`, as the kicker shows them. */
export function kickerText(ctx: TemplateContext, lead: string): string {
  const { series, theme } = ctx.session;
  return [lead, series, theme].filter((part) => part !== undefined && part !== "").join(" · ");
}

/** "CLOUD NATIVE 101 · KUBERNETES": series and theme, or the theme alone, after `lead`. */
export function kicker(ctx: TemplateContext, lead = ""): string {
  return `<p class="kicker">${e(kickerText(ctx, lead))}</p>`;
}

/** Height of a kicker: caps with tracking, beside its square mark. */
export function kickerHeight(text: string, width: number, wideLayout = false): number {
  const size = wideLayout ? 21 : 24;
  return textHeight(text.toUpperCase(), size * 1.12, width - 34, 1.25);
}

/**
 * Kicker, the session title at the largest of `sizes` that fits `room` units of height, and
 * the subtitle when the title can keep at least 60% of its largest size beside it.
 * `fits` is false when even the smallest title is too tall for `room`.
 */
export function lede(
  ctx: TemplateContext,
  width: number,
  sizes: readonly number[],
  room: number,
  withSubtitle: boolean,
): { html: string; fits: boolean } {
  const { title, subtitle = "" } = ctx.session;
  const isWide = layoutOf(ctx.format) === "wide";
  const gap = isWide ? 12 : 20;
  const titleRoom = room - kickerHeight(kickerText(ctx, ""), width, isWide) - gap;
  const subHeight = gap + textHeight(subtitle, isWide ? 28 : 44, width, 1.15, SERIF);
  const large = sizes.filter((size) => size >= (sizes[0] ?? 0) * 0.6);
  const withSub = withSubtitle && subtitle !== "" ? fitBlock(title, width, titleRoom - subHeight, large) : undefined;
  const size = withSub ?? fitBlock(title, width, titleRoom, sizes);
  const sub = withSub !== undefined ? `<p class="subtitle">${e(subtitle)}</p>` : "";
  const shown = size ?? sizes[sizes.length - 1] ?? 24;
  return {
    html: `<div class="lede">${kicker(ctx)}<h1 class="title" style="font-size:${shown}px">${e(tidy(title))}</h1>${sub}</div>`,
    fits: size !== undefined,
  };
}

/**
 * The voice motif: a row of rounded bars like a recorded waveform. Heights come from `seed`
 * (the session id), so every session has its own, and the same one on every post.
 */
export function wave(seed: string, bars: number, modifier = ""): string {
  let state = 2166136261;
  for (const ch of seed) state = Math.imul(state ^ (ch.codePointAt(0) ?? 0), 16777619);
  const next = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
  const phase = next() * Math.PI * 2;
  const spans: string[] = [];
  for (let i = 0; i < bars; i += 1) {
    const envelope = 0.3 + 0.7 * Math.abs(Math.sin(i * 0.41 + phase) * Math.cos(i * 0.13 + phase / 2));
    const height = Math.max(8, Math.round((0.35 + 0.65 * next()) * envelope * 100));
    spans.push(`<i style="height:${height}%"></i>`);
  }
  return `<div class="${["wave", modifier].filter(Boolean).join(" ")}" aria-hidden="true">${spans.join("")}</div>`;
}

/** `soon` before the session, `now` while it is live, `next` after it. */
export type JoinMode = "soon" | "now" | "next";

const JOIN_LEAD: Record<JoinMode, string> = {
  soon: "Masuk",
  now: "Masuk sekarang ke",
  next: "Sesi berikutnya di",
};

/**
 * The join block, the same on every post: "Voice channel · Discord", the channel, that anyone
 * may join the talk, and the invite URL in short form. `bar` is the strip at the bottom of
 * tall posts, `stack` the column at the bottom of a wide post's side panel.
 */
function join(ctx: TemplateContext, variant: "bar" | "stack", mode: JoinMode): Block {
  const { session, community } = ctx;
  const url = displayUrl(discordUrl(session, community));
  const bar = variant === "bar";
  const [room, max, min] = bar ? [420, 28, 24] : [SIDE_WIDTH - 38, 22, 18];
  // A long invite URL gets its own row and breaks where it must; a normal one stays on one line.
  const long = emWidth(url) * min > room;
  const size = long ? min : fitLine(url, room, max, min);
  const line = `${JOIN_LEAD[mode]} ${session.voiceChannel}. Dengerin aja boleh, mic juga boleh.`;
  const chipWidth = emWidth(url) * size * 1.03 + (bar ? 56 : 36);
  const chipHeight = (long ? textHeight(url, size, (bar ? 864 : SIDE_WIDTH) - 56, 1.2) : size * 1.2) + (bar ? 32 : 20);
  const lineWidth = bar ? (long ? 864 : 864 - 32 - chipWidth) : SIDE_WIDTH;
  const lineHeight = textHeight(line, bar ? 28 : 21, lineWidth, 1.3, REGULAR);
  const height = bar
    ? 60 + 29 + 14 + (long ? lineHeight + 14 + chipHeight : Math.max(lineHeight, chipHeight)) + 6
    : 22 + 26 + 8 + lineHeight + 16 + chipHeight + 6;
  const icon = '<span class="join__icon" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>';
  const html = `<aside class="join join--${variant}${long ? " join--long" : ""}" data-fit>
  <p class="join__label">${icon}Voice channel · Discord</p>
  <p class="join__line">${JOIN_LEAD[mode]} ${channel(session.voiceChannel)}. Dengerin aja boleh, mic juga boleh.</p>
  <p class="join__url" style="font-size:${size}px">${e(url)}</p>
</aside>`;
  return { html, height };
}

/** The join block as the strip that closes a tall post. */
export function joinBar(ctx: TemplateContext, mode: JoinMode = "soon"): Block {
  return join(ctx, "bar", mode);
}

/**
 * A wide post: `main` (it starts with the header) on the theme's surface, and an ink side
 * panel with `top` blocks above the join block. Optional blocks go, last first, when the
 * panel is too short for them.
 */
export function wide(
  ctx: TemplateContext,
  theme: Theme,
  main: string,
  top: readonly Block[],
  mode: JoinMode = "soon",
  modifier = "",
): string {
  const stack = join(ctx, "stack", mode);
  const room = ctx.format.height / (ctx.format.width / DESIGN_WIDTH) - 120 - stack.height - 20;
  const blocks = [...top];
  const total = () => blocks.reduce((sum, block) => sum + block.height, 0) + 16 * Math.max(0, blocks.length - 1);
  while (total() > room) {
    const at = blocks.findLastIndex((block) => block.fallback !== undefined || block.optional === true);
    const block = blocks[at];
    if (!block) break;
    if (block.fallback) blocks[at] = block.fallback;
    else blocks.splice(at, 1);
  }
  const side = `<div class="side__top">${blocks.map((block) => block.html).join("")}</div>${stack.html}`;
  return post(ctx, theme, `<div class="wide__main" data-fit>${main}</div><div class="side" data-fit>${side}</div>`, modifier);
}

/**
 * The silhouette as a CSS mask. It is embedded as a data URL: Chromium fetches mask images with
 * CORS, which a file:// URL from `ctx.asset` fails, and the mask would silently not apply.
 */
const SILHOUETTE = `url(data:image/svg+xml;base64,${readFileSync(joinPath(REPO_ROOT, "brand/people/silhouette.svg")).toString("base64")})`;
/** At most this many faces in one overlapping row. */
const MAX_FACES = 4;
const FACES_GAP = 16;
/** Each face after the first covers this much of the one before it. */
const OVERLAP = 0.26;

/**
 * A round portrait `size` units across with a ring in the SIG's colour: the person's photo, or
 * the silhouette from brand/people, in the theme's neutral grey, when they have none.
 */
export function avatar(ctx: TemplateContext, p: Person, size: number): string {
  // The ring grows with the portrait: 3 units on a 60-unit face, 8 on a 440-unit one.
  const style = `--s:${size}px;--ring-w:${Math.max(3, Math.round(size / 56))}px`;
  if (p.photo) return `<span class="avatar" style="${style}"><img src="${e(ctx.asset(p.photo))}" alt=""></span>`;
  return `<span class="avatar avatar--empty" style="${style}" aria-hidden="true"><i style="mask-image:${SILHOUETTE}"></i></span>`;
}

/** Width of `count` overlapping faces of `size`. */
export function facesWidth(count: number, size: number): number {
  return count === 0 ? 0 : size + (count - 1) * size * (1 - OVERLAP);
}

/** The portraits of `people` in one overlapping row. */
export function faces(ctx: TemplateContext, people: readonly Person[], size: number): string {
  return `<span class="faces" style="--s:${size}px">${people.map((p) => avatar(ctx, p, size)).join("")}</span>`;
}

/** Portrait sizes of `person`: a plain line, and the two card sizes of the people slide. */
const PERSON_SIZES: Record<string, number> = { "": 60, "person--mid": 88, "person--card": 128 };

/** A person: their portrait, name, role and handle. */
export function person(ctx: TemplateContext, p: Person, modifier = ""): string {
  const meta = [p.role ?? "", p.handle ? `@${p.handle}` : ""].filter((part) => part !== "");
  const metaHtml =
    meta.length > 0 ? `<span class="person__meta">${meta.map((part) => `<span>${e(part)}</span>`).join("")}</span>` : "";
  return `<div class="${["person", modifier].filter(Boolean).join(" ")}">
  ${avatar(ctx, p, PERSON_SIZES[modifier] ?? 60)}
  <span class="person__text"><span class="person__name">${e(p.name)}</span>${metaHtml}</span>
</div>`;
}

/** Height of `person(p)` as a plain line (not a card) in a column `width` wide. */
export function personHeight(p: Person, width: number): number {
  const textWidth = width - 60 - 16;
  const meta = [p.role ?? "", p.handle ? `@${p.handle}` : ""].filter((part) => part !== "").join("  ");
  return Math.max(60, textHeight(p.name, 28, textWidth, 1.2) + textHeight(meta, 24, textWidth, 1.25, REGULAR));
}

/** A labelled cell. `value` is HTML: escape data before passing it. */
export function fact(label: string, value: string): string {
  return `<div class="fact"><p class="label">${e(label)}</p><div class="fact__value">${value}</div></div>`;
}

/** Height of a fact cell around a value `value` units high: rule, label and gap. */
export function factHeight(value: number): number {
  return 18 + 3 + 29 + 10 + value;
}

/** Slide footer: who is posting, a hint for the next slide, and the slide number. */
function footer(ctx: TemplateContext, index: number, total: number): string {
  const { sig, community, session, format } = ctx;
  const account = community.handles[format.platform];
  const name = sig.lockup === community.logo ? community.fullName : `${sig.short} × ${community.name}`;
  const who = account ? `${name} · @${account}` : name;
  // A LinkedIn document may be read as a PDF, page by page: each page carries the invite.
  const hint =
    format.id === "li-doc" ? displayUrl(discordUrl(session, community)) : index + 1 < total ? "Geser" : "";
  const hintHtml = hint ? `<span class="foot__hint${hint === "Geser" ? " foot__hint--next" : ""}">${e(hint)}</span>` : "";
  const page = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  return `<footer class="foot"><span class="foot__who">${e(who)}</span>${hintHtml}<span class="foot__page">${page}</span></footer>`;
}

/** The closing slide of a deck: how to join, in three steps, with the invite URL. */
export function joinMain(ctx: TemplateContext, theme: Theme, mode: JoinMode = "soon"): string {
  const { session, community } = ctx;
  const url = displayUrl(discordUrl(session, community));
  const when = mode === "now" ? "sekarang" : `pada ${formatDateShort(session)}, ${formatTime(session)}`;
  const urlSize = fitBlock(url, TALL_WIDTH - 80, 120, [48, 40, 34, 28], 1.15) ?? 28;
  const steps = [
    `Buka server Discord ${community.name} lewat link di bawah.`,
    `Masuk ke voice channel ${session.voiceChannel} ${when}.`,
    "Dengerin aja boleh, mau langsung nyalain mic juga boleh.",
  ];
  const inviteHeight = 72 + 29 + 14 + textHeight(url, urlSize, TALL_WIDTH - 80, 1.15);
  const stepsRoom = tallRoom(ctx, theme, FOOT) - 50 - 150 - inviteHeight - 2 * GAP;
  const { size } = fitList(steps, TALL_WIDTH, stepsRoom, [38, 34, 30, 28], { lineHeight: 1.3, gap: 0.85, factor: REGULAR, rowMin: 1.5, indent: 2.1 });
  return `<main class="main" data-fit>
  <div class="lede">
    <p class="kicker">Cara ikut</p>
    <h2 class="h2">Link-nya ada di bawah.</h2>
  </div>
  <ol class="steps" style="font-size:${size}px">
    <li><span class="n">1</span><p>${e(steps[0] ?? "")}</p></li>
    <li><span class="n">2</span><p>Masuk ke voice channel ${channel(session.voiceChannel)} ${e(when)}.</p></li>
    <li><span class="n">3</span><p>${e(steps[2] ?? "")}</p></li>
  </ol>
  <div class="invite">
    <p class="label">Voice channel · Discord</p>
    <p class="invite__url" style="font-size:${urlSize}px">${e(url)}</p>
  </div>
</main>`;
}

/**
 * A carousel or document: every slide gets the header, its `<main>` and a numbered footer.
 * `closing` is the last slide's main, normally `joinMain`.
 */
export function deck(ctx: TemplateContext, theme: Theme, tag: string, mains: readonly string[], closing: string): string[] {
  const all = [...mains, closing];
  return all.map((main, index) => post(ctx, theme, `${header(ctx, theme, tag)}${main}${footer(ctx, index, all.length)}`, "post--slide"));
}

/** "Bersama A dan B, dipandu C", as one line; `size` and `width` give its height. */
export function byline(ctx: TemplateContext, width: number, size = 28): Block {
  const line = speakerLine(ctx.session);
  return withFaces(ctx, everyone(ctx), line.charAt(0).toUpperCase() + line.slice(1), width, size);
}

/** Speakers first, then the host: the order every post names them in. */
export function everyone(ctx: TemplateContext): Person[] {
  return [...ctx.session.speakers, ctx.session.host];
}

/**
 * A line about `people` with their faces, as `.byline` text at `size`. The faces are twice the
 * text size and sit before the line, or above it where they would leave it less than 70% of
 * the column. When a side panel is too short, the fallback is the line alone.
 */
export function withFaces(ctx: TemplateContext, people: readonly Person[], text: string, width: number, size = 28): Block {
  const plain: Block = { html: `<p class="byline">${e(text)}</p>`, height: textHeight(text, size, width, 1.35), optional: true };
  const shown = people.slice(0, MAX_FACES);
  if (shown.length === 0) return plain;
  const face = size * 2;
  const textWidth = width - facesWidth(shown.length, face) - FACES_GAP;
  const above = textWidth < width * 0.7;
  return {
    html: `<div class="who${above ? " who--above" : ""}">${faces(ctx, shown, face)}<p class="byline">${e(text)}</p></div>`,
    height: above ? face + 10 + plain.height : Math.max(face, textHeight(text, size, textWidth, 1.35)),
    optional: true,
    fallback: plain,
  };
}

/** A numbered row: the chip takes 2.1 em of the width and makes the row at least 1.5 em high. */
const LIST = { rowMin: 1.5, indent: 2.1 };

/**
 * A numbered list sized to fit `width` × `height`. When even the smallest size cannot hold
 * every item, the rest is counted in a last line instead of overflowing.
 */
export function numbered(items: readonly string[], width: number, height: number, sizes: readonly number[]): string {
  if (items.length === 0) return "";
  const fit = fitList(items, width, height, sizes, LIST);
  // The "+N" line needs a row too, so it replaces the last item that fitted.
  const shown = fit.count < items.length ? Math.max(1, fit.count - 1) : fit.count;
  const rows = items.slice(0, shown).map((item, index) => `<li><span class="n">${index + 1}</span><p>${e(item)}</p></li>`);
  if (shown < items.length) rows.push(`<li class="list__more"><p>+${items.length - shown} lagi di caption</p></li>`);
  return `<ol class="list" style="font-size:${fit.size}px">${rows.join("")}</ol>`;
}

/** "Sab, 12 Des · 19.30–21.00 WIB · voice channel x": lets a slide stand on its own. */
export function whenWhere(ctx: TemplateContext): Block {
  const { session } = ctx;
  const when = `${formatDateShort(session)} · ${formatTimeRange(session)} · voice channel`;
  return {
    html: `<p class="byline">${e(when)} ${channel(session.voiceChannel)}</p>`,
    height: textHeight(`${when} ${session.voiceChannel}`, 28, TALL_WIDTH, 1.35),
  };
}

/** The "about" slide of a deck: the description, the topics (unless `withTopics` is false), and when and where. */
export function aboutMain(ctx: TemplateContext, theme: Theme, label: string, withTopics = true): string {
  const topics = withTopics ? ctx.session.topics : [];
  // A session without a description still says what its SIG is about.
  const description = ctx.session.description || ctx.sig.description;
  const where = whenWhere(ctx);
  const room = tallRoom(ctx, theme, FOOT) - 50 - where.height - 2 * GAP - 8;
  // The description goes down a size at a time until every topic fits under it at a size that still reads as a list.
  const listSizes = [44, 40, 36, 32, 28];
  const used = (candidate: number) => textHeight(description, candidate, TALL_WIDTH, 1.4, REGULAR);
  const sizes = topics.length === 0 ? [64, 58, 52, 48, 44, 40, 36, 32, 28] : [48, 44, 40, 36, 32, 28];
  const size =
    sizes.find((candidate) => {
      if (topics.length === 0) return used(candidate) <= room;
      const list = fitList(topics, TALL_WIDTH, room - used(candidate) - 24, listSizes, LIST);
      return list.count === topics.length && list.size >= 36;
    }) ?? 28;
  return `<main class="main" data-fit>
  <div class="lede">
    <p class="kicker">${e(label)}</p>
    <p class="lead" style="font-size:${size}px">${e(description)}</p>
  </div>
  ${numbered(topics, TALL_WIDTH, room - used(size) - 24, listSizes)}
  ${where.html}
</main>`;
}
