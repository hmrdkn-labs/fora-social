#!/usr/bin/env python3
"""Rasterise the SVG logos next to the original PNGs: brand/specimens/logos-vs-png.png.

Columns: original PNG | SVG | overlay (black = both, red = PNG only, green = SVG only).
Needs: pillow, numpy, resvg_py.
"""
import io
from pathlib import Path
import numpy as np
import resvg_py
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
LOGOS = ROOT / "brand" / "logos"
OUT = ROOT / "brand" / "specimens"


def raster(svg: Path, width: int) -> Image.Image:
    data = bytes(resvg_py.svg_to_bytes(svg_path=str(svg), width=width, background="white"))
    return Image.open(io.BytesIO(data)).convert("RGB")


def overlay(ref: Image.Image, mine: Image.Image) -> Image.Image:
    r = np.array(ref.convert("L")) < 128
    m = np.array(mine.convert("L")) < 128
    out = np.full(r.shape + (3,), 255, np.uint8)
    out[r & ~m] = (230, 40, 40)
    out[m & ~r] = (30, 170, 60)
    out[r & m] = (0, 0, 0)
    return Image.fromarray(out)


def row(png: Path, svg: Path, png_box, view_box):
    ref = Image.open(png).convert("RGB").crop(png_box)
    x, y, w, h = view_box
    canvas = Image.new("RGB", Image.open(png).size, "white")
    canvas.paste(raster(svg, w), (x, y))
    mine = canvas.crop(png_box)
    return [ref, mine, overlay(ref, mine)]


rows = [
    row(LOGOS / "fora-logo.png", LOGOS / "fora-mark.svg", (101, 119, 915, 933), (101, 119, 814, 814)),
    row(LOGOS / "fora-x-sigcn.png", LOGOS / "fora-x-sigcn.svg", (112, 244, 1638, 937), (112, 244, 1526, 693)),
]
tw = 560
tiles = [[im.resize((tw, round(im.height * tw / im.width))) for im in r] for r in rows]
pad, head = 12, 28
height = head + sum(max(i.height for i in r) + pad for r in tiles)
sheet = Image.new("RGB", (tw * 3 + pad * 4, height), "white")
d = ImageDraw.Draw(sheet)
for i, label in enumerate(("original PNG", "SVG (rebuilt)", "overlay: red PNG only, green SVG only")):
    d.text((pad + i * (tw + pad), 8), label, fill="black")
y = head
for r in tiles:
    for i, im in enumerate(r):
        sheet.paste(im, (pad + i * (tw + pad), y))
    y += max(i.height for i in r) + pad
OUT.mkdir(exist_ok=True)
sheet.save(OUT / "logos-vs-png.png", optimize=True)
