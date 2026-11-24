import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "node:test";
import { TEMPLATES } from "../../templates/index.ts";
import { loadCommunity, loadSession, loadSig } from "../load.ts";
import { postTypesFor } from "../pipeline.ts";
import { FORMATS, POST_TYPES, type Session, type Sig, type TemplateContext } from "../types.ts";
import { parse } from "yaml";
import { variants } from "./fixtures.ts";
import { buildCaptions } from "./index.ts";
import { format, lint, type Surface } from "./style.ts";

const community = loadCommunity("community.yaml");
const sigs = new Map(readdirSync("sigs").map((f) => [f.replace(/\.yaml$/, ""), loadSig(join("sigs", f))]));
const samples = readdirSync("examples/sessions").map((f) => loadSession(join("examples/sessions", f), "sigs"));
const sigOf = (s: Session): Sig => sigs.get(s.sig)!;

const clean = (text: string, surface: Surface) => {
  const hits = lint(text, surface);
  assert.deepEqual(hits, [], `${surface}: ${format(hits)}\n---\n${text}`);
};

/** Visible text of an HTML body: tags gone, block ends become line breaks, entities decoded. */
function visibleText(html: string): string {
  return html
    .replace(/<(?:style|script)[\s\S]*?<\/(?:style|script)>/g, "")
    .replace(/<\/(?:p|li|h\d|div|main|header|footer|aside|span)>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n");
}

/** The words a person wrote in a session file. */
function copyOf(s: Session): string {
  const r = s.recap;
  return [s.title, s.subtitle, s.note, s.description, ...s.topics, ...(r?.points.flatMap((p) => [p.title, p.body]) ?? [])]
    .filter(Boolean)
    .join("\n");
}

describe("the linter", () => {
  test("catches the stock phrases of generated copy", () => {
    const bad: [string, string][] = [
      ["Kita menyelami Kubernetes.", "ban:menyelami"],
      ["Ngobrol langsung lewat suara, bukan webinar.", "ban:bukan webinar"],
      ["Bukan orang, tapi controller yang menyamakan cluster.", "negative parallelism"],
      ["Sesi santai, bukan kuliah.", "negative parallelism"],
      ["Untuk semua, dari yang baru mulai sampai yang sudah di production.", "false range"],
      ["Cara ikut — masuk saja.", "em dash"],
      ["🎙 Judul sesi", "emoji opens a line"],
      ["Satu 🎙 dan dua ✅", "more than one emoji"],
      ["Siapa pun boleh bicara. Siapa pun boleh bertanya.", "siapa pun more than once"],
      ["Formatnya: talk santai.", "label colon"],
      ["Poin-poin yang kita bawa pulang", "ban:poin-poin yang"],
    ];
    for (const [text, rule] of bad) {
      assert.ok(lint(text, "data").some((h) => h.rule === rule), `${rule} not found in "${text}": ${format(lint(text, "data"))}`);
    }
    assert.ok(lint("#a #b #c #d #e", "instagram").some((h) => h.rule.startsWith("hashtags")));
    assert.ok(lint("halo #a #b", "x").some((h) => h.rule.startsWith("hashtags")));
  });

  test("lets plain copy and the en dash in a time range through", () => {
    clean("Sabtu, 19.30–21.00 WIB di voice channel sig-cn-voice. Dengerin aja boleh. #FORA #SIGCN", "instagram");
  });
});

describe("captions", () => {
  const cases: [string, Session, Sig][] = [
    ...samples.map((s): [string, Session, Sig] => [s.id, s, sigOf(s)]),
    ...Object.entries(variants).map(([name, v]): [string, Session, Sig] => [name, v.session, v.sig]),
  ];
  for (const [name, session, sig] of cases) {
    for (const type of POST_TYPES) {
      if (type === "recap" && !session.recap) continue;
      test(`${name} / ${type}`, () => {
        const c = buildCaptions(session, sig, community, type);
        clean(c.instagram, "instagram");
        for (const post of c.x) clean(post, "x");
        clean(c.linkedin, "linkedin");
      });
    }
  }

  test("the host's note leads every caption unchanged", () => {
    const withNote = samples.filter((s) => s.note);
    assert.ok(withNote.length >= 2);
    for (const s of withNote) {
      for (const type of ["announce", "reminder", "cover"] as const) {
        const c = buildCaptions(s, sigOf(s), community, type);
        assert.ok(c.instagram.startsWith(s.note!) || c.instagram.includes(`\n\n${s.note}`), `IG ${type}`);
        assert.ok(c.x.join("\n").includes(s.note!), `X ${type}`);
        assert.ok(c.linkedin.includes(s.note!), `LinkedIn ${type}`);
      }
    }
  });

  test("the shape depends on the session, not on the run", () => {
    const text = (s: Session) => buildCaptions(s, sigOf(s), community, "announce").instagram;
    for (const s of samples) assert.equal(text(s), text(s));
    const skeletons = new Set(samples.map((s) => text(s).split("\n\n").length + ":" + text(s).includes("\n- ")));
    assert.ok(skeletons.size >= 2, "the sample announcements all share one skeleton");
  });
});

describe("templates", () => {
  for (const session of samples) {
    const sig = sigOf(session);
    for (const type of postTypesFor(session)) {
      test(`${session.id} / ${type}: text on the images`, () => {
        for (const fmt of FORMATS) {
          const ctx: TemplateContext = { session, sig, community, format: fmt, asset: (p) => `file:///${p}` };
          for (const body of TEMPLATES[type](ctx)) clean(visibleText(body), "image");
        }
      });
    }
  }
});

describe("data files", () => {
  for (const [id, sig] of sigs) {
    test(`sigs/${id}.yaml`, () => clean([sig.tagline, sig.description].join("\n"), "data"));
  }
  for (const s of samples) {
    test(`examples/sessions/${s.id}.yaml`, () => clean(copyOf(s), "data"));
  }
  test("community.yaml and sigs only name real hashtags without spaces", () => {
    const raw = parse(readFileSync("community.yaml", "utf8")) as { hashtags: string[] };
    for (const tag of [...raw.hashtags, ...[...sigs.values()].flatMap((s) => s.hashtags)]) assert.match(tag, /^[A-Za-z0-9_]+$/);
  });
});
