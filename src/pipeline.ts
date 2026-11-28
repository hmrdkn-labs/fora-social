// Renders sessions end to end: load and validate each file, render every post type in every
// format, and write the captions next to the images. A failure is recorded and the run goes on.
import { existsSync } from "node:fs";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { TEMPLATES } from "../templates/index.ts";
import { buildCaptions } from "./captions/index.ts";
import { loadSession, loadSig } from "./load.ts";
import { captionsMarkdown } from "./markdown.ts";
import { REPO_ROOT } from "./paths.ts";
import { Renderer } from "./render.ts";
import {
  type Community,
  FORMATS,
  type Format,
  POST_TYPES,
  type PostType,
  type Session,
  type Sig,
} from "./types.ts";

export interface Output {
  postType: PostType;
  format: Format;
  /** Absolute path of a PNG, or of the li-doc PDF. */
  path: string;
}

export interface SessionRun {
  session: Session;
  sig: Sig;
  /** Only the outputs that were written; a failed image is missing here and in `failures`. */
  outputs: Output[];
}

export interface RunOptions {
  community: Community;
  sigsDir: string;
  /** Output root; each session goes to `<outRoot>/<session id>/`. */
  outRoot: string;
  log: (line: string) => void;
}

export interface RunResult {
  runs: SessionRun[];
  failures: string[];
}

/** Post types that need the day: a session with `when` instead of `date` gets none of them. */
const NEEDS_DATE: readonly PostType[] = ["announce", "reminder", "live", "recap"];

/** Why a post type is not made for `session`, or undefined when it is. */
export function skipReason(session: Session, type: PostType): string | undefined {
  if (session.date === undefined && NEEDS_DATE.includes(type)) return `${type}: skipped, the session has no date yet (set date instead of when)`;
  if (type === "recap" && session.recap === undefined) return "recap: skipped, the session has no recap section";
  return undefined;
}

/** Recap posts exist only for sessions that have a recap; day-bound posts only for sessions with a date. */
export function postTypesFor(session: Session): PostType[] {
  return POST_TYPES.filter((type) => skipReason(session, type) === undefined);
}

export async function runSessions(files: readonly string[], options: RunOptions): Promise<RunResult> {
  const runs: SessionRun[] = [];
  const failures: string[] = [];
  if (files.length === 0) return { runs, failures };
  if (!existsSync(join(REPO_ROOT, "brand", "tokens.css"))) {
    throw new Error("brand/tokens.css is missing; the templates need the brand tokens");
  }

  const renderer = await Renderer.open();
  const sigs = new Map<string, Sig>();
  try {
    for (const file of files) {
      let session: Session;
      let sig: Sig;
      try {
        session = loadSession(file, options.sigsDir);
        sig = sigs.get(session.sig) ?? loadSig(join(options.sigsDir, `${session.sig}.yaml`));
        sigs.set(session.sig, sig);
      } catch (error) {
        failures.push(errorMessage(error));
        continue;
      }

      const run: SessionRun = { session, sig, outputs: [] };
      const outDir = join(options.outRoot, session.id);
      for (const type of POST_TYPES) {
        const reason = skipReason(session, type);
        if (reason !== undefined) options.log(`${session.id} · ${reason}`);
      }
      for (const postType of postTypesFor(session)) {
        try {
          await writeCaptions(outDir, session, sig, options.community, postType);
        } catch (error) {
          failures.push(errorMessage(error));
        }
        for (const format of FORMATS) {
          const formatDir = join(outDir, format.id);
          const job = { session, sig, community: options.community, postType, format, template: TEMPLATES[postType] };
          try {
            for (const path of await renderer.render(job, formatDir)) {
              run.outputs.push({ postType, format, path });
              options.log(`wrote ${relative(REPO_ROOT, path)}`);
            }
          } catch (error) {
            failures.push(errorMessage(error));
            await clearOutputs(formatDir, postType);
          }
        }
      }
      runs.push(run);
    }
  } finally {
    await renderer.close();
  }
  return { runs, failures };
}

async function writeCaptions(
  outDir: string,
  session: Session,
  sig: Sig,
  community: Community,
  postType: PostType,
): Promise<void> {
  const captions = buildCaptions(session, sig, community, postType);
  const dir = join(outDir, "captions");
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, `${postType}.md`), captionsMarkdown(`${session.title} · ${postType}`, captions));
}

/** Removes images and PDFs of one post type left by an earlier run, so a failed job never looks fine. */
async function clearOutputs(dir: string, postType: PostType): Promise<void> {
  const names = await readdir(dir).catch(() => [] as string[]);
  const pattern = new RegExp(`^${postType}(-\\d+)?\\.(png|pdf)$`);
  await Promise.all(names.filter((name) => pattern.test(name)).map((name) => rm(join(dir, name))));
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
