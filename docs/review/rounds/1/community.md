# Community review — round 1

## Overall
The voice-channel invite and permission to listen are concrete and usable; announcement details agree with the session inputs.
Covers hide the event schedule, while reminders mix advance notice with “live now”; both weaken attendance conversion.
The strongest hooks are the host's actual Pod/deploy experiences, but repeating them verbatim makes later posts feel recycled.
Speaker posts and recaps mostly broadcast rather than opening a conversation; X loses the richer hooks present elsewhere.
Reviewed all 24 caption files, all 24 existing contact sheets (all formats), four session YAMLs, both SIG definitions, brief, voice guide and rubric. Sample names/counts are treated as declared examples, not invented production facts.

## Patterns

### P1 — Cover does not work as a standalone event invitation
- **Severity:** major.
- **Where:** pattern, all four sessions, `cover/{instagram,x,linkedin}`; `ig-feed/cover.png`, `ig-story/cover.png`, `x/cover.png`, `li-link/cover.png`, first `ig-carousel` and `li-doc` cover slides. Session IDs are expanded in the table below.
- **Quote:** “Voice channel · Discord · dengerin aja boleh”; headlines “Karier”, “GitOps”, “Kubernetes”, “Observability”.
- **Why:** `jelas`. Single-image covers omit day/date/time and the channel name altogether. Carousel/document readers must advance for these basics. Captions have the schedule, but the rubric explicitly requires the poster to stand alone. A forwarded story cannot tell a prospective attendee when to show up.
- **Direction:** put the session schedule and named voice channel on the opening/standalone cover; keep the large theme, but give the event a visible information block.

### P2 — Advance reminder and live-now state are mixed
- **Severity:** major.
- **Where:** pattern, all four sessions, `reminder/{instagram,x,linkedin}`; captions versus `ig-story/reminder.png`, and the “LIVE” badge / CTA in feed, X, link and document formats.
- **Quote:** poster “LIVE SEKARANG”, “Masuk sekarang ke”; captions “hari ini jam 19.30 WIB” (career), “mulai 19.30 WIB hari ini” (GitOps/Kubernetes), “Jam 20.00 WIB nanti” (observability X).
- **Why:** `konsisten`. One generated post package simultaneously says the session is already running and advertises a later start. The observability X “nanti” makes that conflict explicit. The operator cannot use the same package unchanged for both publication moments.
- **Direction:** choose one publication state per package. An advance notice needs an upcoming label/CTA; a live package needs present-tense captions. This is not a request to change the scheduled event time.

### P3 — Speaker and recap posts leave no easy reply
- **Severity:** major.
- **Where:** pattern, all four sessions, `{speakers,recap}/{instagram,x,linkedin}`, captions and matching posters.
- **Quote:** speakers “Sabtu 19 Desember yang cerita Dani (contoh), dipandu Rina (contoh).”; career “Tanpa pembicara tamu, jadi yang cerita kita semua.”; recaps “Sesi berikutnya kita umumkan di Discord FORA” / “Sampai ketemu di sesi berikutnya.”
- **Why:** `ngobrol`. There is an attendance route, but the speaker assets offer names/job titles rather than a reason to ask these people something. Recaps end with a future announcement instead of continuing the discussion. Even the career speaker copy does not say what story someone could bring. The host anecdote on the GitOps/Kubernetes speaker slides helps recognition but is not a request for reader input.
- **Direction:** use one topic-specific, answerable prompt: a question to leave for the speaker, an experience to bring, or a recap claim to compare with one's own setup. Do not append a generic “ada pertanyaan?” to every post.

### P4 — X announcement/cover throws away the reason to attend
- **Severity:** major.
- **Where:** pattern, all four sessions, `{announce,cover}/x`, captions plus their poster.
- **Quote:** “Cloud Native 101 bareng SIG CN × FORA.”; “GitOps dengan Argo CD”; “Sab, 12 Des jam 19.30 WIB, kita kumpul di voice.”; “Karier bareng FORA.”
- **Why:** `ngobrol`. These are titles/schedules followed by the same channel invitation. The recognisable failure or thing to bring present in IG/LinkedIn disappears. This is a usable flyer, not a tweet that invites a response from someone unfamiliar with FORA. The poster subtitle supplies context, but not an opening to participate.
- **Direction:** spend some of the caption on one concrete session situation or contribution, cutting repeated logistics already visible in the image if needed. Keep the working invite.

### P5 — Verbatim hook repetition makes the series feel copy-pasted
- **Severity:** major.
- **Where:** pattern, `sigcn-gitops-argocd`, `sigcn-kubernetes-pemula`, `sigcn-observability`, `{cover,reminder}/{instagram,linkedin}` captions, compared with each session's announcement.
- **Quote:** “Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.”; “Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya. Kita ulangi percobaan itu bareng-bareng.”; “Aplikasi jalan tapi lambat, dan kita nggak tahu kenapa. Kita lihat apa yang dijawab logs, metrics, dan traces, dan cara mulai tanpa pasang semuanya sekaligus.”
- **Why:** `manusia`. Good source material is repeated unchanged across announcement, cover and reminder. Following the account gives three copies of the same introduction instead of a progression. The concrete content keeps this from a `slop` verdict, but the package needs editorial variation, not merely alternate CTA wording.
- **Direction:** keep the anecdote for the first invitation; give the cover context and the reminder a practical detail or question. Preserve the organiser's voice without replaying their entire story.

