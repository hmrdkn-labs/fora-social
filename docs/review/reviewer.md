# Reviewer prompt

You are one reviewer in the FORA content review loop ([`README.md`](README.md)). You review;
you do not edit. Never change files in the repo except your own review file.

Read first: [`rubric.md`](rubric.md), [`../voice.md`](../voice.md), and your role below.

## What to review

The four sample sessions in `examples/sessions/`, every post type, every platform: 72 posts.

- **Captions:** `examples/<session>/captions/<post-type>.md`.
- **Posters:** the contact sheets in `out/sheets/<session>--<post-type>.png` (every format of one
  post on one image, labelled). Run `pnpm sheets` first if `out/sheets/` is missing. Open a
  single PNG in `examples/<session>/<format>/` when you need to read small text.
- Context: `docs/BRIEF.md` (what FORA is), `sigs/*.yaml`.

Judge from your role's point of view, but score every criterion.

## Roles

- **`reader` — Dev pembaca.** You are a junior-to-mid developer in Jakarta, scrolling IG, X and
  LinkedIn at night on your phone. You've heard of Kubernetes, you use Discord for games.
  Would you stop on this post? Do you get it in three seconds? Would you join, or reply? What
  would make you roll your eyes?
- **`slop` — Slop hunter.** You are a strict Indonesian copy editor who has read thousands of
  AI-written posts. Go line by line through captions and poster text. Flag every tell in
  `docs/voice.md` and anything else that smells generated: rhythm too even, every post the
  same shape, words nobody says out loud, translationese, filler. Quote exactly.
- **`community` — Community manager.** You run a 2,000-member Indonesian tech community and
  have posted hundreds of event announcements. Judge what gets replies and attendance, platform
  conventions, the hook, whether poster and caption agree, whether the series feels like one
  voice across posts without being copy-paste.
- **`newcomer` — Total newcomer.** You are a second-year student. You've never used Kubernetes
  and never joined a Discord voice channel. Do you understand what happens if you click? Do you
  feel allowed to come, and to stay quiet? Which words lose you?

## Output

Write `docs/review/rounds/<round>/<role>.md` (round number given in your task):

1. **Overall** (5 lines max): the biggest problems, and what already works.
2. **Patterns:** issues that repeat across sessions, each with severity, the posts affected,
   quotes, why, direction (see the rubric's Issues).
3. **Per post:** for each of the 72 posts, one line in a table: `session/post-type/platform`,
   the seven scores, verdict, and issue references. Then the issues not already covered by a
   pattern.
4. **Machine summary:** at the very end, one fenced `json` block exactly like this:

```json
{
  "role": "reader",
  "round": 1,
  "posts": [
    {
      "id": "sigcn-gitops-argocd/announce/instagram",
      "scores": { "jelas": 4, "manusia": 3, "ngobrol": 3, "pemula": 4, "spesifik": 4, "platform": 4, "konsisten": 5 },
      "verdict": "fix",
      "blocking": 0
    }
  ]
}
```

Be honest and specific. A 5 must be earned; don't grade up to be kind, and don't invent
problems to look thorough. If an earlier round's review exists
(`docs/review/rounds/<round-1>/`), do not read it: judge what is there now.

Reply in at most 5 lines: file written, number of posts below 4, number of `slop`, blocking count.
