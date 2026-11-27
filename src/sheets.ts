// Contact sheets for the content review loop: one PNG per session and post type, every format of
// that post type side by side and labelled. Reads the images `pnpm examples` rendered
// (examples/<session>/<format>/<post-type>[-NN].png) and writes out/sheets/<session>--<post-type>.png.
import { mkdir, mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";
import { REPO_ROOT } from "./paths.ts";
import { FORMATS, type Format, POST_TYPES, type PostType } from "./types.ts";

/** Widest sheet in CSS px, which is also the viewport width, so no sheet is wider. */
export const SHEET_MAX_WIDTH = 2000;
const PORTRAIT_TILE_WIDTH = 360;
const LANDSCAPE_TILE_WIDTH = 480;

export interface Tile {
  format: Format;
  /** Printed under the tile: the format id, plus the slide number for multi-image formats. */
  label: string;
  path: string;
}

export interface SheetJob {
  session: string;
  postType: PostType;
  /** Platform rows in FORMATS order; slides of a format in number order. */
  tiles: Tile[];
}

/** One job per session and post type with at least one image, in name, POST_TYPES order. */
export async function findSheets(examplesDir: string): Promise<SheetJob[]> {
  const sessions = (await readdir(examplesDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const jobs: SheetJob[] = [];
  for (const session of sessions) {
    for (const postType of POST_TYPES) {
      const tiles = await tilesFor(join(examplesDir, session), postType);
      if (tiles.length > 0) jobs.push({ session, postType, tiles });
    }
  }
  return jobs;
}

async function tilesFor(sessionDir: string, postType: PostType): Promise<Tile[]> {
  const pattern = new RegExp(`^${postType}(?:-(\\d+))?\\.png$`);
  const tiles: Tile[] = [];
  for (const format of FORMATS) {
    const dir = join(sessionDir, format.id);
    const names = await readdir(dir).catch((error: NodeJS.ErrnoException) => {
      if (error.code === "ENOENT") return [];
      throw error;
    });
    const images = names
      .flatMap((name) => {
        const match = pattern.exec(name);
        return match ? [{ name, slide: match[1] }] : [];
      })
      .sort((a, b) => Number(a.slide ?? 0) - Number(b.slide ?? 0));
    for (const image of images) {
      const label = image.slide === undefined ? format.id : `${format.id} ${image.slide}`;
      tiles.push({ format, label, path: join(dir, image.name) });
    }
  }
  return tiles;
}

/** Writes one sheet per job into outDir. Returns the written paths in job order. */
export async function writeSheets(jobs: readonly SheetJob[], outDir: string): Promise<string[]> {
  await mkdir(outDir, { recursive: true });
  const work = await mkdtemp(join(tmpdir(), "fora-sheets-"));
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: SHEET_MAX_WIDTH, height: 1000 } });
    const paths: string[] = [];
    for (const [index, job] of jobs.entries()) {
      const file = join(work, `${index}.html`);
      await writeFile(file, sheetHtml(job));
      await page.goto(pathToFileURL(file).href, { waitUntil: "load" });
      const path = join(outDir, `${job.session}--${job.postType}.png`);
      await page.locator("#sheet").screenshot({ path });
      paths.push(path);
    }
    return paths;
  } finally {
    await browser.close();
    await rm(work, { recursive: true, force: true });
  }
}

/** The sheet page: a title line, then one row per platform. Rows wrap at SHEET_MAX_WIDTH. */
export function sheetHtml(job: SheetJob): string {
  const rows = [...groupByPlatform(job.tiles).values()].map(
    (row) => `<div class="row">${row.map(tileHtml).join("")}</div>`,
  );
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>${CSS}</style>
</head>
<body>
<main id="sheet">
<h1>${escapeHtml(`${job.session} · ${job.postType}`)}</h1>
${rows.join("\n")}
</main>
</body>
</html>
`;
}

const CSS = `
html, body { margin: 0; background: #888; }
#sheet {
  box-sizing: border-box;
  width: max-content;
  max-width: ${SHEET_MAX_WIDTH}px;
  padding: 40px;
  background: #888;
  display: flex;
  flex-direction: column;
  gap: 32px;
  font: 600 16px/1.3 system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif;
  color: #111;
}
h1 { margin: 0; font-size: 24px; }
.row { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 24px; }
.tile { margin: 0; }
.tile.portrait { width: ${PORTRAIT_TILE_WIDTH}px; }
.tile.landscape { width: ${LANDSCAPE_TILE_WIDTH}px; }
.tile img { display: block; width: 100%; height: auto; }
.tile figcaption { margin-top: 8px; font-size: 15px; }
`;

function groupByPlatform(tiles: readonly Tile[]): Map<string, Tile[]> {
  const rows = new Map<string, Tile[]>();
  for (const tile of tiles) {
    const row = rows.get(tile.format.platform) ?? [];
    row.push(tile);
    rows.set(tile.format.platform, row);
  }
  return rows;
}

function tileHtml(tile: Tile): string {
  const orientation = tile.format.width > tile.format.height ? "landscape" : "portrait";
  const src = escapeHtml(pathToFileURL(tile.path).href);
  return `<figure class="tile ${orientation}"><img src="${src}" alt="${escapeHtml(tile.label)}"><figcaption>${escapeHtml(tile.label)}</figcaption></figure>`;
}

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}

if (import.meta.main) {
  try {
    // `pnpm sheets` covers the examples; `pnpm sheets out` covers what `pnpm render` wrote.
    const examplesDir = join(REPO_ROOT, process.argv[2] ?? "examples");
    const jobs = await findSheets(examplesDir);
    if (jobs.length === 0) throw new Error(`${examplesDir}: no rendered images; run pnpm examples or pnpm render first`);
    const outDir = join(REPO_ROOT, "out", "sheets");
    const paths = await writeSheets(jobs, outDir);
    console.log(`wrote ${paths.length} sheets to ${relative(REPO_ROOT, outDir)}/`);
  } catch (error) {
    console.error(`error: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  }
}
