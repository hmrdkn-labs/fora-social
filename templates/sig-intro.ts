import type { Template } from "../src/types.ts";
import { placeholder } from "./placeholder.ts";

const sigIntro: Template = (ctx) => placeholder(ctx, "SIG intro", ctx.sig.name);

export default sigIntro;
