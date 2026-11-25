const ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * Escapes text for HTML content and attribute values. Templates escape every data field, so this
 * is also where a time keeps its zone: "20.00 WIB" never breaks before "WIB" on an image.
 */
export function escapeHtml(text: string): string {
  return text.replace(/(\d\d\.\d\d) (?=WIB\b)/g, "$1\u00a0").replace(/[&<>"']/g, (char) => ENTITIES[char] ?? char);
}
