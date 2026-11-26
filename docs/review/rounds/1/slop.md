# Round 1 · slop

## Overall

Copy is mostly plain Indonesian; no puffery, forced translations, emoji bullets or negative parallelism found.
The generated-series tell is repetition: the same anecdote, invitation and slide script keep returning.
Career recap reads like generic advice; X recaps often discard the useful explanation.
Cover posters omit scheduling details; reminder artwork says live while captions say later today.
Reviewed all 24 caption files, four session YAMLs, two SIG definitions and all 24 contact sheets, including every displayed format. Sample names and attendance are treated as labelled fixture data, not evidence of real events.

## Patterns

Scope notation: ALL = fora-ngobrol-karier, sigcn-gitops-argocd, sigcn-kubernetes-pemula, sigcn-observability; platforms = instagram, x, linkedin. Each scope denotes every matching post ID; image paths are relative to examples/<session>/. Scores assess caption plus platform images. Recaps are judged as past-event notes, not penalised for lacking a future date. Blocking counts count blocking issues per post; none classified blocking in this fixture review.

### P1 · major · Same script wearing different titles
- **Where:** ALL/{cover,sig-intro,speakers}/{instagram,x,linkedin}; captions and carousel/document closing slides.
- **Quotes:** "Cloud Native 101 bareng SIG CN × FORA.", "Sesi terdekat soal", "Link-nya ada di bawah.", "Buka server Discord FORA lewat link di bawah.", "Dengerin aja boleh, mau langsung nyalain mic juga boleh."
- **Why:** manusia. Six post types should have different editorial jobs, but cover, introduction and speaker cards repeatedly funnel into the same topic list and numbered three-step join slide. These are literal instructions, not a forbidden rhetorical triad; the tell is cumulative sameness. The standalone invitation is fine, its near-compulsory reuse is not.
- **Direction:** Keep essential logistics, cut redundant scaffolding and give each type its own reason to exist. Introduce a speaker through what they will demonstrate or want to discuss, not just a name/role repeated from announce.

### P2 · major · Anecdote pasted into the entire campaign
- **Where:** {sigcn-gitops-argocd,sigcn-kubernetes-pemula,sigcn-observability}/{announce,cover,reminder}/{instagram,linkedin}; captions.
- **Quotes:** "Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps."; "Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya. Kita ulangi percobaan itu bareng-bareng."; "Aplikasi jalan tapi lambat, dan kita nggak tahu kenapa. Kita lihat apa yang dijawab logs, metrics, dan traces, dan cara mulai tanpa pasang semuanya sekaligus."
- **Why:** manusia. Each opening works once; replaying the identical personal memory or problem statement in announce, cover and same-day reminder sounds assembled. GitOps also asks and immediately answers its own question, a specific voice-guide tell; the concrete incident saves it from being empty hype.
- **Direction:** Use the anecdote once. A reminder can name the experiment or ask for a concrete problem to bring, without replaying the origin story. Attribute personal memories to the host when used as community copy.

### P3 · major · Covers look like topic dividers, not joinable sessions
- **Where:** ALL/cover/{instagram,x,linkedin}; ig-feed/cover.png, ig-story/cover.png, x/cover.png, li-link/cover.png and first carousel/document slides.
- **Quotes:** "Karier", "GitOps", "Kubernetes", "Observability"; footer "Voice channel · Discord · dengerin aja boleh".
- **Why:** jelas. Standalone covers have no day/date/time and no named voice channel. Later carousel slides carry logistics, but a single-image X/link post and IG feed/story do not. The caption cannot satisfy the poster-alone criterion.
- **Direction:** Put a compact dated session line and channel on the standalone cover; preserve theme hierarchy without hiding the actionable information.

### P4 · major · Permission is not a conversation starter
- **Where:** ALL/{recap,speakers,sig-intro}/{instagram,x,linkedin}; additionally ALL/{announce,cover,reminder}/x and fora-ngobrol-karier/reminder/{instagram,linkedin}; captions and posters.
- **Quotes:** "Dengerin aja boleh, mic juga boleh.", "Boleh dengarkan saja, boleh juga ikut bicara.", "Sesi berikutnya kita umumkan di Discord FORA".
- **Why:** ngobrol. These make joining permissible but give no specific question to answer or problem to bring. Speaker bios and topic names alone are one-way flyers. Technical IG/LinkedIn announce/reminder anecdotes do give a recognisable situation; those are not charged here.
- **Direction:** Replace a redundant sentence with one answerable prompt linked to this session. For recap, invite corrections or a concrete follow-up to one takeaway. Do not append another generic CTA everywhere.

