# 07 · Speaker photos and a speaker spotlight post

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/07-speaker-photos`, branch `07-speaker-photos` from `main`.
- **Model:** `anthropic/claude-fable-5-2` (visual design, as in brief 04).

Read `~/workspace/AGENTS.md`, `docs/BRIEF.md`, `briefs/00-orchestrator.md`, the Reports of
briefs 04 and 06, `docs/voice.md`, `brand/README.md` and `src/types.ts` first.

## Why

The person wants posts to show who is talking: a part of the design that showcases the
speakers' photos. Real photos come later; for now use a silhouette when there is no photo, and
generate sample portraits with the image model for prototyping, one image per person.

## Contract (first commit on your branch, by the orchestrator; do not change `src/types.ts`)

- `Person.photo?: string`: repo-relative path of a square portrait.
- New post type `"speakers"` in `POST_TYPES`: a speaker spotlight.

## Files owned

`templates/**`, `src/schema.ts` and `src/load.ts` (only for `photo`), `src/gallery.ts` (label
for the new type), `src/captions/**` (captions for `speakers`), `brand/people/**` (new),
`examples/people/**` (new), `examples/sessions/*.yaml` (add `photo` fields), `examples/**`
(re-render), `test/**` (loader test for `photo`), `README.md` and `brand/README.md` (short
sections). If `src/render.ts` or `src/pipeline.ts` must change, keep it minimal and say why in
the Report.

## Tasks

1. **Loader:** `photo` optional; it must name an existing `.jpg`, `.jpeg` or `.png` file in the
   repo, else a plain error naming the session file and person. Test it.
2. **Silhouette:** `brand/people/silhouette.svg`, a neutral head-and-shoulders shape (no face,
   no gender cues), drawn in plain SVG paths, that templates tint with the SIG accent or a
   neutral grey. Document it in `brand/README.md`.
3. **Sample portraits, generated one person at a time** with the `generate_image` tool (run
   `generate_image --help` first). One call per person in the four sample sessions (Rina, Bima,
   Sari, Dani, Eko; leave Dika without a photo so the silhouette shows in the gallery).
   - Prompt for a believable, unposed community-member headshot: Indonesian adult, casual
     clothes, plain light background, head and shoulders, centred, soft natural light, square.
     Vary age, gender, glasses or hijab, so the set doesn't look like one model's default face.
     No text, no logos.
   - Save as `examples/people/<first-name>.jpg`, 640×640, JPEG quality ~82 (use `sips` on the
     Mac), each under 120 KB. Look at every image; regenerate any with artefacts (hands,
     teeth, warped glasses, text).
   - Add `examples/people/README.md`: these are AI-generated placeholders of people who do
     not exist, for prototyping only; replace them with real, consented photos.
   - Set `photo:` on those people in `examples/sessions/*.yaml`.
4. **Photos in existing posts:** replace the initial-letter circles with the photo (or the
   tinted silhouette) wherever a person appears: announce (all formats), reminder,
   recap thanks line where it fits, the carousel/doc people slide. Round crop, consistent
   size per format, thin ring in the SIG accent. Use `object-fit: cover` on `<img>` with
   `ctx.asset(photo)`.
5. **`speakers` post type, every format:** a spotlight that showcases the people of the
   session with large photos: name, role, handle, and their role in the session ("Pembicara"
   / "Host"). Title and date small, the join strip as elsewhere.
   - 1 person (host-led): one big portrait.
   - 2–3 people: equal portraits side by side (landscape formats) or stacked/grid (tall).
   - Carousel and `li-doc`: one slide per person (big portrait, name, role, one line from
     `note` only if it's the host), plus a cover slide and the join slide.
   - The overflow checks apply; names and roles must fit at the longest sample values.
6. **Captions for `speakers`** in `src/captions/**`, every platform, following `docs/voice.md`;
   the style linter must pass. Introduce the people plainly ("Sabtu ini yang cerita Bima dan
   Sari, dipandu Rina."), mention handles when present, then the join line once.
7. **Gallery and docs:** gallery label "Speakers"; README: how to add a photo (`photo:`
   path, square, consent), and that missing photos fall back to the silhouette.
8. `pnpm check`, `pnpm examples`; commit images and `examples/README.md`.

## Acceptance

- Every sample session renders `speakers` in all six formats; the FORA session (Dika, no
  photo) shows the silhouette; the others show the generated portraits.
- Look at every new and changed image (contact sheets plus full size for each format of one
  session). Faces are not cropped at the forehead or chin; rings are even; nothing overflows.
- Repo growth from portraits under 1 MB total.

## Checks

Commit in small logical commits on `07-speaker-photos`, push the branch. Do not merge to `main`.

## Report

Fill in below: model, commits, check results, the prompts used per person, what you
regenerated and why, open questions. Reply to the orchestrator in at most 15 lines.

### Result (2026-11-25)

- **Model:** anthropic/claude-fable-5-2. Portraits: `generate_image` (openai-codex/gpt-image-2, 1024×1024, quality medium).
- **Commits** on `07-speaker-photos` (pushed, not merged):
  - 6dcaa77 feat(loader): optional photo that must be a JPEG or PNG in the repo
  - e92bb87 feat(brand): neutral silhouette for people without a photo
  - b7bff97 feat(examples): AI-generated placeholder portraits for the sample people (the README and the
    `photo:` fields; the five JPEG files went into ae7391e by mistake)
  - 50657c8 feat(templates): portraits wherever a person appears, and the speakers post
  - 7d96a64 feat(captions): speakers captions for every platform, gallery label
  - 189fbf2 docs: how to add a speaker photo
  - ae7391e docs(examples): re-render with portraits and the speakers post
  - docs(brief): record 07-speaker-photos result (this file)
- **Checks:** `pnpm check` passes (tsc clean, 167/167 tests; 3 new loader tests for `photo`). `pnpm examples`
  exits 0: 288 PNG and 24 PDF, no failures, 33 s. `examples/` is 48 MB (was 33 MB). The five portraits add
  400 KB (66 to 92 KB each, 640×640, quality 82). `src/render.ts`, `src/pipeline.ts` and `src/types.ts` are
  unchanged.

**What was built**

- **Loader:** `photo` is optional. It must be a repo-relative `.jpg`, `.jpeg` or `.png` that exists as a file
  inside the repo, else `<file>: host.photo (<name>) must name an existing .jpg, .jpeg or .png file in the
  repo, got "<path>"` (or `speakers[N].photo`).
- **Silhouette:** `brand/people/silhouette.svg`, two paths, no colour. `avatar()` in `templates/parts.ts`
  uses it as a CSS mask and fills it per surface (table in `brand/README.md`).
- **Existing posts:** the initial-letter ring is gone. Person lines in announce carry a 60-unit portrait
  (88 and 128 on the people slide). The "Bersama …, dipandu …" line of announce, reminder and SIG intro and
  the thanks line of recap carry a row of overlapping faces at twice the text size; in a side panel they sit
  above the line with three or more people, and drop out (text only) when the panel is too short, which
  happens on LinkedIn link posts with three people. The recap's closing slide has a 96-unit row.
- **`speakers`:** ink surface, tag "Kenalan". Each person has a portrait with an accent ring, "Pembicara" or
  "Host", name, role and handle. One person: portrait beside the text (468 units on the feed). Two or three:
  equal columns, portrait above the text, in every format. Title and date are small under the wave (tall) or
  in the side panel (wide), then the usual join block. Decks: cover with everyone's faces, one slide per
  person (portrait up to 560 units, the part as a serif word, the first sentence of `note` on the host's
  slide), join slide.
- **More than three people** (not in the samples): tall formats list everyone as 88-unit cards in two
  columns, wide ones show a row of faces over the sentence that names them, and beyond six the speakers
  become one sentence beside the host's card. Large equal portraits stop at three.
- **Captions:** `castLine` and `roster` in `src/captions/context.ts`. Example (X, GitOps): "Sabtu 19 Desember
  yang cerita Dani (contoh), dipandu Rina (contoh)." A host-led session says "… yang mandu Dika (contoh)
  @dika_contoh. Tanpa pembicara tamu, jadi yang cerita kita semua." Three shapes on IG, two on LinkedIn; X is
  one post, or two when the handles make it long.

**Prompts** (one call per person; shared: composition "square frame, head and shoulders, centred, eye level,
whole head and hair inside the frame with clear space above the head and at both sides, shoulders reaching
the bottom edge"; lighting "soft natural window light, no flash, no harsh shadows"; style "unposed
documentary photograph taken on a phone or a 50mm lens, realistic, no retouching, no text, no logos, no
watermark"; every subject ends "looking at the camera, an ordinary member of a local tech community, natural
skin texture, not a model")

- **Rina:** "Candid headshot photo of an Indonesian woman in her early thirties wearing a plain dusty-blue
  hijab and a simple grey crewneck sweater, relaxed closed-mouth half smile"; scene "plain light off-white wall".
- **Bima:** "… an Indonesian man in his mid twenties, slim face, short slightly messy black hair, clean
  shaven, wearing a plain dark green t-shirt with no print, mouth closed with a slight friendly smile"; same wall.
- **Sari:** "… an Indonesian woman in her late twenties with shoulder-length straight black hair tucked
  behind one ear, wearing simple thin round metal glasses with undistorted symmetric frames and a plain
  mustard-yellow cotton shirt with no print, calm closed-mouth smile"; scene "plain pale grey wall".
- **Dani:** "… an Indonesian man in his mid forties, round face, short black hair greying at the temples, a
  short neat moustache and goatee, wearing a plain navy polo shirt with no logo, relaxed closed-mouth
  expression with a hint of a smile"; scene "plain light cream wall".
- **Eko:** "… an Indonesian man in his mid thirties from Java, medium-brown skin, stocky build, wavy black
  hair, light stubble, wearing rectangular black-framed glasses with undistorted symmetric frames and a
  plain maroon unbranded hoodie, closed-mouth easy smile"; scene "plain white wall".

**Regenerated:** nothing. I looked at all five at 1024 px: no hands in frame, mouths closed, both pairs of
glasses straight, no text. Sari's hair does not sit behind her ear as prompted, which does not matter.

**What I looked at**

- Contact sheets of all four sessions: every `speakers` image (feed, story, X, link, all deck slides) and the
  changed announce, reminder, recap and SIG intro images. Full size: Kubernetes `speakers` in feed, story,
  link and the host's document slide. Faces are whole inside the circles, rings are even, nothing overflows.
- Stress sessions, rendered with `pnpm render` and not committed: five people with mixed photos; three
  people with 28 to 32 character names, long roles and a 95-character title; eight people without roles; one
  host with a 32-character name. Every image passes the overflow checks. With very long names in three
  columns the portraits shrink to about 180 units, because the text takes the height.

**Found on the way**

- A CSS `mask-image` pointing at the silhouette through `ctx.asset()` (a `file://` URL) did not apply in
  Chromium: the disc rendered without the figure and no check failed. The mask is now a base64 data URL built
  once in `templates/parts.ts`. Cause [INFERENCE]: mask images are fetched with CORS, which `file://` fails.
  Not recorded in `~/universe/kb`, since the cause is unconfirmed and this repo has no `docs/kb/`.

**Open questions**

1. The tag on the speakers post is "Kenalan". Is that the word you want, or "Pembicara"?
2. With three people the LinkedIn link post drops the faces from announce, reminder and recap side panels
   (no room). Acceptable, or should the date block shrink instead?
3. The first sentence of `note` is quoted on the host's slide. Both sample notes are still invented (brief 06).
4. `examples/` is now 48 MB with 288 PNG; the question from brief 04 about committing a subset stands.
5. Real photos: where should they live (`people/` at the root is what the README suggests), and who records
   consent?
