# Reader review · Round 2

## Overall

The career announcement's 40 applications/two replies makes me stop; the technical announcements offer recognisable problems.
Voice-channel entry and permission to listen are concrete, with no need to know Discord beyond ordinary use.
Cover posters still make the actual invitation a tiny footer; intro carousels delay it until later slides.
Kubernetes recap questions sound selected by a template, not by someone interested in my answer.
No blocking issue or slop verdict; this round still needs fixes.

## Scope and evidence

Reviewed all current captions, four session YAMLs, both SIG definitions and all 28 contact sheets, including every labelled format. Opened native Kubernetes X speakers and observability IG feed cover for small text. No prior-round review read.
The prompt says 72 posts, but the current assets contain **84**: four sessions × seven post types × three platforms. All 84 are scored, including sig-intro; nothing silently excluded.
Scores judge the combined platform post. For live, “sekarang” is an adequate temporal cue; for recaps I do not require a new event time that has not been announced. Sample names marked “(contoh)” are treated as sample data, not a publishing mistake.

## Patterns

### R1 · major · Cover invitation loses the three-second scan

- **Where:** pattern, all four sessions/cover/{instagram,x,linkedin}; posters ig-feed/cover.png, ig-story/cover.png, x/cover.png, li-link/cover.png and the first ig-carousel/li-doc cover slide.
- **Quote:** “Kam, 14 Jan · 20.00–21.30 WIB · voice channel sig-cn-voice”; “discord.gg/rSepJu7Wb”. Other sessions use their corresponding date/channel.
- **Why:** jelas. The huge theme and decorative waveform read first; the invitation sits in a small bottom strip. At phone-feed size I recognise a topic graphic before I recognise a scheduled voice discussion. The caption supplies the information, but the rubric requires the poster to do it.
- **Direction:** Promote the date/time and Discord entry into a readable invitation block; take space from the waveform rather than adding more copy.

### R2 · major · Intro carousel opens without an actionable invitation

- **Where:** pattern, all four sessions/sig-intro/{instagram,linkedin}; ig-carousel first slide and li-doc first slide. Feed/link variants do contain a next-session box; this finding is specifically about the carousel/document entry surface.
- **Quote:** “Cloud Native” / “Forum Rangkai”; “Ngobrol soal Kubernetes dan cloud native di voice channel.” / “Komunitas tech kecil yang ngobrol lewat suara di Discord.”
- **Why:** jelas. The first slide has neither the next-session date/time nor the channel; the IG first slide has no invite. A reader must swipe to learn when and how to join. LinkedIn's tiny footer invite does not supply the missing event details.
- **Direction:** Keep the community introduction but give the opening slide a compact next-session/channel invitation, not just a series identity.

### R3 · major · Kubernetes recap asks for an opinion on a basic fact

- **Where:** sigcn-kubernetes-pemula/recap/{instagram,x,linkedin}, captions.
- **Quote:** IG and X: 'Poin 3 ("Service memberi alamat yang stabil"), cocok nggak sama yang kamu temui di kerjaan?'; LinkedIn: 'Kamu setuju sama "Service memberi alamat yang stabil"? Kalau di tempatmu beda, ceritain.'
- **Why:** manusia, ngobrol. Agreement with a Service's basic purpose is not a useful discussion prompt. It sounds auto-attached, and gives a learner no experience they can easily contribute. X also says “Poin 3” when the thread body contains only that one takeaway.
- **Direction:** Ask about a concrete failure or first encounter with changing Pod addresses; refer to what is actually present in that platform's post.

### R4 · major · Observability recap prompts are too broad to answer

- **Where:** sigcn-observability/recap/{instagram,x,linkedin}, captions.
- **Quote:** IG: 'Soal "Log yang terstruktur bisa dicari", gimana di tempat kamu?'; X: 'Kamu setuju sama "OpenTelemetry, pasang instrumentasi sekali"? Kalau di tempatmu beda, ceritain.'; LinkedIn: 'Soal "Metrics itu angka murah yang tahan lama", gimana di tempat kamu?'
- **Why:** ngobrol. These repeat a heading and hand the work of inventing a question to the reader. The slow-application situation in the announcement is much easier to respond to.
- **Direction:** Name one thing to compare: the field used to find a slow request, where a trace stopped, or the first alert people changed.

### R5 · major · Career reminder says permission twice

- **Where:** fora-ngobrol-karier/reminder/{instagram,linkedin}, captions.
- **Quote:** IG: “Mic boleh mati dulu sampai kamu siap ngomong.” then “Dengerin aja nggak apa-apa, ngomong juga silakan.” LinkedIn: “Mikrofon boleh dimatikan sampai kamu siap bicara.” then “Boleh dengarkan saja, boleh juga ikut bicara.”
- **Why:** manusia. Both sentences do the same reassurance job in a short reminder. I already understand I can stay quiet; the second line makes the organiser sound scripted.
- **Direction:** Say the permission once and use the other slot for an actual practical detail, or omit it.

## Per post

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 5 | 4 | 5 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| fora-ngobrol-karier/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| fora-ngobrol-karier/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| fora-ngobrol-karier/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | R5 |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | R5 |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-gitops-argocd/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-gitops-argocd/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-kubernetes-pemula/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-kubernetes-pemula/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 3 | 3 | 4 | 4 | 4 | 5 | fix | R3 |
| sigcn-kubernetes-pemula/recap/x | 4 | 3 | 3 | 4 | 4 | 4 | 5 | fix | R3 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 3 | 3 | 4 | 4 | 4 | 5 | fix | R3 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 4 | 3 | 4 | 5 | fix | R6 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-observability/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-observability/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R1 |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | R4 |
| sigcn-observability/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | R4 |
| sigcn-observability/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | R4 |
| sigcn-observability/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | R2 |

### R6 · major · Kubernetes X speaker introduction drops two people's contribution

- **Where:** sigcn-kubernetes-pemula/speakers/x, caption and x/speakers.png.
- **Quote:** “Bima (contoh) @bima_contoh, DevOps Engineer. Menunjukkan cara membaca kubectl describe waktu sebuah Pod gagal jalan.” Poster names “Sari (contoh)” and “Rina (contoh)” but gives only their roles/handles.
- **Why:** spesifik. The thread introduces only Bima's contribution; the poster cannot recover why Sari and Rina are present. Their developer perspective and shared Pod experiment are the useful reasons to join, not the generic job titles.
- **Direction:** Give each person's concrete contribution room in the thread rather than dropping the remaining introductions after the first person.

## Machine summary

```json
{
  "role": "reader",
  "round": 2,
  "posts": [
    {
      "id": "fora-ngobrol-karier/announce/instagram",
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
      "id": "fora-ngobrol-karier/announce/x",
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
      "id": "fora-ngobrol-karier/announce/linkedin",
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
      "id": "fora-ngobrol-karier/cover/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
      "id": "fora-ngobrol-karier/speakers/instagram",
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
      "id": "fora-ngobrol-karier/speakers/x",
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
      "id": "fora-ngobrol-karier/speakers/linkedin",
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
      "id": "fora-ngobrol-karier/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
        "manusia": 3,
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
      "id": "sigcn-kubernetes-pemula/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
      "id": "sigcn-observability/cover/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
        "konsisten": 5
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
      "id": "sigcn-observability/recap/x",
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
      "id": "sigcn-observability/recap/linkedin",
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
    },
    {
      "id": "sigcn-observability/sig-intro/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    }
  ]
}
```
