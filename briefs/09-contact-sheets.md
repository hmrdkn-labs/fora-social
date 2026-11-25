# 09 · Contact sheets for reviewers

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/09-review-loop`, branch `09-review-loop` from `main`.
- **Model:** `anthropic/claude-haiku-5-5`, thinking `xhigh`.

Read `~/workspace/AGENTS.md`, `briefs/00-orchestrator.md` and `docs/review/README.md` first.

## Goal

Reviewers in the content review loop judge posters from one image per post: every format of
one session's post type, labelled, side by side.

## Files owned

`src/sheets.ts` (new), `package.json` (one script), `test/sheets.test.ts` (new).

## Tasks

1. `pnpm sheets` reads the already-rendered `examples/<session>/<format>/<post-type>*.png` and
   writes `out/sheets/<session>--<post-type>.png`, one per session × post type. Use the
   existing Playwright/Chromium (an HTML page of `<img>` tiles, screenshot of the full page).
2. Layout: a title line (session, post type), then rows grouped by platform with a small
   label under each tile (`ig-feed`, `ig-carousel 02`, …). Tiles scaled so a 1080-wide image
   is about 360 px wide, landscape about 480 px; the sheet at most 2,000 px wide. Neutral grey
   background so white posters show their edges.
3. Skip post types a session doesn't render (e.g. no `recap`). Deterministic order.
4. Test: run on a tiny fixture (two small PNGs in a temp dir) and check the sheet exists and
   has the expected width bound. Keep the test fast.
5. `out/` is gitignored; don't commit sheets.

## Checks

`pnpm check`, `pnpm sheets`; open three sheets (one landscape-heavy, one carousel-heavy, the
FORA session) and confirm labels and tiles are readable. Commit and push `09-review-loop`.
Do not merge to `main`.

## Report

Fill in below: model, commits, checks, sheet count. Reply in at most 5 lines.
