# Review round 6, role `slop`

Scope: 84 posts (4 sessions x 7 post types x 3 platforms). Captions read in full. Posters judged from the 28 contact sheets in `out/sheets/`; I opened 13 of them (gitops announce, cover, reminder; kubernetes recap, live; observability sig-intro, speakers; karier cover, speakers) and treated the rest as the same templates ([INFERENCE] for sheets I did not open). Names carry "(contoh)" in every caption. I read that as sample data, not slop, and do not score it.

## 1. Overall

- Biggest problem: the join reassurance is in every one of the 84 posts, in one of five near-identical wordings ("Dengerin aja boleh, mic juga boleh"). The same hook sentence is replayed in cover, reminder, live and the X announce. Both are the loudest tells in `docs/voice.md`, and they break rules 4 and 5.
- Second: every non-announce post is the same skeleton (hook, title, date, join line, hashtags). Only the announce posts read like one organiser with something to say.
- Third: recap and speakers fill in detail with a repeating "Kata benda, penjelasan." shape and inserted glosses ("Argo CD, program yang menjaga servernya"), which reads as generated explanation, not as people talking.
- Works: the host notes ("kubectl apply langsung ke prod jam 11 malam", "40 lamaran dan cuma dua yang dibalas"), concrete recap points (OutOfSync, `duration_ms`, git revert and the DB migration caveat), recap closing questions, and "Tanpa pembicara tamu, jadi yang cerita kita semua." No em dash, no curly quotes, no emoji, hashtags real.
- Nothing is blocking. 24 posts are `slop`, so the round fails.

## 2. Patterns

### P1. One reassurance line in every post, five wordings
- **severity:** major. **posts:** all 84, all four sessions (the poster join box repeats it too).
- **quote:** "Dengerin aja boleh, mic juga boleh." / "Mau dengerin aja boleh, mau nyalain mic juga boleh." / "Dengerin aja nggak apa-apa, ngomong juga silakan." / "Boleh dengarkan saja, boleh juga ikut bicara." / "Mau dengarkan saja atau ikut bicara, dua-duanya boleh." On every poster: "Dengerin aja boleh, mau langsung nyalain mic juga boleh."
- **why:** `manusia`. Rule 4 says say it once, then stop. Said in every post, in the same balanced "boleh... juga boleh" pair, it is a stamp. A person would say it in the announce, then forget it. Poster, caption and X thread part 3 all carry it in the same post.
- **direction:** Keep it in announce and sig-intro only. Reminder, live, speakers and cover carry the practical line (what to open, which channel) and nothing else. Poster join box says only channel and link.

### P2. The hook is replayed in announce, cover, reminder, live
- **severity:** major. **posts:** `*/cover/*`, `*/reminder/*`, `*/live/*`, plus `kubernetes/announce/x` and `observability/announce/x`, all four sessions.
- **quote:** "Deploy masih lewat perintah manual, dan nggak ada yang yakin apa yang sebenarnya jalan di server." (cover, reminder, live, and the poster headline); "Aplikasi sudah jalan di laptop, tapi belum pernah dicoba di Kubernetes." (5 times); "Pengguna lapor aplikasinya lambat. Dicek dari mana dulu?" (6 times); "Lamaran sudah dikirim ke mana-mana, tapi nggak ada kabar dan nggak jelas salahnya di mana." (4 times).
- **why:** `manusia`, `spesifik`. voice.md rule 5: "Replaying the same hook in every post is the loudest tell in a feed." Someone who follows FORA sees the same sentence four times in a week. Live and reminder add nothing: no new fact.
- **direction:** One hook per post type. Reminder: one practical thing (the ten minutes early, headset, what to have open). Live: two lines, "mulai sekarang, ini channelnya". Cover: the series and theme, not the announce hook.

### P3. Same X skeleton in all 28 X posts
- **severity:** major. **posts:** all `*/x`.
- **quote:** line 1 hook or title; line 2 title or hook; line 3 date; line 4 "Di voice channel sig-cn-voice Discord FORA. Dengerin aja boleh, mic juga boleh."; line 5 URL; line 6 one hashtag. Opening variants "Masuk aja ke voice channel...", "Langsung masuk ke voice channel...", "Di voice channel...".
- **why:** `manusia`, `platform`. It is a form, not a tweet. A person would write two sentences with the link, not a stack of six lines where the title sits on its own line.
- **direction:** Let some X posts be a single sentence plus link (voice.md rule 6). Live: "Mulai. <link>". Drop the standalone title line.

