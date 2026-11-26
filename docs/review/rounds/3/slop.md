# Round 3 — slop

## Overall

Concrete host memories and the career recap sound like people; no hype or forced Indonesian technical translations.
Speaker bios still read like instructions to a presenter, sometimes printed as though they were quotations.
The observability subtitle and recap contain the clearest unnatural copy.
Logistics agree across the inspected formats; the remaining repetition is editorial, not a broken invite.
Reviewed 84 posts: the prompt says 72, but four sessions × seven existing post types × three platforms is 84; none omitted.

## Patterns

Scope notation below: session names are the exact directory names; “all platforms” means instagram, x, linkedin. Poster locations are relative to examples/<session>/. Each pattern applies only to the rows referencing it.

### P1 — Presenter directions masquerading as public bios

- **Severity:** major.
- **Where:** all four sessions, speakers, all platforms; captions/speakers.md and the biography-bearing speakers posters (ig-feed, ig-story, ig-carousel individual profiles, li-doc individual profiles; x and li-link where bios appear). The Kubernetes X caption carries Bima's bio, while its images omit the longer bios; the public profile cards still carry the host wording.
- **Quotes:** career: “Mandu obrolan, cerita soal pindah dari developer ke SRE, lalu tanya balik, kerjaan pertama kalian dapat dari mana?” GitOps: “Cerita kenapa timnya pindah ke GitOps, lalu tanya balik, \"siapa di sini yang masih kubectl apply ke prod?\"” Kubernetes: “Memandu, dan mengulang percobaan mematikan satu Pod bareng-bareng.” Observability: “Memandu, dan nanya duluan, terakhir kali aplikasimu lambat, kamu mulai cari dari mana?”
- **Why:** manusia 3, slop. These describe the planned delivery, including when to ask the audience a question, rather than tell us about the person. “Memandu, dan” is especially mechanical. The italic profile blocks visually frame third-person directions as the speaker's own words. Natural ingredients do not rescue the repeated stage-direction syntax.
- **Direction:** give each person one concrete contribution or relevant experience. Ask a reader question directly, separately, only if it earns its place. Do not render third-person bios as personal quotations.

### P2 — An unfinished-sounding observability subtitle

- **Severity:** major.
- **Where:** sigcn-observability/announce/all platforms; sigcn-observability/{cover,speakers}/{instagram,linkedin}. The subtitle appears on announce posters and speakers carousel/document covers; cover captions on Instagram and LinkedIn also reproduce it. The X cover and X speakers poster do not carry the subtitle and are excluded.
- **Quote:** “Aplikasinya lambat, dan ke mana kita cari jawabannya”.
- **Why:** manusia 3. A statement is joined with “dan” to an interrogative clause, then presented without a question mark. It reads like two draft hooks spliced together, not something the organiser says.
- **Direction:** choose a plain statement or an actual question; avoid concatenating both.

### P3 — LinkedIn live repeats the same destination immediately

- **Severity:** major.
- **Where:** all four sessions/live/linkedin, caption.
- **Quotes:** “Live sekarang di voice channel fora-voice.” followed by “Kita ada di voice channel fora-voice.”; Kubernetes and observability likewise open “Live sekarang di voice channel sig-cn-voice.” and repeat “Kita ada di voice channel sig-cn-voice.” GitOps opens “Kita sudah mulai (19.30 WIB).”, then still uses the stock block “Undangan Discord: https://discord.gg/rSepJu7Wb. Kita ada di voice channel sig-cn-voice.”
- **Why:** manusia 3, fix. Three captions repeat information within a few lines; all four use the same label-colon invitation block. The GitOps variant is less redundant but still reads like an administrative field pasted into a conversation. This is avoidable boilerplate, not a reason to remove the useful welcome.
- **Direction:** one sentence with the invite and destination. Keep live short; do not introduce the same channel twice.

### P4 — Observability recap substitutes a slogan for a useful distinction

