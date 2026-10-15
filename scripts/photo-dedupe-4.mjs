// Toma las aceptadas de la revisión y reparte las fotos repetidas: cada foto se usa como mucho 2 veces;
// las demás recetas que la tenían pasan a su siguiente candidata (que se revisa en una segunda vuelta).
import { readFileSync, writeFileSync } from "node:fs";
const c = JSON.parse(readFileSync("scripts/photo-candidates-4.json", "utf8"));
const ts = readFileSync("apps/app/src/lib/photos.ts", "utf8");
const usedExisting = new Set([...ts.matchAll(/url: "([^"]+)"/g)].map((m) => m[1]));
const items = Object.entries(c).filter(([, v]) => v.cands.length);
const accepted = new Set(readFileSync(process.argv[2], "utf8").split(/\s+/).filter(Boolean).map(Number));
const count = new Map(); const out = { keep: {}, retry: {} };
items.forEach(([id, v], i) => {
  if (!accepted.has(i + 1)) return;
  const p = v.cands[v.pick].page;
  const n = count.get(p) ?? (usedExisting.has(p) ? 1 : 0);
  if (n < 2) { count.set(p, n + 1); out.keep[id] = v.pick; }
  else {
    // siguiente candidata no usada todavía
    const k = v.cands.findIndex((x, j) => j !== v.pick && !count.has(x.page) && !usedExisting.has(x.page));
    if (k >= 0) out.retry[id] = k;
  }
});
writeFileSync("scripts/photo-review-4.json", JSON.stringify(out, null, 1));
console.log("aceptadas", accepted.size, "se quedan", Object.keys(out.keep).length, "a revisar alternativa", Object.keys(out.retry).length);
