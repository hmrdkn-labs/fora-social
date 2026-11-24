# 03 · Captions, date formatting, sample sessions

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/03-copy`, branch `03-copy` from `main`.
- **Model:** `anthropic/claude-sonnet-5-5`, thinking `medium`.
- **Runs in parallel with:** 01 and 02 (disjoint files).

Read `~/workspace/AGENTS.md`, `docs/BRIEF.md`, `briefs/00-orchestrator.md` and `src/types.ts`
first. `src/types.ts` is the contract: use it, do not change it. If it must change, stop and
say so in your reply.

## Files owned

`src/format.ts`, `src/captions/**` (brief 02 creates a stub `src/captions/index.ts`; your
version replaces it whole), `community.yaml`, `examples/sessions/**`. Nothing else. No new npm
dependencies: plain TypeScript run by Node 26 type stripping (`.ts` import extensions, no
enums).

## Tasks

1. **`src/format.ts`** (used by templates and captions), with `Intl` and `Asia/Jakarta`:
   - `startsAt(s: Session): Date`, `endsAt(s: Session): Date`
   - `formatDate(s)` → `"Sabtu, 6 Desember 2026"`; `formatDateShort(s)` → `"Sab, 6 Des"`
   - `formatTime(s)` → `"19.30 WIB"`; `formatTimeRange(s)` → `"19.30–21.00 WIB"`
   - `discordUrl(s, c: Community)`; `displayUrl(url)` → `"discord.gg/rSepJu7Wb"`
   - `handle(p: Person)` → `"@name"` or `""`; `speakerLine(s)` (host and speakers joined
     naturally in Indonesian: "bersama A dan B", "dipandu A").
2. **Captions** (`src/captions/index.ts` exporting `buildCaptions: CaptionBuilder`, split into
   files as you see fit) for all five post types × three platforms:
   - **Instagram:** hook line, what/when/where, how to join (Discord invite, voice channel,
     "siapa pun boleh ikut ngobrol dan bertanya"), call to action, then hashtags
     (community + SIG + session, deduplicated, at most 8). ≤ 2,200 chars. Note that IG
     captions can't hold clickable links: say "link di bio" and still give the short URL.
   - **X:** a single post when it fits, otherwise a thread of at most 4 posts. Every post
     ≤ 280 by X's weighted count (URLs count 23; emoji and CJK count 2). Implement
     `xLength(text)` and enforce it in tests. 1–2 hashtags max.
   - **LinkedIn:** more professional tone, still warm; short paragraphs; what attendees get;
     who it's for; open format in a voice channel; invite link; 3–5 hashtags at the end.
     ≤ 3,000 chars.
   - Post types: **announce** (upcoming session), **reminder** ("hari ini" / "sedang
     berlangsung, langsung join"), **recap** (key takeaways from `recap.points`, attendee
     count if present, links, thank the speakers, invite to the next one), **cover**
     (series/theme), **sig-intro** (what the SIG is, who it's for, how to join, using
     `Sig.description`).
   - Indonesian, English tech terms where natural (Kubernetes, GitOps, observability,
     deploy). Casual-friendly, not corporate, no clickbait, sparing emoji (IG ≤ 4, X ≤ 2,
     LinkedIn ≤ 2). Handles: use `Person.handle` when given.
3. **`community.yaml`**: `Community` for FORA. Discord `https://discord.gg/rSepJu7Wb`.
   Social handles unknown: leave them out (they are optional) and list it as an open question.
   Logo path `brand/logos/fora-mark.svg` (brief 01 creates it).
4. **Sample sessions** in `examples/sessions/`, realistic and consistent (dates in
   December 2026 and January 2027, Saturdays or weekday evenings, WIB), each with full
   `recap`:
   - `sigcn-kubernetes-pemula.yaml`: "Kubernetes untuk Pemula", series "Cloud Native 101".
   - `sigcn-gitops-argocd.yaml`: "GitOps dengan Argo CD", same series.
   - `sigcn-observability.yaml`: "Observability: Logs, Metrics, Traces", same series.
   - `fora-ngobrol-karier.yaml` (sig `fora`): a general FORA session; pick a fitting theme,
     e.g. careers in tech or how to start contributing to open source.
   - Vary the data on purpose to stress templates: one with no speakers (host-led open
     discussion), one with two speakers, one long title (≈ 60 chars), one with 6 topics and 5
     recap points, one with role and handle on every person. Use placeholder names that are
     obviously samples (e.g. "Rina (contoh)") — not real people.
   - Recap points technically correct and useful on their own.
5. **Tests** `src/captions/captions.test.ts` (run with `node --test src/`): build captions
   for an in-code fixture of each variant above, for every post type, and assert the limits
   (X weighted ≤ 280 per post, ≤ 4 posts; IG ≤ 2,200 and ≤ 8 hashtags; LinkedIn ≤ 3,000),
   that every non-recap caption contains the Discord URL (IG: short URL), and that the
   voice-channel nature is stated. `formatDate`/`formatTime` tests including a session
   crossing midnight.

## Checks

`node --test src/` passes. Read all generated captions for the four samples yourself (print
them with a scratch script under `.scratch/`; to parse YAML there, install `yaml` inside
`.scratch/` only, never in the repo) and fix anything awkward. Commit in small logical commits
on `03-copy`, push the branch. Do not merge to `main`.

## Report

Fill in below: model, commits, check results, one full sample caption per platform pasted
here, open questions for the person. Reply to the orchestrator in at most 20 lines.

- **Model:** anthropic/claude-sonnet-5-5, thinking medium.
- **Checks:** `node --test src/` passes (31 tests). All four samples x five post types x three platforms printed and read.
- **Sample, kubernetes-pemula / announce / Instagram:**

```
🎙 Kubernetes untuk Pemula
Sesi SIG CN × FORA

Sesi pertama Cloud Native 101. Kita kenalan dengan Kubernetes dari nol, mulai dari kenapa container butuh orkestrasi sampai deploy aplikasi pertama ke cluster lokal.

📅 Sabtu, 12 Desember 2026, 19.30–21.00 WIB
Di voice channel sig-cn-voice Discord FORA. Ngobrol langsung lewat suara, bukan webinar.
Bersama Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, dipandu Rina (contoh) @rina_contoh.

Yang kita bahas:
• Container vs Kubernetes, kenapa butuh orkestrasi
• Pod, Deployment, dan Service
• Deploy aplikasi pertama di cluster lokal
• Debug dasar dengan kubectl

Cara ikut:
1. Buka Discord FORA lewat link di bio, atau langsung ke discord.gg/rSepJu7Wb
2. Masuk ke voice channel sig-cn-voice
3. Siapa pun boleh ikut ngobrol dan bertanya, tinggal masuk.

💬 Simpan postingan ini dan ajak teman yang mungkin tertarik.

#FORA #KomunitasTech #SIGCN #CloudNative #Container #DevOps #Kubernetes
```

- **X:**

```
[193] 🎙 Kubernetes untuk Pemula
Sab, 12 Des, 19.30–21.00 WIB
Ngobrol santai di voice channel sig-cn-voice Discord FORA, siapa pun boleh ikut bicara dan bertanya.
https://discord.gg/rSepJu7Wb
#SIGCN #FORA
```

- **LinkedIn:**

```
Kubernetes untuk Pemula
Sesi SIG CN × FORA

Sesi pertama Cloud Native 101. Kita kenalan dengan Kubernetes dari nol, mulai dari kenapa container butuh orkestrasi sampai deploy aplikasi pertama ke cluster lokal.

Sabtu, 12 Desember 2026, 19.30–21.00 WIB, bersama Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, dipandu Rina (contoh) @rina_contoh.

Yang akan kita bahas:
• Container vs Kubernetes, kenapa butuh orkestrasi
• Pod, Deployment, dan Service
• Deploy aplikasi pertama di cluster lokal
• Debug dasar dengan kubectl

Cocok untuk siapa pun yang tertarik pada topik ini, dari yang baru mulai sampai yang sudah berpengalaman.

Formatnya talk santai di voice channel sig-cn-voice Discord FORA, bukan webinar. Tidak perlu daftar: cukup masuk, dan siapa pun boleh bicara serta bertanya langsung.

Gabung lewat undangan Discord: https://discord.gg/rSepJu7Wb

#SIGCN #CloudNative #Kubernetes #Container #DevOps
```

- **Notes:**
  - The brief's example "Sabtu, 6 Desember 2026" is a Sunday; `formatDate` is correct, tests use real dates.
  - `speakerLine(s, withHandles?)` has an optional second parameter; handles render as "Nama @handle".
  - Voice channels are written without "#" ("voice channel sig-cn-voice"), because "#sig" would become a hashtag on IG/X.
  - X threads only when the single post does not fit; recap is always a thread of 3 or 4 posts (titles only, no bodies).
  - Samples have no `id` key (the loader adds it from the file name). Sample sessions reference `sig: sigcn`, which needs `sigs/sigcn.yaml` from brief 01.
- **Open questions for the person:**
  1. FORA social handles (Instagram, X, LinkedIn): left out of `community.yaml`.
  2. Voice channel names: samples use `sig-cn-voice` and `fora-voice`; confirm the real ones.
  3. Hashtags `FORA`, `KomunitasTech` are my choice; confirm.
  4. "Tidak perlu daftar" assumes no registration; confirm.
