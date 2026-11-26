# Community review · round 2

## Overall

The personal announcement hooks and speaker-specific stories give people a reason to attend.
Joining is consistently low-pressure, and poster/caption event details agree across the inspected formats.
Cover logistics remain too subordinate for a phone scroller; some recap questions ask for agreement rather than a story.
No slop verdicts or blocking issues; this round still needs fixes.
Scope: 4 sessions × **7** existing post types × 3 platforms = **84 posts**, not the prompt's stale 72. All 28 contact sheets and 28 caption files reviewed; no earlier-round reviews read.

## Patterns

Session names below are exact ID prefixes. Platform `*` means instagram, x and linkedin. Poster paths are relative to `examples/<session>/`.

### P1 · major · Cover logistics look like footnotes

- **Where:** all four sessions, `cover/*`; `ig-feed/cover.png`, `ig-story/cover.png`, `x/cover.png`, `li-link/cover.png`, plus the carousel/document opening slides shown in each cover contact sheet.
- **Quotes:** “Sab, 23 Jan · 19.30–21.00 WIB · voice channel fora-voice”; “Kam, 14 Jan · 20.00–21.30 WIB · voice channel sig-cn-voice”; “discord.gg/rSepJu7Wb”.
- **Why:** `jelas` 3. The theme and decorative waveform dominate; the entire attendance decision is a tiny bottom line. The standalone covers also never explicitly name Discord beside the channel, relying on recognition of the invite domain. Details exist, but do not meet the three-second phone-scrolling bar.
- **Direction:** retain the theme-led cover, but give day/date/time and Discord channel a readable secondary block. Make the invite legible without opening the image full-screen. Do not leave this only to the final carousel slide or caption.

### P2 · major · Beginner recap assumes workplace experience

- **Where:** `sigcn-kubernetes-pemula/recap/*`, captions.
- **Quotes:** Instagram/X: “Poin 3 ("Service memberi alamat yang stabil"), cocok nggak sama yang kamu temui di kerjaan?” LinkedIn: “Kamu setuju sama "Service memberi alamat yang stabil"? Kalau di tempatmu beda, ceritain.”
- **Why:** `ngobrol` 3, `pemula` 3. This beginner session ends by asking for production/workplace evidence or agreement with a basic mechanism. A student following the minikube example has little obvious way to answer, despite the otherwise welcoming invitation.
- **Direction:** ask about the experiment or the part that remains confusing, answerable from a laptop or from just listening. Do not turn a technical definition into an opinion poll.

### P3 · major · Observability reply prompts are topic substitutions

- **Where:** `sigcn-observability/recap/*`, captions.
- **Quotes:** Instagram: “Soal "Log yang terstruktur bisa dicari", gimana di tempat kamu?” X: “Kamu setuju sama "OpenTelemetry, pasang instrumentasi sekali"? Kalau di tempatmu beda, ceritain.” LinkedIn: “Soal "Metrics itu angka murah yang tahan lama", gimana di tempat kamu?”
- **Why:** `ngobrol` 3. Readers must invent the question themselves: log fields, retention costs, instrumentation effort, or backend choice? The incident-based announcement and speaker question are much easier to answer than these generic closers. Not enough to call the whole post slop.
- **Direction:** ask for one concrete debugging starting point, useful field, or instrumentation snag. Choose the question for the actual selected takeaway rather than wrapping any title in the same invitation.

### P4 · major · Hanging-request claim needs a condition

- **Where:** `sigcn-observability/recap/instagram` and `/linkedin`; captions and recap carousel/document first takeaway.
- **Quotes:** “Log yang terstruktur bisa dicari”; “Dengan format seperti JSON, satu field duration_ms cukup untuk menemukan request yang menggantung di aplikasi lambat tadi.”
- **Why:** `spesifik` 3. A duration field helps find slow *completed/logged* requests; a still-hanging request may not have emitted its completion log. “Cukup” overpromises exactly where this community would ask for debugging help.
- **Direction:** describe a slow request with an emitted duration log, or explain the extra start/timeout/correlation evidence needed for an unfinished request. Keep the practical example, remove the unconditional sufficiency claim.

### P5 · major · Reminder says microphone reassurance twice

- **Where:** `fora-ngobrol-karier/reminder/instagram` and `/linkedin`, captions.
- **Quotes:** Instagram: “Mic boleh mati dulu sampai kamu siap ngomong.” then “Dengerin aja nggak apa-apa, ngomong juga silakan.” LinkedIn: “Mikrofon boleh dimatikan sampai kamu siap bicara.” then “Boleh dengarkan saja, boleh juga ikut bicara.”
- **Why:** `manusia` 3. The practical reminder is another permission to stay quiet, then the standard invitation repeats it immediately. This is the guide's stacked reassurance, not a second useful attendance detail.
- **Direction:** say permission once; spend the reminder on a genuinely practical joining detail, or simply keep it short.

