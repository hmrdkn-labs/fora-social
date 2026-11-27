# Review round 6: newcomer

## Overall

- Biggest problem: most posts assume a reader who already knows the words. Hooks and topic lists use `kubectl apply`, `prod`, Pod, Deployment, OTLP and `duration_ms` before anything explains them; "SIG CN", "FORA" and "Cloud Native 101" are never explained outside the sig-intro posts.
- Second: the same one-line problem statement is reused in cover, reminder and live (and X announce), so a follower sees the same sentence three times in a few days. Sig-intro and speakers posts give a newcomer nothing to answer.
- Third: nowhere does it say what clicking the invite actually does (Discord account needed? mic starts off? camera? can I join late?). The permission line "Dengerin aja boleh, mic juga boleh." is there on every post, but the mechanics are not.
- Works: the permission to stay silent is said plainly everywhere. The recap questions ("Bagian mana dari GitOps yang masih bikin kamu bingung?") and the Karier host note (40 lamaran, 2 dibalas) are things a beginner can answer. Ngobrol Karier explains its own jargon (on-call, runbook, postmortem, Terraform) in the same sentence. Dates, times and weekdays agree across posters and captions in all 84 posts.
- Scope: all 7 post types x 4 sessions x 3 platforms = 84 posts. Captions read in full; 20 of the 28 contact sheets opened, the rest share the same templates (text per session comes from the same YAML). "(contoh)" after names is sample-data marking and is not scored.

## Patterns

**P1 (major) Join mechanics not explained.** Posts: all announce posts, every session (poster steps in `ig-carousel 04`, `li-doc 04`, caption).
- Quote: "Buka server Discord FORA lewat link di bawah." / "Masuk ke voice channel sig-cn-voice pada Sab, 19 Des, 19.30 WIB." / "Dengerin aja boleh, mau langsung nyalain mic juga boleh."
- Why (pemula): someone who has never been in a voice channel is told where to go, not what happens. No word on needing a free Discord account, whether the mic starts muted, whether a camera is used, or how to leave. "Mic juga boleh" reads as "a mic is allowed".
- Direction: one plain sentence in the steps, if true: akun Discord gratis, mic mati sampai kamu nyalain sendiri, kamera nggak dipakai. Keep it out of the caption.

**P2 (major) Community names never explained.** Posts: cover and sig-intro X for gitops, kubernetes, observability; announce poster header.
- Quote: "Cloud Native 101 bareng SIG CN × FORA, kali ini soal GitOps." / "SIG CN di FORA. Ngobrol soal menjalankan aplikasi di cloud, lewat suara."
- Why (pemula): SIG, FORA and "Cloud Native 101" are unexplained for a first-time visitor. Only the IG/LinkedIn sig-intro captions expand them, and the Karier sig-intro is the only one that spells out "Forum Rangkai" and "special interest group".
- Direction: one clause at first mention, e.g. "SIG CN (grup cloud native di FORA)". Say that Cloud Native 101 is a series of sessions that does not need the earlier ones.

**P3 (major) Jargon in hooks, topic lists and bios, with no gloss on first use.** Posts: announce and speakers for gitops, kubernetes, observability.
- Quote: "Pernah ada yang kubectl apply langsung ke prod jam 11 malam?" / topics "Argo CD Application dan sync", "Rollback pakai git revert", "Distributed tracing", "Kenapa container butuh orkestrasi" / "Bima membaca kubectl describe dari satu Pod" / "Rina menyiapkan Argo CD yang sudah terpasang".
- Why (pemula): a first-year student cannot tell whether "Pod" or "Argo CD yang sudah terpasang" is something they should already know. The only prerequisite ("Cukup tahu Git dasar", "Cukup tahu apa itu container") lives on poster slide 2 and not in the caption.
- Direction: gloss each tool once in the clause where it appears, as the recap and Karier posts already do for Terraform and runbook. Put the prerequisite in the caption.

