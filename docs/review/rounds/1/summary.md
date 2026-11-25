# Round 1 · summary

**Result: FAIL.** Reviewers: [reader](reader.md), [slop](slop.md), [community](community.md),
[newcomer](newcomer.md), all `openai-codex/gpt-6.1-sol` thinking `low`. 72 posts each.

| Reviewer | Posts below 4 | `slop` | Blocking |
| --- | --- | --- | --- |
| reader | 63 | 0 | 12 |
| slop | 70 | 45 | 0 |
| community | 52 | 0 | 0 |
| newcomer | 60 | 0 | 12 |

Lowest score per criterion (any reviewer): jelas 2, manusia 2, ngobrol 3, pemula 3,
spesifik 3, platform 3, konsisten 2. Lowest means: jelas 3.33 (reader), manusia 3.18 (slop),
ngobrol 3.31 (slop), pemula 3.25 (newcomer).

What works, per all four: the concrete host hooks (kubectl apply at 11pm, the slow app), the
plain "dengerin aja boleh" permission, the how-to-join carousel slide, the observability recap.

## Issues to fix (deduplicated, in priority order)

1. **blocking · reminder says live and later at once** (reader P2, newcomer P5, community P2,
   slop P5). All sessions, all reminder formats.
   **Orchestrator call:** split into two post types (contract change on this branch):
   - `reminder`: posted earlier on the day; not started yet. No LIVE badge, no "masuk
     sekarang"; "nanti jam 19.30 WIB" plus the full date in a small line.
   - `live` (new): posted at start time; present tense, LIVE badge, "lagi jalan, langsung
     masuk". All six formats, captions on all three platforms, gallery label "Live".
2. **major · cover doesn't work as an invitation** (all four). Standalone cover images and the
   first carousel/doc slide carry no date, time or channel. Add a compact schedule line and
   channel to every cover format; the theme stays the hero.
3. **major · same script in every post type** (slop P1, P9; community P5). The anecdote/hook
   is replayed verbatim in announce, cover and reminder; cover, sig-intro and speakers all
   funnel into the same topic list and join slide. Use the host's note once (announce); give
   each type its own job: cover = series/theme, reminder = what to bring or one practical
   detail, speakers = why these people, sig-intro = what the group is.
4. **major · no reason to listen to the speakers** (reader P4, slop P9). New optional
   `Person.about` (contract change on this branch): one plain line on what they'll share or
   ask. Speakers posts and captions lead with it; the roster isn't repeated in prose and list.
   Fill it for every sample person, marked as sample content, no invented credentials.
5. **major · nothing to reply to** (all four; reader P6, community P3, slop P4). Speakers and
   recap posts broadcast. Add one session-specific, answerable prompt: a question to leave for
   the speaker, an experience to bring, a recap claim to compare with your own setup. Not the
   same generic "ada pertanyaan?" everywhere; not on every post type.
6. **major · X throws away the hook** (reader P5, community P4). X announce/cover keep only
   logistics. Keep one concrete situation in the tweet; trim logistics the image already shows.
7. **major · X recap thread is a label and a table of contents** (slop P7, newcomer P6).
   Drop "Intinya:"; spend the middle post on one useful explanation or command.
8. **major · newcomers lose the thread on jargon** (newcomer P1–P3). GitOps: say in everyday
   words what changes (the app follows what's approved in Git) before the tool names; say what
   you need to know beforehand, or that it's shown from scratch. Kubernetes: ground Pod /
   Deployment in the experiment. Observability: keep the slow-app anchor; explain a tool the
   first time it's named.
9. **major · FORA career recap is generic advice** (slop P6; slop marked the FORA cover,
   recap, sig-intro and speakers posts `slop`). Rewrite the sample recap around concrete
   things said in the room (marked as sample), and give the FORA session's other posts a
   specific angle instead of generic career talk.
10. **major · observability recap reads like a textbook** (slop P8). Keep the content; break
    the parallel "X menjawab…" rhythm; tie one point to the slow-app story.
11. **major · GitOps recap overstates `git revert`** (community P6). Scope the claim to
    manifest/config rollback and name the limit (e.g. database migrations aren't undone).

## Disagreements and calls

- "Dengerin aja boleh, mic juga boleh": reader and newcomer like it; slop dislikes how often
  it repeats. **Call:** keep the permission; once per post, and not on a poster slide that
  already has the join block.
- Slop gave 45 `slop` verdicts; the other three gave none. **Call:** the bar counts any
  `slop`, so those must be fixed; its reasons are repetition across post types and generic
  FORA copy (items 3 and 9), which the others also raised as major issues.