### P4. Reminder has no practical content on X, and one stock tip elsewhere
- **severity:** major. **posts:** `*/reminder/x` (gitops, kubernetes, observability), plus IG/LI of gitops, kubernetes, observability.
- **quote:** "Nanti jam 19.30 WIB, Kubernetes untuk Pemula." / "Buka Discord sepuluh menit lebih awal buat cek suara." (identical in 3 sessions, 6 posts). Karier uses "Pakai headset kalau ada, dari HP juga bisa", which is the only session with its own detail.
- **why:** `spesifik`, `manusia`. "Nanti jam" with no "hari ini" or "malam ini" is vague on the poster ("NANTI JAM 19.30 WIB" next to a "HARI INI" badge). The tip is the same sentence in three sessions, so it is boilerplate.
- **direction:** One reminder fact per session from `note` or topics (what to prepare, e.g. `minikube start` before 19.30). Say "malam ini".

### P5. Recap points all share one shape and carry inserted glosses
- **severity:** major. **posts:** `*/recap/instagram`, `*/recap/linkedin`, all four sessions.
- **quote:** "Argo CD, program yang menjaga servernya, menambah salinan ketiga." / "Manifest, file YAML yang menjelaskan aplikasi di cluster, tinggal di repo sendiri." / "Postmortem, catatan pembahasan insiden di kantor lama, jadi bahan belajar Terraform (alat untuk membuat server lewat file konfigurasi) yang paling nempel" / "Dengan format seperti JSON, field seperti duration_ms bisa disaring".
- **why:** `manusia`, `pemula`. Every item is "Claim sentence. Explanation sentence." in the same length, and the glosses are cut into the middle of the sentence as appositives. People say "manifest itu file YAML yang..." as its own sentence. The "Ini yang tercatat dari" and "Catatan dari" openers are stiff.
- **direction:** Explain once, in its own sentence, the first time the word appears; do not gloss it twice. Vary item length; one item can be a single line. Drop "Ini yang tercatat dari".

### P6. Recap carries long, even paragraphs and a fixed ending
- **severity:** minor. **posts:** all recap.
- **quote:** "Kalau aplikasi proyekmu lambat, kamu mau mulai cari dari mana?" / "Bagian mana dari GitOps yang masih bikin kamu bingung?" / "Kalau kamu bikin satu repo kecil minggu ini untuk ditunjukkan ke pewawancara, isinya apa?" followed by docs links, then the invite and the reassurance.
- **why:** `manusia`. The questions themselves are good (concrete, answerable). The fixed order (points, docs, thanks, question, next session, invite, hashtags) is the same in every recap; "Makasih X, sampai ketemu lagi" is stock.
- **direction:** Keep the question. Move docs links to a reply or drop one. Vary where the thanks goes; shorten the closing.

### P7. Recap invents a participant anecdote
- **severity:** minor. **posts:** `fora-ngobrol-karier/recap/*`.
- **quote:** "Salah satu peserta cerita, pewawancaranya menghabiskan lima belas menit di satu repo buatannya dan nggak membuka sertifikat sama sekali."
- **why:** `spesifik`. It is a neat anecdote with a round number and a clean punchline, anonymous ("salah satu peserta"). Reads as an invented example. It is sample data, so this is only a warning for real sessions.
- **direction:** In real recaps use what was actually said, with who said it if they agree.

### P8. X recap thread is arbitrary
- **severity:** major. **posts:** `*/recap/x` (gitops, kubernetes, observability, karier).
- **quote:** "X 2/3: Pisahkan repo manifest dari repo kode aplikasi..." (point 3 of 4 chosen, others dropped); thread 1/3 is only "Rekap ... 11 orang ngobrol... Makasih Dani (contoh)."
- **why:** `platform`, `spesifik`. A thread of three posts with one point in the middle and thanks at the top is not a thread anyone would write. Tweet 1 has no content, so it is the only one anyone sees.
- **direction:** One tweet: the one best point and a link to the full recap. Or put the point in tweet 1.

