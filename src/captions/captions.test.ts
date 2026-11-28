import assert from "node:assert/strict";
import { test } from "node:test";
import { discordUrl, displayUrl, formatDate, formatDateShort, formatTime, formatTimeRange, speakerLine } from "../format.ts";
import { POST_TYPES } from "../types.ts";
import { base, community, variants } from "./fixtures.ts";
import { buildCaptions, xLength } from "./index.ts";

const emoji = (t: string) => (t.match(/\p{Extended_Pictographic}/gu) ?? []).length;
const hashtags = (t: string) => t.match(/#[\p{L}\p{N}_]+/gu) ?? [];

for (const [name, { session, sig }] of Object.entries(variants)) {
  for (const type of POST_TYPES) {
    test(`${name} / ${type}`, () => {
      const url = discordUrl(session, community);
      const c = buildCaptions(session, sig, community, type);

      // Instagram
      assert.ok(c.instagram.length <= 2200, `IG ${c.instagram.length}`);
      const igTags = hashtags(c.instagram);
      assert.ok(igTags.length >= 2 && igTags.length <= 4, `IG tags ${igTags.length}`);
      assert.equal(new Set(igTags.map((t) => t.toLowerCase())).size, igTags.length, "IG tags are unique");
      assert.ok(emoji(c.instagram) <= 4, "IG emoji");
      assert.ok(c.instagram.includes(displayUrl(url)), "IG short URL");
      assert.match(c.instagram, /bio/);

      // X
      assert.ok(c.x.length >= 1 && c.x.length <= 4, `X posts ${c.x.length}`);
      for (const post of c.x) assert.ok(xLength(post) <= 280, `X post ${xLength(post)}: ${post}`);
      const xTags = hashtags(c.x.join("\n"));
      assert.ok(xTags.length === 1, `X tags ${xTags.length}`);
      assert.ok(emoji(c.x.join("\n")) <= 2, "X emoji");

      // LinkedIn
      assert.ok(c.linkedin.length <= 3000, `LinkedIn ${c.linkedin.length}`);
      const liTags = hashtags(c.linkedin);
      assert.ok(liTags.length >= 2 && liTags.length <= 3, `LinkedIn tags ${liTags.length}`);
      assert.ok(emoji(c.linkedin) <= 2, "LinkedIn emoji");

      // Invite link and voice-channel nature, on every platform and post type.
      assert.ok(c.x.join("\n").includes(url), "X URL");
      assert.ok(c.linkedin.includes(url), "LinkedIn URL");
      for (const text of [c.instagram, c.x.join("\n"), c.linkedin]) {
        assert.match(text, /voice channel/);
      }
      for (const text of [c.instagram, c.x.join("\n"), c.linkedin]) {
        assert.match(text, /dengerin|dengarkan/i, "says that listening is fine");
      }
    });
  }
}

test("a recap ends with the host's own question, and asks none without one", () => {
  const { session, sig } = variants["two speakers, role and handle everywhere"];
  const question = "Waktu Pod-nya dimatikan, apa yang kamu lihat di kubectl get pods?";
  const asked = buildCaptions({ ...session, recap: { ...session.recap!, question } }, sig, community, "recap");
  for (const text of [asked.instagram, asked.x.join("\n"), asked.linkedin]) assert.ok(text.includes(question));
  const silent = buildCaptions({ ...session, recap: { ...session.recap!, question: undefined } }, sig, community, "recap");
  for (const text of [silent.instagram, silent.x.join("\n"), silent.linkedin]) assert.ok(!text.includes("?"), text);
});

test("recap captions carry the takeaways and the attendee count", () => {
  const { session, sig } = variants["two speakers, role and handle everywhere"];
  const c = buildCaptions(session, sig, community, "recap");
  assert.match(c.instagram, /Pod adalah unit terkecil/);
  assert.match(c.instagram, /14 orang/);
  assert.match(c.instagram, /@bima_contoh/);
  assert.match(c.linkedin, /14 orang/);
  assert.match(c.x[0], /14 orang/);
  assert.ok(c.x.length >= 3, "recap is a thread");
});

test("a long thread drops optional lines instead of overflowing", () => {
  const { session, sig } = variants["six topics, five recap points"];
  for (const type of ["announce", "recap"] as const) {
    for (const post of buildCaptions(session, sig, community, type).x) assert.ok(xLength(post) <= 280);
  }
});

test("xLength: URLs weigh 23, emoji 2, en dash 1", () => {
  assert.equal(xLength("halo"), 4);
  assert.equal(xLength("https://discord.gg/rSepJu7Wb"), 23);
  assert.equal(xLength("a https://example.com/very/long/path/that/goes/on a"), 1 + 1 + 23 + 1 + 1);
  assert.equal(xLength("🎙"), 2);
  assert.equal(xLength("19.30–21.00"), 11);
  assert.equal(xLength("日本"), 4);
});

test("date and time formatting in WIB", () => {
  const s = { ...base, date: "2026-12-12", time: "19:30" };
  assert.equal(formatDate(s), "Sabtu, 12 Desember 2026");
  assert.equal(formatDateShort(s), "Sab, 12 Des");
  assert.equal(formatTime(s), "19.30 WIB");
  assert.equal(formatTimeRange(s), "19.30–21.00 WIB");
  assert.equal(formatTime({ ...s, time: "07:05" }), "07.05 WIB");
});

test("a session crossing midnight ends the next day", () => {
  const s = { ...base, date: "2026-12-31", time: "22:30", durationMinutes: 120 };
  assert.equal(formatTimeRange(s), "22.30–00.30 WIB");
  assert.equal(formatDate(s), "Kamis, 31 Desember 2026");
});

test("speakerLine reads naturally", () => {
  assert.equal(speakerLine(base), "ngobrol bareng Rina (contoh)");
  const two = { ...base, speakers: [{ name: "A" }, { name: "B" }] };
  assert.equal(speakerLine(two), "bersama A dan B, dipandu Rina (contoh)");
  const three = { ...base, speakers: [{ name: "A" }, { name: "B" }, { name: "C" }] };
  assert.equal(speakerLine(three), "bersama A, B dan C, dipandu Rina (contoh)");
  assert.equal(speakerLine({ ...base, host: { name: "R", handle: "r" } }, true), "ngobrol bareng R @r");
});

test("the plain problem leads the cover, and reminder and live use it once each without the subtitle", () => {
  const session = { ...base, subtitle: "Satu cluster lokal, dari nol", problem: "Aplikasinya lambat dan nggak ada yang tahu sebabnya." };
  const sig = variants[Object.keys(variants)[0]!]!.sig;
  const cover = buildCaptions(session, sig, community, "cover");
  assert.ok(cover.instagram.includes(session.problem), "IG cover");
  assert.ok(cover.linkedin.includes(session.problem), "LinkedIn cover");
  assert.ok(cover.x.join("\n").includes(session.problem), "X cover");
  for (const type of ["reminder", "live"] as const) {
    const c = buildCaptions(session, sig, community, type);
    for (const text of [c.instagram, c.linkedin]) assert.ok(text.includes(session.problem), `${type} carries the problem`);
    for (const text of [c.instagram, c.linkedin, c.x.join("\n")]) {
      assert.ok(text.split(session.problem).length - 1 <= 1, `${type} says the problem at most once`);
      assert.ok(!text.includes(session.subtitle), `${type} repeats the subtitle`);
    }
  }
});

test("the X speakers thread gives every person their line", () => {
  const { session, sig } = variants["two speakers, role and handle everywhere"];
  const posts = buildCaptions(session, sig, community, "speakers").x;
  const text = posts.join("\n");
  for (const p of [...session.speakers, session.host]) assert.ok(text.includes(p.about!), `${p.name} is missing`);
});