- **Severity:** major.
- **Where:** sigcn-observability/recap/all platforms. Instagram and LinkedIn captions; ig-feed, ig-story, x, li-link, and the metrics slide in ig-carousel and li-doc. The X caption itself selects the OpenTelemetry point; the problematic metrics headline remains on its poster.
- **Quotes:** “Metrics itu angka murah yang tahan lama”; “Jumlah request dan lama respons ringan disimpan berbulan-bulan, jadi cocok untuk dashboard dan alert.” Also in the Instagram/LinkedIn caption and log slides: “jadi request yang lambat gampang ditemukan di aplikasi lambat tadi.”
- **Why:** manusia 3 and spesifik 3, slop. Numbers do not become durable or cheap merely by being metrics; aggregation and time-series retention are the missing explanation. The slogan sounds generated, and the adjacent “lambat ... aplikasi lambat tadi” sounds patched rather than edited. No blocking technical claim is inferred: the intended practical point is recoverable.
- **Direction:** say what is aggregated and why keeping that data is economical relative to individual events. Remove the dangling callback to “aplikasi lambat tadi”; do not replace it with another slogan.

### P5 — A generic reminder instead of a practical detail

- **Severity:** major.
- **Where:** fora-ngobrol-karier/reminder/{instagram,linkedin}; sigcn-gitops-argocd/reminder/{instagram,linkedin}; caption.
- **Quotes:** “Kalau ada pertanyaan soal Karier, tulis dulu biar nggak lupa.”; “Kalau ada pertanyaan soal GitOps, tulis dulu biar nggak lupa.” LinkedIn changes only the ending to “catat dulu supaya tidak lupa.”
- **Why:** ngobrol 3 and spesifik 3, fix. Swapping a topic into an instruction to remember questions gives neither a concrete prompt nor a session-specific practical detail. The poster already has a better reminder: “Buka Discord sepuluh menit lebih awal buat cek suara.”
- **Direction:** use that practical detail, or name one specific question/example worth bringing. Do not manufacture another reassurance or a longer checklist.

## Per post

Scores apply to caption plus the platform's poster set. Live and recap are judged for their temporal job: a live notice need not pretend to be a new dated announcement; a recap need not invent the next session's date. Stable invite wording alone is not slop. A legitimate list of logs, metrics and traces is not an empty rhetorical triad. Example names marked “(contoh)” are intentional sample data, not invented real-person claims.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P3 |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 5 | fix | P5 |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 5 | fix | P5 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| fora-ngobrol-karier/speakers/x | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| fora-ngobrol-karier/speakers/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P3 |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 3 | 4 | 3 | 4 | 5 | fix | P5 |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 3 | 4 | 3 | 4 | 5 | fix | P5 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-gitops-argocd/speakers/x | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P3 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-observability/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P2 |
| sigcn-observability/announce/x | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P2 |
| sigcn-observability/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P2 |
| sigcn-observability/cover/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P2 |
| sigcn-observability/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/cover/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P2 |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P3 |
| sigcn-observability/recap/instagram | 4 | 3 | 4 | 4 | 3 | 4 | 5 | slop | P4 |
| sigcn-observability/recap/x | 4 | 3 | 4 | 4 | 3 | 4 | 5 | slop | P4 |
| sigcn-observability/recap/linkedin | 4 | 3 | 4 | 4 | 3 | 4 | 5 | slop | P4 |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1, P2 |
| sigcn-observability/speakers/x | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1 |
| sigcn-observability/speakers/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | slop | P1, P2 |

### Additional per-post issues

None beyond the scoped patterns above. All below-4 scores have a pattern reference. No blocking issues.

## Machine summary

```json
{
  "role": "slop",
  "round": 3,
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
      "id": "fora-ngobrol-karier/announce/linkedin",
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
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
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
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 5
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
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
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
      "id": "sigcn-gitops-argocd/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 5
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
        "ngobrol": 3,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 5
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
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
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
      "id": "sigcn-kubernetes-pemula/recap/instagram",
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
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
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
        "konsisten": 5
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
      "id": "sigcn-observability/cover/instagram",
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
      "id": "sigcn-observability/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
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
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
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
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "slop",
      "blocking": 0
    }
  ]
}
```
