import type { Template } from "../src/types.ts";
import { placeholder } from "./placeholder.ts";

const reminder: Template = (ctx) => placeholder(ctx, "Reminder", `Hari ini: ${ctx.session.title}`);

export default reminder;
