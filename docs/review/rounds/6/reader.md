# Round 6 review: reader (dev pembaca)

Scope: all 7 post types in `POST_TYPES` x 4 sessions x 3 platforms = 84 posts (reviewer.md says 72; the code has 84). Captions read in full. Contact sheets opened: 7 gitops, 7 karier, k8s announce, observability recap and cover (17 of 28). The other 11 use the same templates, and I scored their posters by that assumption `[INFERENCE]`.

## 1. Overall

- Biggest problems: 80 of 84 posts have a score below 4; 7 posts are slop (the short `sig-intro` on X and LinkedIn). The same closing line, the same hook in cover/reminder/live, and one X skeleton make the feed feel like one template.
- Recap IG/LinkedIn are walls of glossed prose; the X recap thread carries one point out of 3-5. Speakers posts are one skeleton three times.
- Live and reminder posters put the key fact (`SEJAK 19.30 WIB`, `JAM 19.30 WIB`) in thin outline type on saturated colour; reminder's biggest word is `NANTI`.
- Works: announce on IG/LinkedIn (real hooks, date, time, channel, join line, all agree with the poster); `Ngobrol Karier` announce is the most human post (40 lamaran, 2 dibalas); the weekday/date pairs are right; no emoji, no em dash.

## 2. Patterns

**P1 (minor, all 84).** The same reassurance in every caption and poster, three wordings: `Dengerin aja boleh, mic juga boleh.` / `Mau dengerin aja boleh, mau nyalain mic juga boleh.` / `Dengerin aja nggak apa-apa, ngomong juga silakan.` / `Boleh dengarkan saja, boleh juga ikut bicara.` Poster steps repeat it again (`Dengerin aja boleh, mau langsung nyalain mic juga boleh.`). Why: pemula/manusia; voice.md rule 4 says once, and scrolling five posts you see it five times. Direction: keep it in announce and the join slide; give reminder/live/cover/speakers/recap a different practical line (headset, which channel, what to bring) or nothing.

**P2 (major, cover/reminder/live, all 4 sessions: 36 posts).** The same hook sentence is replayed verbatim. GitOps: `Deploy masih lewat perintah manual, dan nggak ada yang yakin apa yang sebenarnya jalan di server.` in cover, reminder, live. K8s: `Aplikasi sudah jalan di laptop, tapi belum pernah dicoba di Kubernetes.` x3. Karier: `Lamaran sudah dikirim ke mana-mana, tapi nggak ada kabar dan nggak jelas salahnya di mana.` x3. Observability: `Pengguna lapor aplikasinya lambat. Dicek dari mana dulu?` x3 (plus announce X). Why: manusia/ngobrol; voice.md rule 5 calls this the loudest tell. A statement of a problem is also not something to reply to. Direction: reminder = one practical detail, live = come in now plus what is being said right now (a line from the talk), cover = the series.

**P3 (major, all 28 X posts).** One skeleton: hook line / title line / date line / channel line / link / one hashtag, each on its own line. GitOps announce: `Pernah ada yang kubectl apply langsung ke prod jam 11 malam?` / `GitOps dengan Argo CD` / `Sab, 19 Des jam 19.30 WIB.` / `Masuk aja ke voice channel...`. Why: platform/manusia; it reads like a form, not a person tweeting, and the bare title line in the middle breaks the sentence. Direction: 1-2 sentences, title inside the sentence, date once, link last; the image already carries the rest.

**P4 (major, recap, all sessions).** IG/LinkedIn caption is 120-200 words: numbered points that each have a bolded-looking claim plus 2-3 sentences with a gloss in the middle: `Ganti angka 2 jadi 3 lalu commit, dan Argo CD, program yang menjaga servernya, menambah salinan ketiga.`, `Postmortem, catatan pembahasan insiden di kantor lama, jadi bahan belajar Terraform (alat untuk membuat server lewat file konfigurasi) yang paling nempel`. Every point has the same shape. IG and LinkedIn carry identical text. X thread is 3 tweets, tweet 1 has a thanks line only, tweet 2 has one point (GitOps: point 3 of 4, the least interesting): `Rekap "GitOps dengan Argo CD". 11 orang ngobrol di voice channel.` Why: manusia/platform/spesifik. Direction: IG shorter (2-3 points, the one a participant said out loud), X as a single tweet with the best point and the question, gloss once in a clause not mid-sentence.

