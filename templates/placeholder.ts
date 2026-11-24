import { discordUrl, displayUrl, formatDate, formatTime } from "../src/format.ts";
import type { TemplateContext } from "../src/types.ts";
import { escapeHtml } from "./html.ts";

/** Plain text slides. They only prove the pipeline; brief 04 replaces every template. */
export function placeholder(ctx: TemplateContext, label: string, headline: string): string[] {
  const { session, sig, community, format } = ctx;
  const count = format.multi ? 3 : 1;
  return Array.from({ length: count }, (_, index) => {
    const counter = count > 1 ? ` · ${index + 1}/${count}` : "";
    return `<main class="card" data-fit>
  <p class="kicker">${escapeHtml(sig.short)} · ${escapeHtml(label)}${counter}</p>
  <h1 class="title">${escapeHtml(headline)}</h1>
  <p class="meta">${escapeHtml(formatDate(session))} · ${escapeHtml(formatTime(session))}</p>
  <p class="meta">${escapeHtml(session.voiceChannel)} · ${escapeHtml(displayUrl(discordUrl(session, community)))}</p>
</main>`;
  });
}
