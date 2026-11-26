# Round 3 · summary

**Result: FAIL**, close. Reviewers: [reader](reader.md), [slop](slop.md),
[community](community.md), [newcomer](newcomer.md), all `openai-codex/gpt-6.1-sol` thinking
`low`. 84 posts each.

| Reviewer | Below 4 (r1 → r2 → r3) | `slop` (r1 → r2 → r3) | Blocking (r3) |
| --- | --- | --- | --- |
| reader | 63 → 29 → 16 | 0 → 0 → 0 | 0 |
| slop | 70 → 47 → 28 | 45 → 12 → 15 | 0 |
| community | 52 → 21 → 3 | 0 → 0 → 0 | 0 |
| newcomer | 60 → 35 → 7 | 0 → 0 → 0 | 0 |

No score below 3 anywhere. Community and newcomer fail only on recap questions and the short
observability variants. Reader fails mostly on cover. Slop's 15 `slop` verdicts are the 12
speakers posts plus the 3 observability recaps.

## Issues to fix (deduplicated, in priority order)

1. **major · `about` reads like stage directions, rendered as a quote** (slop P1 → 12 `slop`).
   Sample `about` lines are "Memandu, dan nanya duluan, …" / "Cerita …, lalu tanya balik, …":
   instructions to the host, shown on profile cards as if the person said them. Rewrite every
   sample `about` as one concrete thing the person did or will show, third person, no
   embedded question. Update the `Person.about` doc example if it invites this.
2. **major · recap questions assume you attended** (reader P2, community C1, newcomer N1).
   Kubernetes and GitOps `recap.question` ask about the demo. Make each answerable from the
   recap alone or from the reader's own experience, tied to a step in the recap.
3. **major · observability recap** (slop P4 → 3 `slop`). "Metrics itu angka murah yang tahan
   lama" is a slogan: say what's aggregated and why it's cheap compared with storing every
   event. Remove the dangling "di aplikasi lambat tadi".
4. **major · cover: join route still reads as fine print** (reader P1, all 12 covers). The date
   line is good; the Discord invite and channel are still small. Give the join route a visible
   block (borrow announce's CTA hierarchy), take the space from the waveform.
5. **major · short observability variants lose the everyday problem** (newcomer N2). X cover,
   X reminder, X and LinkedIn live: keep one short "aplikasi lambat" line in place of the
   series or host wording.
6. **major · observability subtitle reads unfinished** (slop P2). Pick a plain statement or a
   real question, not both.
7. **minor · LinkedIn live names the channel twice** (slop P3). One sentence with invite and
   channel.
8. **minor · reminder "Kalau ada pertanyaan soal <tema>, tulis dulu" is a template** (slop
   P5). Name one specific question or example worth bringing for that session, or drop the
   line.

## Disagreements and calls

- Slop rated speakers `slop`; the other three gave speakers 4+. **Call:** fix it; the cause is
  sample data (item 1), not the template, and the bar counts any `slop`.
- Reader alone still fails covers. **Call:** one more layout pass (item 4); if round 4 still
  flags it, report it to the person as a design choice rather than loop again.
