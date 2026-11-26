# Round 2 · summary

**Result: FAIL**, but much closer. Reviewers: [reader](reader.md), [slop](slop.md),
[community](community.md), [newcomer](newcomer.md), all `openai-codex/gpt-6.1-sol` thinking
`low`. 84 posts each (new `live` post type).

| Reviewer | Posts below 4 | `slop` | Blocking | Round 1 (below 4 / slop / blocking) |
| --- | --- | --- | --- | --- |
| reader | 29 | 0 | 0 | 63 / 0 / 12 |
| slop | 47 | 12 | 0 | 70 / 45 / 0 |
| community | 21 | 0 | 0 | 52 / 0 / 0 |
| newcomer | 35 | 0 | 0 | 60 / 0 / 12 |

No blocking issues left; the reminder/live split worked. Lowest score anywhere is 2 (slop:
manusia, ngobrol on recaps). `live`, `announce` and `speakers` are nearly clean. What fails is
concentrated in **cover (all 4 reviewers, all 12 posts)**, **recap (all 4; all 12 recaps are
slop's `slop` verdicts)**, sig-intro carousels, and a few reminders.

## Issues to fix (deduplicated, in priority order)

1. **major · recap question is a template** (slop P1 → all 12 `slop` verdicts; community P2–P3;
   reader R3–R4; newcomer P4). `src/captions/context.ts` wraps a point title in "Kamu setuju
   sama "…"? Kalau di tempatmu beda, ceritain." / "cocok nggak sama yang kamu temui di
   kerjaan?". It reads machine-made, asks opinions on facts, and assumes a job.
   **Orchestrator call:** new optional `recap.question` in the contract (on this branch). Recaps
   end with the host's own question when present and with **no** question otherwise; delete
   the generator. Write one per sample session, answerable from a tutorial, a class project or
   just listening (not only production experience).
2. **major · cover logistics look like footnotes** (all four). The schedule line is now there
   but small. Give date/time and Discord channel a readable secondary block on every cover
   format and the first carousel/doc slide; take the space from the decoration, keep the theme
   as hero.
3. **major · sig-intro carousel/doc opens without the next session** (reader R2, slop P3).
   Feed/link already have the box; bring a compact next-session line (date, time, channel) to
   slide 01 of `ig-carousel` and `li-doc`.
4. **major · reminder prep slide is three generic slots** (slop P4). One useful detail for that
   session, or just time and how to join. Don't fill three slots for the layout.
5. **major · career reminder says the listen-only permission twice** (all four). Keep one.
6. **major · recaps lean on unexplained terms** (newcomer P5, P6; community P4).
   Observability: introduce OTLP as how data is sent, or drop it; scope "duration_ms cukup
   untuk menemukan request yang menggantung" (a request that never finishes may never log its
   duration). Career recap: say what the work actually is, not a stack of role names.
7. **major · newcomer bridges missing outside announce** (newcomer P2, P3). Kubernetes
   speakers: tie the first term to something that happens to a running app. GitOps cover,
   speakers, recap: say "basic Git is enough" and explain manifest once.

## Disagreements and calls

- Newcomer still wants more bridges on GitOps; reader and community score GitOps ≥4.
  **Call:** fix it (bar is every reviewer), but with one short clause per post, no glossary.
- Slop marked all recaps `slop` for the question alone; others rated them 3. **Call:** item 1
  removes the cause rather than rewording the template.
