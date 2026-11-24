# 06 · Make the copy sound like people, not a model

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/06-human-voice`, branch `06-human-voice` from `main`.
- **Model:** `anthropic/claude-sonnet-5-5`, thinking `medium`.

Read `~/workspace/AGENTS.md`, `docs/BRIEF.md`, `briefs/00-orchestrator.md`, `briefs/03-copy.md`
(Report), `src/types.ts`, then all of `src/captions/**`, `templates/**` (text strings only),
`sigs/*.yaml`, `community.yaml`, `examples/sessions/*.yaml`, and the captions in
`examples/README.md`.

## Why

The person says the copy smells like AI. They're right. Read the GitOps captions in
`examples/README.md` and you'll see what a reader on IG sees after two weeks of posts: the
same skeleton every time, the same reassurances, and the stock moves listed below. You are a
language model too, so these are your own defaults. Assume a first draft has them.

## Research: what gives AI text away

Sources: Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
(WikiProject AI Cleanup, updated Nov 2026); the Indonesian summary
[Ciri gaya tulisan ChatGPT](https://howmanywords.app/id/blog/ciri-ciri-gaya-tulisan-chatgpt);
[The Economist, How to spot AI writing (Jul 2026)](https://www.economist.com/culture/2026/07/30/how-to-spot-ai-writing).
Read the Wikipedia page's Content, Language and grammar, Style, and "Signs of human writing"
sections yourself; it is the best single source.

**Patterns (stronger than single words):**
1. **Negative parallelism / correcting a misconception nobody had:** "bukan X, tapi Y", "bukan
   sekadar…", "tak hanya… tetapi juga…", "Y rather than X". Ours: "Ngobrol langsung lewat
   suara, bukan webinar" in almost every caption, "bukan orang yang menjalankan kubectl apply".
2. **Rule of three:** triads of adjectives or short clauses. Ours: "Masuk, dengarkan, ikut
   ngobrol."; "container, Kubernetes, GitOps, observability, dan seterusnya".
3. **False ranges:** "dari yang baru mulai sampai yang sudah di production", "dari mahasiswa
   sampai yang sudah bertahun-tahun bekerja". Says nothing; appears in ours 6+ times.
4. **Same skeleton every post:** hook → emoji date line → "Yang kita bahas:" bullets → numbered
   "Cara ikut" 1-2-3 → "💬 Simpan/ajak teman" → hashtag block. Uniform paragraph lengths.
   Humans vary length a lot: one-line paragraphs next to longer ones.
5. **Self-answered rhetorical questions and label-colon lines:** "Untuk siapa? Yang…",
   "Formatnya: …", "Sesi: …", "Kenalan sama SIG CN di FORA: Ngobrol santai…" (colon then a
   capitalised fragment). Title-ish "X: Y" constructions stacked.
6. **Reassurance stacking / over-politeness:** "siapa pun boleh ikut ngobrol dan bertanya",
   "Tidak perlu daftar: cukup masuk", "Pemula sangat boleh, nggak ada pertanyaan yang terlalu
   dasar" all in one caption. Say the open-door fact once, plainly.
7. **Emoji as bullets or line openers** (🎙 📅 💬 ✅ 🔴 at the start of lines), boldface
   inline headers, curly quotes, em dashes (the newest models over-correct to only commas and
   periods; vary punctuation naturally, parentheses are fine).
8. **Puffery and significance:** "penting", "krusial", "memberdayakan", "wawasan berharga",
   "seru dan bermanfaat", "kesempatan emas", "jangan lewatkan", "membawa pulang".
9. **Avoiding plain "is"** (English "serves as / stands as"; Indonesian "berperan sebagai",
   "merupakan", "hadir sebagai", "menjadi wadah").
10. **Translationese:** literal English calques that no Indonesian speaker says: "poin-poin
    yang kita bawa pulang" (takeaways), "sumber kebenaran" (source of truth: just say
    "source of truth"; tech people say it in English), "simpan postingan ini", "ketemu di
    voice channel".
11. **Tidy closing summaries and calls to action** at the end of everything.

**AI vocabulary in Indonesian to ban** (case-insensitive, whole word): menyelami, merangkul,
memberdayakan, mengeksplorasi (when "bahas"/"coba" works), menavigasi, permadani, lanskap,
ekosistem (except a literal tech ecosystem, max once per post), wawasan, krusial, esensial,
signifikan, holistik, komprehensif, sinergi, optimal, inovatif, transformasi, berkelanjutan,
"di era digital", "di dunia yang", "tak hanya", "tidak hanya", "bukan sekadar", "penting untuk
diingat", "perlu diingat", "tentunya", "pastinya", "mari kita", "yuk kita", "seru dan
bermanfaat", "jangan lewatkan", "kesempatan emas", "siap untuk", "bawa pulang", "dan
seterusnya", "dan lain sebagainya", "merupakan", "hadir untuk", "menjadi wadah", "sebagai
kesimpulan", "secara keseluruhan". English inside Indonesian: delve, leverage, seamless,
robust, game-changer, unlock, empower, elevate, journey, landscape, deep dive.

## What people actually write (encourage)

Look at how real Indonesian dev communities post (e.g. Kubernetes Indonesia, DevOps
Indonesia, Python ID, local meetups on IG/X/LinkedIn) and match that register:
- **Specifics over adjectives:** "kita coba rollback pakai `git revert` beneran", a real
  failure ("pernah ada yang `kubectl apply` langsung ke prod jam 11 malam?"), numbers, names
  of tools, the actual question someone asked last time.
- **Organiser voice, first person plural, casual Jakarta-lite:** "kita", "aja", "nggak",
  "bareng", "mampir", "nimbrung", "langsung masuk voice", "link Discord di bio". Not
  "Anda". LinkedIn: same person, a bit tidier ("tidak" ok), still "kita", no corporate tone.
- **Say the format once, as a fact:** "Formatnya ngobrol di voice channel Discord. Mau
  dengerin aja boleh, mau nyalain mic juga boleh." Then stop.
- **Varied shape:** some posts are two lines. Not every post needs a topic list, a numbered
  how-to, an emoji, or a CTA. X posts read like a person tweeting, not a flyer.
- **English tech terms as people say them** (deploy, cluster, rollback, source of truth,
  on-call), no forced Indonesian equivalents.
- **Hashtags:** 2–4 on IG, 0–1 on X, 2–3 on LinkedIn. Real ones people search
  (#Kubernetes, #CloudNative, #DevOpsIndonesia), not invented ones.
- **Emoji:** at most 1 per caption, never as a line opener or bullet.
- **The host's own words:** `Session.note` (new, optional; see `src/types.ts`) is one or two
  sentences in the host's voice. When present, captions lead with it unchanged.

## Files owned

`src/captions/**`, `src/schema.ts` (only to add `note`), `templates/**` (text strings only; no
layout changes beyond what shorter or longer strings need), `sigs/*.yaml` (tagline,
description, hashtags), `community.yaml` (hashtags), `examples/sessions/*.yaml` (copy fields;
add a `note` to two of the four), `examples/**` (re-render), `docs/voice.md` (new),
`README.md` (one short section linking `docs/voice.md`). Do not change `src/types.ts`.

## Tasks

1. **`docs/voice.md`**: the FORA voice guide for people writing sessions by hand, in English
   with Indonesian examples: 6–10 rules, a ban list, an encourage list, and three before/after
   rewrites taken from our current captions. Cite the sources above. Keep it short enough
   that someone reads it.
2. **Rewrite the caption builders.** Drop the fixed skeleton. Per post type and platform,
   write 2–3 genuinely different shapes and pick one deterministically from the session id
   (stable hash), so consecutive sessions don't look identical and re-renders don't churn.
   Every caption still says how to join (Discord invite, voice channel name) and that anyone
   can listen or talk, once. Keep the platform limits from brief 03 (X weighted ≤ 280,
   thread ≤ 4; IG ≤ 2,200; LinkedIn ≤ 3,000).
3. **Rewrite on-image strings** in `templates/**` with the same rules (e.g. "Masuk,
   dengarkan, ikut ngobrol." and "Talk santai lewat suara di voice channel, bukan webinar"
   go; "hal yang kami bawa pulang" goes). Keep them short; re-render and look.
4. **Rewrite `sigs/*.yaml` taglines/descriptions and the sample sessions' copy** (titles,
   subtitles, descriptions, recap points) by the same rules. Keep them technically correct.
5. **Lint, enforced by tests:** `src/captions/style.ts` holds the ban list (words and
   regex patterns: negative parallelism "bukan … tapi/tetapi/melainkan", false ranges
   "dari … sampai …" with people words, em dash `—`, emoji at line start, more than one
   emoji, "siapa pun" more than once, hashtags over the platform cap). `style.test.ts`
   runs it over every caption for the four samples plus the in-code stress fixtures, over
   the visible text of every rendered template body (strip tags from the template output;
   no browser needed), and over `sigs/*.yaml` and the sample sessions. Allow-list with a
   reason when a hit is legitimate (e.g. the en dash in "19.30–21.00").
6. **Re-render:** `pnpm check`, `pnpm examples`; commit the images and `examples/README.md`.

## Acceptance

- `pnpm check` and `pnpm examples` pass; the style test fails if you put "menyelami" or
  "bukan webinar" back into any caption or template.
- Read every caption for the four samples out loud in your head as an Indonesian dev reading
  IG at night. If a line sounds like a flyer, a press release, or a chatbot, rewrite it.
- Paste in the Report: for one session, all three platforms' announce captions before and
  after; plus the recap X thread after. Look at the re-rendered announce, reminder and
  sig-intro images in all formats; nothing overflows or looks emptier than before.

## Checks

Commit in small logical commits on `06-human-voice`, push the branch. Do not merge to `main`.

## Report

Fill in below: model, commits, check results, before/after samples, open questions. Reply to
the orchestrator in at most 20 lines.


### Report (Sonnet 5.5, medium)

- **Commits:** see `git log 06-human-voice`: lint and fixtures, captions, templates and copy, docs, re-rendered examples.
- **Checks:** `pnpm check` passes (143 tests); `pnpm examples` renders all 4 sessions without overflow failures. The style tests fail if "menyelami" or "bukan webinar" is put back into a caption, a template or a sample (the linter's own test pins both).
- **Images:** looked at announce, reminder, sig-intro, cover and recap in feed, story, X, link and carousel formats for the GitOps sample. Nothing overflows. The join strip is two lines of text in places where it was one before; room is computed, so layout holds.
- **Shapes:** IG 3 for announce/reminder/cover, 2 for recap/sig-intro; X 3 for announce/reminder/cover, 2 for recap; LinkedIn 3 for announce, 2 for others. Chosen by FNV-1a of `session.id|platform|type` (`shape()` in `context.ts`).
- **Choices to check:** hashtags are IG `#FORA #SIGCN #<theme> ...` (4), X one tag (the theme), LinkedIn three. `ForumRangkai` dropped from `sigs/fora.yaml`; `DevOps` became `DevOpsIndonesia` in `sigs/sig-cn.yaml`. Samples with a `note` (Kubernetes, GitOps) are invented host words; replace them with the host's real words. The recap leads with the same note, which is written before the talk.
- **Open questions:** (1) Is "Dengerin aja boleh, mic juga boleh" OK as the single join phrase? (2) X announce with a note becomes a two-post thread; want the note shortened instead? (3) LinkedIn still says "kami" in a few places and "kita" in others; pick one.

#### Before: GitOps announce, all platforms

#### Instagram

🎙 GitOps dengan Argo CD: dari commit di Git sampai deploy
Sesi SIG CN × FORA

Bagaimana kalau deploy cukup dengan merge pull request? Kita bahas prinsip GitOps dan cara Argo CD menjaga cluster tetap sama dengan isi repo Git.

📅 Sabtu, 19 Desember 2026, 19.30–21.00 WIB
Di voice channel sig-cn-voice Discord FORA. Ngobrol langsung lewat suara, bukan webinar.
Bersama Dani (contoh), dipandu Rina (contoh).

Yang kita bahas:
• Prinsip GitOps
• Argo CD Application dan sync
• Struktur repo manifest
• Rollback lewat git revert

Cara ikut:
1. Buka Discord FORA lewat link di bio, atau langsung ke discord.gg/rSepJu7Wb
2. Masuk ke voice channel sig-cn-voice
3. Siapa pun boleh ikut ngobrol dan bertanya, tinggal masuk.

💬 Simpan postingan ini dan ajak teman yang mungkin tertarik.

#FORA #KomunitasTech #SIGCN #CloudNative #Kubernetes #DevOps #ArgoCD #GitOps

#### X

🎙 GitOps dengan Argo CD: dari commit di Git sampai deploy
Sab, 19 Des, 19.30–21.00 WIB
Ngobrol santai di voice channel sig-cn-voice Discord FORA, siapa pun boleh ikut bicara dan bertanya.
https://discord.gg/rSepJu7Wb
#SIGCN #FORA

#### LinkedIn

GitOps dengan Argo CD: dari commit di Git sampai deploy
Sesi SIG CN × FORA

Bagaimana kalau deploy cukup dengan merge pull request? Kita bahas prinsip GitOps dan cara Argo CD menjaga cluster tetap sama dengan isi repo Git.

Sabtu, 19 Desember 2026, 19.30–21.00 WIB, bersama Dani (contoh), dipandu Rina (contoh).

Yang akan kita bahas:
• Prinsip GitOps
• Argo CD Application dan sync
• Struktur repo manifest
• Rollback lewat git revert

Cocok untuk siapa pun yang tertarik pada topik ini, dari yang baru mulai sampai yang sudah berpengalaman.

Formatnya talk santai di voice channel sig-cn-voice Discord FORA, bukan webinar. Tidak perlu daftar: cukup masuk, dan siapa pun boleh bicara serta bertanya langsung.

Gabung lewat undangan Discord: https://discord.gg/rSepJu7Wb

#SIGCN #CloudNative #Kubernetes #DevOps #GitOps


#### After: GitOps announce, all platforms

#### Instagram

GitOps dengan Argo CD

Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.

Sab, 19 Des, 19.30–21.00 WIB. Bersama Dani (contoh), dipandu Rina (contoh).

- Prinsip GitOps
- Argo CD Application dan sync
- Struktur repo manifest
- Rollback pakai git revert

Mampir ke voice channel sig-cn-voice di Discord FORA, link di bio atau discord.gg/rSepJu7Wb. Mau dengerin aja boleh, mau ikut ngomong juga boleh.

#FORA #SIGCN #GitOps #ArgoCD

#### X 1/2

Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.

#### X 2/2

GitOps dengan Argo CD, Sab, 19 Des jam 19.30 WIB.
Masuk aja ke voice channel sig-cn-voice di Discord FORA. Dengerin atau ngomong, dua-duanya boleh.
https://discord.gg/rSepJu7Wb
#GitOps

#### LinkedIn

Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.

GitOps dengan Argo CD. Sabtu, 19 Desember 2026, 19.30–21.00 WIB. Bersama Dani (contoh), dipandu Rina (contoh).

Gabung lewat https://discord.gg/rSepJu7Wb, lalu masuk ke voice channel sig-cn-voice. Mau dengarkan saja atau ikut bicara, dua-duanya boleh.

#GitOps #CloudNative #Kubernetes


#### After: GitOps recap, X thread

#### X 1/4

Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.

#### X 2/4

Rekap "GitOps dengan Argo CD". 11 orang ngobrol di voice channel. Makasih Dani (contoh).

#### X 3/4

Intinya:
1. Git jadi source of truth
2. Argo CD membandingkan live state dengan Git
3. Pisahkan repo manifest dari repo kode aplikasi
4. Rollback cukup dengan git revert

#### X 4/4

Dokumentasi Argo CD https://argo-cd.readthedocs.io/
Sesi berikutnya diumumkan di Discord FORA. Dengerin aja boleh, mic juga boleh.
https://discord.gg/rSepJu7Wb
#GitOps


