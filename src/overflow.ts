// The four overflow checks from briefs/00-orchestrator.md. They run inside the page once fonts
// are ready and return one message per problem element; an empty list passes.
import type { Page } from "playwright";

export interface Canvas {
  width: number;
  height: number;
}

const GENERIC_FAMILIES: Record<string, true> = {
  serif: true,
  "sans-serif": true,
  monospace: true,
  cursive: true,
  fantasy: true,
  "system-ui": true,
  "ui-serif": true,
  "ui-sans-serif": true,
  "ui-monospace": true,
  "ui-rounded": true,
  emoji: true,
  math: true,
  fangsong: true,
  inherit: true,
  initial: true,
  unset: true,
};

/** Font family names a stylesheet sets with `font-family`; generic keywords and var() are skipped. */
export function namedFontFamilies(css: string): string[] {
  const names = new Set<string>();
  for (const match of css.matchAll(/font-family\s*:\s*([^;}]+)/g)) {
    for (const part of (match[1] ?? "").split(",")) {
      const name = part.trim().replace(/^(["'])(.*)\1$/, "$2");
      if (name && !name.includes("(") && GENERIC_FAMILIES[name.toLowerCase()] !== true) names.add(name);
    }
  }
  return [...names];
}

/** Runs the four checks on the page's current document. */
export function checkPage(page: Page, canvas: Canvas, families: readonly string[]): Promise<string[]> {
  return page.evaluate(inPage, { width: canvas.width, height: canvas.height, families: [...families] });
}

// Runs inside the browser: it is serialised with toString, so it must not refer to module scope.
async function inPage(args: { width: number; height: number; families: string[] }): Promise<string[]> {
  const { width, height, families } = args;
  const problems: string[] = [];
  const describe = (el: Element): string => {
    const text = (el.textContent ?? "").replace(/\s+/g, " ").trim();
    const shown = text.length > 60 ? `${text.slice(0, 57)}...` : text;
    const classes = (el.getAttribute("class") ?? "").trim().split(/\s+/).filter(Boolean);
    const tag = el.tagName.toLowerCase() + (el.id ? `#${el.id}` : "") + classes.map((c) => `.${c}`).join("");
    return shown ? `<${tag}> "${shown}"` : `<${tag}>`;
  };

  // 1. Boxes partly outside the canvas, unless the element or an ancestor has data-bleed.
  const boxes = Array.from(document.body.querySelectorAll("*"));
  for (const el of boxes) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0 || el.closest("[data-bleed]")) continue;
    const outside: string[] = [];
    if (r.left < -0.5) outside.push(`${Math.ceil(-r.left)}px past the left edge`);
    if (r.top < -0.5) outside.push(`${Math.ceil(-r.top)}px past the top edge`);
    if (r.right > width + 0.5) outside.push(`${Math.ceil(r.right - width)}px past the right edge`);
    if (r.bottom > height + 0.5) outside.push(`${Math.ceil(r.bottom - height)}px past the bottom edge`);
    if (outside.length > 0) problems.push(`${describe(el)} is outside the canvas: ${outside.join(", ")}`);
  }

  // 2. Elements with overflow other than visible must not scroll: content inside the box.
  // 3. data-fit elements: content must fit the box, whatever their overflow.
  for (const el of [document.body, ...boxes]) {
    const spills = el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1;
    if (!spills) continue;
    const style = getComputedStyle(el);
    const sizes = `content ${el.scrollWidth}×${el.scrollHeight} in a ${el.clientWidth}×${el.clientHeight} box`;
    if (style.overflowX !== "visible" || style.overflowY !== "visible") {
      problems.push(`${describe(el)} clips overflowing content: ${sizes}`);
    } else if (el.hasAttribute("data-fit")) {
      problems.push(`${describe(el)} does not fit its box: ${sizes}`);
    }
  }

  // 4. Every family named in the stylesheet must have loaded. Families without @font-face
  // (system fonts) have nothing to load, so document.fonts.check passes for them.
  for (const family of families) {
    const font = `16px "${family}"`;
    let loaded = true;
    try {
      await document.fonts.load(font);
    } catch {
      loaded = false;
    }
    if (!loaded || !document.fonts.check(font)) problems.push(`font "${family}" did not load`);
  }
  return problems;
}
