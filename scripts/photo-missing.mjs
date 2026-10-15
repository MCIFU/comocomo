import { readFileSync } from "node:fs";
import { recipes } from "../packages/content/src/index.ts";
const ts = readFileSync("apps/app/src/lib/photos.ts", "utf8");
const have = new Set([...ts.matchAll(/^\s+"([^"]+)": \{ src/gm)].map((m) => m[1]));
const miss = recipes.filter((r) => !have.has(r.id));
console.log(recipes.length, "recetas,", have.size, "con foto,", miss.length, "sin foto");
