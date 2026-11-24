// The FORA voice, as a linter. docs/voice.md explains each rule; the tests run this over every
// caption, every rendered template and every copy field in sigs/ and examples/sessions/.
//
// A hit is a reason to rewrite the sentence, not to reword around the regex. When a hit is
// legitimate, add the exact text to ALLOW with the reason.

export type Surface = "instagram" | "x" | "linkedin" | "image" | "data";

export interface Hit {
  rule: string;
  match: string;
}

/** Hashtags per platform, from docs/voice.md: IG 2 to 4, X 0 to 1, LinkedIn 2 to 3. */
export const HASHTAGS: Partial<Record<Surface, { min: number; max: number }>> = {
  instagram: { min: 2, max: 4 },
  x: { min: 0, max: 1 },
  linkedin: { min: 2, max: 3 },
};

/** Text that would hit a rule but is right. Each entry says why. */
export const ALLOW: readonly { text: string; reason: string }[] = [];

const BANNED_WORDS = [
  "menyelami",
  "merangkul",
  "memberdayakan",
  "mengeksplorasi",
  "menavigasi",
  "permadani",
  "lanskap",
  "wawasan",
  "krusial",
  "esensial",
  "signifikan",
  "holistik",
  "komprehensif",
  "sinergi",
  "optimal",
  "inovatif",
  "transformasi",
  "berkelanjutan",
  "tentunya",
  "pastinya",
  "merupakan",
  "delve",
  "leverage",
  "seamless",
  "robust",
  "game-changer",
  "unlock",
  "empower",
  "elevate",
  "journey",
  "landscape",
  "deep dive",
];

const BANNED_PHRASES = [
  "di era digital",
  "di dunia yang",
  "tak hanya",
  "tidak hanya",
  "bukan sekadar",
  "bukan webinar",
  "penting untuk diingat",
  "perlu diingat",
  "mari kita",
  "yuk kita",
  "seru dan bermanfaat",
  "jangan lewatkan",
  "kesempatan emas",
  "siap untuk",
  "dan seterusnya",
  "dan lain sebagainya",
  "hadir untuk",
  "menjadi wadah",
  "sebagai kesimpulan",
  "secara keseluruhan",
  // Translationese and reassurance stacking (docs/voice.md, rules 5 and 6).
  "sumber kebenaran",
  "simpan postingan",
  "ketemu di voice channel",
  "poin-poin yang",
  "tidak perlu daftar",
  "nggak perlu daftar",
  "pemula sangat boleh",
  "terlalu dasar",
];

const escape = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const WORD_RULES: [string, RegExp][] = [
  ...BANNED_WORDS.map((w): [string, RegExp] => [`ban:${w}`, new RegExp(`\\b${escape(w)}\\b`, "giu")]),
  ...BANNED_PHRASES.map((p): [string, RegExp] => [`ban:${p}`, new RegExp(escape(p).replace(/ /g, "\\s+"), "giu")]),
  // "bawa pulang" also as "membawa pulang", "dibawa pulang".
  ["ban:bawa pulang", /bawa\s+pulang/giu],
];

const PEOPLE = /\b(?:yang|mahasiswa|pemula|baru|praktisi|senior|junior|berpengalaman|pengalaman|orang|ahli)\b/iu;

const LABEL_COLON =
  /^[ \t]*(?:Formatnya|Sesi(?: terdekat| berikutnya)?|Untuk siapa|Cara ikut|Yang (?:akan )?kita bahas|Hari ini kita bahas|Yang kamu dapat|Cocok untuk)[ \t]*[:?]/gimu;

const pictographs = (text: string): number => (text.match(/\p{Extended_Pictographic}/gu) ?? []).length;
const hashtagsOf = (text: string): string[] => text.match(/(?:^|\s)#[\p{L}\p{N}_]+/gu) ?? [];

function stripAllowed(text: string): string {
  return ALLOW.reduce((t, a) => t.split(a.text).join(" "), text);
}

/** Every style problem in `text`; an empty list means it passes. */
export function lint(raw: string, surface: Surface): Hit[] {
  const text = stripAllowed(raw);
  const hits: Hit[] = [];
  const add = (rule: string, match: string) => hits.push({ rule, match: match.trim() });

  for (const [rule, re] of WORD_RULES) for (const m of text.matchAll(re)) add(rule, m[0]);

  for (const m of text.matchAll(/\bbukan\b[^.\n]{0,60}?\b(?:tapi|tetapi|melainkan)\b/giu)) add("negative parallelism", m[0]);
  for (const m of text.matchAll(/[,;]\s+bukan\b[^.\n]{0,40}/giu)) add("negative parallelism", m[0]);
  for (const m of text.matchAll(/\bdari\b[^.:\n]{0,60}?\bsampai\b[^.:\n]{0,30}/giu)) {
    if (PEOPLE.test(m[0])) add("false range", m[0]);
  }
  for (const m of text.matchAll(LABEL_COLON)) add("label colon", m[0]);
  for (const m of text.matchAll(/—/gu)) add("em dash", m[0]);
  for (const m of text.matchAll(/[“”‘’]/gu)) add("curly quote", m[0]);
  for (const m of text.matchAll(/^[ \t]*(?:[•\-*][ \t]*)?\p{Extended_Pictographic}/gmu)) add("emoji opens a line", m[0]);
  if (pictographs(text) > 1) add("more than one emoji", String(pictographs(text)));
  if ((text.match(/siapa\s+pun/giu) ?? []).length > 1) add("siapa pun more than once", "siapa pun");
  if ((text.match(/ekosistem/giu) ?? []).length > 1) add("ekosistem more than once", "ekosistem");

  const cap = HASHTAGS[surface];
  if (cap) {
    const n = hashtagsOf(text).length;
    if (n > cap.max || n < cap.min) add(`hashtags ${cap.min}-${cap.max}`, `${n} hashtags`);
  }
  return hits;
}

export function format(hits: Hit[]): string {
  return hits.map((h) => `${h.rule}: "${h.match}"`).join("; ");
}
