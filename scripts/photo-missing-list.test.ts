import { test } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { recipes } from "../packages/content/src/index";
test("x", () => {
  const ts = readFileSync("apps/app/src/lib/photos.ts", "utf8");
  const have = new Set([...ts.matchAll(/^\s+"([^"]+)": \{ src/gm)].map((m) => m[1]));
  const tried = new Set<string>();
  for (const f of ["photo-tanda-1", "photo-tanda-2", "photo-tanda-3", "photo-colesterol", "photo-colesterol-fec"]) if (existsSync(`scripts/${f}.json`)) Object.keys(JSON.parse(readFileSync(`scripts/${f}.json`, "utf8"))).forEach((k) => tried.add(k));
  const miss = recipes.filter((r) => !have.has(r.id) && !tried.has(r.id)).map((r) => [r.id, r.title]).sort((a, b) => a[1].length - b[1].length);
  console.log("N", miss.length); console.log(miss.slice(0, 36).map((m) => m.join(" | ")).join("\n"));
});
