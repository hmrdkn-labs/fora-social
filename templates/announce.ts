import type { Template } from "../src/types.ts";
import { placeholder } from "./placeholder.ts";

const announce: Template = (ctx) => placeholder(ctx, "Announce", ctx.session.title);

export default announce;
