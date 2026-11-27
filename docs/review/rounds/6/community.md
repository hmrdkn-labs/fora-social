# Review round 6, community

Role: community manager. Scope: 4 sessions x 7 post types x 3 platforms (Instagram, X, LinkedIn) = 84 posts. Captions in `examples/*/captions/`, posters from `out/sheets/`. All X tweets are <= 280 characters (longest 279, gitops reminder).

## 1. Overall

- Biggest problem: the same welcome sentence ends every post ("Dengerin aja boleh, mic juga boleh." 32 times, five other wordings 52 more times), and cover, live and reminder reuse one hook line. A member who follows us sees the same post six times a week.
- Second: only announce (host note) and recap (closing question) give anyone something to answer. Cover, live, reminder, sig-intro and speakers are one-way flyers.
- Reminder and live have timing problems: "nanti" and "hari ini" mixed, X reminders without a date, outlined "SEJAK 19.30 WIB" text on the live poster.
- Two content errors: Dika is "Software Engineer" and "sekarang SRE" on the same card; the Kubernetes recap says a lost Pod is replaced without naming Deployment first.
- Works: announce notes (kubectl apply jam 11 malam, 40 lamaran dan dua dibalas) are real hooks; the practical reminder lines ("Buka Discord sepuluh menit lebih awal", "Pakai headset kalau ada, dari HP juga bisa"); recap closing questions; poster and caption agree on date, time, channel and invite everywhere I checked; weekdays are correct.

## 2. Patterns

**P1. Welcome formula in every post.** severity: major. Posts: all 84.
Quotes: "Dengerin aja boleh, mic juga boleh." (32x), "Boleh dengarkan saja, boleh juga ikut bicara." (18x), "Dengerin aja nggak apa-apa, ngomong juga silakan." (12x), "mau dengerin aja boleh, mau nyalain mic juga boleh" (12x), plus the same line in step 3 of every "Link-nya ada di bawah." poster slide.
Why: konsisten reads as copy-paste; manusia and pemula suffer (voice.md rules 4 and 6: say it once). A regular member learns to skip the last line, and the line that carries the join link goes with it.
Direction: say it in announce and sig-intro only. Elsewhere end on the invite plus one thing specific to that post type.

**P2. One hook line reused in cover, live and reminder.** severity: major. Posts: cover, live, reminder x 3 platforms x 4 sessions (36).
Quotes: "Deploy masih lewat perintah manual, dan nggak ada yang yakin apa yang sebenarnya jalan di server." (gitops cover, live, reminder, X and IG and LinkedIn alike); "Aplikasi sudah jalan di laptop, tapi belum pernah dicoba di Kubernetes."; "Pengguna lapor aplikasinya lambat. Dicek dari mana dulu?"; "Lamaran sudah dikirim ke mana-mana, tapi nggak ada kabar dan nggak jelas salahnya di mana."
Why: voice.md rule 5; the problem line is also the X announce hook for k8s and obs, so the same sentence appears four times in a week. Reminder and live have no job of their own.
Direction: cover = series and theme; reminder = one practical detail (headset, what to have open, who is hosting); live = what is being discussed right now.

**P3. Every X post has the same shape.** severity: major. Posts: all X posts (28 incl. thread parts counted as one post per type).
Quotes: line 1 hook or title, line 2 date, line 3 "Di voice channel sig-cn-voice Discord FORA. Dengerin aja boleh, mic juga boleh.", bare URL, one hashtag, each on its own line.
Why: platform and manusia. It reads like a template filled in, not a person tweeting; five to six hard line breaks per tweet. Same layout also on LinkedIn and IG, only the line order changes.
Direction: one or two sentences, URL last, hashtag optional. Let announce, reminder and live differ in length (a two-line live tweet is fine).

**P4. Nothing to answer outside announce and recap.** severity: major. Posts: cover, live, reminder, sig-intro, speakers (60 posts).
Quotes: none of these captions asks anything; "Sesi terdekat soal "Kubernetes untuk Pemula", Sab, 12 Des." is typical.
Why: ngobrol. These are the posts most members will see. Replying, DMing or bringing something is never suggested.
Direction: reminder asks people to bring one thing (the error they last Googled, the command they never understood); sig-intro asks what is annoying them in production; speakers names the question the speaker will answer.