### P9. Cover builds on a formula sentence
- **severity:** major. **posts:** `*/cover/*`, all sessions (SIG CN three, FORA one in another form).
- **quote:** "Cloud Native 101 bareng SIG CN × FORA, kali ini soal GitOps." / "Tema Karier bareng FORA. Sesinya "Ngobrol Karier di Tech", Sabtu, 23 Januari 2027..." / "Sesinya "GitOps dengan Argo CD", Sab, 19 Des, 19.30–21.00 WIB."
- **why:** `manusia`, `spesifik`. "kali ini soal X" and "Sesinya ..." are template slots (series, topic, date). Cover has no job beyond announce; as written it is a shorter announce without the note.
- **direction:** Cover is the series and what the theme is for, one sentence in the organiser's voice, then date and channel.

### P10. Cover poster title differs from caption title
- **severity:** minor. **posts:** `sigcn-gitops-argocd/cover/*`, `fora-ngobrol-karier/cover/*` (and the same template for the other two [INFERENCE]).
- **quote:** poster "GitOps" and "Karier" vs caption "GitOps dengan Argo CD" and "Ngobrol Karier di Tech".
- **why:** `konsisten`. Poster shortens the title to the theme word; caption uses the full title. A scroller sees "Karier" and a caption saying "Ngobrol Karier di Tech" and cannot tell it is one thing.
- **direction:** Put the full title on the poster as the subtitle, or use the same short title in the caption.

### P11. sig-intro reads as a brochure, with label lines on the poster
- **severity:** major. **posts:** `*/sig-intro/*`, all sessions.
- **quote:** caption "SIG CN di FORA. Ngobrol soal menjalankan aplikasi di cloud, lewat suara." / poster "UNTUK SIAPA: Yang penasaran. Pemula juga boleh nanya" and "FORMAT: Ngobrol lewat suara di voice channel Discord" / poster "KENALAN DENGAN SIG CN" over "Cloud Native".
- **why:** `manusia`, `ngobrol`. Voice rule 9: no labels and no self-answered questions. The nominal fragment with "lewat suara" is tagline copy. The poster's "Untuk siapa" label is an answer to its own question, and it adds a second welcome.
- **direction:** One sentence on what actually happened in a session (the "aplikasi lambat" line is the good one), one question to the reader. Drop the two label cells.

### P12. sig-intro long text is dense on IG poster
- **severity:** minor. **posts:** `*/sig-intro/instagram`, `*/sig-intro/linkedin`.
- **quote:** the six-line paragraph in `ig-feed`/`ig-story`, small type.
- **why:** `jelas`. In 3 seconds on a phone nothing in the paragraph jumps out; the next session sits in a small blue strip below.
- **direction:** Next session date as the largest line; the SIG paragraph shorter.

### P13. Speaker lines share one invented-description shape
- **severity:** major. **posts:** `*/speakers/*`, all sessions.
- **quote:** "Eko (contoh), SRE. Eko pegang log dan trace, yaitu cara menemukan request yang lambat lewat field duration_ms lalu mengikutinya antar service." / "Rina pegang bagian metrics, yaitu angka mana di dashboard yang dia lihat dulu waktu aplikasi lambat." / "Bima membaca kubectl describe dari satu Pod (wadah tempat aplikasi jalan) yang gagal start." / "Dika dulu developer, sekarang SRE, tugasnya menjaga sistem tetap jalan."
- **why:** `manusia`, `ngobrol`, `spesifik`. Every entry: "Nama, peran. Nama verb ..., yaitu ...". Third person throughout, with "yaitu" explaining. Reads as a bio generator. No question or hook for the reader, so nothing to reply to. The Karier post is the best (it says there is no guest), still with the same "yaitu" gloss.
- **direction:** Use each speaker's `about` line as they wrote it, in first person if possible; add one real thing they will show or ask. End with a question people can answer in the comments.

