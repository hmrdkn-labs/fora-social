// Shared contract between the loader, templates and captions.
// Change it only through the orchestrator (briefs/00-orchestrator.md).

export type PostType = "announce" | "reminder" | "live" | "recap" | "cover" | "sig-intro" | "speakers";

export const POST_TYPES: readonly PostType[] = ["announce", "reminder", "live", "recap", "cover", "sig-intro", "speakers"];

export type FormatId = "ig-feed" | "ig-carousel" | "ig-story" | "x" | "li-link" | "li-doc";

export type Platform = "instagram" | "x" | "linkedin";

export interface Format {
  id: FormatId;
  platform: Platform;
  width: number;
  height: number;
  /** true: the template returns several slides/pages; false: exactly one image. */
  multi: boolean;
}

export const FORMATS: readonly Format[] = [
  { id: "ig-feed", platform: "instagram", width: 1080, height: 1350, multi: false },
  { id: "ig-carousel", platform: "instagram", width: 1080, height: 1350, multi: true },
  { id: "ig-story", platform: "instagram", width: 1080, height: 1920, multi: false },
  { id: "x", platform: "x", width: 1600, height: 900, multi: false },
  { id: "li-link", platform: "linkedin", width: 1200, height: 627, multi: false },
  { id: "li-doc", platform: "linkedin", width: 1080, height: 1350, multi: true },
];

export interface Person {
  name: string;
  role?: string;
  /** Social handle without "@", shown as "@handle". */
  handle?: string;
  /**
   * Repo-relative path of a portrait (JPEG or PNG, square, at least 512 px). Without it,
   * templates show the neutral silhouette from brand/people/.
   */
  photo?: string;
  /** One plain line on what they will share or ask in this session. Speakers posts lead with it. */
  about?: string;
}

export interface RecapPoint {
  title: string;
  body?: string;
}

export interface Link {
  label: string;
  url: string;
}

/** One session, from a YAML file. `id` is the file name without extension. */
export interface Session {
  id: string;
  /** Sig.id, or "fora" for a general FORA session. */
  sig: string;
  /** Series or theme name shared by several sessions, e.g. "Cloud Native 101". */
  series?: string;
  /** Theme of this session, e.g. "Kubernetes". */
  theme: string;
  title: string;
  subtitle?: string;
  /** "YYYY-MM-DD", in WIB (Asia/Jakarta, UTC+7). */
  date: string;
  /** "HH:MM", 24-hour, WIB. */
  time: string;
  /** Default 90. */
  durationMinutes: number;
  /** Discord voice channel name, e.g. "sig-cn-voice". */
  voiceChannel: string;
  host: Person;
  /** May be empty: an open discussion led by the host. */
  speakers: Person[];
  /** Short description, at most 280 characters. */
  description: string;
  /**
   * Optional, one or two sentences in the host's own words (why this topic, what went wrong
   * for them once, what they want to hear from others). Captions lead with it when present.
   */
  note?: string;
  /** What will be discussed, 0 to 6 short items. */
  topics: string[];
  /** Overrides Community.discord. */
  discord?: string;
  /** Filled in after the talk; recap posts are rendered only when present. */
  recap?: {
    points: RecapPoint[];
    links?: Link[];
    attendees?: number;
  };
  /** Extra hashtags without "#". */
  hashtags?: string[];
}

/** A SIG, from sigs/<id>.yaml. The general community is the pseudo-SIG "fora". */
export interface Sig {
  id: string;
  /** "SIG CN" */
  short: string;
  /** "CN" */
  code: string;
  /** "Cloud Native" */
  name: string;
  /** Accent colour, "#RRGGBB". */
  color: string;
  /** Text colour readable on `color`. */
  colorInk: string;
  /** Repo-relative path of the lockup SVG. */
  lockup: string;
  /** One line, Indonesian. */
  tagline: string;
  /** Two to four sentences, Indonesian. */
  description: string;
  /** Without "#". */
  hashtags: string[];
}

/** From community.yaml. */
export interface Community {
  /** "FORA" */
  name: string;
  /** "Forum Rangkai" */
  fullName: string;
  /** Default Discord invite URL. */
  discord: string;
  handles: { instagram?: string; x?: string; linkedin?: string };
  /** Without "#". */
  hashtags: string[];
  /** Repo-relative path of the FORA mark SVG. */
  logo: string;
}

export interface Captions {
  instagram: string;
  /** One post, or a thread: each item is one post within X's 280-character limit. */
  x: string[];
  linkedin: string;
}

export interface TemplateContext {
  session: Session;
  sig: Sig;
  community: Community;
  format: Format;
  /** Absolute file:// URL for a repo-relative path (logos, fonts). */
  asset(path: string): string;
}

/** Returns the HTML body of each image: exactly one unless `format.multi`. */
export type Template = (ctx: TemplateContext) => string[];

export type CaptionBuilder = (session: Session, sig: Sig, community: Community, type: PostType) => Captions;
