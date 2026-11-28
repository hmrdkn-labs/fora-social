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
import type { Community, Person, Session, Sig } from "../types.ts";

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
  /** The host's own words if the session has a note, else the description. Only the announce uses it. */
  lead: string;
  /** The first sentence of `lead`: a short hook for X. */
  hook: string;
  /** `who`, capitalised, as a sentence without the full stop. */
  Who: string;
}

/** The first sentence of `text`, or all of it. */
export function firstSentence(text: string): string {
  return text.match(/^.*?[.?!](?=\s|$)/s)?.[0] ?? text;
}

/** `text` with a full stop at the end unless it already has closing punctuation. */
export const sentence = (text: string): string => (/[.?!]$/.test(text) ? text : `${text}.`);

export const cap = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

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
    lead: s.note ?? s.description,
    hook: firstSentence(s.note ?? s.description),
    Who: cap(speakerLine(s, true)),
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

/** FNV-1a, so the choice below never changes between runs or machines. */
function hash(text: string): number {
  let h = 0x811c9dc5;
  for (const ch of text) h = Math.imul(h ^ ch.codePointAt(0)!, 0x01000193);
  return h >>> 0;
}

const OPEN = [
  ["Dengerin aja boleh, mic juga boleh.", "Mau dengerin aja boleh, mau nyalain mic juga boleh.", "Dengerin aja nggak apa-apa, ngomong juga silakan."],
  ["Boleh dengarkan saja, boleh juga ikut bicara.", "Dengarkan saja boleh, ikut bicara juga boleh.", "Mau dengarkan saja atau ikut bicara, dua-duanya boleh."],
] as const;

/** That anyone can listen or talk, in one of three wordings picked like `shape`. `formal` is the LinkedIn register. */
export function openDoor(c: Ctx, scope: string, formal = false): string {
  return OPEN[formal ? 1 : 0][shape(c, `open|${scope}`, 3)];
}

/**
 * Which of `count` shapes a caption takes: stable for a session, platform and post type, so a
 * re-render never churns, and different between sessions so a feed does not read as one template.
 */
export function shape(c: Ctx, scope: string, count: number): number {
  return hash(`${c.s.id}|${scope}`) % count;
}

/** The reminder's one practical detail, two wordings; the poster and every caption of a session agree on which. */
export const PRACTICAL = ["Buka Discord sepuluh menit lebih awal buat cek suara.", "Pakai headset kalau ada, dari HP juga bisa."] as const;

export const practicalIndex = (sessionId: string): number => hash(`${sessionId}|practical`) % PRACTICAL.length;

/** The everyday problem as a sentence; empty for a session without one. */
export const problemLine = (c: Ctx): string => (c.s.problem ? sentence(c.s.problem) : "");

/** Everyone who talks, speakers first, then the host. */
export function everyone(c: Ctx): Person[] {
  return [...c.s.speakers, c.s.host];
}

/**
 * One paragraph about a person: name, handle and role, then what they will share or ask when the
 * session file says so. The host of a session with speakers is named as the host.
 */
export function aboutPerson(c: Ctx, p: Person, withHandle: boolean): string {
  const host = p === c.s.host && c.s.speakers.length > 0 ? "host" : "";
  const name = [`${p.name}${withHandle && p.handle ? ` @${p.handle}` : ""}`, p.role, host].filter(Boolean).join(", ");
  return p.about ? `${name}. ${p.about}` : `${name}.`;
}

/** Who talks, with a plain sentence for a session that has no guest. */
export function aboutPeople(c: Ctx, withHandle: boolean): string[] {
  const people = everyone(c).map((p) => aboutPerson(c, p, withHandle));
  return c.s.speakers.length === 0 ? [...people, "Tanpa pembicara tamu, jadi yang cerita kita semua."] : people;
}

/** Sentences for the schedule: "Sabtu 12 Desember" without the year. */
export function dayOnly(c: Ctx): string {
  return c.date.replace(",", "").replace(/ \d{4}$/, "");
}

/** Where the nearest session is, for a sentence: "Sab, 12 Des jam 19.30 WIB", or the open day plus the time. */
export function nextAt(c: Ctx, withRange = false): string {
  if (c.s.date === undefined) return `${c.dateShort}, jam ${c.time}`;
  return withRange ? `${c.dateShort}, ${c.range}` : `${c.dateShort} jam ${c.time}`;
}

/** A person's name without a parenthetical: "Dika (Azzam Muhammadi Rizqun Karima)" is "Dika". */
export const shortName = (p: Person): string => p.name.replace(/\s*\(.*?\)/g, "");

/** One sentence per person active in the SIG: name, then what they are doing ("Hamzah lagi persiapan …"). */
export function sigCrew(c: Ctx, withHandle: boolean): string[] {
  return (c.sig.people ?? []).map((p) => {
    const name = `${p.name}${withHandle && p.handle ? ` @${p.handle}` : ""}`;
    return p.about ? sentence(`${name} ${p.about}`) : sentence(name);
  });
}

/** The SIG's agenda items, one per line of a list. */
export const sigAgenda = (c: Ctx): string[] => c.sig.agenda ?? [];
