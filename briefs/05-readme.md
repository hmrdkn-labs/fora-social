# 05 · Root README

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/05-readme`, branch `05-readme` from `main`.
- **Model:** `anthropic/claude-haiku-5-5`, thinking `xhigh`.
- **Runs in parallel with:** 04 (templates). Do not touch `templates/**` or `examples/**`.

Read `~/workspace/AGENTS.md`, `docs/BRIEF.md`, `briefs/00-orchestrator.md`, the Reports in
briefs 01–03, `brand/README.md`, `package.json`, `src/cli.ts`, `src/schema.ts` first.

## Files owned

`README.md` only.

## Content

Short, plain English (the repo is public; sessions and captions are Indonesian), in this order:

1. One paragraph: what FORA is (link the Discord invite), what this kit makes (post types ×
   platforms, captions), and a link to the gallery `examples/README.md`.
2. **Quick start:** requirements (Node 26, pnpm), `pnpm install`,
   `pnpm exec playwright install chromium`, `pnpm render examples/sessions/<file>.yaml`, where
   output goes (`out/<id>/…`, table of formats with sizes and file names, captions).
3. **Add a session:** copy a sample to `sessions/<id>.yaml`, a commented YAML example with every
   field (required vs optional, WIB date/time format, `recap` filled after the talk), render,
   then post: which file goes where on each platform (IG feed/carousel/story, X image + caption
   or thread, LinkedIn link image or the `li-doc` PDF as a document post).
4. **Text must fit:** the renderer fails when text overflows; what to do (shorten the field).
5. **Add a new SIG:** colour, wordmark SVG (how 01 built them: `brand/tools/`), `sigs/<id>.yaml`
   fields, lockup; point to `brand/README.md`.
6. **Repository layout:** a short tree with one line each.
7. **Fonts and licences:** Montserrat and Libertinus Serif under OFL 1.1 (paths of the licence
   files), the ∫ outline from Latin Modern Math under the GUST Font License, code under MIT
   (`LICENSE`).
8. **CI:** what the workflow checks.

Verify every command you document by running it in your worktree (`pnpm install`, `pnpm check`,
`pnpm render examples/sessions/sigcn-kubernetes-pemula.yaml`). Don't commit `out/`.

## Checks

Commit on `05-readme`, push the branch. Do not merge to `main`.

## Report

Fill in below: model, commits, commands you ran. Reply to the orchestrator in at most 10 lines.