### P5 · major · Today and live-now are merged
- **Where:** ALL/reminder/{instagram,x,linkedin}; captions versus ig-story/reminder.png and LIVE badges/CTA in all reminder formats.
- **Quotes:** poster "LIVE SEKARANG", "Masuk sekarang ke"; captions "hari ini jam 19.30 WIB", "mulai 19.30 WIB", "Jam 20.00 WIB nanti"; LinkedIn "Hari ini, 20.00–21.30 WIB".
- **Why:** konsisten and jelas. Before start, a live-now image is false; once live, "nanti" is false. The reminder type cannot be safely scheduled as one coherent post. Feed/X/link also omit calendar date, leaving only relative timing.
- **Direction:** Separate pre-start and live states, align caption and images, retain the date in a small readable line. This is a major fixture/content-contract issue, not a claim that an actual event was falsely advertised.

### P6 · major · Career recap is generic advice, not a remembered discussion
- **Where:** fora-ngobrol-karier/recap/{instagram,x,linkedin}; captions, all single-image recap summaries and carousel/document point slides.
- **Quotes:** "Proyek kecil yang selesai lebih berguna daripada banyak kursus", "Belajar dengan target yang jelas", "Pindah peran bisa dimulai dari tugas di sekitar peran tujuan".
- **Why:** manusia and spesifik. Three polished maxims could accompany almost any career session. The bodies add some useful direction, especially on-call/pipeline CI, but no actual project, question, decision or constraint from this conversation anchors them. X leaves only maxims.
- **Direction:** Record one concrete example discussed, what someone tried and what changed. Do not invent participant stories to make fixtures appear authentic.

### P7 · major · X recap turns into a label and table of contents
- **Where:** {sigcn-gitops-argocd,sigcn-kubernetes-pemula}/recap/x; caption X 2/3 and x/recap.png summary.
- **Quotes:** "Intinya:", "Git jadi source of truth", "Deployment menjaga jumlah replika".
- **Why:** manusia. The label-colon opener is an explicit voice-guide tell, and the middle tweet repeats the poster's headings rather than sharing the practical example in the long captions. A three-tweet thread spends its edges on attendance and joining rather than the actual note.
- **Direction:** Use the tweet budget for a useful causal explanation or command example; merge the ceremonial opening/closing where possible.

### P8 · major · Observability recap has a textbook's metronome
- **Where:** sigcn-observability/recap/{instagram,x,linkedin}; captions and point headings in all images.
- **Quotes:** "Logs menjawab apa yang terjadi", "Metrics menjawab seberapa sering dan seberapa lama", "Traces menjawab di mana waktunya habis"; X also "Intinya:"; LinkedIn "Catatan dari \"Observability: Logs, Metrics, Traces\":".
- **Why:** manusia. The three parallel definitions are technically useful, so this is fix rather than slop; alongside numbered definitions, stock thanks and stock invitation, the rhythm reads like an explainer template, not notes from people debugging something. The title's genuine three signal names are not themselves an empty triad.
- **Direction:** Keep the definitions, break their uniform delivery with one request-level example discussed in the session. Remove label-colon scaffolding rather than merely changing its label.

### P9 · minor · Speaker introduction repeats the roster
- **Where:** ALL/speakers/linkedin and sigcn-observability/speakers/instagram; captions.
- **Quotes:** "Kamis 14 Januari yang cerita Eko (contoh), dipandu Rina (contoh)." followed by "Eko (contoh), SRE" and "Rina (contoh), Platform Engineer, host"; career repeats Dika in prose and bullet.
- **Why:** manusia. Prose announcement plus roster plus date plus boilerplate invitation adds length without introducing the people. This supports P1, not an additional score deduction.
- **Direction:** Choose roster or prose; spend the freed space on what the person will show.

## Per post

