import type { PostType } from "../types.ts";
import { aboutPeople, cap, type Ctx, firstSentence, hashLine, openDoor, sentence, shape, themeTag, uniqueTags } from "./context.ts";

function tags(c: Ctx): string {
  return hashLine(uniqueTags(themeTag(c.s), c.sig.hashtags.slice(1), c.sig.hashtags.slice(0, 1), c.s.hashtags, c.community.hashtags).slice(0, 3));
}

/** Invite, channel, and that anyone can listen or talk: once per caption, tidy register. */
function join(c: Ctx, variant: number): string {
  if (variant % 2 === 0) {
    return `Kita ngobrol di ${c.voice} Discord FORA. ${openDoor(c, "linkedin|join", true)} Undangan: ${c.url}`;
  }
  return `Gabung lewat ${c.url}, lalu masuk ke ${c.voice}. ${openDoor(c, "linkedin|join", true)}`;
}

/** The same, for a talk that is running now. */
function joinLive(c: Ctx, variant: number): string {
  if (variant % 2 === 0) {
    return `Langsung masuk ke ${c.voice} lewat ${c.url}. ${openDoor(c, "linkedin|live", true)}`;
  }
  return `Kita ada di ${c.voice}, undangannya ${c.url}. ${openDoor(c, "linkedin|live", true)}`;
}

/** One practical detail for the reminder. */
function practical(c: Ctx): string {
  return [
    "Buka Discord sepuluh menit lebih awal untuk cek suara.",
    "Headset membantu, dan dari ponsel juga bisa.",
  ][shape(c, "reminder|practical", 2)]!;
}

const bullets = (items: string[]): string => items.map((t) => `• ${t}`).join("\n");

function recap(c: Ctx, variant: number): string[] {
  const r = c.s.recap!;
  const points = r.points.map((p, i) => `${i + 1}. ${p.title}${p.body ? `. ${p.body}` : ""}`).join("\n");
  const links = (r.links ?? []).map((l) => `${l.label}: ${l.url}`).join("\n");
  const crowd = r.attendees ? `${r.attendees} orang ikut ngobrol di voice channel.` : "Terima kasih untuk semua yang sudah ikut ngobrol.";
  const next = `Sesi berikutnya akan kita umumkan di Discord FORA, di ${c.voice}. ${openDoor(c, "linkedin|recap", true)} ${c.url}`;
  const prompt = r.question ?? "";
  if (variant === 0) {
    return [`Rekap "${c.s.title}" (${c.dateShort}).`, `Terima kasih ${c.thanks}. ${crowd}`, points, prompt, links, next];
  }
  return [`${crowd} Terima kasih ${c.thanks}.`, `Catatan dari "${c.s.title}":`, points, links, prompt, next];
}

export function linkedin(c: Ctx, type: PostType): string {
  const { s, sig } = c;
  const v = shape(c, `linkedin|${type}`, 3);
  const when = `${c.date}, ${c.range}`;
  const what = firstSentence(s.description);
  const sub = sentence(s.subtitle ?? what);
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
          ? [`Nanti jam ${c.time}\n${s.title}`, `${cap(c.who)}. ${practical(c)}`, join(c, 0)]
          : v === 1
            ? [`Hari ini jam ${c.time} kita ngobrol soal ${s.theme}.`, `${s.title}, ${c.date}. ${cap(c.who)}.`, `${practical(c)} ${join(c, 1)}`]
            : [`${s.title}, nanti jam ${c.time}`, practical(c), `${cap(c.who)}.`, join(c, 0)];
      break;
    case "live":
      blocks =
        v === 0
          ? [`${s.title} sedang berjalan.`, `${what} ${cap(c.who)}.`, joinLive(c, 0)]
          : v === 1
            ? [`Kita sudah mulai (${c.time}).`, `${s.title}. ${what}`, joinLive(c, 1)]
            : [`Sedang live sekarang.`, `${s.title}, ${c.who}. ${sub}`, joinLive(c, 1)];
      break;
    case "recap":
      blocks = recap(c, v % 2);
      break;
    case "cover": {
      const series = s.series ? `${cap(c.series)} bareng ${c.brand}, kali ini soal ${s.theme}.` : `Tema ${s.theme} bareng ${c.brand}.`;
      blocks =
        v === 0
          ? [series, sub, `Sesinya "${s.title}", ${when}.`, join(c, 0)]
          : [sub, `${series} Sesinya "${s.title}", ${c.dateShort}, ${c.range}.`, join(c, 1)];
      break;
    }
    case "sig-intro":
      blocks =
        v === 0
          ? [`${c.introName}. ${sig.tagline}`, `Sesi terdekat soal "${s.title}", ${c.dateShort}, ${c.range}.`, join(c, 0)]
          : [sig.description, `Sesi terdekat soal "${s.title}", ${c.date}, ${c.range}.`, join(c, 1)];
      break;
    case "speakers":
      blocks =
        v % 2 === 0
          ? [`${s.title} (${c.brand})`, ...aboutPeople(c, true), `${when}.`, join(c, 0)]
          : [`Sesinya "${s.title}", ${when}.`, ...aboutPeople(c, true), join(c, 1)];
      break;
  }
  return [...blocks.filter(Boolean), tags(c)].join("\n\n");
}
