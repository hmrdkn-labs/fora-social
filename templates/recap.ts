import type { Template } from "../src/types.ts";
import { placeholder } from "./placeholder.ts";

const recap: Template = (ctx) => placeholder(ctx, "Recap", ctx.session.title);

export default recap;
