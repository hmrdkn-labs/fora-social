# Reader · Round 1

## Overall

Judged as a junior-to-mid Jakarta developer browsing on a phone; all 24 caption files and 24 contact sheets inspected, covering 72 platform posts.
The incident hooks for GitOps and the slow-app situation make me stop; joining Discord and staying muted feel straightforward.
Covers hide the schedule; introductions make me swipe for it; reminder stories say the event is already live while captions announce a later start.
Speaker posts need a reason to care about these people, and recaps need a concrete opening for my reply.
No post earns `slop`: repetitive logistics alone do not make the concrete content machine-made. Sample names are explicitly marked `(contoh)`; not treated as production identity errors.

## Patterns

Scope notation: `ALL` = fora-ngobrol-karier, sigcn-gitops-argocd, sigcn-kubernetes-pemula, sigcn-observability. Platforms are instagram, x, linkedin. Each scope below expands to every matching row, not a sample.
Poster locations are relative to `examples/<session>/`; contact sheets show the labelled formats. Scores assess the whole platform bundle, but an opening frame still has to work while scrolling. Recaps are judged as past-session notes, not required to advertise an invented next date.

### P1 · major · Cover looks like a topic card, not a scheduled conversation
- **Where:** ALL/cover/{instagram,x,linkedin}; posters `ig-feed`, `ig-story`, `x`, `li-link`, and opening `ig-carousel`/`li-doc` frames in the corresponding cover sheets.
- **Quote:** "Karier", "GitOps", "Kubernetes", "Observability"; footer "Voice channel · Discord · dengerin aja boleh".
- **Why:** `jelas`: no day/date/time or actual channel name on the standalone cover. A caption or later slide supplies it, but the poster alone does not. The waveform takes space that could tell me when to come.
- **Direction:** Put the session schedule and named channel on each standalone/opening cover, retaining the invite. Keep the topic prominent without making essential logistics a swipe reward.

### P2 · blocking · Upcoming reminder and live-now story disagree
- **Where:** ALL/reminder/{instagram,x,linkedin}; captions and reminder posters. Instagram has the explicit contradiction between `ig-story` and caption; X/LinkedIn have `LIVE` badges and "Masuk sekarang" against upcoming copy.
- **Quote:** story "LIVE SEKARANG" / "MULAI 19.30 WIB" (observability "MULAI 20.00 WIB"); caption "hari ini jam 19.30 WIB", "mulai 19.30 WIB", or "Jam 20.00 WIB nanti". CTA "Masuk sekarang ke"; badge "LIVE".
- **Why:** `konsisten`: I cannot tell whether people are already talking or I should return later. This is wrong event-state information, not a preference about tone. `jelas`: "HARI INI" dominates while absolute day/date is absent on standalone reminder images; a forwarded image loses its anchor.
- **Direction:** Separate upcoming and live-now states in both copy and every format. Include the absolute day/date on standalone reminders; only claim live when the intended post is live. One blocking issue per affected platform post (12 incidences), not one per repeated badge.

### P3 · major · Introduction buries the next session
- **Where:** ALL/sig-intro/{instagram,x,linkedin}; intro posters, especially first `ig-carousel` and `li-doc` frames.
- **Quote:** "Cloud Native" / "Forum Rangkai"; "Geser"; standalone "SESI TERDEKAT".
- **Why:** `jelas`: the opening carousel/document frame gives a group name and waveform, but not the upcoming date/time/channel. Standalone frames compress next-session logistics into a small strip below a paragraph. It is readable on inspection, not clear in three seconds on a phone.
- **Direction:** Make a short next-session schedule and named Discord channel visible on the first frame; shorten group explanation rather than shrink logistics.

### P4 · major · Job titles do not explain why I should listen
- **Where:** {sigcn-gitops-argocd,sigcn-kubernetes-pemula,sigcn-observability}/speakers/{instagram,x,linkedin}; captions and speaker posters.
- **Quote:** "Dani (contoh), SRE", "Bima (contoh), DevOps Engineer", "Sari (contoh), Backend Developer", "Eko (contoh), SRE"; "yang cerita".
- **Why:** `spesifik` and `ngobrol`: names and job titles are concrete logistics, but give me no speaker-specific experience or question to bring. The host anecdote on two carousel sets helps the host, not the advertised guests. I do not already know these people.
- **Direction:** Give each guest one relevant thing they have tried or will show, or one question they want to discuss. No invented credentials or padded biography.

### P5 · major · X loses the reason to stop
- **Where:** ALL/{announce,cover}/x; captions (poster remains a scheduled flyer except P1).
- **Quote:** "GitOps dengan Argo CD", "Cloud Native 101 bareng SIG CN × FORA.", "Sab, 12 Des jam 19.30 WIB, kita kumpul di voice.", "Ngobrol Karier di Tech".
- **Why:** `ngobrol`: X reduces the post to title/date/invite and drops the useful incident, slow-app problem, or career situations. Knowing I may turn on a mic is not yet a reason to reply or attend.
- **Direction:** Keep one recognisable problem or thing to bring in the tweet, cutting redundant join wording to stay within the limit. Do not add an unnecessary thread.

