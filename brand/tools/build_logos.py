#!/usr/bin/env python3
"""Rebuild the SVG logos in brand/logos/ from the open fonts in brand/fonts/.

All text becomes outlines, so the SVGs need no font at render time.
Geometry (positions, sizes) was measured from the original PNGs in brand/logos/.

Usage: python3 brand/tools/build_logos.py   (needs: fonttools, brotli)
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parents[2]
FONTS = ROOT / "brand" / "fonts"
OUT = ROOT / "brand" / "logos"

BLUE = "#0086FF"
INK = "#000000"
WHITE = "#FFFFFF"

_cache: dict[str, TTFont] = {}


def font(rel: str) -> TTFont:
    if rel not in _cache:
        _cache[rel] = TTFont(FONTS / rel)
    return _cache[rel]


def num(v: float) -> str:
    return f"{v:.2f}".rstrip("0").rstrip(".")


def glyph(rel, name, *, x, base, size=None, sx=None, sy=None, anchor="left"):
    """Outline of `name`, bbox-left/centre/right at x, baseline at `base`, y down."""
    f = font(rel)
    gs = f.getGlyphSet()
    upm = f["head"].unitsPerEm
    bp = BoundsPen(gs)
    gs[name].draw(bp)
    x0, _, x1, _ = bp.bounds
    sx = sx if sx else size / upm
    sy = sy if sy else size / upm
    ref = {"left": x0, "center": (x0 + x1) / 2, "right": x1}[anchor]
    pen = SVGPathPen(gs, ntos=num)
    gs[name].draw(TransformPen(pen, (sx, 0, 0, -sy, x - ref * sx, base)))
    return pen.getCommands()


SERIF_FONT = "libertinus/LibertinusSerif-Regular.woff2"
MONT_R = "montserrat/Montserrat-Regular.woff2"
MONT_B = "montserrat/Montserrat-Bold.woff2"

# Integral sign: glyph "integral.v1" (display size) of Latin Modern Math 1.959,
# (c) GUST e-foundry, GUST Font License (free, LPPL-based). Only the outline is
# embedded (font units, y up, bbox 56,-861 .. 943,1361); the font itself is not shipped.
INTEGRAL_BBOX = (56, -861, 943, 1361)
INTEGRAL_D = "M943 1268C943 1322 889 1361 834 1361C758 1361 702 1252 647 1048C644 1037 508 535 398 -119C372 -272 343 -439 310 -578C292 -651 246 -839 165 -839C129 -839 104 -816 104 -816C136 -814 153 -792 153 -767C153 -734 128 -718 105 -718C81 -718 56 -733 56 -768C56 -819 106 -861 167 -861C319 -861 376 -627 447 -337C524 -21 589 298 643 619C680 832 717 1032 751 1161C763 1210 797 1339 836 1339C867 1339 892 1320 896 1316C863 1314 846 1292 846 1267C846 1234 871 1218 894 1218C918 1218 943 1233 943 1268Z"

# ---- FORA mark, in the 1024px coordinates of fora-logo.png -------------------
MARK_BOX = (101, 119, 915, 933)  # outer edge of the ring
RING_CX, RING_CY, RING_R, RING_W = 508, 526, 403.35, 7.3
SERIF = 121 / 0.658  # px, Libertinus Serif: cap height 0.658 em -> 121 px as in the PNG


def integral_path(x0, x1, y0, y1):
    """The integral stretched so its bbox fills [x0,x1]x[y0,y1] (y down)."""
    bx0, by0, bx1, by1 = INTEGRAL_BBOX
    sx, sy = (x1 - x0) / (bx1 - bx0), (y1 - y0) / (by1 - by0)
    m = (num(sx), "0", "0", num(-sy), num(x0 - bx0 * sx), num(y1 + by0 * sy))
    return f'<path transform="matrix({" ".join(m)})" d="{INTEGRAL_D}"/>'


def mark_glyphs():
    d = []
    d.append(glyph(SERIF_FONT, "F", x=213, base=502, size=SERIF))
    d.append(glyph(SERIF_FONT, "O", x=372, base=502, size=SERIF, anchor="center"))
    # RA is kerned as a pair, centred under the integral's lower terminal
    d.append(glyph(SERIF_FONT, "R", x=583, base=673, size=SERIF))
    d.append(glyph(SERIF_FONT, "A", x=811, base=673, size=SERIF, anchor="right"))
    return d


def mark_group(color):
    return (
        f'<g fill="{color}">'
        f'<circle cx="{RING_CX}" cy="{RING_CY}" r="{RING_R}" fill="none" stroke="{color}" stroke-width="{RING_W}"/>'
        f'<path d="{" ".join(mark_glyphs())}"/>'
        f'{integral_path(428, 588, 326, 727)}</g>'
    )


def svg(viewbox, body, title):
    x, y, w, h = viewbox
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x} {y} {w} {h}" '
        f'role="img" aria-label="{title}">\n<title>{title}</title>\n{body}\n</svg>\n'
    )


# ---- SIG CN wordmark, in the 1772x1181 coordinates of fora-x-sigcn.png -------
# (letter, font, left edge of the ink, baseline, px size) measured from the PNG
SIG = [("S", MONT_R, 152), ("I", MONT_R, 280), ("G", MONT_R, 326)]
CN = [("C", MONT_B, 468), ("N", MONT_B, 615)]
SIG_BASE, SIG_SIZE = 619.5, 188.5
CLOUD = [("C", 201), ("L", 250), ("O", 284), ("U", 339), ("D", 389),
         ("N", 458), ("A", 503), ("T", 549), ("I", 593), ("V", 608), ("E", 659)]
CLOUD_BASE, CLOUD_SIZE = 724, 63


def wordmark_paths(ink, blue):
    sig = " ".join(glyph(f, n, x=x, base=SIG_BASE, size=SIG_SIZE) for n, f, x in SIG)
    cn = " ".join(glyph(f, n, x=x, base=SIG_BASE, size=SIG_SIZE) for n, f, x in CN)
    cloud = " ".join(glyph(MONT_B, n, x=x, base=CLOUD_BASE, size=CLOUD_SIZE) for n, x in CLOUD)
    return (
        f'<path fill="{ink}" d="{sig}"/>'
        f'<path fill="{blue}" d="{cn}"/>'
        f'<path fill="{ink}" d="{cloud}"/>'
    )


# mark inside the lockup: the 1024px mark scaled to a 539px ring
LOCK_SCALE = 539 / 814
LOCK_TX = 1059 - 101 * LOCK_SCALE
LOCK_TY = 330 - 119 * LOCK_SCALE


def build(out=OUT):
    for suffix, ink in (("", INK), ("-white", WHITE)):
        s = svg((101, 119, 814, 814), mark_group(ink), "FORA")
        (out / f"fora-mark{suffix}.svg").write_text(s)
        s = svg((132, 466, 624, 279), wordmark_paths(ink, BLUE), "SIG CN Cloud Native")
        (out / f"sigcn{suffix}.svg").write_text(s)
        divider = f'<rect x="909" y="284" width="3.1" height="613" fill="{ink}"/>'
        mark = f'<g transform="translate({num(LOCK_TX)} {num(LOCK_TY)}) scale({LOCK_SCALE:.5f})">{mark_group(ink)}</g>'
        s = svg((112, 244, 1526, 693), wordmark_paths(ink, BLUE) + divider + mark, "SIG CN × FORA")
        (out / f"fora-x-sigcn{suffix}.svg").write_text(s)


if __name__ == "__main__":
    build()
