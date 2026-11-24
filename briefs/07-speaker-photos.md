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
