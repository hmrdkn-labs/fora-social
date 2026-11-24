import type { PostType } from "../types.ts";
import { cap, type Ctx, hashLine, shape, themeTag, uniqueTags } from "./context.ts";

function tags(c: Ctx): string {
  return hashLine(
    uniqueTags(c.community.hashtags.slice(0, 1), c.sig.hashtags.slice(0, 1), themeTag(c.s), c.s.hashtags, c.sig.hashtags, c.community.hashtags).slice(0, 4),
  );
}

/** How to join and that anyone can listen or talk: said once per caption, worded three ways. */
function join(c: Ctx, variant: number): string {
  switch (variant % 3) {
    case 0:
      return `Link Discord ada di bio (${c.shortUrl}). Masuk ke ${c.voice}, dengerin aja boleh, nyalain mic juga boleh.`;
    case 1:
      return `Mampir ke ${c.voice} di Discord FORA, link di bio atau ${c.shortUrl}. Mau dengerin aja boleh, mau ikut ngomong juga boleh.`;
    default:
      return `Langsung masuk ${c.voice} lewat ${c.shortUrl} (ada juga di bio). Dengerin aja boleh, mic juga boleh.`;
  }
}

const bullets = (items: string[]): string => items.map((t) => `- ${t}`).join("\n");

function recapPoints(c: Ctx, style: "numbered" | "dash"): string {
  const r = c.s.recap!;
  return r.points
    .map((p, i) => `${style === "numbered" ? `${i + 1}.` : "-"} ${p.title}${p.body ? `. ${p.body}` : ""}`)
    .join("\n");
}

function recapLinks(c: Ctx): string {
  const links = c.s.recap!.links ?? [];
  return links.map((l) => `${l.label}: ${l.url}`).join("\n");
}

function recap(c: Ctx, variant: number): string[] {
  const r = c.s.recap!;
  const crowd = r.attendees ? `${r.attendees} orang ikut ngobrol di voice channel.` : "Makasih yang sudah mampir ke voice channel.";
  const next = `Sesi berikutnya kita umumkan di Discord FORA (link di bio atau ${c.shortUrl}). Dengerin aja boleh, nyalain mic juga boleh.`;
  if (variant === 0) {
    return [
      c.s.note ?? `Rekap "${c.s.title}", ${c.dateShort}.`,
      `${crowd} Makasih ${c.thanks}.`,
      recapPoints(c, "numbered"),
      recapLinks(c),
      next,
    ];
  }
  return [
    c.s.note ?? `${c.s.title}: ini yang tercatat dari obrolan ${c.dateShort}.`,
    recapPoints(c, "dash"),
    recapLinks(c),
    `${crowd} Makasih ${c.thanks}, sampai ketemu lagi. ${next}`,
  ];
}

export function instagram(c: Ctx, type: PostType): string {
  const { s, sig } = c;
  const v = shape(c, `instagram|${type}`, 3);
  const when = `${c.date}, ${c.range}`;
  let blocks: string[];
  switch (type) {
    case "announce":
      blocks =
        v === 0
          ? [c.lead, `${s.title}\n${when}. ${c.Who}.`, join(c, 0)]
          : v === 1
            ? [s.title, c.lead, `${c.dateShort}, ${c.range}. ${c.Who}.`, s.topics.length ? bullets(s.topics) : "", join(c, 1)]
            : [
                `${s.title}, ${c.dateShort} jam ${c.time}.`,
                c.lead,
                `${c.Who}. ${join(c, 2)}`,
              ];
      break;
    case "reminder":
      blocks =
        v === 0
          ? [`Hari ini, ${c.time}. ${s.title}`, c.lead, `${c.Who}. Kalau sudah mulai, nyusul aja kapan pun. ${join(c, 0)}`]
          : v === 1
            ? [`${s.title} mulai ${c.time} hari ini.`, s.note ?? (s.topics.length ? bullets(s.topics) : c.lead), join(c, 1)]
            : [s.note ?? "", `Hari ini jam ${c.time}, ${c.voice}. ${s.title}.`, join(c, 2)];
      break;
    case "recap":
      blocks = recap(c, v % 2);
      break;
    case "cover":
      blocks =
        v === 0
          ? [`${c.series} bareng ${c.brand}.`, c.lead, `Sesinya "${s.title}", ${when}.`, join(c, 0)]
          : [s.title, `${cap(c.series)} di ${c.brand}.`, c.lead, `${when}. ${join(c, 1)}`];
      break;
    case "sig-intro":
      blocks =
        v === 0
          ? [`${c.introName}. ${sig.tagline}`, sig.description, `Sesi terdekat soal "${s.title}", ${c.dateShort} jam ${c.time}.`, join(c, 0)]
          : [sig.description, `Kalau mau lihat dulu seperti apa, "${s.title}" ada ${c.dateShort} jam ${c.time}. ${join(c, 2)}`];
      break;
  }
  return [...blocks.filter(Boolean).map((b) => (b.endsWith("\n") ? b.trimEnd() : b)), tags(c)].join("\n\n");
}