## Per post

Scores apply to caption plus the platform's supplied poster formats. `jelas` on recaps assesses identification of the past session and the next-session destination; “live sekarang” is an appropriate immediate-time cue, not a demand to add a future-event date. Sample names marked “(contoh)” are intentional fixtures, not publication mistakes. All X caption segments fit 280 using 23 characters per URL; this is a length check, not a live composer test.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P5 |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P5 |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 4 | 4 | 5 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 5 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 4 | 4 | 5 | 4 | 4 | ok | — |
| fora-ngobrol-karier/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 3 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | I1 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/recap/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P3, P4 |
| sigcn-observability/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/recap/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P3, P4 |
| sigcn-observability/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/speakers/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/speakers/x | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/speakers/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |

### I1 · major · One of three people gets the X explanation

- **Where:** `sigcn-kubernetes-pemula/speakers/x`, caption `X 1/2`, plus `x/speakers.png`.
- **Quote:** “Bima (contoh) @bima_contoh, DevOps Engineer. Menunjukkan cara membaca kubectl describe waktu sebuah Pod gagal jalan.”
- **Why:** `spesifik` 3. The poster names Bima, Sari and Rina but has only roles/handles, not their contributions. The caption explains only Bima; the next tweet moves straight to logistics. Sari's developer perspective is a strong reason to attend and is lost on this platform.
- **Direction:** keep each segment short, but include Sari's contribution and identify the host; use another tweet if needed rather than dropping the other people from the speaker explanation.

## Machine summary

```json
{
  "role": "community",
  "round": 2,
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
      "id": "fora-ngobrol-karier/live/x",
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
      "id": "fora-ngobrol-karier/live/linkedin",
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
      "id": "fora-ngobrol-karier/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 5,
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
        "spesifik": 5,
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
        "spesifik": 5,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/instagram",
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
      "id": "fora-ngobrol-karier/cover/x",
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
      "id": "fora-ngobrol-karier/cover/linkedin",
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
      "id": "fora-ngobrol-karier/speakers/x",
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
      "id": "fora-ngobrol-karier/speakers/linkedin",
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
      "id": "sigcn-gitops-argocd/reminder/x",
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
      "id": "sigcn-gitops-argocd/reminder/linkedin",
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
      "id": "sigcn-gitops-argocd/live/instagram",
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
      "id": "sigcn-gitops-argocd/live/x",
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
      "id": "sigcn-gitops-argocd/live/linkedin",
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
      "id": "sigcn-gitops-argocd/recap/instagram",
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
      "id": "sigcn-gitops-argocd/recap/x",
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
      "id": "sigcn-gitops-argocd/recap/linkedin",
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
      "id": "sigcn-gitops-argocd/cover/x",
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
      "id": "sigcn-gitops-argocd/cover/linkedin",
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
      "id": "sigcn-gitops-argocd/speakers/x",
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
      "id": "sigcn-gitops-argocd/speakers/linkedin",
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
      "id": "sigcn-kubernetes-pemula/reminder/x",
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
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
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
      "id": "sigcn-kubernetes-pemula/live/instagram",
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
      "id": "sigcn-kubernetes-pemula/live/x",
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
      "id": "sigcn-kubernetes-pemula/live/linkedin",
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
      "id": "sigcn-kubernetes-pemula/recap/instagram",
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
      "id": "sigcn-kubernetes-pemula/recap/x",
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
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
      "id": "sigcn-kubernetes-pemula/cover/instagram",
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
      "id": "sigcn-kubernetes-pemula/cover/x",
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
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
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
      "id": "sigcn-kubernetes-pemula/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
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
      "id": "sigcn-observability/reminder/x",
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
      "id": "sigcn-observability/reminder/linkedin",
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
      "id": "sigcn-observability/live/instagram",
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
      "id": "sigcn-observability/live/x",
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
      "id": "sigcn-observability/live/linkedin",
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
      "id": "sigcn-observability/recap/instagram",
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
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/instagram",
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
      "id": "sigcn-observability/cover/x",
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
      "id": "sigcn-observability/cover/linkedin",
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
      "id": "sigcn-observability/speakers/x",
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
      "id": "sigcn-observability/speakers/linkedin",
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
    }
  ]
}
```
