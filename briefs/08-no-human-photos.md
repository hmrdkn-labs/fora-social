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

### Result (2026-11-25)

- **Model:** anthropic/claude-haiku-5-5, thinking xhigh.
- **Commits** on `08-no-human-photos` (pushed, not merged):
  - 1900c3c chore(examples): remove the sample portraits (`examples/people/README.md`, the photo lines in the three sample sessions)
  - de40a38 chore(examples): remove the five sample JPEGs (binary, so the delete was not recorded with 1900c3c)
  - 4f65389 feat(templates): silhouette in grey, photos in greyscale
  - b56bb01 docs: photos in greyscale, samples ship no photos (README, brand/README, note in brief 07)
  - 17ccfaf docs(examples): re-render with grey silhouettes and no portraits
  - this commit: docs(brief): record 08-no-human-photos result
- **Greys:** paper and mist: `grey-100` disc, `grey-500` figure. Ink and the wide side panel: `grey-700` disc, `grey-300` figure. Accent (FORA amber and the SIG colours): already `grey-100` and `grey-500`, unchanged. The ring keeps the SIG colour.
- **Greyscale:** one rule, `.avatar img { filter: grayscale(1) }` in `templates/base.css`.
- **Checks:** `pnpm check` passes (tsc clean, 167/167). `find` for `*.jpg` and `*.jpeg` prints nothing; `grep -rn 'photo:' examples/sessions` prints nothing. `pnpm examples` exits 0 with no failures: 104 PNG and 24 PDF changed.
- **Greyscale proof (not committed):** a 640×640 red-to-blue gradient in `.scratch/`, set as the host photo in a temporary copy of the GitOps session, rendered with `pnpm render`. `ig-feed/speakers.png` shows the host as a grey gradient and the speaker without a photo as the silhouette. Scratch files deleted.
- **Looked at:** `speakers` ig-feed, ig-story, x and li-link, plus one carousel person slide, for all four sessions (FORA has no speakers, so its slide is the cover, `speakers-01`). Also GitOps `announce` ig-feed, FORA `reminder` (amber) and GitOps `recap` (mist). Silhouettes are grey and readable on each theme; nothing overflows.
- **Not changed:** `test/load.test.ts` still uses `examples/people/nobody.jpg` as a missing path. It is a literal string outside my files and the test passes; it can point at any missing path later.
