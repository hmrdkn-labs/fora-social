# Round 3 · editor notes

Gate: `pnpm check` (192 tests), `pnpm examples` (no overflow), `pnpm sheets`. I looked at the
cover, speakers, live and recap sheets of Observability (the session with the longest theme and
the most changes) and at the GitOps feed and wide covers.

| # | Issue | What changed |
| --- | --- | --- |
| 1 | `about` reads like stage directions | Every sample `about` is now one third-person thing the person did or will show, no question. Karier host: `Mandu obrolan, cerita soal pindah dari developer ke SRE, lalu tanya balik, kerjaan pertama kalian dapat dari mana?` → `Menceritakan bagaimana dia pindah dari developer ke SRE lewat ikut jaga on-call.` Same treatment for Rina (three sessions), Dani and Sari. `Person.about` doc comment in `src/types.ts` now says third person, no instructions, no audience question. |
| 2 | recap questions assume you attended | Kubernetes `Waktu Pod-nya dimatikan di minikube, apa yang kamu lihat di kubectl get pods?` → `Deployment membuat Pod pengganti sendiri. Waktu proses aplikasimu mati, siapa atau apa yang menyalakannya lagi?` (ties to recap point 2, answerable from experience). GitOps `Dari alur tadi, bagian mana yang masih belum kebayang buatmu?` → `Kalau deploy semalam bikin masalah, di tempatmu rollback-nya lewat apa sekarang?` (ties to point 4). |
| 3 | observability recap slogan | Point 2 `Metrics itu angka murah yang tahan lama` → `Metrics merangkum request menjadi angka`; body now says what is stored (count and response time per minute, one number for many requests) and why it is cheap next to full per-request logs. `di aplikasi lambat tadi` removed from point 1. The linter caught my first draft (`, bukan setiap request`), so the sentence is rewritten without it. |
| 4 | cover join route is fine print | `templates/cover.ts`, `templates/base.css`, `templates/parts.ts`. Tall covers: the day and time stay at 44 px, then the shared join bar (accent panel: label, `Masuk <channel>. Dengerin aja boleh, mic juga boleh.`, invite chip) replaces the 26 px invite line; the separate `voice channel` line is dropped from the cover because the bar names the channel (`schedule()` got a `withWhere` flag). Wide covers: one accent panel with day, time and channel left and the invite chip right (`wideJoin`). The wave pays for it (it is shorter on every cover, a thin strip on wide) and `WIDE_SIZES` got a 42 px step for long themes. Carousel slide 1 is unchanged. |
| 5 | short observability variants lose the problem | X cover, reminder and live (and LinkedIn live variant 3) carry the subtitle as one line: X cover `Cloud Native 101 bareng SIG CN × FORA.` → `Aplikasinya lambat, ini cara mulai mencari penyebabnya.`; reminder and live add it after the title; reminder variant 3 replaces the host line with it. Applies to every session that has a subtitle (the contract has no separate field), so Kubernetes, GitOps and Karier X posts gain their subtitle too. |
| 6 | observability subtitle unfinished | `Aplikasinya lambat, dan ke mana kita cari jawabannya` → `Aplikasinya lambat, ini cara mulai mencari penyebabnya` (a plain statement). |
| 7 | LinkedIn live names the channel twice | `joinLive` variant 2: `Undangan Discord: <url>. Kita ada di <channel>.` → `Kita ada di <channel>, undangannya <url>.`; variant 3 opening `Live sekarang di voice channel X.` → `Sedang live sekarang.`. |
| 8 | reminder "Kalau ada pertanyaan soal <tema>" | Dropped from IG and LinkedIn `practical()`; two practical lines remain (open Discord ten minutes early; headset or phone). No per-session prep field exists, so I did not invent a specific question. |

## Calls

- Item 5: the subtitle is the one line available in the contract that states the everyday
  problem. For sessions whose subtitle is not a problem statement (Karier `Cerita dan tanya
  jawab, tanpa slide`) it still reads as a plain descriptor, so I applied it uniformly rather
  than special-casing Observability.
- Item 4: the reader reviewer's round-4 question is whether a panel on the cover is enough. The
  wide cover is the tightest; if it is flagged again, it is a size limit of 1200×627 with a
  theme that long, not something another pass will fix.
