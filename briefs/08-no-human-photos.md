# 08 · No human photos in the repo; grey portraits

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/08-no-human-photos`, branch `08-no-human-photos` from `main`.
- **Model:** `anthropic/claude-haiku-5-5`, thinking `xhigh`.

Read `~/workspace/AGENTS.md`, `briefs/00-orchestrator.md` and `briefs/07-speaker-photos.md`
(Report) first.

## Why

The person does not want realistic human photos in the repo, even AI-generated ones. The
samples must use the neutral silhouette, in grey. Any real photo someone adds later is shown in
greyscale, so the posts stay consistent.

## Files owned

`examples/people/**`, `examples/sessions/*.yaml` (only `photo` lines), `templates/parts.ts` and
`templates/base.css` (portrait and silhouette styling only), `brand/README.md`, `README.md`,
`examples/**` (re-render), `briefs/07-speaker-photos.md` (one note line under its Report).

## Tasks

1. Delete `examples/people/` entirely (five JPEGs and its README).
2. Remove every `photo:` line from `examples/sessions/*.yaml`. Every sample person now shows the
   silhouette.
3. **Silhouette in grey:** the silhouette is no longer tinted with the SIG accent. Use neutral
   greys from `brand/tokens.css` that read well on each theme (light and dark backgrounds;
   check the amber FORA theme too). The ring around portraits can keep the SIG accent.
4. **Photos in greyscale:** when a session does give a `photo`, render it with
   `filter: grayscale(1)` on the `<img>`. One rule in `base.css`, not per template.
5. **Docs:** `README.md` and `brand/README.md`: photos are shown in greyscale; samples ship no
   photos; only add a photo with the person's consent. Remove mentions of the generated sample
   portraits. Under the Report of `briefs/07-speaker-photos.md`, add one line: "2026-11-25:
   generated portraits removed by brief 08 at the person's request."
6. The loader test for `photo` already uses `brand/logos/fora-logo.png`; keep it.
7. `pnpm check`, `pnpm examples`; commit images and `examples/README.md`.

## Acceptance

- `find . -path ./node_modules -prune -o \( -iname '*.jpg' -o -iname '*.jpeg' \) -print` prints
  nothing; `grep -rn 'photo:' examples/sessions` prints nothing.
- Look at the `speakers` images (ig-feed, ig-story, x, li-link, one carousel person slide) for
  all four sessions, and the announce ig-feed of the GitOps session: grey silhouettes, readable
  on every theme, nothing overflows.
- Prove the greyscale rule: make a small coloured PNG under `.scratch/` (gitignored), point a
  temporary copy of a session under `.scratch/` at it, render with `pnpm render`, and look
  that the portrait is grey. Do not commit it.
## Checks

Commit in small logical commits on `08-no-human-photos`, push the branch. Do not merge to `main`.

## Report

Fill in below: model, commits, checks, images you looked at. Reply to the orchestrator in at
most 10 lines.
