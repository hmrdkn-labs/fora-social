# Content review loop

A repeatable way to check that FORA posts are good, not slop: several reviewers score every
post against one rubric, an editor fixes what they found, and the reviewers look again, until
the bar is met. Run it whenever caption builders, templates or the voice guide change.

- [`rubric.md`](rubric.md): the seven criteria, verdicts, issue format and pass bar.
- [`reviewer.md`](reviewer.md): the reviewer prompt, with four roles (`reader`, `slop`,
  `community`, `newcomer`).
- [`editor.md`](editor.md): the editor prompt.
- `rounds/<n>/`: one folder per round: each reviewer's file, the orchestrator's `summary.md`,
  and the editor's `editor.md`.

## Who runs what

| Step | Who | Model |
| --- | --- | --- |
| Review | 4 reviewers, one per role, independent | `openai-codex/gpt-6.1-sol` thinking `low` (fallback `openai-codex/gpt-6.1-terra` `medium`) |
| Summary and pass check | Orchestrator | — |
| Fix | 1 editor | `anthropic/claude-sonnet-5-5` thinking `medium` |

Reviewers never use the model that wrote the copy, and the editor never scores its own work.
At most three run at once (`~/workspace/AGENTS.md`), so the fourth reviewer starts when the
first finishes.

## One round

1. On the loop branch, `pnpm examples` and `pnpm sheets` so captions and contact sheets match
   the code.
2. Start the four reviewers, each with: "Read docs/review/reviewer.md and do what it says. Your
   role: `<role>`. Round `<n>`."
3. When all four are done, the orchestrator reads the four files, merges the `json` summaries,
   and writes `rounds/<n>/summary.md`: pass or fail against the bar, per-criterion minimum
   and mean, posts below 4, `slop` verdicts, and the deduplicated list of patterns and
   blocking/major issues, each with the reviewers who raised it. Disagreements are listed,
   with the orchestrator's call.
4. If the round passes, stop. Otherwise start the editor: "Read docs/review/editor.md and do
   what it says. Round `<n>`." Then start round `n + 1` from step 1.
5. Stop after a pass, or after 4 rounds (the person may ask for more); then report what
   remains.
