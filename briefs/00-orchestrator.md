# Orchestrator: fora-social

The person's brief is `docs/BRIEF.md`. This file records the plan and the decisions every worker
brief relies on. Workers: read `~/workspace/AGENTS.md`, `docs/BRIEF.md` and this file first.

## Decisions

- **Licence:** code MIT. Fonts keep their own open licences (OFL or similar), with the licence
  file next to the font files in `brand/fonts/<family>/`. No font with a non-open licence is
  committed or downloaded by the build.
- **Toolchain:** Node 26 with native TypeScript type stripping (`node src/cli.ts`, no build
  step, no `tsx`). So: `.ts` extensions in imports, no `enum`, no namespaces, no parameter
  properties. pnpm. Dependencies: `playwright` (Chromium), `yaml`, `zod`; `typescript` and
  `@types/node` as dev dependencies for `tsc --noEmit`. Nothing else without a reason in the
  brief's Report.
- **Renderer:** HTML/CSS templates rendered with headless Chromium through Playwright, at
  device scale factor 1, so each PNG is exactly the format size. Fonts are loaded from
  `brand/fonts/` with `@font-face`; nothing from the network.
- **Templates** are TypeScript functions (`Template` in `src/types.ts`) returning HTML strings,
  one file per post type in `templates/`, with shared CSS in `templates/base.css`.
- **No overflow, checked by machine.** After `document.fonts.ready`, the renderer fails the
  image when:
  1. any element's box lies partly outside the canvas, unless the element or an ancestor has
     `data-bleed`;
  2. any element whose computed `overflow` is not `visible` has `scrollWidth > clientWidth + 1`
     or `scrollHeight > clientHeight + 1`;
  3. any element with `data-fit` has its content larger than its own box (same test as 2,
     whatever its `overflow`);
  4. a font family named in `templates/base.css` did not load (`document.fonts.check`).
  The error names the session, post type, format, slide and the element's text.
- **Data files**
  - Contract types: `src/types.ts`. Only the orchestrator changes it.
  - `community.yaml`: `Community`.
  - `sigs/<id>.yaml`: `Sig`; `sigs/fora.yaml` is the general community.
  - Sessions: real ones in `sessions/<id>.yaml`; the samples in `examples/sessions/<id>.yaml`.
    YAML keys are the camelCase field names of `Session`. `date` is `YYYY-MM-DD`, `time` is
    `"HH:MM"`, both WIB.
- **Commands**
  - `pnpm render <file.yaml>...` writes `out/<id>/<format>/<post-type>.png`, or
    `<post-type>-01.png`, `-02`, … for multi-image formats; `li-doc` also writes
    `<post-type>.pdf` (the LinkedIn document). Captions go to `out/<id>/captions/<post-type>.md`
    with one section per platform. `out/` is gitignored.
  - `pnpm examples` renders every `examples/sessions/*.yaml` into `examples/<id>/` with the
    same layout, and regenerates the gallery `examples/README.md`.
  - `pnpm check`: `tsc --noEmit` and `node --test`.
- **Recap posts** render only for sessions with `recap`. Every sample session has one.
- **CI** (GitHub Actions, ubuntu-latest): install, install Chromium, `pnpm check`,
  `pnpm examples`, upload `examples/` as an artifact. It does not diff the images (font
  rasterisation differs between macOS and Linux); the overflow check is what keeps templates
  honest.
- **Copy:** Indonesian, with English tech terms where natural. Every post makes clear that the
  session is an open talk in a Discord voice channel: join by voice, anyone can speak, invite
  link. Not a webinar, not a Stage event.

## Briefs

| Brief | Model | Owns | Depends on |
| --- | --- | --- | --- |
| 01 brand | Sonnet 5.5 medium | `brand/**` (except the original PNGs), `sigs/**` | — |
| 02 pipeline | Haiku 5.5 xhigh | `package.json`, lockfile, `tsconfig.json`, `src/**` except `src/types.ts`, `src/format.ts`, `src/captions/**`; `templates/**` placeholder; `test/**`; `.github/workflows/**`; `.gitignore` | — |
| 03 copy | Sonnet 5.5 medium | `src/format.ts`, `src/captions/**`, `community.yaml`, `examples/sessions/**` | — |
| 04 templates | Fable 5.2 | `templates/**` | 01, 02, 03 merged |
| 05 docs | Haiku 5.5 xhigh | `README.md`, `examples/README.md` intro text | 04 merged |

## Status

- 2026-11-24: plan written; 01, 02, 03 started.
