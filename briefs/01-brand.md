# 01 · Brand basics

- **Worktree / branch:** `~/workspace/.worktrees/fora-social/01-brand`, branch `01-brand` from `main`.
- **Model:** `anthropic/claude-sonnet-5-5`, thinking `medium`.
- **Runs in parallel with:** 02 and 03 (disjoint files).

Read `~/workspace/AGENTS.md`, `docs/BRIEF.md`, `briefs/00-orchestrator.md` and `src/types.ts`
first.

## Files owned

`brand/**` except the three original PNGs in `brand/logos/` (keep them unchanged), and `sigs/**`.
Nothing else.

## Tasks

1. **Typefaces.** Identify the faces in the logos.
   - The SIG CN lockup looks like Montserrat: "SIG" in a thin weight, "CN" and "CLOUD NATIVE"
     bold. Confirm the weights by comparing renders against the PNGs.
   - The FORA mark is a serif with a TeX-style integral sign (∫ with ball terminals). Find the
     face, or the closest open-licence match (candidates to test: Latin Modern Roman / CMU
     Serif, and others you find). Compare by rendering "FO∫RA" next to the PNG and looking at
     both; record the comparison image in `brand/specimens/`.
   - Pick the body and UI faces for the templates. Prefer to keep it to Montserrat plus the
     FORA serif; add a third only if needed (e.g. a monospace for code-ish accents), and only
     with an open licence.
   - Commit the font files (TTF or WOFF2, only the weights the kit uses) in
     `brand/fonts/<family>/` with their licence file (`OFL.txt` or equivalent). Download from
     the official source (Google Fonts repo, the foundry, CTAN) and note the source URL and
     version in `brand/README.md`.
2. **Vector logos** in `brand/logos/`:
   - `fora-mark.svg`: the FORA mark, black on transparent, and `fora-mark-white.svg` for dark
     backgrounds.
   - `fora-x-sigcn.svg` and a white-on-dark variant: the lockup as in the PNG.
   - `sigcn.svg` (+ white variant): the SIG CN wordmark alone (SIG / CN / CLOUD NATIVE), for
     use next to other elements.
   - Text must be **converted to paths** (no font dependency at render time). Rebuild cleanly
     from the identified fonts rather than tracing the PNG. Match proportions and spacing of
     the PNGs; compare by rasterising your SVG next to the PNG and looking at both.
3. **Colours and tokens.** `brand/tokens.json` and `brand/tokens.css` (CSS custom properties,
   same values): ink, paper, neutral greys, the SIG CN blue (sample it from the PNG; brief says
   about `#0A84FF`), a FORA accent proposal (the mark is black and white; propose a restrained
   accent and say in the README that it is a proposal awaiting the person's approval), spacing
   scale, radii, type scale for 1080-wide canvases. Check text/background contrast (WCAG AA for
   text sizes used) and record the ratios.
4. **SIG registry.** `sigs/sig-cn.yaml` and `sigs/fora.yaml` matching the `Sig` type in
   `src/types.ts`. Indonesian tagline and description (English tech terms where natural; the
   description says SIG CN sessions are casual talks in a Discord voice channel, anyone can
   join and speak). Hashtags without "#".
5. **`brand/README.md`**: short. Typefaces and why, licences, logos and when to use which,
   clear space and minimum size, colours with contrast notes, do/don't (3–5 items), how to add
   a new SIG (colour, wordmark SVG built the same way, `sigs/<id>.yaml`).

## Acceptance

- Every SVG opens in a browser and matches its PNG closely; screenshots side by side in
  `brand/specimens/` (PNG, small).
- No `<text>` elements in logo SVGs; `grep -L '<text' brand/logos/*.svg` lists them all.
- Every font directory has a licence file; no non-open fonts anywhere.
- `sigs/*.yaml` parse and have every `Sig` field.

## Checks

Look at every specimen image yourself before you finish. Commit in small logical commits on
`01-brand` and push the branch. Do not merge to `main`.

## Report

Fill in below: model, commits, font identification with evidence, open questions for the
person (colours, accent). Reply to the orchestrator in at most 20 lines.

### Result (2026-11-24)

- **Model:** anthropic/claude-sonnet-5-5, thinking medium.
- **Commits:** on `01-brand`: fonts (OFL), outlined SVG logos + specimens, tokens + sigs + README.
- **SIG CN = Montserrat:** "SIG" Regular (I stem 74/1000 em; Light 51, Medium 100), "CN" and
  "CLOUD NATIVE" Bold (N width 641 vs Bold 642, C 668 vs 668).
- **FORA = Libertinus Serif** (closest open match; IoU 0.72 vs STIX Two 0.64, Caladea 0.61, Latin
  Modern 0.58). Original is probably Cambria + Cambria Math (inference). Integral = Latin Modern
  Math `integral.v1` outline (GUST licence, embedded as path only, font not shipped); bbox aspect
  0.40 equals the PNG's.
- **Sampled blue:** `#0086FF`.
- **Open questions:** approve FORA accent `#F2A03D` (proposal); `Sig.lockup` for sig-cn points to
  `fora-x-sigcn.svg` (white variant has the `-white` suffix; `sigcn.svg` is the wordmark alone);
  white text on the SIG blue is only 3.59:1, so `colorInk` is ink `#0B0C10` (5.45:1).
