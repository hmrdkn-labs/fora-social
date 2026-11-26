# Round 5 · reader

## Overall

Reviewed all 84 posts: four sessions × all seven POST_TYPES × three platforms, not the stale 72 in the reviewer prompt.
The practical problems, concrete speaker stories and explicit permission to listen make joining feel low-pressure.
Horizontal introduction posters demand too much small-text reading; two X announcements lose the reason to stop.
Kubernetes cover copy promises a different scale from the local demo, and its recap blurs moving a Pod with replacing it.
16 posts have at least one score below 4; no slop verdicts or blocking issues.

## Scope and reading method

Read all 28 current caption files, four session YAMLs, both SIG definitions, rubric, voice guide and brief. Visually inspected all 28 contact sheets, including all labelled formats and carousel/document pages. Opened native Kubernetes X speakers and Observability LinkedIn-link introduction, X announcement and X recap to resolve small text. No previous-round reviews read. This is a reader review of rendered artifacts, not a renderer or source-code audit. Sample names and silhouettes are intentional examples, not publishing defects. For live posts, “sekarang” is adequate temporal context; recap posts describe a past session and do not need a new event time that does not exist.

## Patterns

### P1 · major · Introductions put a paragraph in the horizontal phone preview

- **Where:** pattern, every session listed in the per-post table, `sig-intro/x` and `sig-intro/linkedin`; posters `x/sig-intro.png` and `li-link/sig-intro.png`. Eight posts; LinkedIn document pages themselves have more room.
- **Quotes:** “SIG CN itu grup FORA untuk ngobrol soal menjalankan aplikasi di cloud (cloud native).” and “FORA (Forum Rangkai) itu komunitas tech kecil berbahasa Indonesia di Discord.” These begin the full explanatory paragraphs under the headline. The event sits in a much smaller “SESI TERDEKAT” box.
- **Why:** jelas 3, platform 3. At a phone-feed width the body becomes fine print, and the next event competes with a large general-community headline. I can read the native image, but not take in what the group does plus the next session in three seconds. This is density, not clipping or broken text.
- **Direction:** Keep one everyday example on the horizontal image and make the next session/date/time easier to scan. Put the full group description in the caption or document pages.

### P2 · major · Two X announcements are only logistics

- **Where:** `sigcn-kubernetes-pemula/announce/x` and `sigcn-observability/announce/x`, caption and `x/announce.png`.
- **Quotes:** “Sab, 12 Des jam 19.30 WIB, kita kumpul di voice.” and “Observability: Logs, Metrics, Traces”. The remainder gives date/channel/invite rather than the concrete experiment or slow-app situation.
- **Why:** ngobrol 3. I know when to join, but there is no situation I recognise or small thing I can bring to the conversation. The Kubernetes subtitle “Satu cluster lokal, dari nol” is useful level-setting, not a reason to reply. The Observability subtitle “Dari mana mulai mencari, tanpa memasang semuanya sekaligus” still leaves what we are searching for implicit.
- **Direction:** Spend the first line on the Pod experiment or the slow app with a green dashboard. Keep the essential joining details; do not add another generic invitation question.

## Per post

Scores: jelas, manusia, ngobrol, pemula, spesifik, platform, konsisten. A post includes its platform's caption and all corresponding image formats; a weaker horizontal LinkedIn image is not waived because its document version works.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 5 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 5 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 5 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/instagram | 4 | 5 | 5 | 4 | 5 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/x | 4 | 5 | 5 | 4 | 5 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 5 | 5 | 4 | 5 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/instagram | 4 | 5 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/x | 4 | 5 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/linkedin | 4 | 5 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| fora-ngobrol-karier/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| sigcn-gitops-argocd/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | P2 |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 4 | 4 | 3 | 4 | 5 | fix | K3 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 4 | 4 | 3 | 4 | 5 | fix | K3 |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 4 | 4 | 4 | 3 | 4 | 3 | fix | K1 |
| sigcn-kubernetes-pemula/cover/x | 4 | 4 | 4 | 4 | 3 | 4 | 3 | fix | K1 |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 4 | 4 | 4 | 3 | 4 | 3 | fix | K1 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 4 | 3 | 4 | 5 | fix | K2 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | P2 |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/recap/instagram | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| sigcn-observability/recap/x | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| sigcn-observability/recap/linkedin | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| sigcn-observability/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| sigcn-observability/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 3 | 5 | fix | P1 |
| sigcn-observability/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |

