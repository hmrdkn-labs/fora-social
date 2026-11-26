# Reader review · Round 3

## Overall

The incident hooks and specific speaker contributions make these feel like small community talks, not a webinar campaign.
Joining silently is plainly allowed; the Discord channel names and invites agree across the inspected formats.
Cover posters bury the join information beneath decoration; Kubernetes recap asks a question only attendees can easily answer.
No slop verdicts or blocking issues. Sample names marked “(contoh)” are treated as intentional examples, not publication mistakes.
Scope: the prompt says 72 posts, but the current assets contain seven types × four sessions × three platforms = 84; all 84 are scored below, including speakers and sig-intro.

## Patterns

### P1 · major · Cover join details lose the three-second scan

- **Where:** pattern, all four sessions/cover/{instagram,x,linkedin}; posters in ig-feed/cover.png, ig-story/cover.png, x/cover.png and li-link/cover.png; carousel/document opening covers show the same hierarchy.
- **Quotes:** “voice channel sig-cn-voice”, “voice channel fora-voice”, “discord.gg/rSepJu7Wb”.
- **Why:** jelas = 3. The theme and waveform dominate; channel and invite are small footer text. At phone-feed size I register a topic card before I register an open Discord talk. The later instruction slide helps after swiping, not in the initial three seconds. This is a hierarchy problem, not clipping or a broken link.
- **Direction:** give the Discord talk and join route a visible block on the cover itself, borrowing the announcement's stronger CTA hierarchy; reclaim waveform space rather than adding more copy.

### P2 · major · Kubernetes recap reply prompt assumes attendance

- **Where:** sigcn-kubernetes-pemula/recap/{instagram,x,linkedin}, caption (X 3/3).
- **Quote:** “Waktu Pod-nya dimatikan di minikube, apa yang kamu lihat di kubectl get pods?”
- **Why:** ngobrol = 3. As a developer who missed the talk, I can learn from the recap but cannot answer what I saw in that experiment. It closes the conversation to precisely the new reader the recap could recruit.
- **Direction:** ask something answerable from the recap or from the reader's own debugging experience, without requiring that they ran the demo.

## Per post

Scores concern the caption plus every relevant platform format. Recaps are judged as past-session notes, not failed invitations missing a future date; “live sekarang” is an appropriate immediate time cue. A 4 means publishable, not exceptional. No earlier-round reviews were consulted.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 5 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 5 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 5 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 5 | 4 | 5 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/x | 4 | 4 | 5 | 4 | 5 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 5 | 4 | 5 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 3 | 4 | fix | I1 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/speakers/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/speakers/x | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/speakers/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |

### I1 · major · Three biographies are too much for one phone poster

- **Where:** sigcn-kubernetes-pemula/speakers/instagram, ig-feed/speakers.png and ig-story/speakers.png.
- **Quote:** “Menunjukkan cara membaca kubectl describe waktu aplikasimu mogok di Kubernetes, lewat satu Pod (wadah tempat aplikasi jalan) yang gagal start.”
- **Why:** platform = 3. Three narrow biography columns compete on the standalone feed/story image. The example above wraps through eight lines even in the full-size feed PNG. At phone width I have to stop and enlarge instead of scanning why these people are worth hearing. The individual carousel biographies are considerably easier to read.
- **Direction:** keep a short contribution per person on standalone feed/story images and leave the explanation to the existing individual slides/caption. Do not remove the useful beginner gloss from those longer surfaces.

## Machine summary

```json
{
  "role": "reader",
  "round": 3,
  "posts": [
    {
      "id": "fora-ngobrol-karier/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 5,
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
        "manusia": 5,
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
        "manusia": 5,
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
      "id": "fora-ngobrol-karier/reminder/instagram",
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
        "ngobrol": 5,
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
        "ngobrol": 5,
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
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
      "id": "fora-ngobrol-karier/speakers/x",
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
      "id": "fora-ngobrol-karier/speakers/linkedin",
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
      "id": "sigcn-kubernetes-pemula/speakers/instagram",
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
      "id": "sigcn-kubernetes-pemula/speakers/x",
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
      "id": "sigcn-observability/recap/x",
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
      "id": "sigcn-observability/recap/linkedin",
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
    }
  ]
}
```