**P5. Reminder timing is ambiguous and inconsistent.** severity: major. Posts: reminder x 12.
Quotes: "Sab, 19 Des, nanti jam 19.30 WIB." (IG) vs "Hari ini jam 19.30 WIB kita ngobrol soal Karier." (fora LinkedIn); X: "Nanti jam 19.30 WIB, Kubernetes untuk Pemula." and "Jam 20.00 WIB nanti, Observability: Logs, Metrics, Traces." (no day or date); poster headline "NANTI JAM 19.30 WIB" with the date in small type and badge "HARI INI".
Why: jelas and konsisten. "Nanti" does not say which day; a reminder shared the day before must not say "hari ini". Date is the second thing people look for.
Direction: reminder knows the send day: "Besok" or "Malam ini" plus date. Put the date in the poster's big line and keep one wording across platforms.

**P6. Live posts are stale on arrival and the poster is hard to read.** severity: major. Posts: live x 12 (worst on LinkedIn).
Quotes: "Sedang live sekarang."; poster "SEJAK 19.30 WIB" is outlined type on bright blue (all live sheets).
Why: platform and jelas. A live post nobody can act on after 21.30 sits in the LinkedIn feed; the outline text is low contrast at feed size. Live adds nothing to the reminder except "now".
Direction: IG story and X for live; skip LinkedIn or make it a one-liner. Solid fill for the time. Mention what is on screen right now, for example the topic being discussed.

**P7. Speakers is a profile dump.** severity: major. Posts: speakers x 12.
Quotes: "Dani (contoh), SRE. Tim Dani dulu deploy dengan kubectl apply manual, dan dia cerita kenapa akhirnya pindah ke GitOps."; "Bima (contoh) @bima_contoh, DevOps Engineer. Bima membaca kubectl describe dari satu Pod ..." ; IG caption opens with a name, the session title only on line 3 or 4.
Why: manusia (three near-identical "Nama (contoh), Role. Nama ..." blocks), ngobrol (no question), platform (X splits two or three people into a 3-tweet thread; the join info is in tweet 3 where most people never scroll).
Direction: one hook about why these people, then date and invite. One tweet. Say "Rina yang pandu" in the host's voice if it is the host.

**P8. X recap thread has one arbitrary point.** severity: major. Posts: recap/x x 4.
Quotes: gitops 2/3 = point 3 only ("Pisahkan repo manifest dari repo kode aplikasi ..."); k8s 2/3 = point 3 ("Service memberi alamat yang stabil ..."); obs 2/3 = point 4 (OpenTelemetry). Tweet 1 is only thanks.
Why: platform, jelas. A thread of "thanks / one of four points / question" shows less than a single tweet would; the best point is not the picked one.
Direction: one tweet with the strongest point and the question, or a real thread where every tweet carries a point.

**P9. Recap: question not on the poster, captions are walls.** severity: minor. Posts: recap x 12.
Quotes: IG obs recap has five points of 150 to 260 characters each; poster last slide is "Sampai ketemu di sesi berikutnya." and has no question; the question is only in the caption.
Why: ngobrol and platform. People who share the carousel lose the question; the caption repeats the carousel slide for slide.
Direction: put the closing question on the last slide; shorten caption points to the title plus one sentence.

**P10. The note is in the host's voice, then the host appears in third person.** severity: minor. Posts: announce IG and LinkedIn x 4 sessions.
Quotes: "Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah ..." followed by "dipandu Rina (contoh)"; "Saya mau dengar cara kalian." followed by "Dipandu Dika (contoh) @dika_contoh."
Why: manusia. It reads as if two people wrote the post, and the "saya" has no name until the last line.
Direction: if the note is the host, write "saya yang pandu" or leave the host out of the credit line.