**P5 (major, speakers, all sessions).** `Name (contoh), Role. Name verb ...` three times in a row, no question, nothing to bring, and vague duties: `Bima membaca kubectl describe dari satu Pod ... yang gagal start.`, `Rina menyiapkan Argo CD yang sudah terpasang.` X thread is 3 tweets for 2 short blurbs. Why: manusia/ngobrol/spesifik. Direction: one sentence per person on what they will actually say or show, plus one thing to bring or ask; X as one tweet; vary the shape per person.

**P6 (major, reminder + live posters, all sessions).** Live: `LIVE SEKARANG` big, but `SEJAK 19.30 WIB` is thin outline type on blue/orange (ig-feed, ig-story, x, li-link, li-doc). Reminder: biggest word is `NANTI`, `JAM 19.30 WIB` in outline, the title is the third line, the day is small. Why: jelas; at phone size the outline text is the weakest-contrast text on the poster and it is the key fact. Direction: solid fill for time; put the day (`HARI INI` / `SAB`) in the big line; title larger than the sub-lines.

**P7 (major, sig-intro).** Poster has the label pair `UNTUK SIAPA / Yang penasaran. Pemula juga boleh nanya` and `FORMAT / Ngobrol lewat suara di voice channel Discord` (voice.md rule 9: label and self-answered question), and a 12px paragraph on ig-feed/ig-story. X and short LinkedIn/IG captions: `SIG CN di FORA. Ngobrol soal menjalankan aplikasi di cloud, lewat suara.` / `FORA. Komunitas tech kecil yang ngobrol lewat suara di Discord.` followed by the same `Sesi terdekat soal "..."` line; no hook, nothing to answer. Marked slop on X (4) and LinkedIn (3 short ones). Direction: one real situation (the IG long version `aplikasi yang tiba-tiba lambat ... deploy yang bikin semuanya mogok` already works) on all platforms; drop the label pair.

**P8 (major, cover; some announce).** Jargon never explained on poster or cover: `Cloud Native 101`, `SIG CN`, `Distributed tracing`, `OpenTelemetry, satu kode untuk banyak backend`, and `voice channel` is never said to mean no camera, no video. The cover caption is the announce minus the topic list, so it adds nothing: `Cloud Native 101 bareng SIG CN x FORA, kali ini soal GitOps. Sabtu, 19 Desember 2026, 19.30-21.00 WIB.` Direction: cover says what the series is in one concrete line; say once that it is voice only.

**S1 (major, karier/speakers, all 3 platforms).** `Dika (contoh) @dika_contoh, Software Engineer. Dika dulu developer, sekarang SRE` contradicts the role line on the same post and the poster.
**S2 (major, k8s/recap IG, LinkedIn).** `Kubernetes menjalankan aplikasi per Pod. Kalau satu Pod hilang, yang muncul adalah Pod baru di salah satu mesin yang masih hidup.` A bare Pod is not replaced; a controller (Deployment) does it. Point 2 says so correctly, so point 1 contradicts it.
**S3 (minor, k8s/live/instagram).** First line is the credit line: `Live sekarang, bersama Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, dipandu Rina (contoh) @rina_contoh.` Hook is lost in the preview.
**S4 (minor, LinkedIn k8s and karier).** IG-style `@bima_contoh`, `@dika_contoh` handles on LinkedIn where they do not link.
**S5 (minor, gitops/recap IG, LinkedIn).** Point 1 is one sentence with two nested appositions (see P4 quote).
**S6 (major, karier/announce/linkedin).** Opens with a label line `Ngobrol Karier di Tech, bareng FORA`, date next, hook only in the second paragraph.
**S7 (major, k8s/recap).** Closing question `Deployment membuat Pod pengganti sendiri. Waktu proses aplikasimu mati, siapa atau apa yang menyalakannya lagi?` is hard to parse and nobody has an obvious answer to type.

Ratings notes: `(contoh)` sample markers and example handles are treated as sample data, not as findings. Caption `#SIGCN` and `#FORA` are not searched tags but the other tags are real.

## 3. Per post

Verdict `fix` = at least one score below 4, not slop. `slop` = scroll past. Issue codes are the Patterns/S items above (`P1` is listed on every non-`ok` post; it never lowers a score alone). Blocking is 0 everywhere.

