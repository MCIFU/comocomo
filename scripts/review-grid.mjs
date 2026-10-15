// Genera una rejilla HTML para revisar a ojo la foto preseleccionada de cada receta (lote 5).
import { readFileSync, writeFileSync } from "node:fs";
import { recipes } from "../packages/content/src/index.ts";
const c = JSON.parse(readFileSync("scripts/photo-candidates-4.json", "utf8"));
const title = Object.fromEntries(recipes.map((r) => [r.id, r.title]));
const small = (u) => u.replace(/\/(\d+)px-/, "/180px-");
const alt = process.argv[3] === "alt";
const items = Object.entries(c).filter(([, v]) => v.cands.length);
let i = 0;
const cells = items.map(([id, v]) => {
  i++;
  const imgs = (alt ? v.cands.slice(0, 4) : [v.cands[v.pick]]).map((x, k) => `<figure><img src="/cand/${id}${alt && k ? "__" + k : ""}.jpg" loading="eager"><figcaption>${alt ? k : ""}</figcaption></figure>`).join("");
  return `<div class="c"><b>${i}</b> ${title[id]}<div class="row">${imgs}</div></div>`;
}).join("");
writeFileSync(process.argv[2], `<!doctype html><meta charset="utf-8"><style>body{font:9.5px sans-serif;margin:4px;display:grid;grid-template-columns:repeat(${alt ? 2 : 6},1fr);gap:4px}.c{border:1px solid #ccc;padding:2px;height:${alt ? 150 : 128}px;overflow:hidden}.row{display:flex;gap:2px}figure{margin:0}img{width:${alt ? 110 : 128}px;height:${alt ? 90 : 96}px;object-fit:cover;display:block}</style>${cells}`);
console.log(items.length);