### P6 — GitOps recap overstates what a revert guarantees
- **Severity:** major.
- **Where:** `sigcn-gitops-argocd/recap/{instagram,x,linkedin}`, caption point 4 and poster recap point 4 (feed, story, X, link and carousel/document detail slide).
- **Quote:** “Rollback cukup dengan git revert”; expanded text “Commit baru yang membatalkan perubahan, lalu disync. Riwayatnya tetap tercatat.”
- **Why:** `spesifik`. Reverting desired manifests and syncing can restore configuration; it does not in general reverse a database migration, external side effect or mutated persistent data. “Cukup” makes this sound like an unconditional recovery recipe, especially in the standalone headline/X summary.
- **Direction:** scope the claim to the demonstrated manifest/configuration rollback and identify the limit briefly. Keep the useful explanation of revert plus sync.

## Per post

Scores follow the rubric order. A post includes all of its platform's image formats; cover deductions therefore include the standalone image even when later carousel slides recover the information. For recaps, historical date plus a future-session invite is appropriate: no invented next-session schedule is demanded. “Below 4” counts posts with at least one criterion below 4, not individual cells.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/cover/instagram | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P4 |
| fora-ngobrol-karier/cover/linkedin | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| fora-ngobrol-karier/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 2 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-gitops-argocd/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P4 |
| sigcn-gitops-argocd/cover/linkedin | 2 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P3, P6 |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P3, P6 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P3, P6 |
| sigcn-gitops-argocd/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/cover/instagram | 2 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-kubernetes-pemula/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P4 |
| sigcn-kubernetes-pemula/cover/linkedin | 2 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 3 | 4 | 4 | 3 | 4 | fix | P3, C1 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P4 |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/cover/instagram | 2 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-observability/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P4 |
| sigcn-observability/cover/linkedin | 2 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-observability/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-observability/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/speakers/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/speakers/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/speakers/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |

### Additional per-post issue

#### C1 — Kubernetes speaker thread splits the minimum context
- **Severity:** major.
- **Where:** `sigcn-kubernetes-pemula/speakers/x`, caption posts 1/2 and 2/2.
- **Quote:** first tweet “Sabtu 12 Desember yang cerita Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, dipandu Rina (contoh) @rina_contoh.”; second tweet begins “"Kubernetes untuk Pemula", mulai 19.30 WIB.”
- **Why:** `platform`. A two-tweet speaker invitation spends the first tweet entirely on names/handles and withholds the topic, start time and invite until the next tweet. Those logistics can fit a single concise invitation if duplicated handles/name material is reduced. The image helps, but does not justify a thread just for this split.
- **Direction:** make one tweet with topic, time, speakers and join link; leave fuller role/host details in the image or a genuinely useful follow-up.

## Machine summary

```json
{
  "role": "community",
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
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 2,
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
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 2,
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
      "id": "fora-ngobrol-karier/recap/instagram",
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
      "id": "fora-ngobrol-karier/recap/x",
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
      "id": "fora-ngobrol-karier/recap/linkedin",
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
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
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
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
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
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
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
      "id": "fora-ngobrol-karier/sig-intro/x",
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
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
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
      "id": "fora-ngobrol-karier/speakers/instagram",
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
      "id": "fora-ngobrol-karier/speakers/x",
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
      "id": "fora-ngobrol-karier/speakers/linkedin",
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
        "jelas": 2,
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
      "id": "sigcn-gitops-argocd/cover/x",
      "scores": {
        "jelas": 2,
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
      "verdict": "fix",
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
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
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
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
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
      "id": "sigcn-gitops-argocd/sig-intro/x",
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
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
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
      "id": "sigcn-gitops-argocd/speakers/instagram",
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
      "id": "sigcn-gitops-argocd/speakers/x",
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
      "id": "sigcn-gitops-argocd/speakers/linkedin",
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
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 2,
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
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/instagram",
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
      "id": "sigcn-kubernetes-pemula/recap/x",
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
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
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
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
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
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
      "id": "sigcn-kubernetes-pemula/speakers/instagram",
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
      "id": "sigcn-kubernetes-pemula/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
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
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 2,
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
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/instagram",
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
      "id": "sigcn-observability/recap/x",
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
      "id": "sigcn-observability/recap/linkedin",
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
      "id": "sigcn-observability/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
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
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/instagram",
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
      "id": "sigcn-observability/sig-intro/x",
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
      "id": "sigcn-observability/sig-intro/linkedin",
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
      "id": "sigcn-observability/speakers/instagram",
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
      "id": "sigcn-observability/speakers/x",
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
      "id": "sigcn-observability/speakers/linkedin",
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
    }
  ]
}
```
