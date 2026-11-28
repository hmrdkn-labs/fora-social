# 14 · SIG CN launch posts, and Mustafa's first session (day not fixed yet)

Worktree `~/workspace/.worktrees/fora-social/14-sigcn-launch`, branch `14-sigcn-launch`.
Model: Sonnet 5.5, thinking medium.

## Goal

FORA launches SIG CN for real. The person needs posts for X, Instagram and LinkedIn that say
what SIG CN is, who is active, what it works on, and the first session. Posting is by hand;
we never post.

## Facts (only these; don't invent anything else)

- **SIG CN** = FORA's Cloud Native group. Scope (the person's words): "basically the whole
  CNCF things". Not only Kubernetes and GitOps.
- **Active now:**
  - **Dika (Azzam Muhammadi Rizqun Karima)**, the person.
  - **Hamzah Chairil Salim**.
  - **Ammar Alfian**.

  All three are preparing Kubernetes certifications together, aiming for **Kubestronaut**
  (CNCF program for holding all the Kubernetes certifications: per the CNCF FAQ, KCNA, KCSA,
  CKA, CKAD and CKS). No titles or roles for anyone.
- **Mustafa Zaki Assegaf** will share about **inference engineering** (running AI models in
  production). This continues a conversation from **IDSW**; write "lanjutan dari IDSW" and
  don't expand the acronym. He is known on X already: no title, no credentials.
- **Agenda:**
  - Kubernetes certification study prep (target Kubestronaut).
  - Learning Linux and systems engineering.
  - Inference engineering with Mustafa.
- **First session:** Mustafa, about how an AI model works (from input to answer: what
  inference is). **Next week, day not fixed yet, 19.30 WIB, after isya** ("habis isya" is
  fine). Voice channel `general`. Discord invite from `community.yaml`.
- No photos for anyone: grey silhouettes.

## Change

1. **Contract (done by the orchestrator, `src/types.ts`):**
   - `Session.date` is optional, with new `Session.when` (free text); exactly one is required.
   - New optional `Sig.agenda` and `Sig.people`.

   Implement them:
   - `src/schema.ts`: refine so exactly one of `date`/`when` is set.
   - Rendering: without `date`, render only cover, sig-intro and speakers; skip announce,
     reminder, live and recap the same way recap is skipped without `recap`, with a clear
     message. Wherever those posts show the date, show `when` plus the time instead
     (e.g. "Minggu depan · 19.30 WIB").
   - sig-intro: show `agenda` and `people` (names, each `about` line, silhouettes) when
     present, on every format. Keep the "Sesi terdekat" box, using `when` when there's no date.
     Wide formats (x, li-link) may show only names; nothing may overflow.
   - Captions for sig-intro mention the active people and agenda when present.
   - README field list. Tests for: schema date/when, skipped post types, and sig-intro with
     people and agenda.
2. **`sigs/sig-cn.yaml`:**
   - Widen `tagline` and `description` to the whole CNCF landscape, in plain words: running
     apps in the cloud, Linux and systems, Kubernetes, and running AI models (inference).
   - Add `agenda` (the three items above) and `people`: Dika, Hamzah and Ammar with about
     "lagi persiapan sertifikasi Kubernetes, targetnya Kubestronaut" (vary the wording;
     don't repeat one sentence three times), and Mustafa with about "berbagi soal inference
     engineering, lanjutan dari IDSW".
   - The sample sessions in `examples/` use this SIG too; re-render them and commit the
     changes (revert PDF-only churn).
3. **Sample-name clash:** the sample career session's host is "Dika (contoh)", but Dika is now
   a real person. Rename the sample to another name, e.g. "Bayu (contoh)", handle and text
   included.
4. **Session file** `sessions/sigcn-cara-kerja-model-ai.yaml`:
   - `sig: sig-cn`, theme "AI Inference", title along the lines of "Cara Kerja Model AI".
   - `when: Minggu depan, harinya menyusul` (or better wording), `time: "19:30"`,
     `voiceChannel: general`.
   - `host: Mustafa Zaki Assegaf`, no role, `speakers: []`, and a `format` line.
   - `problem`, `description`, `topics` (≤5) in plain words a newcomer gets: what happens when
     you send a prompt, what inference means, why running models is an engineering problem.
     No claims about Mustafa's employer or numbers.
   - No `note`: we don't have his words.
5. **Voice:** follow `docs/voice.md`, and apply the four standards from
   https://github.com/content-designer/ux-writing-skill (purposeful, concise, conversational,
   clear; read `SKILL.md`). Indonesian, "kita/aja/nggak". Kubestronaut, KCNA etc. may appear;
   say once in plain words what Kubestronaut is.
6. **Render and publish:**
   - `pnpm render sessions/sigcn-cara-kerja-model-ai.yaml`, then `pnpm sheets out`. Look at
     the cover, sig-intro and speakers sheets yourself.
   - `pnpm posts sigcn-cara-kerja-model-ai` writes `posts/sigcn-cara-kerja-model-ai/`. It must
     handle the missing post types (list only what exists), and put **sig-intro first**,
     labelled as the SIG CN launch post.

## Checks

- `pnpm check` passes, style linter included.
- No overflow on any rendered format.

## Report

Fill below: commits, check result, the sig-intro X caption and the SIG CN description
(before → after), anything guessed. At most 15 lines in your reply.

### Result