### P14. Gitops announce poster: "Bayangkan" and stacked reassurance
- **severity:** major. **posts:** `sigcn-gitops-argocd/announce/instagram`, `/linkedin` (poster `ig-carousel 02`, `li-doc 02`, shared `ig-feed`).
- **quote:** "Bayangkan deploy cukup dengan merge pull request, dan cluster otomatis ikut isi repo Git. Kita bangun alurnya dari nol pakai Argo CD, jadi yang belum pernah pakai GitOps juga bisa ikut. Cukup tahu Git dasar."
- **why:** `manusia`. "Bayangkan..." is the generic opener; "jadi yang belum pernah ... juga bisa ikut. Cukup tahu Git dasar" is two reassurances in a row, then the poster adds a third in the join box ("Dengerin aja boleh").
- **direction:** Poster slide uses the note (kubectl apply, 11 malam). Say the prerequisite once ("Git dasar cukup"), nothing else.

### P15. "Contohnya" in FORA sig-intro has no referent
- **severity:** minor. **posts:** `fora-ngobrol-karier/sig-intro/*`.
- **quote:** "FORA (Forum Rangkai) itu komunitas tech kecil berbahasa Indonesia di Discord. Contohnya sesi karier, tempat orang cerita soal lamaran dan kerjaan lewat suara..."
- **why:** `manusia`. "Contohnya" has nothing it exemplifies (what FORA does? what a session is?). Calque from "For example".
- **direction:** "Salah satunya sesi karier..." or say what happens in a session directly.

### P16. Live opens with the speaker credits
- **severity:** minor. **posts:** `sigcn-kubernetes-pemula/live/instagram`.
- **quote:** "Live sekarang, bersama Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, dipandu Rina (contoh) @rina_contoh."
- **why:** `manusia`, `jelas`. The credits come before the title, so the first line (the only one shown in the feed) says who but not what. "Sedang live sekarang." on LinkedIn is the same shape without the credit.
- **direction:** Title and "mulai sekarang" first, credits after or not at all.

## 3. Per post

Scores in order: `jelas`, `manusia`, `ngobrol`, `pemula`, `spesifik`, `platform`, `konsisten`. Issues are the pattern ids above. `announce` posts have no issue where all scores are 4; the pattern for P1 still applies to them in a weaker form (one line, once) and is allowed there.