**P4 (major) Recap points written for people who were there.** Posts: recap, all platforms, gitops, kubernetes, observability.
- Quote: "aplikasinya berstatus OutOfSync, dan sync menyamakannya dengan repo" / "Datanya dikirim lewat OTLP, format standar OpenTelemetry untuk mengirim data" / "field seperti duration_ms bisa disaring" / "Satu Pod bisa berisi beberapa container yang berbagi network dan storage."
- Why (pemula): the recap is the post a newcomer reads to decide whether to come next time, and it is the densest text in the set. The X thread shows one arbitrary point out of context (gitops: repo manifest, observability: OTLP).
- Direction: lead each point with the plain consequence, keep one technical term per point, and let the X thread pick the easiest point.

**P5 (minor) Same permission line on every post, three times on one poster set.** Posts: all.
- Quote: "Dengerin aja boleh, mic juga boleh." (caption) + step 3 "Dengerin aja boleh, mau langsung nyalain mic juga boleh." + channel box with the same words.
- Why: said once it welcomes; said on every post, in every format, it reads as a formula (`docs/voice.md` rule 4).
- Direction: poster box says it once; captions vary or drop it after the announce.

**P6 (major) Karier asks for a story and then says everyone tells one.** Posts: fora-ngobrol-karier announce, speakers (all platforms).
- Quote: "Bawa satu cerita soal kerja di tech yang mau kamu ceritakan atau tanyakan." (poster `ig-carousel 02`) / "Tanpa pembicara tamu, jadi yang cerita kita semua."
- Why (pemula): a student with no job yet hears an obligation that contradicts "dengerin aja boleh".
- Direction: say a question is enough and that not working yet is fine.

**P7 (minor) IG posters point at a link that cannot be tapped.** Posts: every IG poster set.
- Quote: "Link-nya ada di bawah." with "discord.gg/rSepJu7Wb" on the image.
- Why: on IG, text on an image is not a link; the caption says "link di bio" but the poster does not.
- Direction: IG variant of the step says "Link di bio".

**P8 (minor) The time is the thinnest text on reminder and live posters.** Posts: reminder, live, all formats.
- Quote: "JAM 19.30 WIB", "SEJAK 19.30 WIB" in outline lettering next to a solid "NANTI" / "LIVE SEKARANG".
- Why (jelas): readable on the sheet, but the line a scroller needs is the weakest.
- Direction: solid fill for the time.

**P9 (minor) Live posts do not say late arrival is fine.** Posts: live, all sessions.
- Quote: "Sudah mulai jam 19.30 WIB." / "Live sekarang, bersama Bima (contoh)..."
- Why (pemula): a newcomer's main fear is walking into a talk already in progress.
- Direction: add "masuk aja, telat nggak apa-apa" to the live caption only.

**P10 (minor) Recap caption thanks fewer people than the poster.** Posts: recap, gitops, kubernetes, observability, karier.
- Quote: caption "Makasih Dani (contoh)." vs poster "Terima kasih Dani (contoh) yang sudah berbagi, dan Rina (contoh) yang memandu." (karier: poster also thanks "semua yang ikut ngobrol").
- Direction: same names in both.

**P11 (major) One problem line is replayed in cover, reminder, live (and X announce).** Posts: cover, reminder, live, all sessions, all platforms.
- Quote: "Deploy masih lewat perintah manual, dan nggak ada yang yakin apa yang sebenarnya jalan di server." / "Aplikasi sudah jalan di laptop, tapi belum pernah dicoba di Kubernetes." / "Pengguna lapor aplikasinya lambat. Dicek dari mana dulu?" / "Lamaran sudah dikirim ke mana-mana, tapi nggak ada kabar dan nggak jelas salahnya di mana."
- Why (manusia): `docs/voice.md` rule 5 calls this the loudest tell. A reminder is one practical detail and live is "come in now".
- Direction: reminder carries only the practical detail (headset, ten minutes early, what to have open); live is one line.