### K1 · major · Kubernetes cover suggests a multi-machine session

- **Where:** `sigcn-kubernetes-pemula/cover/instagram`, `sigcn-kubernetes-pemula/cover/x`, `sigcn-kubernetes-pemula/cover/linkedin`; captions and cover posters carrying the problem line, including `ig-feed/cover.png`, `ig-story/cover.png`, `x/cover.png` and the first carousel/document page.
- **Quote:** “Aplikasi sudah jalan di laptop, tapi menjalankannya di banyak mesin sekaligus belum pernah dicoba.” The next carousel/document page instead says “Satu cluster lokal, dari nol”.
- **Why:** spesifik 3, konsisten 3. As a reader deciding whether to attend, I expect to learn a multi-machine setup; the actual described activity is one local minikube cluster. The broader motivation is valid, but this wording does not distinguish motivation from what we will do that night.
- **Direction:** Hook the local experiment or explicitly distinguish the larger deployment problem from this session's local first step.

### K2 · major · Kubernetes X speakers loses two people's reasons to attend

- **Where:** `sigcn-kubernetes-pemula/speakers/x`, caption and `x/speakers.png`.
- **Quotes:** The caption gives “Bima membaca kubectl describe dari satu Pod (wadah tempat aplikasi jalan) yang gagal start.” The poster gives “Sari (contoh)” / “Backend Developer” and “Rina (contoh)” / “Platform Engineer”, but neither person's concrete contribution.
- **Why:** spesifik 3. Bima earns his introduction; Sari and Rina remain names and job titles. Other platform versions explain Sari's first-deploy confusion and Rina's Pod experiment, which would help a junior developer decide to join. The X thread already exists, so the omission is not a necessary single-tweet tradeoff.
- **Direction:** Give Sari and Rina a short concrete contribution in the thread, rather than restoring dense bios inside the image.

### K3 · major · Kubernetes recap implies existing Pods move

- **Where:** `sigcn-kubernetes-pemula/recap/instagram` and `sigcn-kubernetes-pemula/recap/linkedin`, captions and `ig-carousel/recap-02.png` / corresponding second document page (the Pod definition).
- **Quote:** “Kubernetes menjalankan dan memindahkan aplikasi per Pod.”
- **Why:** spesifik 3. For someone learning the model, “memindahkan” implies a Pod can be moved intact between nodes. The replacement explanation elsewhere is useful, but this line blurs replacement/rescheduling with moving the same Pod. The X caption does not contain this body text, so its score is not lowered for this issue.
- **Direction:** Describe scheduling and replacement without implying that an existing Pod migrates to another node.

## Machine summary

```json
{
  "role": "reader",
  "round": 5,
  "posts": [
    {
      "id": "fora-ngobrol-karier/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 5,
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
        "manusia": 5,
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
        "manusia": 5,
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
        "manusia": 5,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "manusia": 5,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "manusia": 5,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "manusia": 5,
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
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 5,
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
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 5,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
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
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
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
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
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
        "spesifik": 3,
        "platform": 4,
        "konsisten": 5
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
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "ngobrol": 5,
        "pemula": 4,
        "spesifik": 5,
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
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 3,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/instagram",
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
      "id": "sigcn-observability/speakers/x",
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
      "id": "sigcn-observability/speakers/linkedin",
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
    }
  ]
}
```
