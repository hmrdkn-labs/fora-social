import type { PostType } from "../types.ts";
import { type Ctx, hashLine, themeTag, uniqueTags } from "./context.ts";

const MAX_TAGS = 8;

function tags(c: Ctx): string {
  return hashLine(
    uniqueTags(c.community.hashtags, c.sig.hashtags, c.s.hashtags, themeTag(c.s)).slice(0, MAX_TAGS),
  );
}

function join(c: Ctx): string {
  return [
    "Cara ikut:",
    `1. Buka Discord FORA lewat link di bio, atau langsung ke ${c.shortUrl}`,
    `2. Masuk ke ${c.voice}`,
    "3. Siapa pun boleh ikut ngobrol dan bertanya, tinggal masuk.",
  ].join("\n");
}

function where(c: Ctx): string {
  return `Di ${c.voice} Discord FORA. Ngobrol langsung lewat suara, bukan webinar.`;
}

function topics(c: Ctx, heading: string): string {
  return c.s.topics.length === 0 ? "" : `${heading}\n${c.s.topics.map((t) => `• ${t}`).join("\n")}`;
}

function recapBody(c: Ctx): string[] {
  const r = c.s.recap!;
  const points = r.points.map((p, i) => `${i + 1}. ${p.title}${p.body ? `: ${p.body}` : ""}`).join("\n");
  const links = r.links?.length ? `Bacaan lanjutan:\n${r.links.map((l) => `• ${l.label}: ${l.url}`).join("\n")}` : "";
  const crowd = r.attendees ? `Makasih ${c.thanks}! Ada ${r.attendees} orang yang ikut ngobrol di voice channel.` : `Makasih ${c.thanks} dan semua yang ikut ngobrol di voice channel!`;
  return [
    `✅ Rangkuman sesi\n${c.s.title}`,
    crowd,
    `Poin-poin yang kita bawa pulang:\n${points}`,
    links,
    `Sesi berikutnya diumumkan di Discord FORA. Gabung dulu lewat link di bio atau ${c.shortUrl}, biar nggak ketinggalan.`,
    "Simpan postingan ini buat dibaca ulang.",
  ];
}

export function instagram(c: Ctx, type: PostType): string {
  const { s, sig } = c;
  let blocks: string[];
  switch (type) {
    case "announce":
      blocks = [
        `🎙 ${s.title}\nSesi ${c.brand}`,
        s.description,
        `📅 ${c.date}, ${c.range}\n${where(c)}\n${c.who.charAt(0).toUpperCase()}${c.who.slice(1)}.`,
        topics(c, "Yang kita bahas:"),
        join(c),
        `💬 Simpan postingan ini dan ajak teman yang mungkin tertarik.`,
      ];
      break;
    case "reminder":
      blocks = [
        `🔴 Hari ini, ${c.time}\n${s.title}`,
        `Sesi ${c.brand} mulai ${c.time}. Kalau sudah mulai, langsung join aja, boleh masuk kapan pun.`,
        `${where(c)}\n${c.who.charAt(0).toUpperCase()}${c.who.slice(1)}.`,
        topics(c, "Hari ini kita bahas:"),
        join(c),
        "Kirim ke teman yang mau ikut, lalu ketemu di voice channel.",
      ];
      break;
    case "recap":
      blocks = recapBody(c);
      break;
    case "cover":
      blocks = [
        `🎙 ${c.series} bareng ${c.brand}`,
        s.description,
        `Sesi: ${s.title}\n📅 ${c.date}, ${c.range}\n${where(c)}`,
        join(c),
        `💬 Ikuti akun ini supaya nggak ketinggalan sesi ${c.series} berikutnya.`,
      ];
      break;
    case "sig-intro":
      blocks = [
        `🎙 Kenalan sama ${c.introName}: ${sig.tagline}`,
        sig.description,
        `Untuk siapa? ${c.forWho} Pemula sangat boleh, nggak ada pertanyaan yang terlalu dasar.`,
        `Sesi terdekat: ${s.title}\n📅 ${c.date}, ${c.range}\n${where(c)}`,
        join(c),
        `💬 Ajak teman yang tertarik ikut ngobrol di ${c.introName}.`,
      ];
      break;
  }
  return [...blocks.filter(Boolean), tags(c)].join("\n\n");
}