Scores are ordered explicitly by the column names; 4 means serviceable, not exceptional. Issue references cover every score below 4. No claim that boilerplate proves machine authorship: slop verdicts describe how the repeated campaign reads.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/cover/instagram | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P3 |
| fora-ngobrol-karier/cover/x | 2 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P3, P4 |
| fora-ngobrol-karier/cover/linkedin | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P3 |
| fora-ngobrol-karier/recap/instagram | 4 | 2 | 3 | 4 | 3 | 4 | 4 | slop | P4, P6 |
| fora-ngobrol-karier/recap/x | 4 | 2 | 3 | 4 | 3 | 4 | 4 | slop | P4, P6 |
| fora-ngobrol-karier/recap/linkedin | 4 | 2 | 3 | 4 | 3 | 4 | 4 | slop | P4, P6 |
| fora-ngobrol-karier/reminder/instagram | 3 | 4 | 3 | 4 | 4 | 4 | 2 | fix | P4, P5 |
| fora-ngobrol-karier/reminder/x | 3 | 4 | 3 | 4 | 4 | 4 | 2 | fix | P4, P5 |
| fora-ngobrol-karier/reminder/linkedin | 3 | 4 | 3 | 4 | 4 | 4 | 2 | fix | P4, P5 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| fora-ngobrol-karier/sig-intro/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| fora-ngobrol-karier/speakers/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| fora-ngobrol-karier/speakers/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| fora-ngobrol-karier/speakers/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4, P9 |
| sigcn-gitops-argocd/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| sigcn-gitops-argocd/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-gitops-argocd/cover/instagram | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-gitops-argocd/cover/x | 2 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P3, P4 |
| sigcn-gitops-argocd/cover/linkedin | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4, I1 |
| sigcn-gitops-argocd/recap/x | 4 | 3 | 3 | 4 | 3 | 4 | 4 | fix | P4, I1, P7 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4, I1 |
| sigcn-gitops-argocd/reminder/instagram | 3 | 3 | 4 | 4 | 4 | 4 | 2 | slop | P2, P5 |
| sigcn-gitops-argocd/reminder/x | 3 | 4 | 3 | 4 | 4 | 4 | 2 | fix | P4, P5 |
| sigcn-gitops-argocd/reminder/linkedin | 3 | 3 | 4 | 4 | 4 | 4 | 2 | slop | P2, P5 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-gitops-argocd/sig-intro/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-gitops-argocd/speakers/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-gitops-argocd/speakers/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4, P9 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/cover/instagram | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-kubernetes-pemula/cover/x | 2 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P3, P4 |
| sigcn-kubernetes-pemula/cover/linkedin | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4, I2 |
| sigcn-kubernetes-pemula/recap/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P4, P7 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4, I2 |
| sigcn-kubernetes-pemula/reminder/instagram | 3 | 3 | 4 | 4 | 4 | 4 | 2 | slop | P2, P5 |
| sigcn-kubernetes-pemula/reminder/x | 3 | 4 | 3 | 4 | 4 | 4 | 2 | fix | P4, P5 |
| sigcn-kubernetes-pemula/reminder/linkedin | 3 | 3 | 4 | 4 | 4 | 4 | 2 | slop | P2, P5 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4, P9 |
| sigcn-observability/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-observability/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| sigcn-observability/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-observability/cover/instagram | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-observability/cover/x | 2 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P3, P4 |
| sigcn-observability/cover/linkedin | 2 | 3 | 4 | 4 | 4 | 4 | 4 | slop | P1, P2, P3 |
| sigcn-observability/recap/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P4, P8 |
| sigcn-observability/recap/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P4, P8 |
| sigcn-observability/recap/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | fix | P4, P8 |
| sigcn-observability/reminder/instagram | 3 | 3 | 4 | 4 | 4 | 4 | 2 | slop | P2, P5 |
| sigcn-observability/reminder/x | 3 | 4 | 3 | 4 | 4 | 4 | 2 | fix | P4, P5 |
| sigcn-observability/reminder/linkedin | 3 | 3 | 4 | 4 | 4 | 4 | 2 | slop | P2, P5 |
| sigcn-observability/sig-intro/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-observability/sig-intro/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-observability/sig-intro/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-observability/speakers/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4, P9 |
| sigcn-observability/speakers/x | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4 |
| sigcn-observability/speakers/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 4 | slop | P1, P4, P9 |

