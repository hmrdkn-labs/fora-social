// Zod schemas for the YAML data files. Each one mirrors a contract type in src/types.ts;
// the assertions at the bottom make `tsc` fail if the two drift apart in either direction.
import { z } from "zod";
import type { Community, Session, Sig } from "./types.ts";

export const ID = /^[a-z0-9][a-z0-9-]*$/;

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;
const COLOR = /^#[0-9a-fA-F]{6}$/;
const HANDLE = /^[^@\s]+$/;
const HASHTAG = /^[^#\s]+$/;

const nonEmpty = z.string().min(1, "must not be empty");
const handle = z.string().regex(HANDLE, { error: (i) => `must be a handle without "@" or spaces, got ${String(i.input)}` });
const hashtag = z.string().regex(HASHTAG, { error: (i) => `must be a hashtag without "#" or spaces, got ${String(i.input)}` });
const colour = z.string().regex(COLOR, { error: (i) => `must be a #RRGGBB colour, got ${String(i.input)}` });
const httpUrl = z.url({ error: (i) => `must be a URL, got ${String(i.input)}` });

function isRealDate(value: string): boolean {
  if (!DATE.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number) as [number, number, number];
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

const PersonSchema = z.strictObject({
  name: nonEmpty,
  role: z.string().optional(),
  handle: handle.optional(),
  photo: nonEmpty.optional(),
  about: nonEmpty.optional(),
});

const RecapSchema = z.strictObject({
  points: z.array(z.strictObject({ title: nonEmpty, body: z.string().optional() })).min(1, "must have at least one point"),
  links: z.array(z.strictObject({ label: nonEmpty, url: httpUrl })).optional(),
  question: nonEmpty.optional(),
  attendees: z.number().int("must be a whole number").nonnegative("must not be negative").optional(),
});

export const SessionSchema = z.strictObject({
  id: nonEmpty,
  sig: z.string().regex(ID, { error: (i) => `must name a SIG such as sig-cn, got ${String(i.input)}` }),
  series: nonEmpty.optional(),
  theme: nonEmpty,
  title: nonEmpty,
  subtitle: z.string().optional(),
  date: z.string().refine(isRealDate, { error: (i) => `must be a real date as YYYY-MM-DD, got ${String(i.input)}` }),
  time: z.string().regex(TIME, { error: (i) => `must be HH:MM, got ${String(i.input)}` }),
  durationMinutes: z.number().int("must be a whole number of minutes").positive("must be more than zero").default(90),
  voiceChannel: nonEmpty,
  host: PersonSchema,
  speakers: z.array(PersonSchema).default([]),
  description: z.string().refine((s) => Array.from(s).length <= 280, {
    error: (i) => `must be at most 280 characters, got ${Array.from(String(i.input)).length}`,
  }),
  note: nonEmpty.optional(),
  topics: z.array(nonEmpty).max(6, {
    error: (i) => `must have at most 6 items, got ${Array.isArray(i.input) ? i.input.length : "?"}`,
  }).default([]),
  discord: httpUrl.optional(),
  recap: RecapSchema.optional(),
  hashtags: z.array(hashtag).optional(),
});

/** Session files may omit `id` (it is the file name); if present it must match. */
export const SessionFileSchema = SessionSchema.omit({ id: true }).extend({ id: z.string().optional() });

export const SigSchema = z.strictObject({
  id: z.string().regex(ID),
  short: nonEmpty,
  code: nonEmpty,
  name: nonEmpty,
  color: colour,
  colorInk: colour,
  lockup: nonEmpty,
  tagline: nonEmpty,
  description: nonEmpty,
  hashtags: z.array(hashtag),
});

/** Sig files may omit `id` (it is the file name); if present it must match. */
export const SigFileSchema = SigSchema.omit({ id: true }).extend({ id: z.string().optional() });

export const CommunitySchema = z.strictObject({
  name: nonEmpty,
  fullName: nonEmpty,
  discord: httpUrl,
  handles: z
    .strictObject({ instagram: handle.optional(), x: handle.optional(), linkedin: handle.optional() })
    .default({}),
  hashtags: z.array(hashtag),
  logo: nonEmpty,
});

type Assert<T extends true> = T;
type MutuallyAssignable<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

export type SessionMatchesContract = Assert<MutuallyAssignable<z.infer<typeof SessionSchema>, Session>>;
export type SigMatchesContract = Assert<MutuallyAssignable<z.infer<typeof SigSchema>, Sig>>;
export type CommunityMatchesContract = Assert<MutuallyAssignable<z.infer<typeof CommunitySchema>, Community>>;
