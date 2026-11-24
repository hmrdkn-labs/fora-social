import type { PostType } from "../types.ts";
import { cap, type Ctx, hashLine, shape, themeTag, uniqueTags } from "./context.ts";

function tags(c: Ctx): string {
  return hashLine(uniqueTags(themeTag(c.s), c.sig.hashtags.slice(1), c.sig.hashtags.slice(0, 1), c.s.hashtags, c.community.hashtags).slice(0, 3));
}

/** Invite, channel, and that anyone can listen or talk: once per caption, tidy register. */
function join(c: Ctx, variant: number): string {
  if (variant % 2 === 0) {
    return `Kami ngobrol di ${c.voice} Discord FORA. Boleh dengarkan saja, boleh juga ikut bicara. Undangan: ${c.url}`;
  }
  return `Gabung lewat ${c.url}, lalu masuk ke ${c.voice}. Mau dengarkan saja atau ikut bicara, dua-duanya boleh.`;
}

const bullets = (items: string[]): string => items.map((t) => `• ${t}`).join("\n");

function recap(c: Ctx, variant: number): string[] {
  const r = c.s.recap!;
  const points = r.points.map((p, i) => `${i + 1}. ${p.title}${p.body ? `. ${p.body}` : ""}`).join("\n");
  const links = (r.links ?? []).map((l) => `${l.label}: ${l.url}`).join("\n");
  const crowd = r.attendees ? `${r.attendees} orang ikut ngobrol di voice channel.` : "Terima kasih untuk semua yang sudah ikut ngobrol.";
  const next = `Sesi berikutnya akan kami umumkan di Discord FORA. Boleh dengarkan saja di ${c.voice}, boleh juga ikut bicara. ${c.url}`;
  if (variant === 0) {
    return [c.s.note ?? `Rekap "${c.s.title}" (${c.dateShort}).`, `Terima kasih ${c.thanks}. ${crowd}`, points, links, next];
  }
  return [c.s.note ?? `${crowd} Terima kasih ${c.thanks}.`, `Catatan dari "${c.s.title}":`, points, links, next];
}

export function linkedin(c: Ctx, type: PostType): string {
  const { s, sig } = c;
  const v = shape(c, `linkedin|${type}`, 3);
  const when = `${c.date}, ${c.range}`;
  let blocks: string[];
  switch (type) {
    case "announce":
      blocks =
        v === 0
          ? [`${s.title} (${c.brand})`, c.lead, `${when}, ${c.who}.`, s.topics.length ? bullets(s.topics) : "", join(c, 0)]
          : v === 1
            ? [c.lead, `${s.title}. ${when}. ${cap(c.who)}.`, join(c, 1)]
            : [`${s.title}, bareng ${c.brand}`, `${c.dateShort}, ${c.range}. ${c.lead}`, s.topics.length ? bullets(s.topics) : "", `${cap(c.who)}.`, join(c, 1)];
      break;
    case "reminder":
      blocks =
        v === 0
          ? [`Hari ini, ${c.range}: ${s.title}`, c.lead, `${cap(c.who)}. Kalau sudah mulai, silakan langsung masuk.`, join(c, 0)]
          : [c.s.note ?? `Hari ini jam ${c.time} kami ngobrol soal ${s.theme}.`, `${s.title}, ${c.range}. ${cap(c.who)}.`, join(c, 1)];
      break;
    case "recap":
      blocks = recap(c, v % 2);
      break;
    case "cover":
      blocks =
        v === 0
          ? [`${c.series} bareng ${c.brand}`, c.lead, `Sesinya "${s.title}", ${when}.`, join(c, 0)]
          : [c.lead, `${cap(c.series)} di ${c.brand}. Sesinya "${s.title}", ${c.dateShort}, ${c.range}.`, join(c, 1)];
      break;
    case "sig-intro":
      blocks =
        v === 0
          ? [`${c.introName}. ${sig.tagline}`, sig.description, `Sesi terdekat soal "${s.title}", ${c.dateShort}, ${c.range}.`, join(c, 0)]
          : [sig.description, `Sesi terdekat soal "${s.title}", ${c.date}, ${c.range}.`, join(c, 1)];
      break;
  }
  return [...blocks.filter(Boolean), tags(c)].join("\n\n");
}
