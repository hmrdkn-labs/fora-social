#!/usr/bin/env python3
"""Write brand/tokens.json and brand/tokens.css from one table, and print WCAG contrast ratios.

Usage: python3 brand/tools/build_tokens.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BRAND = ROOT / "brand"

TOKENS = {
    "color": {
        "ink": "#0B0C10",
        "paper": "#FFFFFF",
        "grey-50": "#F4F5F7",
        "grey-100": "#E6E8EC",
        "grey-300": "#B8BDC7",
        "grey-500": "#667085",
        "grey-700": "#394150",
        "grey-900": "#161A22",
        "sigcn": "#0086FF",
        "sigcn-text": "#0067C7",
        "sigcn-tint": "#E5F3FF",
        # Proposal, awaiting approval: the FORA mark itself is black and white.
        "fora-accent": "#F2A03D",
    },
    "font": {
        "sans": "'Montserrat', system-ui, sans-serif",
        "serif": "'Libertinus Serif', Georgia, serif",
    },
    "weight": {"regular": 400, "medium": 500, "semibold": 600, "bold": 700, "extrabold": 800},
    # px, for 1080-wide canvases (scale by width/1080 on other sizes)
    "space": {"1": 4, "2": 8, "3": 12, "4": 16, "5": 24, "6": 32, "7": 48, "8": 64, "9": 96, "10": 128},
    "radius": {"none": 0, "sm": 8, "md": 16, "lg": 24, "pill": 999},
    "type": {
        "display": {"size": 120, "line": 1.0, "weight": 800},
        "h1": {"size": 88, "line": 1.05, "weight": 800},
        "h2": {"size": 64, "line": 1.1, "weight": 700},
        "h3": {"size": 48, "line": 1.15, "weight": 700},
        "lead": {"size": 40, "line": 1.3, "weight": 500},
        "body": {"size": 32, "line": 1.4, "weight": 400},
        "caption": {"size": 28, "line": 1.35, "weight": 500},
        "label": {"size": 24, "line": 1.2, "weight": 700, "tracking": "0.12em", "transform": "uppercase"},
    },
    "layout": {"margin": 72, "clear-space-logo": "1x ring-diameter / 4"},
}


def lum(hex_):
    c = [int(hex_[i : i + 2], 16) / 255 for i in (1, 3, 5)]
    c = [v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4 for v in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def ratio(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


def css():
    out = [":root {"]
    for k, v in TOKENS["color"].items():
        out.append(f"  --color-{k}: {v};")
    for k, v in TOKENS["font"].items():
        out.append(f"  --font-{k}: {v};")
    for k, v in TOKENS["weight"].items():
        out.append(f"  --weight-{k}: {v};")
    for k, v in TOKENS["space"].items():
        out.append(f"  --space-{k}: {v}px;")
    for k, v in TOKENS["radius"].items():
        out.append(f"  --radius-{k}: {v}px;")
    for k, t in TOKENS["type"].items():
        out.append(f"  --text-{k}-size: {t['size']}px;")
        out.append(f"  --text-{k}-line: {t['line']};")
        out.append(f"  --text-{k}-weight: {t['weight']};")
    out.append(f"  --layout-margin: {TOKENS['layout']['margin']}px;")
    out.append("}")
    return "\n".join(out) + "\n"


PAIRS = [
    ("ink", "paper"), ("grey-700", "paper"), ("grey-500", "paper"), ("grey-500", "grey-50"),
    ("sigcn", "paper"), ("sigcn-text", "paper"), ("sigcn-text", "sigcn-tint"),
    ("paper", "ink"), ("grey-300", "ink"), ("sigcn", "ink"), ("fora-accent", "ink"),
    ("ink", "sigcn"), ("paper", "sigcn"), ("ink", "fora-accent"), ("fora-accent", "paper"),
]

if __name__ == "__main__":
    (BRAND / "tokens.json").write_text(json.dumps(TOKENS, indent=2, ensure_ascii=False) + "\n")
    (BRAND / "tokens.css").write_text(css())
    c = TOKENS["color"]
    for fg, bg in PAIRS:
        print(f"{fg:12} on {bg:10} {ratio(c[fg], c[bg]):5.2f}")