| post | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
|---|---|---|---|---|---|---|---|---|---|
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/announce/x | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | P1, P3 |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/reminder/instagram | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-gitops-argocd/reminder/x | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| sigcn-gitops-argocd/reminder/linkedin | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-gitops-argocd/live/instagram | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-gitops-argocd/live/x | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| sigcn-gitops-argocd/live/linkedin | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-gitops-argocd/recap/instagram | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | P1, P4, S5 |
| sigcn-gitops-argocd/recap/x | 4 | 3 | 4 | 4 | 3 | 3 | 4 | fix | P1, P3, P4 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P4, S5 |
| sigcn-gitops-argocd/cover/instagram | 4 | 3 | 3 | 3 | 3 | 4 | 4 | fix | P1, P2, P8 |
| sigcn-gitops-argocd/cover/x | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P2, P3, P8 |
| sigcn-gitops-argocd/cover/linkedin | 4 | 3 | 3 | 3 | 3 | 4 | 4 | fix | P1, P2, P8 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P7 |
| sigcn-gitops-argocd/sig-intro/x | 3 | 2 | 2 | 3 | 2 | 3 | 4 | slop | P1, P3, P7 |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 3 | 2 | 4 | 3 | 4 | 4 | slop | P1, P7 |
| sigcn-gitops-argocd/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P5 |
| sigcn-gitops-argocd/speakers/x | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P3, P5 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P5 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/announce/x | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | P1, P3 |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 3 | 4 | fix | P1, S4 |
| sigcn-kubernetes-pemula/reminder/instagram | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-kubernetes-pemula/reminder/x | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| sigcn-kubernetes-pemula/reminder/linkedin | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-kubernetes-pemula/live/instagram | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6, S3 |
| sigcn-kubernetes-pemula/live/x | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| sigcn-kubernetes-pemula/live/linkedin | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P4, S2, S7 |
| sigcn-kubernetes-pemula/recap/x | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P3, P4, S7 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P4, S2, S7 |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 3 | 3 | 3 | 3 | 4 | 4 | fix | P1, P2, P8 |
| sigcn-kubernetes-pemula/cover/x | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P2, P3, P8 |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 3 | 3 | 3 | 3 | 4 | 4 | fix | P1, P2, P8 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 3 | 2 | 4 | 3 | 4 | 4 | fix | P1, P7 |
| sigcn-kubernetes-pemula/sig-intro/x | 3 | 2 | 2 | 3 | 2 | 3 | 4 | slop | P1, P3, P7 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 3 | 2 | 4 | 3 | 4 | 4 | slop | P1, P7 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P5 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P3, P5 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P5, S4 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P8 |
| sigcn-observability/announce/x | 4 | 3 | 4 | 3 | 4 | 3 | 4 | fix | P1, P3, P8 |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P8 |
| sigcn-observability/reminder/instagram | 3 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-observability/reminder/x | 3 | 3 | 4 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| sigcn-observability/reminder/linkedin | 3 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-observability/live/instagram | 3 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-observability/live/x | 3 | 3 | 4 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| sigcn-observability/live/linkedin | 3 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| sigcn-observability/recap/instagram | 4 | 3 | 4 | 4 | 4 | 3 | 4 | fix | P1, P4 |
| sigcn-observability/recap/x | 4 | 3 | 4 | 4 | 3 | 3 | 4 | fix | P1, P3, P4 |
| sigcn-observability/recap/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P4 |
| sigcn-observability/cover/instagram | 4 | 3 | 4 | 3 | 3 | 4 | 4 | fix | P1, P2, P8 |
| sigcn-observability/cover/x | 4 | 3 | 4 | 3 | 3 | 3 | 4 | fix | P1, P2, P3, P8 |
| sigcn-observability/cover/linkedin | 4 | 3 | 4 | 3 | 3 | 4 | 4 | fix | P1, P2, P8 |
| sigcn-observability/sig-intro/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P7 |
| sigcn-observability/sig-intro/x | 3 | 2 | 2 | 3 | 2 | 3 | 4 | slop | P1, P3, P7 |
| sigcn-observability/sig-intro/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P7 |
| sigcn-observability/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P5 |
| sigcn-observability/speakers/x | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P3, P5 |
| sigcn-observability/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P5 |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/announce/x | 4 | 3 | 5 | 4 | 4 | 3 | 4 | fix | P1, P3 |
| fora-ngobrol-karier/announce/linkedin | 4 | 3 | 5 | 4 | 4 | 3 | 4 | fix | P1, S6, S4 |
| fora-ngobrol-karier/reminder/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| fora-ngobrol-karier/reminder/x | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| fora-ngobrol-karier/reminder/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| fora-ngobrol-karier/live/instagram | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| fora-ngobrol-karier/live/x | 3 | 3 | 3 | 4 | 4 | 3 | 4 | fix | P1, P2, P3, P6 |
| fora-ngobrol-karier/live/linkedin | 3 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P1, P2, P6 |
| fora-ngobrol-karier/recap/instagram | 4 | 3 | 5 | 4 | 4 | 3 | 4 | fix | P1, P4 |
| fora-ngobrol-karier/recap/x | 4 | 3 | 5 | 4 | 3 | 3 | 4 | fix | P1, P3, P4 |
| fora-ngobrol-karier/recap/linkedin | 4 | 3 | 5 | 4 | 4 | 4 | 4 | fix | P1, P4 |
| fora-ngobrol-karier/cover/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P8, P8 |
| fora-ngobrol-karier/cover/x | 4 | 3 | 3 | 4 | 3 | 3 | 4 | fix | P1, P2, P3, P8, P8 |
| fora-ngobrol-karier/cover/linkedin | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P1, P2, P8, P8 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P7 |
| fora-ngobrol-karier/sig-intro/x | 3 | 2 | 2 | 3 | 2 | 3 | 4 | slop | P1, P3, P7 |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 3 | 2 | 4 | 3 | 4 | 4 | slop | P1, P7 |
| fora-ngobrol-karier/speakers/instagram | 4 | 3 | 3 | 4 | 3 | 4 | 3 | fix | P1, P5, S1 |
| fora-ngobrol-karier/speakers/x | 4 | 3 | 3 | 4 | 3 | 3 | 3 | fix | P1, P3, P5, S1 |
| fora-ngobrol-karier/speakers/linkedin | 4 | 3 | 3 | 4 | 3 | 3 | 3 | fix | P1, P5, S1, S4 |

