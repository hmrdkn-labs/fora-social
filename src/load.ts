// Loads and validates the YAML data files. Every message names the file and the field,
// e.g. "examples/sessions/x.yaml: time must be HH:MM, got 7pm". All problems in one file
// are reported together.
import { existsSync, readFileSync, statSync } from "node:fs";
import { basename, isAbsolute, join, relative } from "node:path";
import type { z } from "zod";
import { parse } from "yaml";
import { REPO_ROOT } from "./paths.ts";
import { CommunitySchema, ID, SessionFileSchema, SigFileSchema } from "./schema.ts";
import type { Community, Person, Session, Sig } from "./types.ts";

export function loadCommunity(file: string): Community {
  return parseCommunity(readFileSync(file, "utf8"), file);
}

export function parseCommunity(text: string, file: string): Community {
  return validate(CommunitySchema, text, file);
}

/** `sigs/<id>.yaml`: the id is the file name. */
export function loadSig(file: string): Sig {
  return parseSig(readFileSync(file, "utf8"), file);
}

export function parseSig(text: string, file: string): Sig {
  const id = idOf(file);
  const data = validate(SigFileSchema, text, file);
  const problems: string[] = [];
  if (data.id !== undefined && data.id !== id) {
    problems.push(`${file}: id must match the file name "${id}", got "${data.id}"`);
  }
  for (const [index, person] of (data.people ?? []).entries()) {
    if (person.photo !== undefined && !isRepoFile(person.photo, /\.(?:jpe?g|png)$/i)) {
      problems.push(
        `${file}: people[${index}].photo (${person.name}) must name an existing .jpg, .jpeg or .png file in the repo, got "${person.photo}"`,
      );
    }
  }
  if (problems.length > 0) throw new Error(problems.join("\n"));
  return { ...data, id };
}

/** A session file; `sigsDir` is where `sig` must name an existing `<sig>.yaml`. */
export function loadSession(file: string, sigsDir: string): Session {
  return parseSession(readFileSync(file, "utf8"), file, sigsDir);
}

export function parseSession(text: string, file: string, sigsDir: string): Session {
  const id = idOf(file);
  const data = validate(SessionFileSchema, text, file);
  const problems: string[] = [];
  if (data.id !== undefined && data.id !== id) {
    problems.push(`${file}: id must match the file name "${id}", got "${data.id}"`);
  }
  if (!existsSync(join(sigsDir, `${data.sig}.yaml`))) {
    problems.push(`${file}: sig must name an existing sigs/<id>.yaml, got "${data.sig}"`);
  }
  const people: [string, Person][] = [["host", data.host], ...data.speakers.map((p, i): [string, Person] => [`speakers[${i}]`, p])];
  for (const [field, person] of people) {
    if (person.photo !== undefined && !isRepoFile(person.photo, /\.(?:jpe?g|png)$/i)) {
      problems.push(
        `${file}: ${field}.photo (${person.name}) must name an existing .jpg, .jpeg or .png file in the repo, got "${person.photo}"`,
      );
    }
  }
  if (data.image !== undefined && !isRepoFile(data.image.src, /\.(?:png|svg)$/i)) {
    problems.push(`${file}: image.src must name an existing .png or .svg file in the repo, got "${data.image.src}"`);
  }
  if (problems.length > 0) throw new Error(problems.join("\n"));
  return { ...data, id };
}

/** True for a repo-relative path of an existing file inside the repo whose name matches `extension`. */
function isRepoFile(path: string, extension: RegExp): boolean {
  if (!extension.test(path) || isAbsolute(path)) return false;
  const full = join(REPO_ROOT, path);
  return !relative(REPO_ROOT, full).startsWith("..") && statSync(full, { throwIfNoEntry: false })?.isFile() === true;
}

function idOf(file: string): string {
  const id = basename(file, ".yaml");
  if (!ID.test(id)) {
    throw new Error(`${file}: the file name must use only lowercase letters, digits and "-", like sigcn-gitops.yaml`);
  }
  return id;
}

function validate<T extends z.ZodType>(schema: T, text: string, file: string): z.output<T> {
  const result = schema.safeParse(parseYaml(text, file), { reportInput: true });
  if (!result.success) {
    throw new Error(result.error.issues.flatMap((issue) => issueLines(file, issue)).join("\n"));
  }
  return result.data;
}

function parseYaml(text: string, file: string): unknown {
  try {
    return parse(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`${file}: not valid YAML: ${message.split("\n")[0]}`);
  }
}

function issueLines(file: string, issue: z.core.$ZodIssue): string[] {
  const field = fieldPath(issue.path);
  const say = (text: string) => `${file}: ${field ? `${field} ` : ""}${text}`;
  switch (issue.code) {
    case "unrecognized_keys":
      return issue.keys.map((key) => `${file}: ${fieldPath([...issue.path, key])} is not a known field`);
    case "invalid_type":
      if (issue.path.length === 0) return [`${file}: must be a YAML mapping of fields`];
      if (issue.input === undefined) return [say("is required")];
      return [say(`expected ${issue.expected}, got ${kindOf(issue.input)}`)];
    default:
      return [say(issue.message)];
  }
}

function fieldPath(path: ReadonlyArray<PropertyKey>): string {
  return path.reduce<string>((out, key) => {
    if (typeof key === "number") return `${out}[${key}]`;
    return out ? `${out}.${String(key)}` : String(key);
  }, "");
}

function kindOf(value: unknown): string {
  if (value === null) return "nothing";
  if (Array.isArray(value)) return "a list";
  return typeof value;
}
