import type { Template } from "../src/types.ts";
import { placeholder } from "./placeholder.ts";

const cover: Template = (ctx) => placeholder(ctx, "Cover", ctx.session.theme);

export default cover;
