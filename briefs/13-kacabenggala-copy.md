# 13 · Kacabenggala copy: Andre ngobrol, LaTeX and OCR, open space

Worktree `~/workspace/.worktrees/fora-social/13-kacabenggala-copy`, branch
`13-kacabenggala-copy`. Model: Sonnet 5.5, thinking medium.

## What the person asked (verbatim, Indonesian)

"bilang saja di poster andre itu ngobrol, dan ada bahasan latex dan OCR, dan untuk foto karena
tidak ada seperti itu saja sudah ok, typingnya bilang open space ngobrol di general, improve"

Meaning:
1. On the posters, say Andre is the one talking ("ngobrol bareng Andre"), not that he
   "memandu" (moderates) a discussion.
2. The talk covers **LaTeX** (typesetting) and **OCR** (getting text out of scans of old
   books). Add them; they are the tech side of the session.
3. Photo: keep the grey silhouette. No change.
4. Format line: **"Open space, ngobrol di general"** instead of "Diskusi terbuka, tanpa tamu".
5. "Improve": make the session copy clearer and more human, applying the UX writing skill
   below on top of `docs/voice.md`.

## UX writing skill

Read https://github.com/content-designer/ux-writing-skill: `SKILL.md`,
`references/content-usability-checklist.md` and `examples/real-world-improvements.md`
(raw files: `https://raw.githubusercontent.com/content-designer/ux-writing-skill/main/<path>`).
Apply its four standards (purposeful, concise, conversational, clear) to the Kacabenggala
copy. `docs/voice.md` still wins where they disagree (Indonesian, "kita/aja/nggak").
Don't install the skill into the repo.

## Change

1. **Contract (done by the orchestrator):** optional `Session.format?: string` in
   `src/types.ts`. Add it to `src/schema.ts` and the README field list; `templates/announce.ts`
   uses it instead of the hard-coded "Diskusi terbuka, tanpa tamu" when present (default
   unchanged). Use it anywhere else a format line is shown.
2. **Host wording, all sessions without speakers:** "Dipandu <host>" / "dipandu <host>"
   becomes "Ngobrol bareng <host>" / "ngobrol bareng <host>" (`src/format.ts` `speakerLine`,
   `templates/announce.ts` kicker, `src/captions/x.ts`, any other place). Sessions with
   speakers keep "bersama A dan B, dipandu C". The sample `fora-ngobrol-karier` will change
   too; that's intended. Update tests that pin the old wording.
3. **Session file** `sessions/kacabenggala-editions.yaml`:
   - `format: Open space, ngobrol di general`.
   - Topics: add LaTeX and OCR in plain words a non-tech reader gets, e.g. OCR = mengambil
     teks dari hasil scan buku lama; LaTeX = menata ulang halaman supaya rapi dibaca. Keep at
     most 5 topics; drop or merge the weakest (the Ramayana name story can go to the
     description or the cover).
   - Description and `problem`: say Andre ngobrol about how the archive is made, naming OCR
     and LaTeX; don't invent anything else about how it's built.
   - `host.about`: keep it factual (FORA member, contributor to Kacabenggala Editions).
4. **Render and publish:** `pnpm render sessions/kacabenggala-editions.yaml`,
   `pnpm sheets out`; look at all six sheets yourself. Then refresh the committed copy:
   delete `posts/kacabenggala-editions/` except `README.md`, copy
   `out/kacabenggala-editions/*` into it, and regenerate `README.md` in the same structure
   (Instagram, X, LinkedIn sections; six posts each; images then a "Caption" details block).
   Write the README generator as `src/posts.ts` with a `pnpm posts <session-id>` script so it
   can be rerun; it must reproduce the current README's layout.
5. `pnpm examples`; commit example changes that come from the wording change (PNGs and
   captions), revert PDF-only churn.

## Checks

- `pnpm check` passes, style linter included.
- A test: a session with `format` shows it on the announce poster; one without shows the
  default.

## Report

Fill below: commits, check result, before/after of the Kacabenggala description, topics and
X announce caption. At most 15 lines in your reply.

### Result
