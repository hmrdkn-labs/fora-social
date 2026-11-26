# 11 · First real session: "Apa di Balik Kacabenggala Editions"

Worktree `~/workspace/.worktrees/fora-social/11-kacabenggala`, branch `11-kacabenggala`
(based on `10-review-rounds-5-6`, which has the `live` type, `Person.about`, `Session.problem`
and the latest copy rules). Model: Sonnet 5.5, thinking medium.

## Goal

The first real FORA discussion gets its posts, rendered from a real session file, ready for the
person to post by hand. Nothing is posted anywhere by us.

## Facts (only these; do not invent anything else)

- Title: **Apa di Balik Kacabenggala Editions**. General FORA session: `sig: fora`.
- When: **Minggu, 29 November 2026, 19.00 WIB**. Default duration (90).
- Host: **Andre Pramaditya**, member of FORA; listed first among the contributors of
  Kacabenggala Editions. No speakers. No photo (silhouette). No handle known: leave it out.
- Voice channel: `fora-voice` (the name used so far; the real name is an open question).
- About Kacabenggala Editions, from https://kabe.drepram.com/about (read it):
  - A non-commercial archive that restores and retypesets out-of-print works (books, essays,
    articles) in Indonesian and English, shared freely for reading, research and remembrance.
  - Kept by a small editorial circle. Works have PDF and EPUB downloads; examples on the site
    include Mohammad Hatta's *Demokrasi Kita* (1960) and Zein Hassan's *Oslan Husein* (1963).
  - Sister project **Ilalang** (https://ilalang.drepram.com) does single poems, short stories,
    plays and author profiles; Kacabenggala works at the scale of the whole book.
  - The name: in the Javanese Ramayana, Trigangga uses the mirror Kacabenggala to reflect
    Bukbis's deadly gaze back; the archive is "a mirror held steadily before the past".
- Logo: `sessions/assets/kacabenggala.png` (256×362 transparent black line-art mirror frame,
  from the site). `sessions/assets/kacabenggala-wordmark.png` is the person's screenshot (frame
  plus "Kacabenggala Editions" wordmark on cream); reference only, don't render it.
- This is not a tech session. FORA is a tech community; say plainly why it fits (building and
  running a digital archive, retypesetting old books for today's screens) without overclaiming
  how it's built: we don't know the stack, so don't name one.

## Change

1. **Contract (done by the orchestrator):** new optional `Session.image: {src, alt}` in
   `src/types.ts`. Add it to `src/schema.ts` (validate the file exists), the README session
   field list, and render it on the posters as a supporting mark beside or above the theme:
   cover, announce, reminder, live and the first slide of carousel/doc. Dark line art must read
   on the dark background (invert it, e.g. CSS `filter: invert(1)`, or tint to the ink colour).
   Keep it modest: the theme stays the hero. Sessions without `image` render unchanged.
2. **Session file:** `sessions/kacabenggala-editions.yaml` (create `sessions/`; it's meant to be
   committed). Use `image`, `problem`, `description`, `topics`, `subtitle` from the facts above,
   following `docs/voice.md`. **No `note`**: it is the host's own words and we don't have them.
   `host.about`: one plain third-person line from the facts. Hashtags: leave to defaults, at
   most one extra.
3. **Render:** `pnpm render sessions/kacabenggala-editions.yaml` and `pnpm sheets` for it (if
   `pnpm sheets` only covers examples, render a sheet for this session too, without changing the
   examples' behaviour). Look at every format yourself.
4. Do not change `examples/` or the sample sessions, beyond the re-render the `image` code
   needs (sample sessions have no image, so their output must be byte-identical PNG-wise; check
   with `pnpm examples` + `git status`, PDF-only churn is fine and gets reverted).

## Checks

- `pnpm check` passes; the style linter passes on the new captions.
- A test: a session with `image` renders the mark; schema rejects a missing image file.
- Captions file and posters for announce, reminder, live, cover, sig-intro, speakers exist for
  the session.

## Report

Fill below: commits, check result, paths of the rendered posts and captions, anything that
needed a guess. At most 20 lines in your reply.

### Result
