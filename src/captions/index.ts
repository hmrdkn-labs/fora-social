import type { CaptionBuilder } from "../types.ts";
import { makeCtx } from "./context.ts";
import { instagram } from "./instagram.ts";
import { linkedin } from "./linkedin.ts";
import { x } from "./x.ts";

export { xLength } from "./xlength.ts";

export const buildCaptions: CaptionBuilder = (session, sig, community, type) => {
  const c = makeCtx(session, sig, community);
  return { instagram: instagram(c, type), x: x(c, type), linkedin: linkedin(c, type) };
};
