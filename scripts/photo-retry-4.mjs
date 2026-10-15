import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { recipes } from "../packages/content/src/index.ts";
const dir = process.argv[2];
const c = JSON.parse(readFileSync("scripts/photo-candidates-4.json", "utf8"));
const rv = JSON.parse(readFileSync("scripts/photo-review-4.json", "utf8"));
const title = Object.fromEntries(recipes.map((r) => [r.id, r.title]));
let cells = [], i = 0;
for (const [id, k] of Object.entries(rv.retry)) {
  const x = c[id].cands[k], file = `${dir}/${id}__${k}.jpg`;
  if (!existsSync(file)) {
    const res = await fetch(x.thumb, { headers: { "User-Agent": "COMOCOMO/0.1 (contacto: mcifuentesramos@gmail.com)" } });
    if (res.ok) writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    await new Promise((r) => setTimeout(r, 300));
  }
  i++;
  cells.push(`<div class="c"><b>${i}</b> ${title[id]}<div class="row"><figure><img src="/cand/${id}__${k}.jpg"></figure></div></div>`);
}
const html = readFileSync(dir + "/../rev.html", "utf8").split('<div class="c">')[0];
writeFileSync(dir + "/../rev2.html", html + cells.join(""));
writeFileSync("scripts/photo-retry-order.json", JSON.stringify(Object.keys(rv.retry)));
console.log(i);