### Additional issues

#### I1 · major · Rollback promise omits the boundary
- **Where:** sigcn-gitops-argocd/recap/{instagram,x,linkedin}; captions and recap point heading in every format.
- **Quote:** "Rollback cukup dengan git revert"; long-caption body "Commit baru yang membatalkan perubahan, lalu disync. Riwayatnya tetap tercatat."
- **Why:** spesifik. Reverting desired manifests and syncing is a deployment rollback path, not a guarantee that database migrations or external side effects are undone. "cukup" makes a scoped demonstration sound universal; mentioning sync in the body does not repair that boundary in the standalone heading.
- **Direction:** Scope the claim to reverting the demonstrated manifest change; state that application/data compatibility must still be checked.

#### I2 · major · Pod restart and replacement blurred
- **Where:** sigcn-kubernetes-pemula/recap/{instagram,linkedin}; captions and ig-carousel/recap-03.png, li-doc/recap-03.png (point 2 as labelled in contact sheets).
- **Quote:** "Kalau satu Pod mati, Deployment langsung membuat gantinya sampai jumlah replika sesuai."
- **Why:** spesifik. A crashed container can restart inside the same Pod; replacement of a deleted/failed Pod is reconciled through the ReplicaSet. "mati" and "langsung" erase both distinctions for beginners. X's shorter "Deployment menjaga jumlah replika" is acceptable and not charged.
- **Direction:** Describe deleting a Pod in the experiment, then the controller reconciling replica count; avoid promising immediate recovery.

### Editorial boundaries

No deduction for ordinary English terms such as deploy, cluster, rollback or source of truth. No deduction for literal navigation steps merely numbering three actions. No blanket jargon penalty: session titles, subtitles and welcome lines establish the topic well enough for this copy-editing role. No blocking issue for explicitly labelled example identities or fixture attendance. Useful technical recap bodies and the one-sentence permission to listen are worth keeping; the issue is their packaging and repetition, not casual Indonesian itself.

## Machine summary

```json
{
  "role": "slop",
  "round": 1,
  "posts": [
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
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 2,
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
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
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
        "manusia": 2,
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
      "id": "fora-ngobrol-karier/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 2,
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
      "id": "fora-ngobrol-karier/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 2,
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
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
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
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/x",
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
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
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
      "id": "fora-ngobrol-karier/speakers/instagram",
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
      "id": "fora-ngobrol-karier/speakers/x",
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
      "id": "fora-ngobrol-karier/speakers/linkedin",
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
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/x",
      "scores": {
        "jelas": 2,
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
      "id": "sigcn-gitops-argocd/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
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
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/recap/x",
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
      "id": "sigcn-gitops-argocd/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-gitops-argocd/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "slop",
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
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/x",
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
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
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
      "id": "sigcn-gitops-argocd/speakers/instagram",
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
      "id": "sigcn-gitops-argocd/speakers/x",
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
      "id": "sigcn-gitops-argocd/speakers/linkedin",
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
      "id": "sigcn-kubernetes-pemula/announce/instagram",
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
      "id": "sigcn-kubernetes-pemula/announce/x",
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
      "id": "sigcn-kubernetes-pemula/announce/linkedin",
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
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 2,
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
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
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
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/recap/x",
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
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
      "id": "sigcn-kubernetes-pemula/speakers/instagram",
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
      "id": "sigcn-kubernetes-pemula/speakers/x",
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
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
      "id": "sigcn-observability/announce/instagram",
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
      "id": "sigcn-observability/announce/x",
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
      "id": "sigcn-observability/announce/linkedin",
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
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 2,
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
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
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
      "id": "sigcn-observability/recap/x",
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
      "id": "sigcn-observability/recap/linkedin",
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
      "id": "sigcn-observability/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
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
        "konsisten": 2
      },
      "verdict": "slop",
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
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/x",
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
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/instagram",
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
      "id": "sigcn-observability/speakers/x",
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
      "id": "sigcn-observability/speakers/linkedin",
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
    }
  ]
}
```
