import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, test } from "node:test";
import { parse, stringify } from "yaml";
import { loadCommunity, loadSig, parseSession } from "../src/load.ts";
import { FORMATS, type FormatId, type PostType, type Session } from "../src/types.ts";
import { TEMPLATES } from "../templates/index.ts";

const SIGS = "test/fixtures/sigs";
const BASE = parse(readFileSync("test/fixtures/valid-session.yaml", "utf8")) as Record<string, unknown>;
const IMAGE = { src: "sessions/assets/kacabenggala.png", alt: "Bingkai cermin" };
const SIG = loadSig("test/fixtures/sigs/sig-cn.yaml");
const COMMUNITY = loadCommunity("test/fixtures/community.yaml");

function session(image?: unknown): Session {
  return parseSession(stringify({ ...BASE, image }), "sessions/with-image.yaml", SIGS);
}

function html(s: Session, postType: PostType, id: FormatId): string {
  const format = FORMATS.find((f) => f.id === id);
  assert.ok(format);
  return TEMPLATES[postType]({ session: s, sig: SIG, community: COMMUNITY, format, asset: (path) => `file:///${path}` }).join("\n");
}

describe("session image", () => {
  test("is drawn as a mark on cover, announce, reminder and live, in tall and wide formats", () => {
    const s = session(IMAGE);
    for (const postType of ["cover", "announce", "reminder", "live"] as const) {
      for (const id of ["ig-feed", "x"] as const) {
        const out = html(s, postType, id);
        assert.match(out, /<img class="mark [a-z-]+"[^>]*src="file:\/\/\/sessions\/assets\/kacabenggala\.png" alt="Bingkai cermin">/, `${postType} ${id}`);
      }
    }
  });

  test("shows on the first slide of a deck only", () => {
    const slides = TEMPLATES.live({ session: session(IMAGE), sig: SIG, community: COMMUNITY, format: FORMATS.find((f) => f.id === "ig-carousel")!, asset: (p) => p });
    assert.deepEqual(slides.map((slide) => slide.includes('class="mark ')), [true, false, false]);
  });

  test("a session without an image has no mark", () => {
    assert.doesNotMatch(html(session(), "announce", "ig-feed"), /class="mark /);
  });

  test("rejects a missing image file and an unsupported type, naming the file and field", () => {
    assert.throws(() => session({ src: "sessions/assets/nope.png", alt: "x" }), {
      message: 'sessions/with-image.yaml: image.src must name an existing .png or .svg file in the repo, got "sessions/assets/nope.png"',
    });
    assert.throws(() => session({ src: "README.md", alt: "x" }), /image\.src must name an existing \.png or \.svg file/);
  });
});
