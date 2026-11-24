import type { PostType } from "../types.ts";
import { type Ctx, hashLine, themeTag, uniqueTags } from "./context.ts";

const FILLER = ["KomunitasTech", "BelajarBareng", "Indonesia"];

function tags(c: Ctx): string {
  const all = uniqueTags(c.sig.hashtags, themeTag(c.s), c.s.hashtags, c.community.hashtags, FILLER);
  return hashLine(all.slice(0, 5));
}

const cap = (t: string): string => t.charAt(0).toUpperCase() + t.slice(1);

function format(c: Ctx): string {
  return `Formatnya talk santai di ${c.voice} Discord FORA, bukan webinar. Tidak perlu daftar: cukup masuk, dan siapa pun boleh bicara serta bertanya langsung.`;
}

function joinLine(c: Ctx): string {
  return `Gabung lewat undangan Discord: ${c.url}`;
}

function audience(c: Ctx): string {
  return "Cocok untuk siapa pun yang tertarik pada topik ini, dari yang baru mulai sampai yang sudah berpengalaman.";
}

function gets(c: Ctx): string {
  if (c.s.topics.length === 0) {
    return "Yang kamu dapat: diskusi terbuka yang dipandu host. Bawa pertanyaan dan pengalaman kamu sendiri.";
  }
  return `Yang akan kita bahas:\n${c.s.topics.map((t) => `• ${t}`).join("\n")}`;
}

export function linkedin(c: Ctx, type: PostType): string {
  const { s, sig } = c;
  let blocks: string[];
  switch (type) {
    case "announce":
      blocks = [
        `${s.title}\nSesi ${c.brand}`,
        s.description,
        `${c.date}, ${c.range}, ${c.who}.`,
        gets(c),
        audience(c),
        format(c),
        joinLine(c),
      ];
      break;
    case "reminder":
      blocks = [
        `Hari ini, ${c.time}\n${s.title}`,
        `${cap(c.brand)} berkumpul hari ini pukul ${c.range}, ${c.who}. Kalau sudah mulai, langsung join saja.`,
        gets(c),
        format(c),
        joinLine(c),
      ];
      break;
    case "recap": {
      const r = s.recap!;
      const points = r.points.map((p, i) => `${i + 1}. ${p.title}${p.body ? `: ${p.body}` : ""}`).join("\n");
      const crowd = r.attendees ? `${r.attendees} orang ikut ngobrol di voice channel.` : "Terima kasih untuk semua yang ikut ngobrol di voice channel.";
      blocks = [
        `Rangkuman sesi ${c.brand}\n${s.title}`,
        `Terima kasih ${c.thanks}. ${crowd}`,
        `Beberapa poin yang kami bawa pulang:\n${points}`,
        r.links?.length ? `Bacaan lanjutan:\n${r.links.map((l) => `• ${l.label}: ${l.url}`).join("\n")}` : "",
        `Sesi berikutnya akan diumumkan di Discord FORA. Format tetap sama: talk santai di voice channel, terbuka untuk siapa pun. ${c.url}`,
      ];
      break;
    }
    case "cover":
      blocks = [
        `${c.series} bareng ${c.brand}`,
        s.description,
        `Sesi: ${s.title}, ${c.date}, ${c.range}.`,
        audience(c),
        format(c),
        joinLine(c),
      ];
      break;
    case "sig-intro":
      blocks = [
        `Kenalan dengan ${c.introName}: ${sig.tagline}`,
        sig.description,
        `Untuk siapa? ${c.forWho}`,
        `${format(c)} Sesi terdekat: ${s.title}, ${c.date}, ${c.range}.`,
        joinLine(c),
      ];
      break;
  }
  return [...blocks.filter(Boolean), tags(c)].join("\n\n");
}
