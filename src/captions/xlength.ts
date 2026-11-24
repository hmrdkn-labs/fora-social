const URL_RE = /https?:\/\/\S+|\b[a-z0-9-]+\.(?:gg|com|io|id|org|net|dev)\b(?:\/\S*)?/gi;
const URL_WEIGHT = 23;

function weight(cp: number): number {
  // Weight 1: Latin ranges and general punctuation; everything else (CJK, emoji) is 2.
  if (cp <= 4351 || (cp >= 8192 && cp <= 8205) || (cp >= 8208 && cp <= 8223) || (cp >= 8242 && cp <= 8247)) return 1;
  return 2;
}

/** X's weighted length: URLs count 23, emoji and CJK 2, other characters 1. */
export function xLength(text: string): number {
  let total = 0;
  const rest = text.normalize("NFC").replace(URL_RE, () => {
    total += URL_WEIGHT;
    return "";
  });
  for (const ch of rest) total += weight(ch.codePointAt(0)!);
  return total;
}
