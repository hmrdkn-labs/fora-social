# FORA social kit

FORA (Forum Rangkai) is a small Indonesian tech community on [Discord](https://discord.gg/rSepJu7Wb). Its SIGs (special interest groups) run casual talks in a Discord voice channel, where anyone can join and speak. This kit turns one session file into posts for Instagram, X and LinkedIn: five post types in six image formats, plus captions in Indonesian for each platform. See the [gallery](examples/README.md) for samples.

## Quick start

You need Node 26 and pnpm (the version in `package.json`'s `packageManager` field, pnpm 12.18.0).

```sh
pnpm install
pnpm exec playwright install chromium
pnpm render examples/sessions/sigcn-kubernetes-pemula.yaml
pnpm check    # type check and tests
```

`pnpm render` takes one or more session files. Output goes to `out/<id>/`, where `<id>` is the file name without `.yaml`. `out/` is gitignored.

| Format | Platform | Size (px) | Files in `out/<id>/` |
| --- | --- | --- | --- |
| `ig-feed` | Instagram feed | 1080 × 1350 | `ig-feed/<type>.png` |
| `ig-carousel` | Instagram carousel | 1080 × 1350 | `ig-carousel/<type>-01.png`, `-02`, … one per slide |
| `ig-story` | Instagram story | 1080 × 1920 | `ig-story/<type>.png` |
| `x` | X | 1600 × 900 | `x/<type>.png` |
| `li-link` | LinkedIn link post | 1200 × 627 | `li-link/<type>.png` |
| `li-doc` | LinkedIn document | 1080 × 1350 | `li-doc/<type>-01.png`, `-02`, … and `li-doc/<type>.pdf` |

`<type>` is one of the post types:

- `announce`: an upcoming session.
- `reminder`: the day of the session, or live now.
- `recap`: takeaways after the talk. Only made for sessions with a `recap` section.
- `cover`: a series or theme cover.
- `sig-intro`: what the SIG is and how to join.

Captions are in `out/<id>/captions/<type>.md`, with one section each for Instagram, X and LinkedIn.

## Add a session

Copy a sample to `sessions/<id>.yaml` and edit it. The file name is the session id: lowercase letters, digits and `-`. The file below shows every field; fields marked `optional` can be left out.

```yaml
# sessions/<id>.yaml: copy a sample from examples/sessions/ and edit it.
# Unknown keys are errors.

# id: <id>                        # optional. If present, must equal the file name
sig: sig-cn                       # required. Must name sigs/<sig>.yaml; "fora" for general FORA sessions
series: Cloud Native 101          # optional. Shared by sessions in one series
theme: Kubernetes                 # required. Shown on the posts as the theme
title: Kubernetes untuk Pemula    # required. Keep it short so it fits the cover
subtitle: Dari container ke cluster   # optional
date: "2026-12-12"                # required. YYYY-MM-DD, a real date, WIB
time: "19:30"                     # required. HH:MM, 24-hour, WIB
durationMinutes: 90               # optional. Whole minutes, default 90
voiceChannel: sig-cn-voice        # required. Discord voice channel name, without "#"
host:                             # required
  name: Rina (contoh)             # required
  role: Platform Engineer         # optional
  handle: rina_contoh             # optional. Without "@" and without spaces
speakers: []                      # optional, default []. Same fields as host
note: Dulu saya baru paham Pod setelah sengaja mematikan satu. # optional. One or two sentences in your voice; captions lead with it
description: Sesi pertama Cloud Native 101. Kita mulai dari kenapa container butuh orkestrasi.   # required. At most 280 characters
topics:                           # optional. 0 to 6 short items
  - Pod, Deployment, dan Service
discord: https://discord.gg/rSepJu7Wb   # optional. Overrides the invite in community.yaml
hashtags:                         # optional. Without "#"
  - Container
recap:                            # optional. Fill in after the talk. Recap posts need it
  attendees: 14                   # optional. Whole number
  points:                         # required with recap, at least one
    - title: Pod adalah unit terkecil yang dijadwalkan
      body: Satu Pod bisa berisi satu atau beberapa container.   # optional
  links:                          # optional
    - label: Dokumentasi Kubernetes
      url: https://kubernetes.io/docs/home/
```

Then:

1. Render it: `pnpm render sessions/<id>.yaml`.
2. After the talk, add the `recap` section and render again.
3. Post the files, one per platform:
   - **Instagram:** `ig-feed/<type>.png` as a single image, or upload `ig-carousel/<type>-01.png`, `-02`, … in order as a carousel. Use `ig-story/<type>.png` for stories. Paste the Instagram caption. Instagram captions cannot hold clickable links, so the caption says "link di bio" and gives the short Discord URL.
   - **X:** `x/<type>.png` with the X caption. If the caption is a thread, attach the image to the first post.
   - **LinkedIn:** either a link post with `li-link/<type>.png` and the LinkedIn caption, or a document post: upload `li-doc/<type>.pdf` as the document. The PNG pages are the same pages, for checking.

## Text must fit

The renderer checks each image after the fonts load. If text sticks out of its box or off the canvas, that image fails and the run prints where:

```text
FAILED kubernetes-pemula · announce · li-link: <h1.title> "Judul yang …" is outside the canvas: 215px past the top edge
```

The run carries on with the other images, lists every failure and exits with status 1. To fix it, shorten the field named in the message (usually `title`, `subtitle`, a name, a topic or a recap point title), then render again.

Captions have limits too. An X post over 280 weighted characters fails with `X post cannot fit in 280 characters`. A very long title can trigger it, because the X recap post quotes the title; shorten the title in that case.

## Voice

The copy should read like the organisers wrote it, not a model. [docs/voice.md](docs/voice.md) has the rules, the ban list and before/after rewrites. `pnpm check` lints every caption, image text and sample session against it. The optional `note:` field in a session file is a sentence or two in your own words; every caption leads with it.

## Add a new SIG

A SIG needs its own colour, a wordmark and a `sigs/<id>.yaml` file. [brand/README.md](brand/README.md#adding-a-new-sig) has the full steps. In short:

1. Pick a colour and a text colour (`colorInk`) with at least 4.5:1 contrast on it. Add the colour to `brand/tools/build_tokens.py` and run `python3 brand/tools/build_tokens.py`.
2. Build the wordmark SVG the way `brand/logos/sigcn.svg` is built, in `brand/tools/build_logos.py` (needs `fonttools` and `brotli`). Also write the `-white` variant and a lockup with the FORA mark.
3. Add `sigs/<id>.yaml` with every field: `id` (optional, must equal the file name), `short`, `code`, `name`, `color` and `colorInk` (both `#RRGGBB`), `lockup` (path to the lockup SVG), `tagline` (one line of Indonesian), `description` (two to four sentences of Indonesian) and `hashtags` (without `#`). See `sigs/sig-cn.yaml`.
4. Use `sig: <id>` in sessions. Look at the lockup in a browser before you post it.

## Repository layout

```text
.
├── brand/            fonts, logos, colour tokens, and the scripts that build them
├── community.yaml    FORA's Discord invite, hashtags and logo path
├── sigs/             one file per SIG; fora.yaml is the general FORA community
├── sessions/         your session files (create it; see Add a session)
├── examples/         sample sessions (examples/sessions/) and the gallery (examples/README.md, from pnpm examples)
├── templates/        one TypeScript template per post type, plus base.css
├── src/              CLI, YAML loader and schema, renderer, gallery, and caption builders (src/captions/)
├── test/             tests and fixtures for the loader, overflow checks and renderer
├── docs/             the project brief and the voice guide (voice.md)
├── briefs/           build briefs for the workers
├── .github/workflows/ CI (render.yml)
└── out/              rendered output (gitignored)
```

## Fonts and licences

- **Montserrat** (sans, body and UI; weights 400 to 800): SIL Open Font License 1.1. Licence: [`brand/fonts/montserrat/OFL.txt`](brand/fonts/montserrat/OFL.txt).
- **Libertinus Serif** (the FORA mark and short editorial accents; 400, italic and 700): SIL Open Font License 1.1. Licence: [`brand/fonts/libertinus/OFL.txt`](brand/fonts/libertinus/OFL.txt).
- **The ∫ in the FORA mark** is the outline of glyph `integral.v1` from Latin Modern Math, under the GUST Font License. Only the outline is in the repo, as path data in `brand/tools/build_logos.py` and the logo SVGs; the font itself is not shipped. The licence text is in [`brand/licenses/GUST-FONT-LICENSE.txt`](brand/licenses/GUST-FONT-LICENSE.txt), downloaded from <https://www.gust.org.pl/projects/e-foundry/licenses/GUST-FONT-LICENSE.txt>.
- **Code** is MIT. See [`LICENSE`](LICENSE).

## CI

[`.github/workflows/render.yml`](.github/workflows/render.yml) runs on every push and pull request, on Ubuntu with Node 26. It:

1. installs the dependencies from the lockfile, and Chromium;
2. runs `pnpm check` (type check and tests);
3. runs `pnpm examples`, which renders every sample and regenerates the gallery;
4. uploads `examples/` as the `examples` artifact.

CI does not compare the images with the committed ones, because font rasterisation differs between macOS and Linux. The overflow check is what keeps the templates honest: a failing image fails the job.
