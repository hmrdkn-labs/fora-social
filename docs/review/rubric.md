# Content review rubric

Used by the review loop in [`README.md`](README.md). A post is one post type of one session on
one platform: the caption plus the poster images for that platform (Instagram: `ig-feed`,
`ig-carousel`, `ig-story`; X: `x`; LinkedIn: `li-link`, `li-doc`).

The goal: someone scrolling past understands the post, feels it was written by a person, and
can talk to us: reply, ask, or just join the voice channel.

## Criteria

Score each criterion 1–5 for each post. 5 = you'd post it as is and be proud of it; 4 = fine,
nothing you'd change; 3 = works, but you'd fix something; 2 = a real problem; 1 = broken.

| Key | Criterion | A 4 or 5 means |
| --- | --- | --- |
| `jelas` | **Jelas dalam 3 detik** | From the poster alone (no caption), a scroller knows what it is, when (day, date, time WIB), where (Discord voice channel) and how to join. The most important line is the biggest. |
| `manusia` | **Ditulis manusia** | Reads like an organiser talking to friends in the community. None of the tells in [`docs/voice.md`](../voice.md): negative parallelism, triads, false ranges, stacked reassurance, label-colon lines, emoji bullets, puffery, calques, same skeleton everywhere. You would not guess AI wrote it. |
| `ngobrol` | **Mengajak ngobrol** | Gives people something to respond to: a question they can answer, a real situation they recognise, something to bring. Replying, DMing or just joining feels easy and natural. Not a one-way flyer. |
| `pemula` | **Ramah pemula** | Someone new to the topic and to Discord voice feels allowed to come. Jargon is explained by context or not needed. The welcome is said once, plainly; no over-reassurance. |
| `spesifik` | **Spesifik dan benar** | Concrete details instead of adjectives. Technically correct. No filler, hype or significance talk. Recap points are useful on their own. |
| `platform` | **Pas platformnya** | Fits how people post on that platform: IG (link in bio, short URL, 2–4 hashtags, first line hooks), X (reads like a person tweeting, ≤ 280, thread only when needed), LinkedIn (a bit tidier, still "kita", no corporate tone). |
| `konsisten` | **Konsisten** | Poster and caption agree on title, date, time, names, roles, channel and invite. Nothing contradicts across formats of the same post. |

## Verdict per post

- `ok`: no criterion below 4.
- `fix`: something below 4, but it is not slop.
- `slop`: reads as generic or machine-made: you'd scroll past or roll your eyes. Any `slop` fails
  the round regardless of scores.

## Issues

Every score below 4 needs at least one issue:

- **severity:** `blocking` (wrong fact, unreadable, broken, embarrassing), `major` (lowers a
  score below 4), `minor` (polish).
- **where:** `session/post-type/platform` and `caption` or the poster file
  (`ig-feed/announce.png`). If the same problem shows in several sessions, say `pattern` and
  list them: it comes from the caption builder or the template, and that is what gets fixed.
- **quote:** the exact words.
- **why:** which criterion and why, in one or two sentences.
- **direction:** what a better version does. Don't rewrite the whole post.

## Pass bar (the person's choice, 2026-11-26)

A round passes when **every reviewer gives every post ≥ 4 on every criterion**, no post gets
`slop`, and there are no `blocking` issues. The loop stops at a pass, or after 4 rounds.
