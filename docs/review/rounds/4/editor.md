# Round 4 · editor notes

`pnpm check`, `pnpm examples`, `pnpm sheets` pass. I looked at the cover, live, sig-intro and
speakers sheets after the change; no overflow, the wide covers now carry the problem line.

## Patterns

1. **Subtitle repeated on X cover, reminder, live (slop P1).** Each post type now has its own
   line. `src/captions/x.ts`: cover uses `Session.problem`; reminder gets one practical detail
   (`Buka Discord sepuluh menit lebih awal buat cek suara.`); live says only that it is on.
   Before (GitOps live): `GitOps dengan Argo CD lagi jalan sekarang.` + the subtitle; after: the
   title line and the join line. Instagram and LinkedIn live lose the copied description
   sentence the same way.
2. **`about` lines all started with "Menceritakan/Menunjukkan/Menyiapkan" (slop P2).**
   Rewritten as sentences with a subject, with different verbs. Dani: `Menceritakan kenapa
   timnya pindah dari kubectl apply manual ke GitOps.` → `Tim Dani dulu deploy dengan kubectl
   apply manual, dan dia cerita kenapa akhirnya pindah ke GitOps.` Bima's is shorter too
   (reader R2: three long bios on the IG feed card); I did not change the card layout.
3. **sig-intro does not explain the field (newcomer N1).** `sigs/sig-cn.yaml`: tagline
   `Ngobrol soal Kubernetes dan cloud native di voice channel.` → `Ngobrol soal menjalankan
   aplikasi di cloud, lewat suara.`; description now gives two everyday cases (an app that
   suddenly gets slow, a deploy that breaks everything).
4. **Newcomer bridges (N3–N6).** Dika's about explains SRE and on-call in one sentence; career
   recap point 3 explains postmortem and Terraform; Pod point starts from "wadah tempat
   aplikasimu jalan" and replicas become "salinan Pod". GitOps recap question can be answered
   without a workplace: `Bagian mana dari alur tadi yang masih bikin bingung, atau kalau sudah
   pernah rollback, caranya lewat apa?` (one question with an either-way answer, not two).
5. **Observability cover leads with the term (reader R1) and X covers lose the theme
   explanation (newcomer N2).** `Session.problem` is on every cover: captions open with it on
   all three platforms, and `templates/cover.ts` sets it as the serif line under the theme
   (it replaces the session title there; the title stays in the caption, on the announcement
   and everywhere else). The wide cover (X, li-link) accepts a smaller theme so the line fits.
   The deck's second slide no longer repeats the description: it shows the subtitle over the
   topic list (`aboutMain` takes an optional `lead`). Observability's subtitle was reworded so
   it does not echo the problem line.
6. **GitOps description reused (slop P3).** Cover deck slide 2 and live captions no longer use
   it (above). X announce used the description's first sentence when the note was too long;
   it now falls back to the note's first sentence, and to the description only without a note.
7. **LinkedIn label `Undangan: url` (slop P4, minor).** → `Undangannya di <url>.` in `join`.

## Contract work

- `src/schema.ts` and the README session file gain `problem`; `style.test.ts` lints it.
- Every sample session has a `problem`. New test in `captions.test.ts`: covers carry it,
  reminder and live repeat neither it nor the subtitle.

## For the orchestrator

- The cover poster no longer shows the session title when `problem` is set (only the theme
  and the problem). Say so if you want the title kept, at the cost of the line's room.
- The cover deck's second slide is sparse for sessions without subtitle or with 3 topics; it
  has room but nothing overflows.
