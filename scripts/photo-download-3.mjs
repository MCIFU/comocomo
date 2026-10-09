// Descarga las fotos preseleccionadas del lote 4 (salvo las descartadas en la revisión) y regenera photos.ts.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const SKIP = new Set(["torrijas", "cottage-pie", "moros-y-cristianos", "quiche-lorraine", "tarta-tatin", "kartoffelsalat", "ensaladilla-rusa", "huevos-a-la-flamenca", "coq-au-vin", "ensalada-nicoise", "goulash", "naan", "chiles-rellenos", "suya", "lentejas-con-verduras"]);
const c3 = JSON.parse(readFileSync("scripts/photo-candidates-3.json", "utf8"));
let ts = readFileSync("apps/app/src/lib/photos.ts", "utf8");
const lines = [];
for (const [id, v] of Object.entries(c3)) {
  if (SKIP.has(id) || !v.cands.length || ts.includes(`"${id}":`)) continue;
  const c = v.cands[v.pick];
  const file = `apps/app/assets/photos/${id}.jpg`;
  if (!existsSync(file)) {
    const res = await fetch(c.thumb, { headers: { "User-Agent": "COMOCOMO/0.1 (contacto: mcifuentesramos@gmail.com)" } });
    if (!res.ok || !res.headers.get("content-type")?.startsWith("image/jpeg")) { console.log("✗", id); continue; }
    writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    await new Promise((r) => setTimeout(r, 250));
  }
  lines.push(`  ${JSON.stringify(id)}: { src: require("../../assets/photos/${id}.jpg"), author: ${JSON.stringify(c.author || "Autor desconocido")}, license: ${JSON.stringify(c.license)}, url: ${JSON.stringify(c.page)} },`);
}
ts = ts.replace(/\n};\s*$/, "\n" + lines.join("\n") + "\n};\n");
writeFileSync("apps/app/src/lib/photos.ts", ts);
console.log("añadidas", lines.length);
