# 02 · Render pipeline, CLI, gallery, CI

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/02-pipeline`, branch `02-pipeline` from `main`.
- **Model:** `anthropic/claude-haiku-5-5`, thinking `xhigh`.
- **Runs in parallel with:** 01 and 03 (disjoint files).

Read `~/workspace/AGENTS.md`, `docs/BRIEF.md`, `briefs/00-orchestrator.md` (Decisions) and
`src/types.ts` first. `src/types.ts` is the contract: use it, do not change it. If it must
change, stop and say so in your reply.

## Files owned

`package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `.gitignore`, `.github/workflows/**`,
`src/**` except `src/types.ts`, `src/format.ts` and `src/captions/**` (but see the stub below),
`templates/**` (placeholders only), `test/**`.

## Tasks

1. **Project.** `package.json` (`"type": "module"`, `"engines": {"node": ">=26"}`,
   `packageManager` pnpm), scripts `render`, `examples`, `check`. `tsconfig.json` for
   `tsc --noEmit` with `allowImportingTsExtensions`, `erasableSyntaxOnly`, `strict`.
   `.gitignore`: `node_modules/`, `out/`, `.scratch/`, `.DS_Store`.
2. **Loading** (`src/load.ts`, `src/schema.ts`): zod schemas mirroring `Session`, `Sig`,
   `Community` exactly (type-check that `z.infer` is assignable both ways to the contract
   types). Parse YAML with the `yaml` package. Defaults: `durationMinutes` 90, `speakers` [],
   `topics` []. Validate `date`/`time` formats, `description` ≤ 280 chars, `topics` ≤ 6,
   `color` `#RRGGBB`, and that `sig` names an existing `sigs/<id>.yaml`. Error messages name
   the file and field in plain words ("examples/sessions/x.yaml: time must be HH:MM, got
   7pm").
3. **Rendering** (`src/render.ts`): one Chromium per run, one page per format size, device
   scale factor 1. Build a full HTML document per image: `<link>` to `brand/tokens.css` and
   `templates/base.css` as `file://` URLs, the template's body string, `data-format` and
   `data-post-type` on `<body>`. Wait for `document.fonts.ready`. Then run the overflow
   checks exactly as listed in `00-orchestrator.md` (all four), and fail with a clear
   message. Write PNGs; for `li-doc` also write one PDF with every page at 1080×1350 px
   (`page.pdf` with `width`/`height` in px, `printBackground`).
4. **CLI** (`src/cli.ts`): `pnpm render <file.yaml>...` and `pnpm examples` with the output
   layout from `00-orchestrator.md`. Captions: import `buildCaptions` (type `CaptionBuilder`)
   from `src/captions/index.ts` and write `captions/<post-type>.md` (headings Instagram, X —
   numbered posts for a thread — and LinkedIn). Create `src/captions/index.ts` as a **stub**
   that returns placeholder text; brief 03 replaces that file. Skip `recap` for sessions
   without `recap`. Print one line per image; exit non-zero on the first failure, after
   rendering everything else (report all failures).
5. **Gallery** (`src/gallery.ts`): `pnpm examples` regenerates `examples/README.md`: a short
   intro, then per session a heading with title, SIG, date; per post type a subheading, the
   images grouped by platform (relative paths, sized with `<img width>` so a page stays
   readable on GitHub: about 270 px for 1080-wide images, 400 px for landscape), links to the
   PDF, and the captions inline in `<details>` blocks. Deterministic output (sorted).
6. **Placeholder templates** in `templates/<post-type>.ts` for all five types and
   `templates/base.css`: plain, using Montserrat if `brand/fonts` has it by the time you test,
   otherwise a system font — they only prove the pipeline. Brief 04 replaces them. Multi
   formats return 3 slides.
7. **Tests** (`test/*.test.ts`, `node --test`; `pnpm check` must also run `src/**/*.test.ts`,
   where brief 03 puts caption tests): schema rejects bad date/time/sig and accepts a valid
   fixture (`test/fixtures/`); the overflow check fails for a deliberately overflowing
   template (render one tiny page) and passes for a fitting one.
8. **CI** `.github/workflows/render.yml`: on push and pull_request; ubuntu-latest; Node 26;
   pnpm via `pnpm/action-setup`; cache the pnpm store; `pnpm install --frozen-lockfile`;
   `pnpm exec playwright install --with-deps chromium`; `pnpm check`; `pnpm examples`; upload
   `examples/` as an artifact. Pin actions to major versions. Use test fixture sessions from
   `test/fixtures/` for local runs until `examples/sessions/` exists; the workflow runs
   `pnpm examples` regardless (it must pass with zero sample sessions too).

## Acceptance

- `pnpm check` passes.
- `pnpm render test/fixtures/<x>.yaml` writes every format × post type with the right pixel
  sizes (`sips -g pixelWidth -g pixelHeight` or similar), and a PDF for `li-doc`.
- A placeholder made to overflow fails with a message naming the element.
- `examples/README.md` generated from a fixture copied into `examples/sessions/` locally
  renders sensibly (look at it); do not commit that copied fixture or its images.

## Checks

`pnpm check`, then the acceptance commands. Commit in small logical commits on `02-pipeline`,
push the branch. Do not merge to `main`. Do not commit rendered images.

## Report

**Model:** anthropic/claude-haiku-5-5, thinking xhigh.

**Commits** (pushed to `02-pipeline`; not merged):
- 4fea3b6 chore(pipeline): scaffold Node 26 project with pnpm
- 4563d72 feat(load): validate session, sig and community YAML with zod
- 6db751e Merge main into 02-pipeline (briefs 01 and 03)
- 3535d8b fix(captions): type recapBody as returning string[] (brief 03's file, see below)
- d41c3ee feat(render): one-browser renderer with the four overflow checks
- d722133 feat(cli): render and examples commands with captions and gallery
- 818abff ci(render): render examples on push and pull request

**Checks**
- `pnpm check`: tsc clean; 57/57 tests pass (loader, overflow, renderer, plus 03's captions tests).
- `pnpm render test/fixtures/valid-session.yaml`: 55 outputs, 0 failures, 7 s. Every PNG checked with `sips` for pixel size. li-doc PDF: 3 pages at 810×1013 pt (1080×1350 px).
- Overflow proof: announce placeholder made to overflow gave 6 FAILED lines naming session, post type, format, slide and element; exit 1; stale images removed. Probe reverted.
- `pnpm examples` with the four samples from main: 220 writes (200 PNG, 20 PDF), 0 failed, 24 s. Zero-sample run exits 0 and writes "No sample sessions yet."
- Looked at: ig-feed/announce, x/announce, ig-story/recap (observability), li-doc/announce-02 (fora). Placeholders only; 04 owns the look.
- Not run yet: the GitHub Actions workflow (Linux Chromium install and `pnpm examples` in CI).

**For the template author (04)**
- A `Template` returns `string[]`: exactly one body for single formats, at least one for `multi` formats (placeholders return 3). A wrong count fails that image.
- Escape every data field with `escapeHtml` from `templates/html.ts`.
- Overflow rules apply: put `data-fit` on text boxes; anything outside the canvas fails unless `data-bleed`.
- `templates/base.css` declares Montserrat (400 to 800) and Libertinus Serif (400, 700, italic) from `brand/fonts`; the font check fails if they do not load. Keep those faces or equivalent.
- `brand/tokens.css` is linked into every page; base.css uses `--color-ink`, `--color-paper`, `--color-sigcn-text`.
- `templates/placeholder.ts` uses `src/format.ts` (`formatDate`, `formatTime`, `discordUrl`, `displayUrl`).
- `examples/README.md` is not committed by 02, because its images are not. Run `pnpm examples` and commit it with the images. Only the block between `<!-- gallery:start -->` and `<!-- gallery:end -->` is generated; the intro above it is kept.

**Open questions for the orchestrator**
- `src/captions/instagram.ts` on main did not type-check: `recapBody` was annotated `string` but returns `string[]`. This branch changes that one annotation. Brief 03 should take the same line; identical edits merge cleanly. Node strips types without checking, so `node --test` never caught it.
- 03's `community.yaml` has no `handles`, but `Community.handles` is required in `src/types.ts`. The loader defaults it to `{}`. `src/types.ts` is unchanged; decide whether `handles` should be optional.
- Session and sig YAML may carry an `id`, which must equal the file name. Unknown keys are errors.
- Per your message, `src/captions/index.ts` stub was not created; the real `buildCaptions` is used.
- `pnpm render` stops before rendering if `brand/tokens.css` is missing.
Reply to the orchestrator in at most 20 lines.
