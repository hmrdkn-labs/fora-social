import assert from "node:assert/strict";
import { after, before, describe, test } from "node:test";
import { type Browser, chromium } from "playwright";
import { checkPage, namedFontFamilies } from "../src/overflow.ts";

const CANVAS = { width: 300, height: 200 };

describe("overflow checks", () => {
  let browser: Browser;

  before(async () => {
    browser = await chromium.launch();
  });

  after(async () => {
    await browser.close();
  });

  async function problemsIn(html: string, families: string[] = []): Promise<string[]> {
    const page = await browser.newPage({ viewport: CANVAS, deviceScaleFactor: 1 });
    try {
      await page.setContent(html);
      return await checkPage(page, CANVAS, families);
    } finally {
      await page.close();
    }
  }

  test("passes content that fits its box and the canvas", async () => {
    assert.deepEqual(await problemsIn('<div style="width:200px;height:50px">Pendek</div>'), []);
  });

  test("flags a box that clips content larger than itself", async () => {
    const problems = await problemsIn(
      '<div style="width:100px;height:40px;overflow:hidden;white-space:nowrap">Teks panjang tanpa jeda</div>',
    );
    assert.equal(problems.length, 1);
    assert.match(problems[0] ?? "", /<div> "Teks panjang tanpa jeda" clips overflowing content/);
  });

  test("flags data-fit content that is larger than its box, even with visible overflow", async () => {
    const problems = await problemsIn(
      '<div data-fit style="width:100px;height:40px;white-space:nowrap">Teks panjang tanpa jeda</div>',
    );
    assert.equal(problems.length, 1);
    assert.match(problems[0] ?? "", /does not fit its box/);
  });

  test("flags a named font family that did not load", async () => {
    const html = `<style>@font-face { font-family: "Missing Face"; src: url("missing.woff2"); }
      body { font-family: "Missing Face"; }</style><p>Halo</p>`;
    assert.deepEqual(await problemsIn(html, ["Missing Face"]), ['font "Missing Face" did not load']);
  });

  test("accepts a family with no @font-face, such as a system font", async () => {
    assert.deepEqual(await problemsIn("<p>Halo</p>", ["Arial"]), []);
  });

  test("reads named families from CSS, skipping generics and var()", () => {
    const css = `@font-face { font-family: "Montserrat"; }
      body { font-family: "Libertinus Serif", system-ui, sans-serif; color: red; }
      .x { font-family: var(--font-sans); }`;
    assert.deepEqual(namedFontFamilies(css), ["Montserrat", "Libertinus Serif"]);
  });
});
