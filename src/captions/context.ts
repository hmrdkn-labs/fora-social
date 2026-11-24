import {
  discordUrl,
  displayUrl,
  formatDate,
  formatDateShort,
  formatTime,
  formatTimeRange,
  joinNames,
  speakerLine,
} from "../format.ts";
import type { Community, Session, Sig } from "../types.ts";

/** Everything the platform writers need, computed once. */
export interface Ctx {
  s: Session;
  sig: Sig;
  community: Community;
  url: string;
  shortUrl: string;
  date: string;
  dateShort: string;
  time: string;
  range: string;
  /** "voice channel name" */
  voice: string;
  /** "bersama A dan B, dipandu C" with handles. */
  who: string;
  /** Series name if any, else theme. */
  series: string;
  /** "SIG CN × FORA" or "FORA" for the general community. */
  brand: string;
  /** Speakers (or the host when there are none), with handles, joined naturally. */
  thanks: string;
  /** "SIG CN di FORA", or "FORA" for the general community. */
  introName: string;
  /** Who the SIG (or FORA) is for, a sentence. */
  forWho: string;
}

export function makeCtx(s: Session, sig: Sig, community: Community): Ctx {
  const url = discordUrl(s, community);
  const people = s.speakers.length > 0 ? s.speakers : [s.host];
  return {
    s,
    sig,
    community,
    url,
    shortUrl: displayUrl(url),
    date: formatDate(s),
    dateShort: formatDateShort(s),
    time: formatTime(s),
    range: formatTimeRange(s),
    voice: `voice channel ${s.voiceChannel}`,
    who: speakerLine(s, true),
    series: s.series ?? s.theme,
    brand: sig.id === "fora" ? community.name : `${sig.short} × ${community.name}`,
    introName: sig.id === "fora" ? community.name : `${sig.short} di ${community.name}`,
    forWho:
      sig.id === "fora"
        ? "Siapa pun yang suka ngobrol soal tech, dari mahasiswa sampai yang sudah bertahun-tahun bekerja."
        : `Yang baru mulai, yang lagi belajar, dan yang sudah bekerja di bidang ${sig.name}.`,
    thanks: joinNames(people.map((p) => (p.handle ? `${p.name} @${p.handle}` : p.name))),
  };
}

function norm(tag: string): string {
  return tag.replace(/^#/, "");
}

/** Deduplicated (case-insensitive) hashtags, in priority order. */
export function uniqueTags(...groups: (string[] | undefined)[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const group of groups) {
    for (const raw of group ?? []) {
      const t = norm(raw);
      if (t && !seen.has(t.toLowerCase())) {
        seen.add(t.toLowerCase());
        out.push(t);
      }
    }
  }
  return out;
}

export function themeTag(s: Session): string[] {
  return /^[A-Za-z0-9]+$/.test(s.theme) ? [s.theme] : [];
}

export const hashLine = (tags: string[]): string => tags.map((t) => `#${t}`).join(" ");
