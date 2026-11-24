# Brief: FORA social media kit

## Context

**FORA (Forum Rangkai)** is a small Indonesian tech community on Discord
(https://discord.gg/rSepJu7Wb, about 28 members). It runs **SIGs** (special interest groups); the
first is **SIG CN (Cloud Native)**. Sessions are casual **talks in a voice channel**, not
Discord Stage events: people join, talk and ask freely. Each session has a **theme**.

The person (Azzam / Dika, maintainer of hmrdkn-labs) needs a repeatable way to announce and
recap these sessions on **Instagram, X and LinkedIn**.

Brand material in `brand/logos/`:

- `fora-logo.png`: the FORA mark: "FO", an integral sign (∫), "RA", in a serif face, inside a thin
  circle. Black on white.
- `fora-x-sigcn.png`, `fora-x-sigcn-alt.png`: SIG CN × FORA lockup. "SIG" in a thin geometric
  sans, "CN" in bold blue (about #0A84FF), "CLOUD NATIVE" in bold caps below, a thin vertical
  divider, then the FORA mark.

## Goal

A public repo that anyone in FORA can use to produce on-brand posts for any session in minutes,
with real examples the person can review.

## Deliverables

1. **Brand basics** (`brand/`): identify the typefaces in the logos (the SIG CN lockup looks like
   Montserrat; find the FORA serif, or the closest open-licence match). Vector versions of the
   logos (SVG), rebuilt cleanly if needed. Colours, spacing, a short `brand/README.md`. Only
   fonts with open licences (OFL and similar) go in the repo, with their licence files.
2. **Templates that generate images** from data: one session described in a small file (YAML or
   JSON: SIG, theme, title, date and time in WIB, host and speakers, short description,
   Discord link, recap points). One command renders every size:
   - Instagram: feed 1080×1350 (4:5), carousel slides, story 1080×1920.
   - X: 1600×900 (16:9).
   - LinkedIn: 1200×627 link post and 1080×1350 document or carousel.
   Pick a simple, reproducible renderer (for example HTML/CSS rendered with a headless browser,
   or Satori). It must run on a Mac and in CI.
3. **Post types**, each with a template: session announcement, "today/live now" reminder, recap
   (key takeaways after the talk), theme or series cover, and SIG intro. Make clear in the design
   that these are open voice-channel talks: join by voice, anyone can speak, Discord invite.
4. **Caption templates** per platform, in Indonesian with English tech terms where natural:
   IG caption plus hashtags, X post or thread (within length limits), LinkedIn post (more
   professional tone). Generate them from the same session file.
5. **Examples to review**: at least 3 sample sessions for SIG CN (for example "Kubernetes untuk
   pemula", "GitOps dengan Argo CD", "Observability: logs, metrics, traces") plus one general FORA
   session. Render every post type and size for them into `examples/`, commit the images, and
   put a gallery `examples/README.md` showing them all so the person can check them on GitHub.
6. **README** at the root: what this is, how to add a session and render, how to add a new SIG
   (new colour and lockup), and the font licences.
7. CI (GitHub Actions) that renders the examples on every push, so templates never silently
   break.

## Rules

- Follow `~/workspace/AGENTS.md` and the hmrdkn-labs conventions (see `../.github`).
- You are the orchestrator, on Opus 5.5 medium. Workers: Sonnet 5.5 medium for design and
  copy, Haiku 5.5 xhigh for mechanical work. For heavy visual or copy design, Fable 5.2 is
  allowed.
- Commit in small steps and push to `main`. Check the rendered images yourself before calling
  something done; text must not overflow or clip.
- Do not post anything to social media or Discord.

## Done when

The repo is public with the deliverables above, the examples gallery renders on GitHub, CI is
green, and you have sent the person a short summary with links to the gallery and the open
questions (for example: official colours for FORA, which handles to put on the posts).
