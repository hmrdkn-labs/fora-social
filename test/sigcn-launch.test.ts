import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, test } from "node:test";
import { parse, stringify } from "yaml";
import { readFileSync } from "node:fs";
import { buildCaptions } from "../src/captions/index.ts";
import { formatDate, formatDateShort, formatTime, formatTimeRange } from "../src/format.ts";
import { loadCommunity, loadSession, loadSig, parseSession } from "../src/load.ts";
import { postTypesFor, skipReason } from "../src/pipeline.ts";
import { postsReadme } from "../src/posts.ts";
import { Renderer } from "../src/render.ts";
import { FORMATS, POST_TYPES } from "../src/types.ts";
import { TEMPLATES } from "../templates/index.ts";

const SIGS = "test/fixtures/sigs";
const valid = parse(readFileSync("test/fixtures/valid-session.yaml", "utf8")) as Record<string, unknown>;

function session(changes: Record<string, unknown>): string {
  const doc: Record<string, unknown> = { ...valid, ...changes };
  for (const [key, value] of Object.entries(doc)) if (value === undefined) delete doc[key];
  return stringify(doc);
}

const WHEN = "Minggu depan, harinya menyusul";
const community = loadCommunity("community.yaml");
const sig = loadSig("sigs/sig-cn.yaml");
const launch = loadSession("sessions/sigcn-cara-kerja-model-ai.yaml", "sigs");

describe("date or when", () => {
  test("accepts when instead of date, and shows it with the start time only", () => {
    const s = parseSession(session({ date: undefined, when: WHEN }), "sessions/x.yaml", SIGS);
    assert.equal(s.date, undefined);
    assert.equal(formatDate(s), WHEN);
    assert.equal(formatDateShort(s), WHEN);
    assert.equal(formatTime(s), "19.30 WIB");
    assert.equal(formatTimeRange(s), "19.30 WIB");
  });

  test("rejects a session with neither", () => {
    assert.throws(() => parseSession(session({ date: undefined }), "sessions/x.yaml", SIGS), {
      message: "sessions/x.yaml: needs date (YYYY-MM-DD) or when (free text); set one of them",
    });
  });

  test("rejects a session with both", () => {
    assert.throws(() => parseSession(session({ when: WHEN }), "sessions/x.yaml", SIGS), {
      message: "sessions/x.yaml: has both date and when; set only one",
    });
  });
});

describe("a session without a date", () => {
  test("gets only the posts that do not need the day, and says why for the others", () => {
    assert.deepEqual(postTypesFor(launch), ["cover", "sig-intro", "speakers"]);
    for (const type of ["announce", "reminder", "live", "recap"] as const) {
      assert.match(skipReason(launch, type) ?? "", new RegExp(`^${type}: skipped, the session has no date yet`));
    }
  });

  test("a dated session without a recap still skips only the recap", () => {
    const dated = loadSession("examples/sessions/sigcn-observability.yaml", "sigs");
    const types = postTypesFor({ ...dated, recap: undefined });
    assert.deepEqual(types, POST_TYPES.filter((type) => type !== "recap"));
  });

  test("every post type that is made has captions that say when without a date", () => {
    for (const type of postTypesFor(launch)) {
      const c = buildCaptions(launch, sig, community, type);
      const text = [c.instagram, ...c.x, c.linkedin].join("\n");
      assert.doesNotMatch(text, /undefined|Invalid Date|NaN/, type);
    }
  });
});

describe("SIG intro with people and agenda", () => {
  const c = buildCaptions(launch, sig, community, "sig-intro");

  test("Instagram and LinkedIn name every person with what they do, and list the agenda", () => {
    for (const text of [c.instagram, c.linkedin]) {
      for (const p of sig.people ?? []) assert.ok(text.includes(`${p.name} ${p.about}`), `${p.name}`);
      for (const item of sig.agenda ?? []) assert.ok(text.includes(item), item);
      assert.ok(text.includes(WHEN), "the open day, not a made-up date");
    }
  });

  test("X stays within the limit and names the people", () => {
    assert.ok(c.x.length <= 4);
    const text = c.x.join("\n");
    for (const name of ["Dika", "Hamzah Chairil Salim", "Ammar Alfian", "Mustafa Zaki Assegaf"]) assert.ok(text.includes(name), name);
    assert.ok(!text.includes("Azzam"), "X uses the short name");
  });

  test("the images show every name, and the agenda wherever there is room, in every format", () => {
    for (const format of FORMATS) {
      const ctx = { session: launch, sig, community, format, asset: (p: string) => `file:///${p}` };
      const html = TEMPLATES["sig-intro"](ctx).join("\n");
      for (const p of sig.people ?? []) assert.ok(html.includes(p.name.replaceAll("&", "&amp;")), `${format.id} ${p.name}`);
      if (format.width < format.height) {
        for (const p of sig.people ?? []) assert.ok(html.includes((p.about ?? "").slice(1)), `${format.id} ${p.name} about`);
        for (const item of sig.agenda ?? []) assert.ok(html.includes(item), `${format.id} agenda`);
      }
    }
  });

  test("renders in every format without overflow", async () => {
    const renderer = await Renderer.open();
    const out = mkdtempSync(join(tmpdir(), "fora-intro-"));
    try {
      for (const format of FORMATS) {
        await renderer.render({ session: launch, sig, community, postType: "sig-intro", format, template: TEMPLATES["sig-intro"] }, join(out, format.id));
      }
    } finally {
      await renderer.close();
      rmSync(out, { recursive: true, force: true });
    }
  });
});

describe("posts README of a launch", () => {
  test("lists only the posts that exist, with the SIG intro first and labelled", () => {
    const dir = mkdtempSync(join(tmpdir(), "fora-posts-"));
    try {
      for (const type of ["cover", "sig-intro"]) {
        mkdirSync(join(dir, "x"), { recursive: true });
        writeFileSync(join(dir, "x", `${type}.png`), "");
      }
      const readme = postsReadme(dir, launch, sig, community);
      const headings = [...readme.matchAll(/^### (.+)$/gm)].map((m) => m[1]);
      assert.deepEqual(headings, ["SIG CN launch post (post this first)", "Cover"]);
      assert.doesNotMatch(readme, /Announce|Reminder|Live|Recap|Host/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
