import type { PostType, Template } from "../src/types.ts";
import announce from "./announce.ts";
import cover from "./cover.ts";
import recap from "./recap.ts";
import reminder from "./reminder.ts";
import sigIntro from "./sig-intro.ts";

export const TEMPLATES: Record<PostType, Template> = {
  announce,
  reminder,
  recap,
  cover,
  "sig-intro": sigIntro,
};
