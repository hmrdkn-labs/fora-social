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
import { firstSentence } from "./context.ts";
import { buildCaptions, xLength } from "./index.ts";
import { format, lint, type Surface } from "./style.ts";

const community = loadCommunity("community.yaml");
const sigs = new Map(readdirSync("sigs").map((f) => [f.replace(/\.yaml$/, ""), loadSig(join("sigs", f))]));
// The example sessions and the real ones in sessions/ are all held to the same rules.
const samples = ["examples/sessions", "sessions"].flatMap((dir) =>
  readdirSync(dir).filter((f) => f.endsWith(".yaml")).map((f) => loadSession(join(dir, f), "sigs")),
);
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
  const about = [...s.speakers, s.host].map((p) => p.about);
  return [s.title, s.subtitle, s.problem, s.note, s.description, ...about, ...s.topics, ...(r?.points.flatMap((p) => [p.title, p.body]) ?? [])]
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
    for (const type of postTypesFor(session)) {
      test(`${name} / ${type}`, () => {
        const c = buildCaptions(session, sig, community, type);
        clean(c.instagram, "instagram");
        for (const post of c.x) clean(post, "x");
        clean(c.linkedin, "linkedin");
      });
    }
  }

  test("the host's note leads the announcement unchanged and is not replayed in other posts", () => {
    const withNote = samples.filter((s) => s.note);
    assert.ok(withNote.length >= 2);
    for (const s of withNote) {
      const c = buildCaptions(s, sigOf(s), community, "announce");
      assert.ok(c.instagram.startsWith(s.note!) || c.instagram.includes(`\n\n${s.note}`), "IG announce");
      const x = c.x.join("\n");
      assert.ok(!x.includes(s.note!) || (c.x.length === 1 && x.startsWith(s.note!)), "X announce: the note leads a single post or is left out");
      assert.ok(c.linkedin.includes(s.note!), "LinkedIn announce");
      for (const type of postTypesFor(s).filter((type) => type !== "announce")) {
        const other = buildCaptions(s, sigOf(s), community, type);
        const all = [other.instagram, ...other.x, other.linkedin].join("\n");
        assert.ok(!all.includes(s.note!) && !all.includes(firstSentence(s.note!)), `${s.id} / ${type} repeats the host's note`);
      }
    }
  });

  test("speakers captions lead with what each person will share", () => {
    for (const s of samples) {
      const people = [...s.speakers, s.host].filter((p) => p.about);
      assert.equal(people.length, s.speakers.length + 1, `${s.id}: every sample person has an about line`);
      const c = buildCaptions(s, sigOf(s), community, "speakers");
      for (const p of people) {
        assert.ok(c.instagram.includes(p.about!), `${s.id} IG ${p.name}`);
        assert.ok(c.linkedin.includes(p.about!), `${s.id} LinkedIn ${p.name}`);
      }
    }
  });

  test("a reminder says later and a live post says now, never both", () => {
    for (const s of samples.filter((s) => s.date !== undefined)) {
      const reminder = buildCaptions(s, sigOf(s), community, "reminder");
      const live = buildCaptions(s, sigOf(s), community, "live");
      const r = [reminder.instagram, ...reminder.x, reminder.linkedin].join("\n");
      const l = [live.instagram, ...live.x, live.linkedin].join("\n");
      assert.match(r, /nanti|hari ini/i, `${s.id} reminder`);
      assert.doesNotMatch(r, /live|lagi jalan|sekarang|sudah mulai/i, `${s.id} reminder sounds live`);
      assert.match(l, /live|lagi jalan|sudah mulai|sedang berjalan/i, `${s.id} live`);
      assert.doesNotMatch(l, /nanti|hari ini/i, `${s.id} live sounds later`);
    }
  });

  test("a note too long for X is left out, not threaded", () => {
    const { session, sig } = variants["host note, no attendee count"];
    const long = { ...session, note: "Cerita panjang soal Pod yang mati jam dua pagi dan Deployment yang diam-diam membuat gantinya. ".repeat(3).trim() };
    for (const type of ["announce"] as const) {
      const c = buildCaptions(long, sig, community, type);
      assert.equal(c.x.length, 1);
      assert.ok(!c.x[0].includes("Cerita panjang"));
      assert.ok(xLength(c.x[0]) <= 280);
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
    test(`sigs/${id}.yaml`, () =>
      clean([sig.tagline, sig.description, ...(sig.agenda ?? []), ...(sig.people ?? []).flatMap((p) => [p.name, p.about ?? ""])].join("\n"), "data"));
  }
  for (const s of samples) {
    test(`session file ${s.id}.yaml`, () => clean(copyOf(s), "data"));
  }
  test("community.yaml and sigs only name real hashtags without spaces", () => {
    const raw = parse(readFileSync("community.yaml", "utf8")) as { hashtags: string[] };
    for (const tag of [...raw.hashtags, ...[...sigs.values()].flatMap((s) => s.hashtags)]) assert.match(tag, /^[A-Za-z0-9_]+$/);
  });
});