**P12 (major) Sig-intro and speakers posts give nothing to answer.** Posts: sig-intro all sessions, speakers gitops, observability.
- Quote: "Satu orang cerita, yang lain nimbrung atau nanya." / "Dani (contoh), SRE. Tim Dani dulu deploy dengan kubectl apply manual, dan dia cerita kenapa akhirnya pindah ke GitOps."
- Why (ngobrol): a newcomer has no question to bring or to reply to. The Sari bio ("cerita bagian mana yang bikin dia bingung") does it right.
- Direction: end with something answerable, e.g. what they would ask a speaker.

**P13 (major) Kubernetes recap point 1 implies a bare Pod comes back by itself.** Posts: sigcn-kubernetes-pemula/recap/instagram, linkedin.
- Quote: "Kalau satu Pod hilang, yang muncul adalah Pod baru di salah satu mesin yang masih hidup." and "Kubernetes menjalankan aplikasi per Pod."
- Why (spesifik): the replacement comes from the Deployment (point 2); point 1 says it as a property of a Pod. A newcomer takes away the wrong model. The second sentence is filler.
- Direction: move the replacement sentence under Deployment and keep point 1 to what a Pod is.

**P14 (minor) Karier host role contradicts the bio.** Posts: karier speakers, announce poster `ig-feed`.
- Quote: "Dika (contoh) @dika_contoh, Software Engineer. Dika dulu developer, sekarang SRE."
- Direction: role "SRE", or drop "sekarang SRE".

## Per post

Scores in order: jelas, manusia, ngobrol, pemula, spesifik, platform, konsisten. Verdict `ok` or `fix`; none `slop`. Issues are pattern IDs above; there are no extra single-post issues.

| post | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P7, P5 |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P5 |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P5 |
| sigcn-gitops-argocd/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P7, P5 |
| sigcn-gitops-argocd/reminder/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| sigcn-gitops-argocd/live/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P7, P5 |
| sigcn-gitops-argocd/live/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| sigcn-gitops-argocd/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P10, P4, P7, P5 |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P10, P4, P5 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P10, P4, P5 |
| sigcn-gitops-argocd/cover/instagram | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P7, P5 |
| sigcn-gitops-argocd/cover/x | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P5 |
| sigcn-gitops-argocd/cover/linkedin | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P5 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12, P7 |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P12, P2 |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12 |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P3, P12, P7, P5 |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P3, P12, P5 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P3, P12, P5 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P7, P5 |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P5 |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P5 |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P7, P5 |
| sigcn-kubernetes-pemula/reminder/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| sigcn-kubernetes-pemula/live/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P7, P5 |
| sigcn-kubernetes-pemula/live/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 4 | 3 | 3 | 4 | 4 | fix | P10, P4, P13, P7, P5 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P10, P4, P5 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 4 | 3 | 3 | 4 | 4 | fix | P10, P4, P13, P5 |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P7, P5 |
| sigcn-kubernetes-pemula/cover/x | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P5 |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P5 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12, P7 |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P12, P2 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3, P7, P5 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3, P5 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3, P5 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P7, P5 |
| sigcn-observability/announce/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P5 |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P3, P5 |
| sigcn-observability/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P7, P5 |
| sigcn-observability/reminder/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| sigcn-observability/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| sigcn-observability/live/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P7, P5 |
| sigcn-observability/live/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| sigcn-observability/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| sigcn-observability/recap/instagram | 4 | 4 | 4 | 2 | 4 | 4 | 4 | fix | P10, P4, P7, P5 |
| sigcn-observability/recap/x | 4 | 4 | 4 | 2 | 4 | 4 | 4 | fix | P10, P4, P5 |
| sigcn-observability/recap/linkedin | 4 | 4 | 4 | 2 | 4 | 4 | 4 | fix | P10, P4, P5 |
| sigcn-observability/cover/instagram | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P7, P5 |
| sigcn-observability/cover/x | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P5 |
| sigcn-observability/cover/linkedin | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P11, P2, P5 |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12, P7 |
| sigcn-observability/sig-intro/x | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P12, P2 |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12 |
| sigcn-observability/speakers/instagram | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P3, P12, P7, P5 |
| sigcn-observability/speakers/x | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P3, P12, P5 |
| sigcn-observability/speakers/linkedin | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P3, P12, P5 |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P6, P7, P5 |
| fora-ngobrol-karier/announce/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P6, P5 |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P6, P5 |
| fora-ngobrol-karier/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P7, P5 |
| fora-ngobrol-karier/reminder/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| fora-ngobrol-karier/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P8, P5 |
| fora-ngobrol-karier/live/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P7, P5 |
| fora-ngobrol-karier/live/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| fora-ngobrol-karier/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P9, P8, P5 |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | P10, P7, P5 |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | P10, P5 |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | P10, P5 |
| fora-ngobrol-karier/cover/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P7, P5 |
| fora-ngobrol-karier/cover/x | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P5 |
| fora-ngobrol-karier/cover/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P11, P5 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12, P7 |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12 |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P12 |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P6, P14, P7, P5 |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P6, P14, P5 |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P6, P14, P5 |

