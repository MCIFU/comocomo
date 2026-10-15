// Descarga la candidata preseleccionada (o la indicada) de cada receta del lote 5 a una carpeta de revisión.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
const dir = process.argv[2];
mkdirSync(dir, { recursive: true });
const c = JSON.parse(readFileSync("scripts/photo-candidates-4.json", "utf8"));
const which = process.argv[3]; // "all" = también alternativas 1..3
let ok = 0, bad = 0;
for (const [id, v] of Object.entries(c)) {
  const idxs = which === "all" ? v.cands.map((_, i) => i).slice(0, 4) : [v.pick];
  for (const k of idxs) {
    const x = v.cands[k]; if (!x) continue;
    const file = `${dir}/${id}${k ? "__" + k : ""}.jpg`;
    if (existsSync(file)) continue;
    for (let a = 0; a < 3; a++) {
      try {
        const res = await fetch(x.thumb, { headers: { "User-Agent": "COMOCOMO/0.1 (contacto: mcifuentesramos@gmail.com)" } });
        if (res.status === 429) { await new Promise((r) => setTimeout(r, 5000)); continue; }
        if (!res.ok) { bad++; break; }
        writeFileSync(file, Buffer.from(await res.arrayBuffer())); ok++; break;
      } catch { await new Promise((r) => setTimeout(r, 2000)); }
    }
    await new Promise((r) => setTimeout(r, 300));
  }
}
console.log("ok", ok, "fallos", bad);