| id | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sigcn-gitops-argocd/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P14 |
| sigcn-gitops-argocd/announce/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P3 |
| sigcn-gitops-argocd/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P14 |
| sigcn-gitops-argocd/reminder/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P4 |
| sigcn-gitops-argocd/reminder/x | 4 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3, P4 |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P4 |
| sigcn-gitops-argocd/live/instagram | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-gitops-argocd/live/x | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-gitops-argocd/live/linkedin | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-gitops-argocd/recap/instagram | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| sigcn-gitops-argocd/recap/x | 4 | 3 | 4 | 3 | 3 | 3 | 4 | fix | P1, P5, P6, P8 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| sigcn-gitops-argocd/cover/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| sigcn-gitops-argocd/cover/x | 4 | 3 | 3 | 4 | 3 | 4 | 3 | slop | P1, P2, P3, P9, P10 |
| sigcn-gitops-argocd/cover/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| sigcn-gitops-argocd/sig-intro/instagram | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12 |
| sigcn-gitops-argocd/sig-intro/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | slop | P1, P3, P11, P12 |
| sigcn-gitops-argocd/sig-intro/linkedin | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12 |
| sigcn-gitops-argocd/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |
| sigcn-gitops-argocd/speakers/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | P1, P3, P13 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P4 |
| sigcn-kubernetes-pemula/reminder/x | 4 | 3 | 3 | 4 | 2 | 4 | 4 | slop | P1, P2, P3, P4 |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P4 |
| sigcn-kubernetes-pemula/live/instagram | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3, P16 |
| sigcn-kubernetes-pemula/live/x | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-kubernetes-pemula/live/linkedin | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| sigcn-kubernetes-pemula/recap/x | 4 | 3 | 4 | 3 | 3 | 3 | 4 | fix | P1, P5, P6, P8 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| sigcn-kubernetes-pemula/cover/x | 4 | 3 | 3 | 4 | 3 | 4 | 3 | slop | P1, P2, P3, P9, P10 |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12 |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | slop | P1, P3, P11, P12 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | P1, P3, P13 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/reminder/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P4 |
| sigcn-observability/reminder/x | 4 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3, P4 |
| sigcn-observability/reminder/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P4 |
| sigcn-observability/live/instagram | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-observability/live/x | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-observability/live/linkedin | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-observability/recap/instagram | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| sigcn-observability/recap/x | 4 | 3 | 4 | 3 | 3 | 3 | 4 | fix | P1, P5, P6, P8 |
| sigcn-observability/recap/linkedin | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| sigcn-observability/cover/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| sigcn-observability/cover/x | 4 | 3 | 3 | 4 | 3 | 4 | 3 | slop | P1, P2, P3, P9, P10 |
| sigcn-observability/cover/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| sigcn-observability/sig-intro/instagram | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12 |
| sigcn-observability/sig-intro/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | slop | P1, P3, P11, P12 |
| sigcn-observability/sig-intro/linkedin | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12 |
| sigcn-observability/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |
| sigcn-observability/speakers/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | P1, P3, P13 |
| sigcn-observability/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/reminder/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P4 |
| fora-ngobrol-karier/reminder/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P2, P3, P4 |
| fora-ngobrol-karier/reminder/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P4 |
| fora-ngobrol-karier/live/instagram | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| fora-ngobrol-karier/live/x | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| fora-ngobrol-karier/live/linkedin | 5 | 3 | 3 | 4 | 3 | 4 | 4 | slop | P1, P2, P3 |
| fora-ngobrol-karier/recap/instagram | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| fora-ngobrol-karier/recap/x | 4 | 3 | 4 | 3 | 3 | 3 | 4 | fix | P1, P5, P6, P8 |
| fora-ngobrol-karier/recap/linkedin | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P5, P6, P7 |
| fora-ngobrol-karier/cover/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| fora-ngobrol-karier/cover/x | 4 | 3 | 3 | 4 | 3 | 4 | 3 | slop | P1, P2, P3, P9, P10 |
| fora-ngobrol-karier/cover/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P2, P9, P10 |
| fora-ngobrol-karier/sig-intro/instagram | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12, P15 |
| fora-ngobrol-karier/sig-intro/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | slop | P1, P3, P11, P12, P15 |
| fora-ngobrol-karier/sig-intro/linkedin | 3 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P11, P12, P15 |
| fora-ngobrol-karier/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |
| fora-ngobrol-karier/speakers/x | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | P1, P3, P13 |
| fora-ngobrol-karier/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P13 |

Extra issues not covered above:

- `sigcn-kubernetes-pemula/recap/*`, **minor**, `spesifik`: "Kubernetes menjalankan aplikasi per Pod. Kalau satu Pod hilang, yang muncul adalah Pod baru di salah satu mesin yang masih hidup." Pod does not come back on its own (Deployment/ReplicaSet creates it, and point 2 says so), so point 1 contradicts point 2 in its last sentence. Direction: drop the last sentence of point 1.
- `sigcn-observability/recap/*`, **minor**, `manusia`: "Alert dari yang dirasakan pengguna." is a calque and the sentence has no verb; "Metrics merangkum request menjadi angka... Ringkasan begini jauh lebih kecil daripada log tiap request, jadi biasanya bisa disimpan lebih lama" is one long even sentence. Direction: "Alert sebaiknya berangkat dari yang dirasakan pengguna: error rate dan latency." and split point 2.
- `sigcn-gitops-argocd/live/linkedin`, **minor**: "Kita sudah mulai (19.30 WIB)." followed by the title on its own line, then the hook; the three lines read as a form. Direction: one line.
- `*/announce/*`: scores are all 4, nothing below. For next round: the announce X for kubernetes and observability is the best X post of the set and the model for the others.

## 4. Machine summary

```json
{
  "role": "slop",
  "round": 6,
  "posts": [
    {
      "id": "sigcn-gitops-argocd/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/instagram",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/x",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/linkedin",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 2,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/instagram",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/x",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/linkedin",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/instagram",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/x",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/linkedin",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/instagram",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/x",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/linkedin",
      "scores": {
        "jelas": 5,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    }
  ]
}
```