## Machine summary

```json
{
  "role": "newcomer",
  "round": 6,
  "posts": [
    {
      "id": "sigcn-gitops-argocd/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/reminder/instagram",
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
      "id": "sigcn-gitops-argocd/reminder/x",
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
      "id": "sigcn-gitops-argocd/reminder/linkedin",
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
      "id": "sigcn-gitops-argocd/live/instagram",
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
      "id": "sigcn-gitops-argocd/live/x",
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
      "id": "sigcn-gitops-argocd/live/linkedin",
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
      "id": "sigcn-gitops-argocd/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/cover/x",
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
      "id": "sigcn-gitops-argocd/cover/linkedin",
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
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
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
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
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
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
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
      "id": "sigcn-kubernetes-pemula/reminder/x",
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
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
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
      "id": "sigcn-kubernetes-pemula/live/instagram",
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
      "id": "sigcn-kubernetes-pemula/live/x",
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
      "id": "sigcn-kubernetes-pemula/live/linkedin",
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
      "id": "sigcn-kubernetes-pemula/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 3,
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
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 3,
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
      "id": "sigcn-kubernetes-pemula/cover/x",
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
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-observability/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-observability/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-observability/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-observability/reminder/instagram",
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
      "id": "sigcn-observability/reminder/x",
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
      "id": "sigcn-observability/reminder/linkedin",
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
      "id": "sigcn-observability/live/instagram",
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
      "id": "sigcn-observability/live/x",
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
      "id": "sigcn-observability/live/linkedin",
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
      "id": "sigcn-observability/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 2,
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
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 2,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 2,
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
      "id": "sigcn-observability/cover/x",
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
      "id": "sigcn-observability/cover/linkedin",
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
      "id": "sigcn-observability/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-observability/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-observability/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
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
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
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
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "fora-ngobrol-karier/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "fora-ngobrol-karier/reminder/instagram",
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
      "id": "fora-ngobrol-karier/reminder/x",
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
      "id": "fora-ngobrol-karier/reminder/linkedin",
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
      "id": "fora-ngobrol-karier/live/instagram",
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
      "id": "fora-ngobrol-karier/live/x",
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
      "id": "fora-ngobrol-karier/live/linkedin",
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
      "id": "fora-ngobrol-karier/recap/instagram",
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
      "id": "fora-ngobrol-karier/recap/x",
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
      "id": "fora-ngobrol-karier/recap/linkedin",
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
      "id": "fora-ngobrol-karier/cover/x",
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
      "id": "fora-ngobrol-karier/cover/linkedin",
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
      "id": "fora-ngobrol-karier/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "fora-ngobrol-karier/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "fora-ngobrol-karier/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "fora-ngobrol-karier/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "fora-ngobrol-karier/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    }
  ]
}
```