### P6 · major · Recap closes the conversation
- **Where:** ALL/recap/{instagram,x,linkedin}; captions and closing recap frames.
- **Quote:** "Sesi berikutnya kita umumkan di Discord FORA", "Sampai ketemu di sesi berikutnya.", "Makasih" / "Terima kasih".
- **Why:** `ngobrol`: useful notes and thanks, but the only next action is wait/join. No specific unfinished question, request for a counterexample, or invitation to share what happened in my own setup. The mic permission is for a future session, not this conversation.
- **Direction:** Choose one actual takeaway and invite a related experience or remaining question. Do not append the same generic question to every recap.

## Per post

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P5 |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/cover/instagram | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| fora-ngobrol-karier/cover/linkedin | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| fora-ngobrol-karier/recap/x | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P6, R1 |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| fora-ngobrol-karier/reminder/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| fora-ngobrol-karier/reminder/x | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| fora-ngobrol-karier/reminder/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| fora-ngobrol-karier/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P5 |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-gitops-argocd/cover/linkedin | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P6, R2 |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P6, R2 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P6, R2 |
| sigcn-gitops-argocd/reminder/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-gitops-argocd/reminder/x | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-gitops-argocd/reminder/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-gitops-argocd/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-gitops-argocd/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-gitops-argocd/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | R3 |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P5 |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | R3 |
| sigcn-kubernetes-pemula/cover/instagram | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, R3 |
| sigcn-kubernetes-pemula/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-kubernetes-pemula/cover/linkedin | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, R3 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| sigcn-kubernetes-pemula/reminder/instagram | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P2, R3 |
| sigcn-kubernetes-pemula/reminder/x | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-kubernetes-pemula/reminder/linkedin | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P2, R3 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P5 |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-observability/cover/instagram | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/cover/x | 2 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P1, P5 |
| sigcn-observability/cover/linkedin | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| sigcn-observability/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| sigcn-observability/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | P6 |
| sigcn-observability/reminder/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-observability/reminder/x | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-observability/reminder/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P2 |
| sigcn-observability/sig-intro/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/sig-intro/x | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/sig-intro/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/speakers/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-observability/speakers/x | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-observability/speakers/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 4 | fix | P4 |

### R1 · major · Career X recap removes the useful examples
- **Where:** fora-ngobrol-karier/recap/x, caption X 2/3 and `x` recap poster.
- **Quote:** "Belajar dengan target yang jelas"; "Pindah peran bisa dimulai dari tugas di sekitar peran tujuan".
- **Why:** `spesifik`: the tweet keeps generic advice but drops the useful on-call/pipeline example present in the longer captions. It reads like advice I have seen many times, without enough detail to act on.
- **Direction:** Prefer one worked example over three abstract headings; keep it useful without requiring the long-form caption.

### R2 · major · Rollback claim sounds unconditional
- **Where:** sigcn-gitops-argocd/recap/{instagram,x,linkedin}, captions and recap point 4 / summary posters.
- **Quote:** "Rollback cukup dengan git revert"; "Commit baru yang membatalkan perubahan, lalu disync."
- **Why:** `spesifik`: valid for reverting the Git-managed desired state in the demonstrated case, not a general guarantee of application/data rollback. As a junior developer I could read "cukup" as undoing migrations or external effects too. The body explains sync but not this boundary.
- **Direction:** Scope the takeaway to the demonstrated manifest/config change and state the data-migration limitation briefly. No need for a long disaster-recovery lecture.

### R3 · major · Beginner exercise does not say what I need ready
- **Where:** sigcn-kubernetes-pemula/{announce,cover,reminder}/{instagram,linkedin}, captions; poster context "Satu cluster lokal, dari nol".
- **Quote:** "Kita ulangi percobaan itu bareng-bareng."; "Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya."
- **Why:** `pemula`: I know the name Kubernetes, not how to reproduce this. The text promises a shared experiment but never says whether the host demonstrates or attendees should have minikube installed. Permission to listen is clear; preparation for participating is not.
- **Direction:** Say whether it is a host demo or a hands-on exercise, and name preparation only if required. Keep the personal anecdote.

## Machine summary

```json
{
  "role": "reader",
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
        "spesifik": 3,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "fora-ngobrol-karier/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
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
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
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
        "konsisten": 4
      },
      "verdict": "fix",
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
        "platform": 4,
        "konsisten": 4
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-gitops-argocd/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-gitops-argocd/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
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
        "konsisten": 4
      },
      "verdict": "fix",
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
        "platform": 4,
        "konsisten": 4
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
      "id": "sigcn-gitops-argocd/speakers/linkedin",
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
        "jelas": 2,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
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
        "konsisten": 4
      },
      "verdict": "fix",
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
        "platform": 4,
        "konsisten": 4
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-observability/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-observability/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
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
        "konsisten": 4
      },
      "verdict": "fix",
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
        "platform": 4,
        "konsisten": 4
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
      "id": "sigcn-observability/speakers/linkedin",
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
    }
  ]
}
```
