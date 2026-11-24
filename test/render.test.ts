import assert from "node:assert/strict";
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { after, before, describe, test } from "node:test";
import { loadCommunity, loadSession, loadSig } from "../src/load.ts";
import { type RenderJob, Renderer } from "../src/render.ts";
import { FORMATS, type FormatId, type PostType, type Template } from "../src/types.ts";

const SESSION = loadSession("test/fixtures/valid-session.yaml", "test/fixtures/sigs");
const SIG = loadSig("test/fixtures/sigs/sig-cn.yaml");
const COMMUNITY = loadCommunity("test/fixtures/community.yaml");

function job(template: Template, id: FormatId, postType: PostType = "announce"): RenderJob {
  const format = FORMATS.find((f) => f.id === id);
  assert.ok(format, `no format ${id}`);
  return { session: SESSION, sig: SIG, community: COMMUNITY, postType, format, template };
}

/** Width and height from the IHDR chunk of a PNG. */
function pngSize(png: Buffer): { width: number; height: number } {
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

describe("renderer", () => {
  let renderer: Renderer;
  let out: string;

  before(async () => {
    renderer = await Renderer.open();
    out = await mkdtemp(join(tmpdir(), "fora-render-test-"));
  });

  after(async () => {
    await renderer.close();
    await rm(out, { recursive: true, force: true });
  });

  test("fails an overflowing template, naming session, post type, format and element; writes nothing", async () => {
    const overflowing: Template = () => [
      '<p style="position:absolute;left:1500px;top:40px;width:400px;white-space:nowrap">Teks yang keluar kanvas</p>',
    ];
    const dir = join(out, "overflow");
    await assert.rejects(renderer.render(job(overflowing, "x"), dir), (error: Error) => {
      assert.match(error.message, /^valid-session · announce · x: /);
      assert.match(error.message, /"Teks yang keluar kanvas" is outside the canvas: 300px past the right edge/);
      return true;
    });
    assert.deepEqual(await readdir(dir).catch(() => []), []);
  });

  test("writes a PNG at the format's exact pixel size for a fitting template", async () => {
    const fitting: Template = () => ['<main class="card" data-fit><h1 class="title">Kubernetes untuk Pemula</h1></main>'];
    const [path] = await renderer.render(job(fitting, "x"), join(out, "fitting"));
    assert.equal(basename(path ?? ""), "announce.png");
    assert.deepEqual(pngSize(await readFile(path ?? "")), { width: 1600, height: 900 });
  });

  test("writes one numbered PNG per slide and a PDF with every page for li-doc", async () => {
    const slides: Template = () => [
      '<main class="card"><h1 class="title">Satu</h1></main>',
      '<main class="card"><h1 class="title">Dua</h1></main>',
      '<main class="card"><h1 class="title">Tiga</h1></main>',
    ];
    const paths = await renderer.render(job(slides, "li-doc"), join(out, "li-doc"));
    assert.deepEqual(paths.map((path) => basename(path)), [
      "announce-01.png",
      "announce-02.png",
      "announce-03.png",
      "announce.pdf",
    ]);
    assert.deepEqual(pngSize(await readFile(paths[0] ?? "")), { width: 1080, height: 1350 });
    const pdf = await readFile(paths[3] ?? "");
    assert.equal(pdf.subarray(0, 5).toString("latin1"), "%PDF-");
    assert.equal(pdf.toString("latin1").match(/\/Type\s*\/Page(?!s)/g)?.length, 3);
  });

  test("rejects a template that returns the wrong number of images", async () => {
    const two: Template = () => ["<main>a</main>", "<main>b</main>"];
    await assert.rejects(renderer.render(job(two, "x"), join(out, "count")), {
      message: "valid-session · announce · x: template returned 2 image(s), expected exactly one",
    });
  });
});
