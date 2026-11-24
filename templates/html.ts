const ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escapes text for HTML content and attribute values. Templates escape every data field. */
export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (char) => ENTITIES[char] ?? char);
}
