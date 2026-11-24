# 04 · Post templates

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/04-templates`, branch `04-templates` from `main` (after 01, 02 and 03 are merged).
- **Model:** `anthropic/claude-fable-5-2` (heavy visual design, allowed by the person's brief).

Read `~/workspace/AGENTS.md`, `docs/BRIEF.md`, `briefs/00-orchestrator.md`, `src/types.ts`,
`brand/README.md`, and the Reports of briefs 01–03 first. `src/types.ts` is the contract: do
not change it.

## Files owned

`templates/**` (replace the placeholders). If the renderer (`src/render.ts`) needs a change,
stop and say so in your reply instead of editing it.

## Goal

Real, on-brand designs for all five post types (`announce`, `reminder`, `recap`, `cover`,
`sig-intro`) in all six formats (`ig-feed`, `ig-carousel`, `ig-story`, `x`, `li-link`,
`li-doc`), driven only by the session, SIG and community data. Someone in FORA should be able
to post them as they are.

## Design requirements

- **One visual system.** Use the fonts, colours and logos from `brand/` (`brand/tokens.css`
  variables, SVG logos via `ctx.asset`). The FORA mark is a calm black-and-white serif seal;
  SIGs bring their accent colour (SIG CN blue). Clean, editorial, tech-community; generous
  whitespace; no stock photos, no AI images. Simple geometric or typographic motifs are fine
  (e.g. the ∫ curve, a sound-wave or voice-channel motif in CSS/SVG).
- **Each post type reads as itself at a glance:**
  - announce: title, theme/series, date and time WIB, host/speakers, "Voice channel · Discord",
    invite URL.
  - reminder: a strong "HARI INI" / "LIVE SEKARANG" state, time, how to join now.
  - recap: "Recap" + title, then key takeaways (carousel/doc: one point per slide plus a cover
    and a closing slide); attendee count if present; thanks to speakers.
  - cover: series/theme cover, minimal, big type.
  - sig-intro: what the SIG is, who it's for, how to join.
- **Open voice-channel talk, made obvious.** Every post (except perhaps cover) says how to
  join: Discord voice channel, anyone can speak and ask ("siapa pun boleh ikut ngobrol"), the
  invite URL in short form. Use a small consistent "join" block or badge.
- **Formats:** respect platform safe areas: IG story keeps key content out of the top 250 px
  and bottom 340 px; X and LinkedIn link images get cropped in feeds, so keep content inside a
  centred safe box with ≥ 64 px margins. Carousel/doc: 3–7 slides, slide numbers, a final
  "join" slide; `li-doc` may share layouts with `ig-carousel` but must read well as a PDF.
- **Robust to the data.** The four sample sessions in `examples/sessions/` were written to
  stress layouts (long title, no speakers, two speakers, 6 topics, 5 recap points, handles).
  Text must never overflow or clip: the renderer's checks fail the build if it does. Use
  `data-fit` on text boxes so the check covers them; shrink type in steps by length (compute
  in TypeScript from string length) rather than letting it overflow. Escape all data in HTML.
- **Shared pieces** (header with logos, join block, person line, footer) live in one module
  under `templates/`; no copy-pasted markup across post types.

## Acceptance

- `pnpm check` and `pnpm examples` pass.
- You have looked at **every** rendered image in `examples/` and fixed anything awkward:
  overflow, clipping, collisions, widows in titles, poor contrast, empty-looking areas,
  inconsistent spacing. Note what you checked in the Report.
- Contact sheet: put one composite image per session in `.scratch/` (not committed) to
  review at a glance, e.g. with a small Playwright page that tiles the PNGs.
- Commit the rendered `examples/` images and `examples/README.md` at the end (they are the
  gallery the person reviews on GitHub). Keep PNG sizes reasonable (flat designs compress
  well; no full-bleed noise textures).

## Checks

`pnpm check`, `pnpm examples`. Commit in small logical commits on `04-templates`, push the
branch. Do not merge to `main`.

## Report

Fill in below: model, commits, design summary (layout per type, how text sizing works), the
images you looked at and what you fixed, open questions. Reply to the orchestrator in at most
20 lines.

### Result (2026-11-24)

- **Model:** anthropic/claude-fable-5-2.
- **Commits** on `04-templates` (pushed, not merged):
  - 43c4caf feat(templates): shared visual system, type fitting and layout parts
  - 52c7d1d feat(templates): designs for announce, reminder, recap, cover and sig-intro
  - 1f425ea docs(examples): render the gallery for the four sample sessions
  - docs(brief): record 04-templates result (this file)
- **Checks:** `pnpm check` passes (tsc clean, 57/57 tests). `pnpm examples` exits 0: 240 PNG and 20 PDF, no
  failures, 27 s. The PNG total 27.8 MB (119 KB on average, 197 KB at most); `examples/` is 33 MB.
  `src/render.ts` and `src/types.ts` are unchanged.

**Design**

- **One canvas.** Every post is laid out 1080 units wide and scaled to the format's pixels
  (`transform: scale`), so X and LinkedIn link share one landscape layout and type follows `width / 1080`.
  Three layouts: `tall` (feed, carousel, doc), `story` (the tall layout between the top 250 and bottom 340 px,
  with a faint wave in the bottom zone), `wide` (main column plus an ink side panel; content is at least 60
  units, 66 px on LinkedIn and 89 px on X, from every edge).
- **Each type has its own surface:** announce white, reminder the SIG's accent colour, recap light grey,
  cover ink, SIG intro white with the lockup as hero. The accent is only a fill, a graphic, or text on ink,
  because amber and blue both fail as text on white (brand/README.md).
- **Motifs:** a voice wave whose bars are seeded by the session id (same wave on every post of a session),
  the mark's ∫ as a faint figure on covers, and a ring with the person's initial that echoes the FORA seal.
- **Join block** on every post: "Voice channel · Discord", the channel, "siapa pun boleh ikut ngobrol", the
  short invite URL. A bar closes tall posts, a column closes the side panel of wide ones; the cover carries it
  as one line; every deck ends with a three-step join slide.
- **Layout per type**
  - announce: kicker (series · theme), title, serif subtitle, wave, ruled grid of date, time, speakers, host.
    Deck: cover, "what we discuss" (description and topics), people, join.
  - reminder: "HARI INI" over the outlined start time, wave, title; the story says "LIVE SEKARANG". Deck:
    state, topics, join (worded for "now").
  - recap: serif "Recap", title, numbered takeaway titles, thanks. Deck: cover, one takeaway per slide with a
    serif numeral and a progress bar, closing slide with thanks, up to three links and the join block. Wide:
    takeaways in the main column, attendee count in the side panel.
  - cover: series, the theme in the largest type that fits, the title as a serif line, a tall wave.
  - sig-intro: tagline, description, "for whom" and "format", the nearest session on the accent colour.
- **Text sizing** (`templates/fit.ts`, `templates/parts.ts`): widths are estimated in TypeScript from string
  length (per-character classes; against Chromium the estimate ran at most 3% narrow on the strings I
  measured, and lines keep 5% spare). Each layout budgets its height: fixed
  pieces report their height, the title takes the largest step that fits what is left, lists step down and
  then end in "+N lagi di caption", and optional pieces (subtitle, speaker line, wave, links) drop in a fixed
  order. Nothing is measured in the browser; `data-fit` on every `<main>`, side panel and join block is the
  backstop.
- **Shared pieces** are all in `templates/parts.ts`; post types only arrange them.

**What I looked at and fixed**

- Contact sheets from `.scratch/sheet.ts` (not committed): per session, one overview, one sheet of the four
  single images and one of the carousel per post type, and one of every li-doc page (48 sheets). I read the
  large sheets while iterating, and after the last change the four overviews and the four li-doc sheets,
  which together show all 240 PNG; plus several images at full size and one PDF page rasterised.
- Fixed on the way: padding of the tag and URL chip lost to a reset rule; the channel name breaking at its
  hyphens; "Argo / CD:" split across lines (short tokens now stay with their neighbour); a dangling "·" in
  person lines; widows in list items and fact values; empty middles on deck slides (larger type, a third
  block, a progress bar); the ∫ running into the wave; a thin outline on the story's start time; lists cut
  short by over-cautious estimates; a flat wave in the side panel; "Forum Rangkai" shown twice on the FORA cover.
- Stress data, rendered with `pnpm render` and not committed: a 91-character title with four speakers, a
  20-character channel, a custom invite URL, six long topics and eight recap points renders in every format;
  so does a session with a two-letter title, no description, no topics and one recap point.

**Limits**

- The budgets are estimates. Data far beyond the stress case (for example a 120-character title together with
  a 60-character invite URL) still fails the build with the renderer's message instead of clipping.
- The smallest text in wide formats is 18 to 20 units (20 px on LinkedIn at the least): the "Sesi terdekat"
  label, the side panel's join label, and long recap lists. brand/README.md asks for 24 units; tall formats
  keep to it.
- `templates/base.css` keeps a small `.card` rule only because `test/render.test.ts` lays its fixtures out
  with it.

**Open questions**

1. Reminder wording: feed, X, LinkedIn and decks say "HARI INI" plus the start time; only the story says "LIVE
   SEKARANG". Should there be a "live now" variant of the other formats too?
2. The `-white` lockup is found by file name (`x.svg` → `x-white.svg`), since `Sig` has one `lockup` field. Is
   that convention acceptable, or should `Sig` carry both paths?
3. FORA's amber accent is still a proposal (brief 01); the FORA reminder is a full amber surface.
4. `Community.handles` is empty, so slide footers show "SIG CN × FORA" or "Forum Rangkai"; a handle appears
   there once it is set.
5. `examples/` adds 33 MB to the repo and changes on every re-render. Keep all 240 images, or commit a subset?
