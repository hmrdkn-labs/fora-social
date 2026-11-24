import assert from "node:assert/strict";
import { test } from "node:test";
import { discordUrl, displayUrl, formatDate, formatDateShort, formatTime, formatTimeRange, speakerLine } from "../format.ts";
import { POST_TYPES, type Community, type Session, type Sig } from "../types.ts";
import { buildCaptions, xLength } from "./index.ts";

const community: Community = {
  name: "FORA",
  fullName: "Forum Rangkai",
  discord: "https://discord.gg/rSepJu7Wb",
  handles: {},
  hashtags: ["FORA", "KomunitasTech"],
  logo: "brand/logos/fora-mark.svg",
};

const sigcn: Sig = {
  id: "sigcn",
  short: "SIG CN",
  code: "CN",
  name: "Cloud Native",
  color: "#0A84FF",
  colorInk: "#FFFFFF",
  lockup: "brand/logos/sigcn.svg",
  tagline: "Belajar Kubernetes dan ekosistem cloud native bareng-bareng.",
  description:
    "SIG CN adalah ruang belajar Cloud Native di FORA. Kita ngobrol soal Kubernetes, GitOps, observability, dan praktik deploy sehari-hari. Semua level boleh ikut.",
  hashtags: ["SIGCN", "CloudNative", "Kubernetes"],
};

const foraSig: Sig = {
  id: "fora",
  short: "FORA",
  code: "FORA",
  name: "FORA",
  color: "#111111",
  colorInk: "#FFFFFF",
  lockup: "brand/logos/fora-mark.svg",
  tagline: "Komunitas tech yang ngobrol santai di Discord.",
  description: "FORA adalah komunitas tech kecil di Discord. Kita ngobrol soal banyak hal di voice channel, dari karier sampai open source.",
  hashtags: ["FORA"],
};

const base: Session = {
  id: "x",
  sig: "sigcn",
  theme: "Kubernetes",
  title: "Kubernetes untuk Pemula",
  date: "2026-12-12",
  time: "19:30",
  durationMinutes: 90,
  voiceChannel: "sig-cn-voice",
  host: { name: "Rina (contoh)" },
  speakers: [],
  description: "Kenalan dengan Kubernetes dari nol.",
  topics: ["Pod", "Deployment", "Service"],
  recap: { points: [{ title: "Pod adalah unit terkecil", body: "Berisi satu atau beberapa container." }] },
};

const person = (n: string) => ({ name: `${n} (contoh)`, role: "Engineer", handle: `${n.toLowerCase()}_contoh` });

const variants: Record<string, { session: Session; sig: Sig }> = {
  "two speakers, role and handle everywhere": {
    sig: sigcn,
    session: {
      ...base,
      series: "Cloud Native 101",
      host: person("Rina"),
      speakers: [person("Bima"), person("Sari")],
      recap: {
        attendees: 14,
        points: [
          { title: "Pod adalah unit terkecil yang dijadwalkan", body: "Satu Pod berisi satu atau beberapa container." },
          { title: "Deployment menjaga jumlah replika" },
          { title: "Service memberi alamat yang stabil" },
          { title: "Mulai debug dari kubectl describe dan logs" },
        ],
        links: [{ label: "Dokumentasi Kubernetes", url: "https://kubernetes.io/docs/home/" }],
      },
    },
  },
  "long title, one speaker": {
    sig: sigcn,
    session: {
      ...base,
      theme: "GitOps",
      title: "GitOps dengan Argo CD: dari commit di Git sampai deploy",
      speakers: [{ name: "Dani (contoh)", handle: "dani_contoh" }],
      hashtags: ["ArgoCD", "DevOps"],
    },
  },
  "six topics, five recap points": {
    sig: sigcn,
    session: {
      ...base,
      theme: "Observability",
      title: "Observability: Logs, Metrics, Traces",
      speakers: [{ name: "Eko (contoh)" }],
      topics: [
        "Monitoring vs observability",
        "Logs terstruktur",
        "Metrics dan Prometheus",
        "Distributed tracing",
        "OpenTelemetry sebagai standar",
        "Alert yang tidak bikin lelah",
      ],
      recap: {
        attendees: 16,
        points: [
          { title: "Logs menjawab apa yang terjadi", body: "Pakai format terstruktur seperti JSON." },
          { title: "Metrics menjawab seberapa sering dan seberapa lama" },
          { title: "Traces menjawab di mana waktunya habis" },
          { title: "OpenTelemetry memisahkan instrumentasi dari backend" },
          { title: "Alert pada gejala yang dirasakan pengguna" },
        ],
        links: [{ label: "Dokumentasi OpenTelemetry", url: "https://opentelemetry.io/docs/" }],
      },
    },
  },
  "no speakers, general FORA session": {
    sig: foraSig,
    session: {
      ...base,
      sig: "fora",
      theme: "Karier",
      title: "Ngobrol Karier di Tech",
      voiceChannel: "fora-voice",
      host: person("Dika"),
      topics: [],
      recap: { points: [{ title: "Proyek kecil yang selesai lebih berguna daripada banyak kursus" }] },
    },
  },
  "no topics, custom invite, bare names": {
    sig: sigcn,
    session: { ...base, topics: [], discord: "https://discord.gg/custom123" },
  },
};

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
      assert.ok(igTags.length >= 1 && igTags.length <= 8, `IG tags ${igTags.length}`);
      assert.equal(new Set(igTags.map((t) => t.toLowerCase())).size, igTags.length, "IG tags are unique");
      assert.ok(emoji(c.instagram) <= 4, "IG emoji");
      assert.ok(c.instagram.includes(displayUrl(url)), "IG short URL");
      assert.match(c.instagram, /link di bio/);

      // X
      assert.ok(c.x.length >= 1 && c.x.length <= 4, `X posts ${c.x.length}`);
      for (const post of c.x) assert.ok(xLength(post) <= 280, `X post ${xLength(post)}: ${post}`);
      const xTags = hashtags(c.x.join("\n"));
      assert.ok(xTags.length >= 1 && xTags.length <= 2, `X tags ${xTags.length}`);
      assert.ok(emoji(c.x.join("\n")) <= 2, "X emoji");

      // LinkedIn
      assert.ok(c.linkedin.length <= 3000, `LinkedIn ${c.linkedin.length}`);
      const liTags = hashtags(c.linkedin);
      assert.ok(liTags.length >= 3 && liTags.length <= 5, `LinkedIn tags ${liTags.length}`);
      assert.ok(emoji(c.linkedin) <= 2, "LinkedIn emoji");

      // Invite link and voice-channel nature, on every platform and post type.
      assert.ok(c.x.join("\n").includes(url), "X URL");
      assert.ok(c.linkedin.includes(url), "LinkedIn URL");
      for (const text of [c.instagram, c.x.join("\n"), c.linkedin]) {
        assert.match(text, /voice channel/);
      }
      if (type !== "recap") {
        assert.match(c.instagram, /ngobrol dan bertanya/);
      }
    });
  }
}

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
  assert.equal(speakerLine(base), "dipandu Rina (contoh)");
  const two = { ...base, speakers: [{ name: "A" }, { name: "B" }] };
  assert.equal(speakerLine(two), "bersama A dan B, dipandu Rina (contoh)");
  const three = { ...base, speakers: [{ name: "A" }, { name: "B" }, { name: "C" }] };
  assert.equal(speakerLine(three), "bersama A, B dan C, dipandu Rina (contoh)");
  assert.equal(speakerLine({ ...base, host: { name: "R", handle: "r" } }, true), "dipandu R @r");
});
