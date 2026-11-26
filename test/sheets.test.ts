import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, join } from "node:path";
import { after, before, describe, test } from "node:test";
import { crc32, deflateSync } from "node:zlib";
import { findSheets, SHEET_MAX_WIDTH, type SheetJob, writeSheets } from "../src/sheets.ts";

/** A white PNG of the given size; the sheet scales every tile, so the size only has to be a real image. */
function png(width: number, height: number): Buffer {
  const chunk = (type: string, data: Buffer): Buffer => {
    const typed = Buffer.concat([Buffer.from(type, "latin1"), data]);
    const out = Buffer.alloc(12 + data.length);
    out.writeUInt32BE(data.length, 0);
    typed.copy(out, 4);
    out.writeUInt32BE(crc32(typed), 8 + data.length);
    return out;
  };
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 2;
  const row = Buffer.alloc(1 + width * 3, 0xff);
  row[0] = 0;
  const pixels = Buffer.concat(Array.from({ length: height }, () => row));
  return Buffer.concat([
    Buffer.from("89504e470d0a1a0a", "hex"),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(pixels)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/** Width from the IHDR chunk of a PNG file. */
async function pngWidth(file: string): Promise<number> {
  const bytes = await readFile(file);
  assert.equal(bytes.subarray(0, 4).toString("hex"), "89504e47", `${basename(file)} is not a PNG`);
  return bytes.readUInt32BE(16);
}

describe("contact sheets", () => {
  let root: string;
  let examples: string;
  let jobs: SheetJob[];

  before(async () => {
    root = await mkdtemp(join(tmpdir(), "fora-sheets-test-"));
    examples = join(root, "examples");
    const put = async (path: string, width: number, height: number) => {
      await mkdir(dirname(join(examples, path)), { recursive: true });
      await writeFile(join(examples, path), png(width, height));
    };
    await mkdir(join(examples, "sessions"), { recursive: true });
    await writeFile(join(examples, "sessions", "alpha.yaml"), "id: alpha\n");
    await put("alpha/ig-feed/announce.png", 36, 45);
    for (let slide = 1; slide <= 8; slide++) {
      await put(`alpha/ig-carousel/announce-${String(slide).padStart(2, "0")}.png`, 36, 45);
    }
    await put("alpha/x/announce.png", 48, 27);
    await put("alpha/x/cover.png", 48, 27);
    await put("beta/li-link/cover.png", 48, 25);
    jobs = await findSheets(examples);
  });

  after(async () => {
    await rm(root, { recursive: true, force: true });
  });

  test("lists only the post types a session renders, in order, with slide labels", () => {
    assert.deepEqual(
      jobs.map((job) => [job.session, job.postType, job.tiles.map((tile) => tile.label)]),
      [
        [
          "alpha",
          "announce",
          ["ig-feed", ...Array.from({ length: 8 }, (_, i) => `ig-carousel ${String(i + 1).padStart(2, "0")}`), "x"],
        ],
        ["alpha", "cover", ["x"]],
        ["beta", "cover", ["li-link"]],
      ],
    );
  });

  test("writes one PNG per job, never wider than the sheet bound, wrapping rows that would overflow it", async () => {
    const out = join(root, "out");
    const paths = await writeSheets(jobs, out);
    assert.deepEqual(paths.map((path) => basename(path)), [
      "alpha--announce.png",
      "alpha--cover.png",
      "beta--cover.png",
    ]);
    const widths = await Promise.all(paths.map(pngWidth));
    for (const width of widths) assert.ok(width <= SHEET_MAX_WIDTH, `${width}px is wider than ${SHEET_MAX_WIDTH}px`);
    // Nine tiles of 360px do not fit in one row, so the sheet is clamped to the bound.
    assert.equal(widths[0], SHEET_MAX_WIDTH);
  });
});
