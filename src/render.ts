// Renders one post type in one format. One Chromium per run, one page per format size, device
// scale factor 1, so each PNG is exactly the format size. li-doc also gets one PDF with every
// slide at the format size. A job that fails an overflow check writes nothing.
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { type Browser, chromium, type Page } from "playwright";
import { checkPage, namedFontFamilies } from "./overflow.ts";
import { REPO_ROOT } from "./paths.ts";
import type { Community, Format, PostType, Session, Sig, Template } from "./types.ts";

export interface RenderJob {
  session: Session;
  sig: Sig;
  community: Community;
  postType: PostType;
  format: Format;
  template: Template;
}

const MAX_PROBLEMS = 10;

export class Renderer {
  readonly #browser: Browser;
  readonly #dir: string;
  readonly #families: string[];
  readonly #pages = new Map<string, Page>();

  private constructor(browser: Browser, dir: string, families: string[]) {
    this.#browser = browser;
    this.#dir = dir;
    this.#families = families;
  }

  static async open(): Promise<Renderer> {
    const browser = await chromium.launch();
    try {
      const dir = await mkdtemp(join(tmpdir(), "fora-render-"));
      const css = await readFile(join(REPO_ROOT, "templates", "base.css"), "utf8");
      return new Renderer(browser, dir, namedFontFamilies(css));
    } catch (error) {
      await browser.close();
      throw error;
    }
  }

  /** Renders every image of one job into `outDir`. Returns the written paths in order. */
  async render(job: RenderJob, outDir: string): Promise<string[]> {
    const { session, sig, community, postType, format } = job;
    const label = `${session.id} · ${postType} · ${format.id}`;
    const bodies = job.template({ session, sig, community, format, asset: assetUrl });
    if (format.multi ? bodies.length === 0 : bodies.length !== 1) {
      const expected = format.multi ? "at least one" : "exactly one";
      throw new Error(`${label}: template returned ${bodies.length} image(s), expected ${expected}`);
    }

    const page = await this.#pageFor(format);
    const pngs: Buffer[] = [];
    const slides: string[] = [];
    for (const [index, body] of bodies.entries()) {
      const file = join(this.#dir, `${session.id}-${postType}-${format.id}-${index + 1}.html`);
      slides.push(await this.#show(page, documentFor(body, format, postType), file));
      const problems = await checkPage(page, format, this.#families);
      if (problems.length > 0) {
        const where = format.multi ? `${label}, slide ${index + 1}` : label;
        throw new Error(`${where}: ${problems.slice(0, MAX_PROBLEMS).join("; ")}`);
      }
      pngs.push(await page.screenshot({ type: "png" }));
    }

    await mkdir(outDir, { recursive: true });
    const paths: string[] = [];
    for (const [index, png] of pngs.entries()) {
      const name = format.multi ? `${postType}-${String(index + 1).padStart(2, "0")}` : postType;
      const path = join(outDir, `${name}.png`);
      await writeFile(path, png);
      paths.push(path);
    }
    if (format.id === "li-doc") {
      paths.push(await this.#pdf(page, slides, join(outDir, `${postType}.pdf`), format));
    }
    return paths;
  }

  async close(): Promise<void> {
    await this.#browser.close();
    await rm(this.#dir, { recursive: true, force: true });
  }

  async #pageFor(format: Format): Promise<Page> {
    const key = `${format.width}x${format.height}`;
    const cached = this.#pages.get(key);
    if (cached) return cached;
    const page = await this.#browser.newPage({
      viewport: { width: format.width, height: format.height },
      deviceScaleFactor: 1,
    });
    this.#pages.set(key, page);
    return page;
  }

  /** Writes `html` to `file`, loads it and waits for its fonts. Returns the file URL. */
  async #show(page: Page, html: string, file: string): Promise<string> {
    await writeFile(file, html);
    const url = pathToFileURL(file).href;
    await page.goto(url, { waitUntil: "load" });
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    return url;
  }

  async #pdf(page: Page, slides: string[], file: string, format: Format): Promise<string> {
    const frames = slides.map((url) => `<iframe src="${url}"></iframe>`).join("\n");
    const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
@page { size: ${format.width}px ${format.height}px; margin: 0; }
html, body { margin: 0; padding: 0; }
iframe { display: block; width: ${format.width}px; height: ${format.height}px; border: 0; }
iframe + iframe { break-before: page; }
</style>
</head>
<body>
${frames}
</body>
</html>
`;
    await this.#show(page, html, join(this.#dir, `deck-${format.id}.html`));
    for (const frame of page.frames()) {
      await frame.evaluate(async () => {
        await document.fonts.ready;
      });
    }
    await page.pdf({
      path: file,
      width: `${format.width}px`,
      height: `${format.height}px`,
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
    return file;
  }
}

function assetUrl(path: string): string {
  return pathToFileURL(join(REPO_ROOT, path)).href;
}

function documentFor(body: string, format: Format, postType: PostType): string {
  return `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="${assetUrl("brand/tokens.css")}">
<link rel="stylesheet" href="${assetUrl("templates/base.css")}">
</head>
<body data-format="${format.id}" data-post-type="${postType}">
${body}
</body>
</html>
`;
}
