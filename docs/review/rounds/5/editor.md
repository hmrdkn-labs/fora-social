# Round 5 · editor notes

`pnpm check`, `pnpm examples`, `pnpm sheets` pass. I looked at the live, sig-intro, cover and
speakers sheets (observability, Kubernetes and career); nothing overflows, the live posters gained
a line but kept their hierarchy.

## Issues from the summary

1. **Observability cover replays the announce hook; speakers lack a reason (slop P2, P3).**
   `examples/sessions/sigcn-observability.yaml`: `problem` `Aplikasinya jalan tapi lambat, dan
   nggak ada yang tahu mulai cari dari mana.` → `Pengguna lapor aplikasinya lambat. Dicek dari mana
   dulu?` (a question the session answers; the host's dashboard story stays in the announce).
   Subtitle no longer echoes it: `Mulai dari satu alat, nggak perlu pasang semuanya`. Abouts now
   give each person a part of the talk, using facts already in the file (`duration_ms` is in the
   recap): Eko `pegang log dan trace, yaitu cara menemukan request yang lambat lewat field
   duration_ms lalu mengikutinya antar service`; Rina `pegang bagian metrics, yaitu angka mana di
   dashboard yang dia lihat dulu waktu aplikasi lambat`.
2. **Live posters have no date (community P1).** `templates/live.ts`: tall/story/doc cover gets a
   date line under `SEJAK 19.30 WIB` (`SAB, 12 DES`); the wide sidebar shows weekday, date and
   range instead of `Lagi jalan` (which repeated the main block).
3. **sig-intro wide images carry a paragraph (reader P1).** `templates/sig-intro.ts`: the wide
   image shows only the description's second sentence, which both `sigs/*.yaml` now make the
   everyday example (`Contohnya aplikasi yang tiba-tiba lambat …`); the next-session box is
   two big lines, `Sab, 23 Jan` / `19.30 WIB`, then the title (`templates/base.css` `.next__big`).
   `sigs/fora.yaml` description rewritten so its second sentence is the example (`Contohnya sesi
   karier, tempat orang cerita soal lamaran dan kerjaan lewat suara …`). Full description stays in
   captions and the tall/slide layouts.
4. **Observability short posts never say what it means (newcomer P1, reader P2).**
   `src/captions/{instagram,linkedin,x}.ts`: reminder and live carry `problem` once
   (`problemLine`), after the first line. On X it is optional and outranks the practical detail
   when 280 does not fit: Observability reminder is now title, problem, join. X announce
   (`hooked`) tries note, first sentence of the note, then `problem` as the lead, each with the full
   and then a one-line logistics block. Kubernetes X announce before: `Sab, 12 Des jam 19.30 WIB,
   kita kumpul di voice.` first; after: `Dulu saya baru paham Pod setelah sengaja mematikan satu …`
   first. The round 4 test that forbade `problem` in reminder/live is replaced: cover carries it,
   reminder and live say it at most once and never the subtitle.
5. **"di depan" (slop P1).** `templates/announce.ts`: `Yang bakal cerita di depan.` → `Yang cerita
   duluan.`
6. **GitOps recap starts inside the system (newcomer P2, N1).** Point 1 now has the example: `Jumlah
   salinan aplikasi ditulis di file YAML dalam repo. Ganti angka 2 jadi 3 lalu commit, dan Argo CD,
   program yang menjaga servernya, menambah salinan ketiga.` The dangling `dan controller yang …`
   (slop I2) is gone with it. Point 2 title `live state` → `isi repo dengan yang jalan di server`.
   The database caveat is kept. Question `Bagian mana dari alur tadi …, atau kalau sudah pernah
   rollback …?` → `Bagian mana dari GitOps yang masih bikin kamu bingung?` (answerable from any
   point the X thread picks).
7. **"repo kosong berisi" (slop P4).** Rina's about: `Rina menyiapkan Argo CD yang sudah terpasang.
   Repo manifest (file YAML yang menjelaskan aplikasi di cluster) dan alurnya dibuat bareng dari
   nol.` Prepared: Argo CD. Built live: the repo and the flow.

## Other major issues

- **Kubernetes cover promises a multi-machine session (reader K1).** `problem` → `Aplikasi sudah
  jalan di laptop, tapi belum pernah dicoba di Kubernetes.` The local cluster is in the subtitle.
- **Kubernetes X speakers gives Sari and Rina no line (reader K2, community I1).** `speakersThread`
  in `x.ts` packs each person's `about` into as few posts as fit: Bima and Sari share post 1, Rina
  post 2, join post 3. Before it kept only Bima. The X poster is unchanged (names and roles).
- **Pod seems to move (slop I3, reader K3).** `Kubernetes menjalankan dan memindahkan aplikasi per
  Pod.` → `Kubernetes menjalankan aplikasi per Pod. Kalau satu Pod hilang, yang muncul adalah Pod
  baru di salah satu mesin yang masih hidup.`
- **Metrics claim too absolute (slop I4).** `Yang disimpan jumlah request dan lama respons per
  menit … bisa disimpan berbulan-bulan` → `Misalnya … dirangkum per menit … jauh lebih kecil
  daripada log tiap request, jadi biasanya bisa disimpan lebih lama`.
- **Career reminder: caption and poster differ (slop I1, community I3).** `PRACTICAL` and
  `practicalIndex` in `src/captions/context.ts` are now the one source: every caption and the
  poster's second slide of a session use the same detail.
- **X observability recap question needs context (newcomer N2).** `… dari log atau dari metrics?`
  → `Kalau aplikasi proyekmu lambat, kamu mau mulai cari dari mana?`, answerable whichever point
  the thread explains.

## For the orchestrator

- Voice rule 5 says reminder is one practical detail and live is "come in now"; the newcomer asked
  for the plain problem there. I followed the summary's call. The cost: a session's cover, reminder
  and live now repeat one sentence. If round 6 flags it, the cheaper fix is dropping it from live.
- On X the practical detail is dropped from the reminder when the problem takes its room (Kubernetes,
  GitOps, Observability). The practical detail is on the poster's second slide, not on the X image.
- Not changed: the X speakers poster still has only names and roles (a dense bio on a 2:1 image is
  what round 3 removed).
