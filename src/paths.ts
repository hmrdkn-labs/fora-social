import { fileURLToPath } from "node:url";

/** Repo root. Data files, templates, brand assets and outputs are all relative to it. */
export const REPO_ROOT = fileURLToPath(new URL("..", import.meta.url));
