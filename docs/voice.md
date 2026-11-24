# FORA voice guide

For anyone writing a session file by hand (`title`, `subtitle`, `description`, `note`, `topics`, recap points). The captions and images are built from those words, so they sound like you only if you do.

`pnpm check` runs a linter (`src/captions/style.ts`) over every caption, every image text and every sample session. It catches the stock phrases below, not tone. Passing it does not make a sentence good.

## Why

Readers on IG spot generated text in two seconds, and after a few posts of the same skeleton they stop reading. The tells come from Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), the Indonesian summary [Ciri gaya tulisan ChatGPT](https://howmanywords.app/id/blog/ciri-ciri-gaya-tulisan-chatgpt) and The Economist's [How to spot AI writing](https://www.economist.com/culture/2026/07/30/how-to-spot-ai-writing) (Jul 2026). Patterns count more than single words.

## Rules

1. **Say the thing, not what it is not.** No "bukan X, tapi Y", "bukan sekadar", "tidak hanya… tetapi juga", and no ", bukan webinar" tacked on. Nobody thought it was a webinar.
2. **No triads, no false ranges.** "Masuk, dengarkan, ikut ngobrol" and "dari yang baru mulai sampai yang sudah di production" say nothing. Name one real thing.
3. **Specifics beat adjectives.** A tool, a number, a failure, a question someone asked last time. "Pernah `kubectl apply` langsung ke prod jam 11 malam?" is a hook. "Sesi seru dan bermanfaat" is not.
4. **Say how to join once.** Channel name, invite, "dengerin aja boleh, mic juga boleh". Then stop. No second reassurance ("tidak perlu daftar", "tidak ada pertanyaan yang terlalu dasar").
5. **Vary the shape.** Some posts are two lines. Not every post needs a topic list, steps, an emoji or a closing call to action. The caption builders already pick between 2 or 3 shapes per post type from the session id.
6. **Write like the organiser.** "Kita", "aja", "nggak", "bareng", "mampir". Not "Anda". LinkedIn is the same person, a bit tidier ("tidak" is fine), still "kita".
7. **English tech terms as people say them.** deploy, cluster, rollback, source of truth, on-call. No forced Indonesian.
8. **No labels and no self-answered questions.** "Formatnya:", "Sesi:", "Untuk siapa? Yang…". Write a sentence.
9. **Punctuation.** No em dash, no curly quotes. Parentheses and the en dash in "19.30–21.00" are fine. At most one emoji per caption, never opening a line, never a bullet.
10. **Hashtags are real ones.** IG 2 to 4, X 0 or 1, LinkedIn 2 or 3, and ones people search (#Kubernetes, #CloudNative, #DevOpsIndonesia).

## Ban list

Words, whole word, any case: menyelami, merangkul, memberdayakan, mengeksplorasi, menavigasi, permadani, lanskap, wawasan, krusial, esensial, signifikan, holistik, komprehensif, sinergi, optimal, inovatif, transformasi, berkelanjutan, tentunya, pastinya, merupakan. English: delve, leverage, seamless, robust, game-changer, unlock, empower, elevate, journey, landscape, deep dive.

Phrases: di era digital, di dunia yang, tak hanya, tidak hanya, bukan sekadar, bukan webinar, penting untuk diingat, perlu diingat, mari kita, yuk kita, seru dan bermanfaat, jangan lewatkan, kesempatan emas, siap untuk, bawa pulang, dan seterusnya, dan lain sebagainya, hadir untuk, menjadi wadah, sebagai kesimpulan, secara keseluruhan.

Translationese: "poin-poin yang kita bawa pulang", "sumber kebenaran" (write source of truth), "simpan postingan ini", "ketemu di voice channel".

Patterns: "bukan … tapi/tetapi/melainkan", ", bukan …", "dari … sampai …" about people, "siapa pun" twice, "ekosistem" twice, label colons, emoji at the start of a line, more than one emoji.

If a hit is legitimate, add the exact text to `ALLOW` in `style.ts` with the reason.

## Use these

- **A host note.** `note:` in the session file is one or two sentences in your voice: why this topic, what went wrong for you once, what you want to hear from others. Every caption leads with it, unchanged.
- "Dengerin aja boleh, mau nyalain mic juga boleh." One sentence, as a fact.
- "link Discord di bio", "mampir", "nimbrung", "langsung masuk voice".
- Questions from last time, real error messages, commands in backticks.

## Before and after

From the GitOps announcement, Instagram.

**Before**

> 🎙 GitOps dengan Argo CD: dari commit di Git sampai deploy
> Sesi SIG CN × FORA
>
> Bagaimana kalau deploy cukup dengan merge pull request? Kita bahas prinsip GitOps dan cara Argo CD menjaga cluster tetap sama dengan isi repo Git.
>
> Di voice channel sig-cn-voice Discord FORA. Ngobrol langsung lewat suara, bukan webinar.

Hits: emoji opening a line, "bukan webinar", a rhetorical question, label-colon title, the same skeleton as every other post.

**After**

> Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.
>
> Mampir ke voice channel sig-cn-voice di Discord FORA, link di bio atau discord.gg/rSepJu7Wb. Mau dengerin aja boleh, mau ikut ngomong juga boleh.

**Before**

> Poin-poin yang kita bawa pulang:
> 1. Git adalah sumber kebenaran: Kondisi yang diinginkan ditulis di repo; controller yang menyamakan cluster dengan repo, bukan orang yang menjalankan kubectl apply.

**After**

> 1. Git jadi source of truth. Kondisi yang diinginkan ditulis di repo, dan controller yang menyamakan cluster dengan repo. Tidak ada kubectl apply manual.

**Before** (SIG CN description)

> SIG CN adalah special interest group FORA untuk topik cloud native: container, Kubernetes, GitOps, observability, dan seterusnya. Sesi SIG CN berupa talk santai di voice channel Discord, bukan webinar. Siapa pun boleh join dan ikut bicara, dari yang baru mulai sampai yang sudah di production.

**After**

> SIG CN itu grup FORA untuk ngobrol soal cloud native. Tiap sesi punya satu tema, misalnya Kubernetes atau GitOps, dan jalannya di voice channel Discord. Satu orang cerita, yang lain nyela dan nanya.
