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
