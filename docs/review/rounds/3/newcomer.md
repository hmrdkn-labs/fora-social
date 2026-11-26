# Newcomer review, round 3

## Overall

The invite now tells me where to go and explicitly lets me listen without speaking.
Career posts feel approachable; the GitOps subtitle gives me a useful prerequisite rather than assuming Kubernetes experience.
Some short observability posts still give me only unfamiliar topic names, not a reason I would understand to join.
The Kubernetes recap asks for an observation I cannot supply without having attended or run the experiment.
No slop or blocking issues found; 7 posts need fixes.

## Scope and evidence

Reviewed current captions, all 28 contact sheets, session YAML and SIG descriptions; no previous-round reviews read. Opened full-size GitOps announcement, observability X live and Kubernetes recap slide 02 to check text/context.
The prompt says 72 posts, but the current material has **84**: four sessions × seven post types × three platforms. All 84 are included so neither speakers nor SIG introductions silently disappear. Instagram includes feed, carousel and story; LinkedIn includes link and document. Scores apply to caption plus that platform's posters, not to a caption in isolation.
X caption segments were checked with each URL counting as 23 characters; none exceeded 280 by that count. No live Discord join was attempted; this is a content review, not verification of server permissions or onboarding.
Recaps are judged as past-session notes with a next-session invitation, not penalised for lacking a new event date. Example names marked “(contoh)” are treated as sample data.

## Patterns

### N1 — Major: the recap question requires an experiment I did not do

- **Where:** pattern; sigcn-kubernetes-pemula/recap/{instagram,x,linkedin}, caption (X 3/3).
- **Quote:** “Waktu Pod-nya dimatikan di minikube, apa yang kamu lihat di kubectl get pods?”
- **Why:** **ngobrol 3, pemula 3**. As a student seeing this after the event, I cannot answer without having run minikube. The notes explain several concepts, but do not give the before/after command output needed to make this question accessible. Being permitted to listen at the next session does not remove this particular participation barrier.
- **Direction:** Ask about something a non-attendee can answer from the recap, or show the observed output and invite a question about it. Keep the concrete experiment; do not replace it with generic engagement bait.

### N2 — Major: short observability variants drop the plain-language entry point

- **Where:** pattern; sigcn-observability/cover/x, sigcn-observability/reminder/x, sigcn-observability/live/{x,linkedin}; captions and the corresponding x/cover.png, x/reminder.png, x/live.png, li-link/live.png. The live LinkedIn document adds a topic list, but not the ordinary-language problem.
- **Quotes:** “Cloud Native 101 bareng SIG CN × FORA.”; “Observability: Logs, Metrics, Traces lagi jalan sekarang.”; “Live sekarang di voice channel sig-cn-voice.”; poster title “Observability: Logs, Metrics, Traces”.
- **Why:** **pemula 3**. I can find the channel and know I may stay quiet, but these versions never tell me what the unfamiliar title is about. The announcement and Instagram live do: “Aplikasi jalan tapi lambat, dan kita nggak tahu kenapa.” Cover carousels also explain logs, metrics and traces; X has no corresponding slide to rescue its caption.
- **Direction:** Retain one short everyday problem in these standalone variants, replacing redundant series or host wording if necessary. No glossary or extra reassurance needed.

## Per post

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/announce/x | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N2 |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/live/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N2 |
| sigcn-observability/live/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N2 |
| sigcn-observability/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/cover/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N2 |
| sigcn-observability/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/speakers/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/speakers/x | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | - |
| sigcn-observability/speakers/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | - |

### Additional per-post issues

None beyond N1 and N2. In particular, I would not demand a definition of every technical term: the GitOps prerequisite, the Kubernetes beginner framing and the observability examples already do useful work where present. Joining instructions distinguish the server invitation from the named voice channel in the carousels, and the repeated permission to listen is functional rather than slop.

## Machine summary

```json
{
  "role": "newcomer",
  "round": 3,
  "posts": [
    {
      "id": "fora-ngobrol-karier/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "konsisten": 5
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
        "konsisten": 5
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    }
  ]
}
```
