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

Fill in below: model, commits, check results, anything the template author (04) must know.
Reply to the orchestrator in at most 20 lines.
