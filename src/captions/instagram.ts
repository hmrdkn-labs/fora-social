import type { PostType } from "../types.ts";
import { aboutPeople, cap, type Ctx, firstSentence, hashLine, openDoor, recapPrompt, sentence, shape, themeTag, uniqueTags } from "./context.ts";

function tags(c: Ctx): string {
  return hashLine(
    uniqueTags(c.community.hashtags.slice(0, 1), c.sig.hashtags.slice(0, 1), themeTag(c.s), c.s.hashtags, c.sig.hashtags, c.community.hashtags).slice(0, 4),
  );
}

/** How to join and that anyone can listen or talk: said once per caption, worded three ways. */
function join(c: Ctx, variant: number, scope = "join"): string {
  const open = openDoor(c, `instagram|${scope}`);
  switch (variant % 3) {
    case 0:
      return `Link Discord ada di bio (${c.shortUrl}). Masuk ke ${c.voice}. ${open}`;
    case 1:
      return `Mampir ke ${c.voice} di Discord FORA, link di bio atau ${c.shortUrl}. ${open}`;
    default:
      return `Langsung masuk ${c.voice} lewat ${c.shortUrl} (ada juga di bio). ${open}`;
  }
}

/** The same, for a talk that is running now. */
function joinLive(c: Ctx, variant: number): string {
  const open = openDoor(c, "instagram|live");
  switch (variant % 3) {
    case 0:
      return `Langsung masuk ${c.voice}, link Discord di bio (${c.shortUrl}). ${open}`;
    case 1:
      return `Buka ${c.shortUrl} (juga ada di bio), lalu ke ${c.voice}. ${open}`;
    default:
      return `Link di bio, atau ${c.shortUrl}. Masuknya ke ${c.voice}. ${open}`;
  }
}

/** One practical detail for the reminder, the same wording for a session every time. */
function practical(c: Ctx): string {
  return [
    "Buka Discord sepuluh menit lebih awal buat cek suara.",
    "Pakai headset kalau ada. Dari HP juga bisa.",
    `Kalau ada pertanyaan soal ${c.s.theme}, tulis dulu biar nggak lupa.`,
    "Mic boleh mati dulu sampai kamu siap ngomong.",
  ][shape(c, "reminder|practical", 4)]!;
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
  const next = `Sesi berikutnya kita umumkan di Discord FORA (link di bio atau ${c.shortUrl}). ${openDoor(c, "instagram|recap")}`;
  const prompt = recapPrompt(c, "instagram|recap");
  if (variant === 0) {
    return [
      `Rekap "${c.s.title}", ${c.dateShort}.`,
      `${crowd} Makasih ${c.thanks}.`,
      recapPoints(c, "numbered"),
      prompt,
      recapLinks(c),
      next,
    ];
  }
  return [
    `Ini yang tercatat dari "${c.s.title}" (${c.dateShort}).`,
    recapPoints(c, "dash"),
    recapLinks(c),
    `${crowd} Makasih ${c.thanks}, sampai ketemu lagi. ${prompt}`,
    next,
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
          ? [`Nanti jam ${c.time}, ${s.title}.`, `${c.Who}. ${practical(c)}`, join(c, 0)]
          : v === 1
            ? [s.title, `${c.dateShort}, nanti jam ${c.time}. ${practical(c)}`, `${c.Who}.`, join(c, 1)]
            : [`Jam ${c.time} nanti kita ngobrol soal ${s.theme}.`, `${s.title}, ${c.who}.`, `${practical(c)} ${join(c, 2)}`];
      break;
    case "live":
      blocks =
        v === 0
          ? [`${s.title} lagi jalan sekarang.`, what, joinLive(c, 0)]
          : v === 1
            ? [`Live sekarang, ${c.who}.`, s.title, joinLive(c, 1)]
            : [`Sudah mulai jam ${c.time}. ${s.title}`, what, joinLive(c, 2)];
      break;
    case "recap":
      blocks = recap(c, v % 2);
      break;
    case "cover": {
      const series = s.series ? `${cap(c.series)} bareng ${c.brand}, kali ini soal ${s.theme}.` : `Tema ${s.theme} bareng ${c.brand}.`;
      blocks =
        v === 0
          ? [series, sub, `Sesinya "${s.title}", ${when}.`, join(c, 0)]
          : [s.title, `${series} ${sub}`, `${when}. ${join(c, 1)}`];
      break;
    }
    case "sig-intro":
      blocks =
        v === 0
          ? [`${c.introName}. ${sig.tagline}`, `Sesi terdekat soal "${s.title}", ${c.dateShort} jam ${c.time}.`, join(c, 0)]
          : [sig.description, `Yang terdekat "${s.title}", ${c.dateShort} jam ${c.time}. ${join(c, 2)}`];
      break;
    case "speakers":
      blocks =
        v === 0
          ? [`Yang ngisi "${s.title}" (${c.dateShort}, ${c.time}).`, ...aboutPeople(c, true), join(c, 0)]
          : v === 1
            ? [`${s.title}, ${c.dateShort} jam ${c.time}.`, ...aboutPeople(c, false), join(c, 1)]
            : [...aboutPeople(c, true), `Sesinya "${s.title}", ${when}.`, join(c, 2)];
      break;
  }
  return [...blocks.filter(Boolean).map((b) => (b.endsWith("\n") ? b.trimEnd() : b)), tags(c)].join("\n\n");
}
