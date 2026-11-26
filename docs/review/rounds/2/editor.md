# Round 2 · editor notes

Gate: `pnpm check` (192 tests), `pnpm examples` (no overflow), `pnpm sheets`; I looked at the
cover, sig-intro and reminder sheets of the sessions that changed most (GitOps, Observability,
Karier). The orchestrator's `recap.question` was already in `src/types.ts`; I added it to the
schema and README only.

## Issues

| # | Issue | What changed |
| --- | --- | --- |
| 1 | recap question is a template | `recapPrompt` deleted from `src/captions/context.ts`. IG, X and LinkedIn recaps end with `recap.question` when present and carry no question otherwise (X drops the question post line; IG variant 2 no longer glues it to the thanks). `src/schema.ts`: `recap.question` (non-empty string, optional). One per sample, answerable from a tutorial, a class project or listening: GitOps `Dari alur tadi, bagian mana yang masih belum kebayang buatmu?` (was `Poin 3 ("Pisahkan repo manifest …"), cocok nggak sama yang kamu temui di kerjaan?`); Kubernetes `Waktu Pod-nya dimatikan di minikube, apa yang kamu lihat di kubectl get pods?`; Observability `Kalau aplikasi proyekmu lambat, kamu mau mulai cari dari log atau dari metrics?`; Karier `Kalau kamu bikin satu repo kecil minggu ini untuk ditunjukkan ke pewawancara, isinya apa?`. Test: question appears on all platforms; without it no caption contains "?". |
| 2 | cover logistics like footnotes | New `schedule()` block in `templates/parts.ts` (`.sched` in `base.css`): day and time at 44 px/800 (34 px wide), `voice channel <name>` under it at 30 px (24 px wide), foreground colour; the invite link stays below at 26 px. Used on every cover format and on carousel/doc slide 1. The theme keeps its size on the samples; the wave gives the height (cover `room` now subtracts the block's real height). Before → after, GitOps feed: one 28 px line `Sab, 19 Des · 19.30–21.00 WIB · voice channel sig-cn-voice` → two lines, the first 44 px. |
| 3 | sig-intro deck opens without the next session | Slide 01 of `ig-carousel` and `li-doc` has the accent "Sesi terdekat" box under the wave: date · time, session title, `voice channel <name>`. `nextSession()` got a `withChannel` option; the name heading gives up that height. |
| 4 | reminder prep slide = three generic slots | Slide 2 is one line, `Buka Discord sepuluh menit lebih awal buat cek suara.`, under the label `Sebelum 19.30 WIB`; channel and time are in the join footer and the schedule line already. The numbered list is gone from `templates/reminder.ts`. The slide is quieter by design. |
| 5 | listen-only said twice | Reminder `practical()` in IG and LinkedIn lost its `Mic boleh mati dulu…` / `Mikrofon boleh dimatikan…` option; the join line already says it. Karier IG before → after: `Mic boleh mati dulu sampai kamu siap ngomong. Langsung masuk … Dengerin aja nggak apa-apa, ngomong juga silakan.` → one of the other three details plus the join line. |
| 6 | recaps lean on unexplained terms | Observability: `OpenTelemetry, pasang kode pencatat sekali` / `Datanya dikirim lewat OTLP, format standar OpenTelemetry untuk mengirim data, jadi backend-nya bisa diganti tanpa mengubah kode aplikasi.`; the log point is now `field seperti duration_ms bisa disaring, jadi request yang lambat gampang ditemukan` (no claim about hung requests). Karier: `Pindah ke SRE bisa mulai dari ikut jaga on-call` / `Dika minta mendampingi rekan yang sedang on-call, yang menangani sistem kalau bermasalah di luar jam kerja. Dari situ tugas pertamanya menulis runbook, catatan langkah menangani masalah yang sering muncul.` |
| 7 | newcomer bridges outside announce | Kubernetes Bima `about`: `… waktu aplikasimu mogok di Kubernetes, lewat satu Pod (wadah tempat aplikasi jalan) yang gagal start.` GitOps: subtitle `Deploy lewat merge pull request, Git dasar sudah cukup` (cover and every post that shows it); Rina `about` explains manifest once as `file YAML yang menjelaskan aplikasi di cluster`; recap point 3 explains it again in the same words, since a recap is read alone. One clause each, no glossary. |

## Disagreements

- Item 7, GitOps subtitle: dropping "rollback config lewat git revert" from the subtitle loses
  a hook; the rollback is still in topics and the recap. Cover and speakers were where the
  newcomer reviewer found no bridge, so I took the bridge.
- Item 4 asks for "one useful detail for that session, or just time and how to join". The
  contract has no per-session prep field, so the slide holds the one generic practical line
  rather than inventing a session detail.