## 4. Machine summary

```json
{
  "role": "reader",
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
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
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
      "id": "sigcn-gitops-argocd/reminder/instagram",
      "scores": {
        "jelas": 3,
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
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/instagram",
      "scores": {
        "jelas": 3,
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
      "id": "sigcn-gitops-argocd/live/x",
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
      "id": "sigcn-gitops-argocd/live/linkedin",
      "scores": {
        "jelas": 3,
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
      "id": "sigcn-gitops-argocd/recap/instagram",
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
      "id": "sigcn-gitops-argocd/recap/x",
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
      "id": "sigcn-gitops-argocd/recap/linkedin",
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
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 3,
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
      "id": "sigcn-gitops-argocd/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 3,
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
      "id": "sigcn-gitops-argocd/sig-intro/x",
      "scores": {
        "jelas": 3,
        "manusia": 2,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 2,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
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
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
      "scores": {
        "jelas": 3,
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
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/instagram",
      "scores": {
        "jelas": 3,
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
      "id": "sigcn-kubernetes-pemula/live/x",
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
      "id": "sigcn-kubernetes-pemula/live/linkedin",
      "scores": {
        "jelas": 3,
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
      "id": "sigcn-kubernetes-pemula/recap/instagram",
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
      "id": "sigcn-kubernetes-pemula/recap/x",
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
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
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 3,
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
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 3,
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
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
      "scores": {
        "jelas": 3,
        "manusia": 2,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 2,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
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
        "manusia": 3,
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
        "jelas": 3,
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
        "jelas": 3,
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
      "id": "sigcn-observability/reminder/linkedin",
      "scores": {
        "jelas": 3,
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
        "jelas": 3,
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
        "jelas": 3,
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
      "id": "sigcn-observability/live/linkedin",
      "scores": {
        "jelas": 3,
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
      "id": "sigcn-observability/recap/linkedin",
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
      "id": "sigcn-observability/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-observability/cover/x",
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
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-observability/sig-intro/instagram",
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
      "id": "sigcn-observability/sig-intro/x",
      "scores": {
        "jelas": 3,
        "manusia": 2,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 2,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/linkedin",
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
        "ngobrol": 5,
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
        "manusia": 3,
        "ngobrol": 5,
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
        "manusia": 3,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
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
        "manusia": 4,
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
        "jelas": 3,
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
      "id": "fora-ngobrol-karier/live/x",
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
      "id": "fora-ngobrol-karier/live/linkedin",
      "scores": {
        "jelas": 3,
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
      "id": "fora-ngobrol-karier/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
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
        "ngobrol": 5,
        "pemula": 4,
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
        "ngobrol": 5,
        "pemula": 4,
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
      "id": "fora-ngobrol-karier/cover/linkedin",
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
        "jelas": 3,
        "manusia": 2,
        "ngobrol": 2,
        "pemula": 3,
        "spesifik": 2,
        "platform": 3,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
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
      "id": "fora-ngobrol-karier/speakers/instagram",
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
      "id": "fora-ngobrol-karier/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 3,
        "konsisten": 3
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
        "platform": 3,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    }
  ]
}
```