**P11. Hashtags.** severity: minor. Posts: all IG; obs LinkedIn x 7.
Quotes: IG always "#FORA #SIGCN #<tema> #<tema>" (four, every post); LinkedIn obs "#Observability #CloudNative #Kubernetes".
Why: platform. #SIGCN and #FORA are not searched; #Kubernetes does not fit an observability session (and gitops LinkedIn repeats it by default).
Direction: two searched tags that match the session, branded tag only once.

**P12. IG link handling disagrees between poster and caption.** severity: minor. Posts: IG all; announce LinkedIn x 4 (handles).
Quotes: poster "Link-nya ada di bawah." with the invite on the card; caption "link di bio atau discord.gg/rSepJu7Wb". LinkedIn caption "@rina_contoh" and "@bima_contoh" (Instagram handles, not clickable there).
Why: konsisten and platform. A raw URL in an IG caption is not clickable; "di bawah" points at the card, "di bio" points at the profile.
Direction: IG says "link di bio" and nothing else; the poster step says "link di bio" on IG sizes. Drop @handles on LinkedIn unless they are LinkedIn handles.

**P13. Sig-intro: labels on the poster, long block in the caption.** severity: major. Posts: sig-intro x 12.
Quotes: poster "Untuk siapa: Yang penasaran. Pemula juga boleh nyimak" and "Format: Ngobrol lewat suara di voice channel Discord"; IG gitops/obs caption: one four-sentence paragraph before any date, "SIG CN itu grup FORA untuk ngobrol soal menjalankan aplikasi di cloud (cloud native)".
Why: voice.md rule 9 (labels, self-answered "untuk siapa"); pemula (SIG is never expanded in the SIG CN captions; "nyimak" is the one place people are welcomed and it is on a label); manusia (long block, first line is a definition).
Direction: first line is a situation people recognise, then what SIG CN is in one clause, then the next session. Say SIG once.

## 3. Per post

Scores are jelas / manusia / ngobrol / pemula / spesifik / platform / konsisten. `blocking` counts blocking issues.

