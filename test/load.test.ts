import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, test } from "node:test";
import { parse, stringify } from "yaml";
import { loadCommunity, loadSession, loadSig, parseCommunity, parseSession, parseSig } from "../src/load.ts";

const SIGS = "test/fixtures/sigs";
const FIXTURE = "test/fixtures/valid-session.yaml";
const BAD = "sessions/bad.yaml";

const valid = parse(readFileSync(FIXTURE, "utf8")) as Record<string, unknown>;

/** The valid fixture with `changes` applied; an `undefined` value removes the key. */
function session(changes: Record<string, unknown>): string {
  const doc: Record<string, unknown> = { ...valid, ...changes };
  for (const [key, value] of Object.entries(doc)) if (value === undefined) delete doc[key];
  return stringify(doc);
}

function parseBad(changes: Record<string, unknown>): unknown {
  return parseSession(session(changes), BAD, SIGS);
}

describe("session files", () => {
  test("accepts the valid fixture and keeps its values", () => {
    const s = loadSession(FIXTURE, SIGS);
    assert.equal(s.id, "valid-session");
    assert.equal(s.date, "2026-12-05");
    assert.equal(s.time, "19:30");
    assert.equal(s.speakers[0]?.handle, "budi_contoh");
    assert.equal(s.recap?.points.length, 2);
  });

  test("fills duration, speakers and topics with their defaults", () => {
    const s = parseSession(session({ durationMinutes: undefined, speakers: undefined, topics: undefined }), BAD, SIGS);
    assert.equal(s.durationMinutes, 90);
    assert.deepEqual(s.speakers, []);
    assert.deepEqual(s.topics, []);
  });

  test("rejects a date that is not a real calendar day", () => {
    assert.throws(() => parseBad({ date: "2026-02-30" }), {
      message: "sessions/bad.yaml: date must be a real date as YYYY-MM-DD, got 2026-02-30",
    });
  });

  test("rejects a time that is not HH:MM", () => {
    assert.throws(() => parseBad({ time: "7pm" }), {
      message: "sessions/bad.yaml: time must be HH:MM, got 7pm",
    });
  });

  test("rejects a sig without a matching sigs/<id>.yaml", () => {
    assert.throws(() => parseBad({ sig: "sig-nope" }), {
      message: 'sessions/bad.yaml: sig must name an existing sigs/<id>.yaml, got "sig-nope"',
    });
  });

  test("rejects a description longer than 280 characters", () => {
    assert.throws(() => parseBad({ description: "a".repeat(281) }), {
      message: "sessions/bad.yaml: description must be at most 280 characters, got 281",
    });
  });

  test("rejects more than six topics", () => {
    assert.throws(() => parseBad({ topics: ["a", "b", "c", "d", "e", "f", "g"] }), {
      message: "sessions/bad.yaml: topics must have at most 6 items, got 7",
    });
  });

  test("names an unknown field instead of ignoring it", () => {
    assert.throws(() => parseBad({ durationMinute: 90 }), {
      message: "sessions/bad.yaml: durationMinute is not a known field",
    });
  });

  test("names a missing required field", () => {
    assert.throws(() => parseBad({ voiceChannel: undefined }), {
      message: "sessions/bad.yaml: voiceChannel is required",
    });
  });

  test("names the nested field of a bad handle", () => {
    assert.throws(() => parseBad({ host: { name: "Rina", handle: "@rina" } }), {
      message: 'sessions/bad.yaml: host.handle must be a handle without "@" or spaces, got @rina',
    });
  });

  test("keeps a photo that is an image file in the repo", () => {
    const s = parseSession(session({ host: { name: "Rina", photo: "brand/logos/fora-logo.png" } }), BAD, SIGS);
    assert.equal(s.host.photo, "brand/logos/fora-logo.png");
  });

  test("rejects a missing photo, naming the file and the person", () => {
    assert.throws(() => parseBad({ speakers: [{ name: "Budi", photo: "examples/people/nobody.jpg" }] }), {
      message:
        'sessions/bad.yaml: speakers[0].photo (Budi) must name an existing .jpg, .jpeg or .png file in the repo, got "examples/people/nobody.jpg"',
    });
  });

  test("rejects a photo that is not a JPEG or PNG, or lies outside the repo", () => {
    for (const photo of ["brand/logos/fora-mark.svg", "../fora-logo.png", "brand/logos"]) {
      assert.throws(() => parseBad({ host: { name: "Rina", photo } }), {
        message: `sessions/bad.yaml: host.photo (Rina) must name an existing .jpg, .jpeg or .png file in the repo, got "${photo}"`,
      });
    }
  });

  test("rejects a file name that cannot be an output directory", () => {
    assert.throws(() => parseSession(session({}), "sessions/Bad Name.yaml", SIGS), {
      message:
        'sessions/Bad Name.yaml: the file name must use only lowercase letters, digits and "-", like sigcn-gitops.yaml',
    });
  });

  test("rejects an empty file as not a mapping of fields", () => {
    assert.throws(() => parseSession("", BAD, SIGS), {
      message: "sessions/bad.yaml: must be a YAML mapping of fields",
    });
  });
});

describe("sig and community files", () => {
  test("takes a sig's id from its file name", () => {
    assert.equal(loadSig("test/fixtures/sigs/sig-cn.yaml").id, "sig-cn");
  });

  test("rejects a sig colour that is not #RRGGBB", () => {
    const sig = parse(readFileSync("test/fixtures/sigs/sig-cn.yaml", "utf8")) as Record<string, unknown>;
    assert.throws(() => parseSig(stringify({ ...sig, color: "blue" }), "sigs/sig-cn.yaml"), {
      message: "sigs/sig-cn.yaml: color must be a #RRGGBB colour, got blue",
    });
  });

  test("treats missing community handles as an empty object", () => {
    const community = loadCommunity("test/fixtures/community.yaml");
    assert.deepEqual(community.handles, {});
    assert.equal(community.discord, "https://discord.gg/rSepJu7Wb");
  });

  test("names the field of a community file that is not a URL", () => {
    const community = parse(readFileSync("test/fixtures/community.yaml", "utf8")) as Record<string, unknown>;
    assert.throws(() => parseCommunity(stringify({ ...community, discord: "discord" }), "community.yaml"), {
      message: "community.yaml: discord must be a URL, got discord",
    });
  });
});
