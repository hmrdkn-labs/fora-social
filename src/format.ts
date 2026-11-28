import type { Community, Person, Session } from "./types.ts";

const TZ = "Asia/Jakarta";

const longDate = new Intl.DateTimeFormat("id-ID", {
  timeZone: TZ,
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const shortDate = new Intl.DateTimeFormat("id-ID", {
  timeZone: TZ,
  weekday: "short",
  day: "numeric",
  month: "short",
});
const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: TZ,
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** A session with `when` instead of `date`: the day isn't fixed, so only the start time is known. */
export function isUndated(s: Session): boolean {
  return s.date === undefined;
}

export function startsAt(s: Session): Date {
  if (s.date === undefined) throw new Error(`session ${s.id} has no date, only "when"`);
  return new Date(`${s.date}T${s.time}:00+07:00`);
}

export function endsAt(s: Session): Date {
  return new Date(startsAt(s).getTime() + s.durationMinutes * 60_000);
}

/** "Sabtu, 6 Desember 2026", or `when` ("Minggu depan, harinya menyusul") without a date. */
export function formatDate(s: Session): string {
  return s.date === undefined ? (s.when ?? "") : longDate.format(startsAt(s));
}

/** "Sab, 6 Des", or `when` without a date. */
export function formatDateShort(s: Session): string {
  return s.date === undefined ? (s.when ?? "") : shortDate.format(startsAt(s));
}

function clockText(d: Date): string {
  return clock.format(d).replace(":", ".");
}

/** "19.30 WIB" */
export function formatTime(s: Session): string {
  return `${s.date === undefined ? s.time.replace(":", ".") : clockText(startsAt(s))} WIB`;
}

/** "19.30–21.00 WIB"; may end after midnight ("22.00–00.30 WIB"). Without a date, only the start. */
export function formatTimeRange(s: Session): string {
  if (s.date === undefined) return formatTime(s);
  return `${clockText(startsAt(s))}–${clockText(endsAt(s))} WIB`;
}

export function discordUrl(s: Session, c: Community): string {
  return s.discord ?? c.discord;
}

/** "https://discord.gg/abc" → "discord.gg/abc" */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/** "@name", or "" when the person has no handle. */
export function handle(p: Person): string {
  return p.handle ? `@${p.handle}` : "";
}

export function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} dan ${names[names.length - 1]}`;
}

/**
 * "bersama A dan B, dipandu C" or "ngobrol bareng C" when there are no speakers.
 * With `withHandles`, each person is followed by their handle when they have one.
 */
export function speakerLine(s: Session, withHandles = false): string {
  const name = (p: Person) => (withHandles && p.handle ? `${p.name} ${handle(p)}` : p.name);
  if (s.speakers.length === 0) return `ngobrol bareng ${name(s.host)}`;
  return `bersama ${joinNames(s.speakers.map(name))}, dipandu ${name(s.host)}`;
}