| id | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | blocking | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `sigcn-gitops-argocd/announce/instagram` | 4 | 4 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P10, P11, A1 |
| `sigcn-gitops-argocd/announce/x` | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P3, P11 |
| `sigcn-gitops-argocd/announce/linkedin` | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | 0 | P1, P10, P12 |
| `sigcn-gitops-argocd/cover/instagram` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4 |
| `sigcn-gitops-argocd/cover/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4, P3 |
| `sigcn-gitops-argocd/cover/linkedin` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4 |
| `sigcn-gitops-argocd/live/instagram` | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | 0 | P1, P2, P6, P4 |
| `sigcn-gitops-argocd/live/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P6, P4, P3 |
| `sigcn-gitops-argocd/live/linkedin` | 3 | 3 | 2 | 4 | 3 | 2 | 4 | fix | 0 | P1, P2, P6, P4 |
| `sigcn-gitops-argocd/reminder/instagram` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5 |
| `sigcn-gitops-argocd/reminder/x` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5, P3 |
| `sigcn-gitops-argocd/reminder/linkedin` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5 |
| `sigcn-gitops-argocd/sig-intro/instagram` | 4 | 3 | 3 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13 |
| `sigcn-gitops-argocd/sig-intro/x` | 3 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13, P3 |
| `sigcn-gitops-argocd/sig-intro/linkedin` | 4 | 3 | 2 | 3 | 3 | 4 | 4 | fix | 0 | P1, P4, P13 |
| `sigcn-gitops-argocd/speakers/instagram` | 4 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P7 |
| `sigcn-gitops-argocd/speakers/x` | 3 | 3 | 2 | 3 | 3 | 2 | 4 | fix | 0 | P1, P7 |
| `sigcn-gitops-argocd/speakers/linkedin` | 4 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P7 |
| `sigcn-gitops-argocd/recap/instagram` | 4 | 3 | 4 | 4 | 3 | 3 | 4 | fix | 0 | P1, P9, R2 |
| `sigcn-gitops-argocd/recap/x` | 3 | 3 | 3 | 4 | 3 | 2 | 4 | fix | 0 | P1, P9, P8, R2 |
| `sigcn-gitops-argocd/recap/linkedin` | 4 | 3 | 4 | 4 | 3 | 4 | 4 | fix | 0 | P1, P9, R2 |
| `sigcn-kubernetes-pemula/announce/instagram` | 4 | 4 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P10, P11, A1 |
| `sigcn-kubernetes-pemula/announce/x` | 4 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P3, P11, A3 |
| `sigcn-kubernetes-pemula/announce/linkedin` | 4 | 4 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P10, P12, A4 |
| `sigcn-kubernetes-pemula/cover/instagram` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4 |
| `sigcn-kubernetes-pemula/cover/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4, P3 |
| `sigcn-kubernetes-pemula/cover/linkedin` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4 |
| `sigcn-kubernetes-pemula/live/instagram` | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | 0 | P1, P2, P6, P4 |
| `sigcn-kubernetes-pemula/live/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P6, P4, P3 |
| `sigcn-kubernetes-pemula/live/linkedin` | 3 | 3 | 2 | 4 | 3 | 2 | 4 | fix | 0 | P1, P2, P6, P4 |
| `sigcn-kubernetes-pemula/reminder/instagram` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5 |
| `sigcn-kubernetes-pemula/reminder/x` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5, P3 |
| `sigcn-kubernetes-pemula/reminder/linkedin` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5 |
| `sigcn-kubernetes-pemula/sig-intro/instagram` | 4 | 3 | 3 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13 |
| `sigcn-kubernetes-pemula/sig-intro/x` | 3 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13, P3 |
| `sigcn-kubernetes-pemula/sig-intro/linkedin` | 4 | 3 | 2 | 3 | 3 | 4 | 4 | fix | 0 | P1, P4, P13 |
| `sigcn-kubernetes-pemula/speakers/instagram` | 4 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P7 |
| `sigcn-kubernetes-pemula/speakers/x` | 3 | 3 | 2 | 3 | 3 | 2 | 4 | fix | 0 | P1, P7 |
| `sigcn-kubernetes-pemula/speakers/linkedin` | 4 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P7 |
| `sigcn-kubernetes-pemula/recap/instagram` | 4 | 3 | 4 | 4 | 3 | 3 | 4 | fix | 0 | P1, P9, R1 |
| `sigcn-kubernetes-pemula/recap/x` | 3 | 3 | 3 | 4 | 3 | 2 | 4 | fix | 0 | P1, P9, P8, R1 |
| `sigcn-kubernetes-pemula/recap/linkedin` | 4 | 3 | 4 | 4 | 3 | 4 | 4 | fix | 0 | P1, P9, R1 |
| `sigcn-observability/announce/instagram` | 4 | 4 | 4 | 3 | 4 | 3 | 4 | fix | 0 | P1, P10, P11, A1, A2 |
| `sigcn-observability/announce/x` | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P3, P11 |
| `sigcn-observability/announce/linkedin` | 4 | 4 | 4 | 3 | 4 | 3 | 4 | fix | 0 | P1, P10, P11, A2 |
| `sigcn-observability/cover/instagram` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4 |
| `sigcn-observability/cover/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4, P3 |
| `sigcn-observability/cover/linkedin` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4, P11 |
| `sigcn-observability/live/instagram` | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | 0 | P1, P2, P6, P4 |
| `sigcn-observability/live/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P6, P4, P3 |
| `sigcn-observability/live/linkedin` | 3 | 3 | 2 | 4 | 3 | 2 | 4 | fix | 0 | P1, P2, P6, P4 |
| `sigcn-observability/reminder/instagram` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5 |
| `sigcn-observability/reminder/x` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5, P3 |
| `sigcn-observability/reminder/linkedin` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5 |
| `sigcn-observability/sig-intro/instagram` | 4 | 3 | 3 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13 |
| `sigcn-observability/sig-intro/x` | 3 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13, P3 |
| `sigcn-observability/sig-intro/linkedin` | 4 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13 |
| `sigcn-observability/speakers/instagram` | 4 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P7 |
| `sigcn-observability/speakers/x` | 3 | 3 | 2 | 3 | 3 | 2 | 4 | fix | 0 | P1, P7 |
| `sigcn-observability/speakers/linkedin` | 4 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P7 |
| `sigcn-observability/recap/instagram` | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P9, R4 |
| `sigcn-observability/recap/x` | 3 | 3 | 3 | 4 | 3 | 2 | 4 | fix | 0 | P1, P9, P8 |
| `sigcn-observability/recap/linkedin` | 4 | 3 | 4 | 4 | 3 | 3 | 4 | fix | 0 | P1, P9 |
| `fora-ngobrol-karier/announce/instagram` | 4 | 4 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P10, P11, A1 |
| `fora-ngobrol-karier/announce/x` | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | 0 | P1, P3, P11 |
| `fora-ngobrol-karier/announce/linkedin` | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | 0 | P1, P10, P12 |
| `fora-ngobrol-karier/cover/instagram` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4 |
| `fora-ngobrol-karier/cover/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4, P3 |
| `fora-ngobrol-karier/cover/linkedin` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P4 |
| `fora-ngobrol-karier/live/instagram` | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | 0 | P1, P2, P6, P4 |
| `fora-ngobrol-karier/live/x` | 4 | 3 | 2 | 4 | 3 | 3 | 4 | fix | 0 | P1, P2, P6, P4, P3 |
| `fora-ngobrol-karier/live/linkedin` | 3 | 3 | 2 | 4 | 3 | 2 | 4 | fix | 0 | P1, P2, P6, P4 |
| `fora-ngobrol-karier/reminder/instagram` | 3 | 3 | 3 | 4 | 4 | 3 | 3 | fix | 0 | P1, P2, P5 |
| `fora-ngobrol-karier/reminder/x` | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | 0 | P1, P2, P5, P3 |
| `fora-ngobrol-karier/reminder/linkedin` | 3 | 3 | 3 | 4 | 4 | 3 | 3 | fix | 0 | P1, P2, P5 |
| `fora-ngobrol-karier/sig-intro/instagram` | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | 0 | P1, P4, P13 |
| `fora-ngobrol-karier/sig-intro/x` | 3 | 3 | 2 | 3 | 3 | 3 | 4 | fix | 0 | P1, P4, P13, P3 |
| `fora-ngobrol-karier/sig-intro/linkedin` | 4 | 3 | 2 | 3 | 3 | 4 | 4 | fix | 0 | P1, P4, P13 |
| `fora-ngobrol-karier/speakers/instagram` | 4 | 3 | 2 | 3 | 2 | 3 | 2 | fix | 1 | P1, P7, S1 |
| `fora-ngobrol-karier/speakers/x` | 3 | 3 | 2 | 3 | 2 | 2 | 2 | fix | 1 | P1, P7, S1 |
| `fora-ngobrol-karier/speakers/linkedin` | 4 | 3 | 2 | 3 | 2 | 3 | 2 | fix | 1 | P1, P7, S1 |
| `fora-ngobrol-karier/recap/instagram` | 4 | 3 | 4 | 4 | 3 | 3 | 4 | fix | 0 | P1, P9, R3 |
| `fora-ngobrol-karier/recap/x` | 3 | 3 | 3 | 4 | 3 | 2 | 4 | fix | 0 | P1, P9, P8, R3 |
| `fora-ngobrol-karier/recap/linkedin` | 4 | 3 | 4 | 4 | 3 | 4 | 4 | fix | 0 | P1, P9, R3 |

### Issues not covered by a pattern

**S1 (blocking).** fora-ngobrol-karier/speakers/instagram, x, linkedin; poster `ig-feed/speakers.png`, `ig-carousel/speakers-02.png`.
quote: "Dika (contoh) @dika_contoh, Software Engineer. Dika dulu developer, sekarang SRE, tugasnya menjaga sistem tetap jalan."
why: spesifik and konsisten. The role line says Software Engineer; the sentence under it says he is now an SRE. On a card about a career move, that is a visible contradiction. (X and LinkedIn carry the same card.)
direction: fix the role in the session file to what he is now, or write the move as a story that dates the role ("dulu").

**A1 (major).** every announce/instagram. quote: first line "GitOps dengan Argo CD" / "Observability: Logs, Metrics, Traces" / "Ngobrol Karier di Tech". why: platform. IG shows about 125 characters before "lainnya"; the hook is on line 3 and after the fold. The k8s IG announce opens with title plus date, which is clear, but is also not a hook. direction: first line is the note or the question; title is on the poster.

**A2 (major).** sigcn-observability/announce/instagram, linkedin. quotes: "Monitoring vs observability", "Distributed tracing", "Metrics dan Prometheus, alat pengumpul metrics" (six topics). why: pemula. A student who just got a "lambat" ticket reads six names of things before any sentence about what the session does for them; the glossary clause is attached to one item only. direction: three topics max, phrased as things people do ("cari request yang lambat").

**A3 (major).** sigcn-kubernetes-pemula/announce/x. quote: "Aplikasi sudah jalan di laptop, tapi belum pernah dicoba di Kubernetes." why: ngobrol. The IG caption uses the personal Pod story; X uses a statement from the problem field and never asks. direction: use the question or the story, not the statement.

**A4 (minor).** sigcn-kubernetes-pemula/announce/linkedin. quote: "Bersama Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, dipandu Rina (contoh) @rina_contoh." why: platform. Three people with IG handles in one sentence on LinkedIn. direction: names only, one credit line.

**R1 (major).** sigcn-kubernetes-pemula/recap (all platforms). quote: "Satu Pod bisa berisi beberapa container ... Kalau satu Pod hilang, yang muncul adalah Pod baru di salah satu mesin yang masih hidup." why: spesifik. A Pod that is deleted does not come back by itself; the Deployment makes the new one (point 2 says so, the poster slide 02 says the opposite first). A newcomer who tries `kubectl delete pod` on a bare Pod will see nothing come back. direction: point 1 ends at "Pod adalah wadah"; the replacement belongs only to point 2.

**R2 (major).** sigcn-gitops-argocd/recap. quote: "Argo CD, program yang menjaga servernya, menambah salinan ketiga." why: spesifik. Argo CD syncs the cluster to the repo; it does not "guard servers". direction: "Argo CD melihat bedanya dan menyamakan cluster."

**R3 (minor).** fora-ngobrol-karier/recap. quote: "Postmortem, catatan pembahasan insiden di kantor lama, jadi bahan belajar Terraform ... yang paling nempel, karena tiap perintah ada alasannya." why: spesifik. Two glosses in one sentence, and it is unclear who learned it. direction: say whose story it is and one concrete thing they did in Terraform.

**R4 (minor).** sigcn-observability/recap/instagram. quote: "Ringkasan begini jauh lebih kecil daripada log tiap request, jadi biasanya bisa disimpan lebih lama untuk dashboard dan alert." why: platform. The longest recap point is 260 characters in a five-point caption; people stop at point 2. direction: one sentence per point.

## 4. Machine summary

```json
{
  "role": "community",
  "round": 6,
  "posts": [
    {
      "id": "sigcn-gitops-argocd/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
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
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/announce/linkedin",
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
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/instagram",
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
      "id": "sigcn-gitops-argocd/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
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
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 2,
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
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
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
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
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
        "platform": 3,
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
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/instagram",
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
      "id": "sigcn-kubernetes-pemula/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
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
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 2,
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
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 3,
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
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/instagram",
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
      "id": "sigcn-observability/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
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
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 2,
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
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
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
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
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
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
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
      "id": "fora-ngobrol-karier/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/instagram",
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
      "id": "fora-ngobrol-karier/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
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
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 2,
        "platform": 3,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "fora-ngobrol-karier/speakers/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 2,
        "platform": 2,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "fora-ngobrol-karier/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 2,
        "platform": 3,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "fora-ngobrol-karier/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/recap/x",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 2,
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
