// Command line: `pnpm render <session.yaml>...` renders sessions into out/;
// `pnpm examples` renders examples/sessions/*.yaml into examples/ and rebuilds its gallery.
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { writeGallery } from "./gallery.ts";
import { loadCommunity } from "./load.ts";
import { REPO_ROOT } from "./paths.ts";
import { type RunOptions, runSessions } from "./pipeline.ts";
import type { Community } from "./types.ts";

const USAGE = `usage:
  pnpm render <session.yaml>...   render sessions into out/
  pnpm examples                   render examples/sessions/*.yaml into examples/ and rebuild its gallery`;

export async function main(argv: readonly string[]): Promise<number> {
  const [command, ...files] = argv;
  const isRender = command === "render" && files.length > 0;
  const isExamples = command === "examples" && files.length === 0;
  if (!isRender && !isExamples) {
    console.error(USAGE);
    return 2;
  }

  const community = loadCommunity(join(REPO_ROOT, "community.yaml"));
  if (isRender) {
    const result = await runSessions(files, runOptions(join(REPO_ROOT, "out"), community));
    return report(result.failures);
  }

  const examplesDir = join(REPO_ROOT, "examples");
  const sessionsDir = join(examplesDir, "sessions");
  const samples = existsSync(sessionsDir)
    ? readdirSync(sessionsDir)
        .filter((name) => name.endsWith(".yaml"))
        .sort()
        .map((name) => join(sessionsDir, name))
    : [];
  const result = await runSessions(samples, runOptions(examplesDir, community));
  writeGallery(join(examplesDir, "README.md"), result.runs, community);
  return report(result.failures);
}

function runOptions(outRoot: string, community: Community): RunOptions {
  return {
    community,
    sigsDir: join(REPO_ROOT, "sigs"),
    outRoot,
    log: (line) => console.log(line),
  };
}

function report(failures: readonly string[]): number {
  for (const failure of failures) console.error(`FAILED ${failure}`);
  return failures.length > 0 ? 1 : 0;
}

if (import.meta.main) {
  try {
    process.exitCode = await main(process.argv.slice(2));
  } catch (error) {
    console.error(`error: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  }
}
