// Descarga la foto elegida de cada receta y genera apps/app/src/lib/photos.ts con créditos.
import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
const PICK = {
  "tortilla-de-patatas": 1, "pollo-al-ajillo": 2, "lentejas-con-chorizo": 1, "garbanzos-con-espinacas": 0, "pollo-al-horno-con-arroz": 0,
  "gambas-al-ajillo": 1, "merluza-al-horno-con-patatas": 0, "huevos-rotos": 0, "sopa-de-ajo": 0, "pisto-con-huevo": 1,
  "fabada-asturiana": 0, "espaguetis-al-pomodoro": 2, "carbonara": 2, "arroz-frito-con-huevo": 1, "chilaquiles-rojos": 3,
  "quesadillas": 3, "guacamole": 0, "tacos-de-pollo": 0, "pollo-al-curry": 2, "dal-de-lentejas": 2, "karaage": 0, "oyakodon": 0,
  "choripan-chimichurri": 3, "calamares-fritos-yogur": 0, "panang-pollo": 2, "tallarines-verdes": 0, "ensalada-griega": 2,
  "souvlaki-pollo-tzatziki": 1, "bibimbap-casero": 3, "chana-masala": 0, "tajin-pollo-limon": 0, "risotto-champinones": 1,
  "pasta-aglio-olio": 1, "shakshuka": 0,
};
const cand = JSON.parse(readFileSync("scripts/photo-candidates.json", "utf8"));
const dir = "apps/app/assets/photos";
mkdirSync(dir, { recursive: true });
const lines = [];
for (const [id, i] of Object.entries(PICK)) {
  const c = cand[id][i];
  const res = await fetch(c.thumb, { headers: { "User-Agent": "COMOCOMO/0.1 (contacto: mcifuentesramos@gmail.com)" } });
  if (!res.ok || !res.headers.get("content-type")?.startsWith("image/jpeg")) { console.log("✗", id, res.status, res.headers.get("content-type")); continue; }
  writeFileSync(`${dir}/${id}.jpg`, Buffer.from(await res.arrayBuffer()));
  console.log("✓", id, Math.round(statSync(`${dir}/${id}.jpg`).size / 1024) + " KB", c.license);
  lines.push(`  ${JSON.stringify(id)}: { src: require("../../assets/photos/${id}.jpg"), author: ${JSON.stringify(c.author || "Autor desconocido")}, license: ${JSON.stringify(c.license)}, url: ${JSON.stringify(c.page)} },`);
  await new Promise((r) => setTimeout(r, 300));
}
writeFileSync("apps/app/src/lib/photos.ts", `// Generado por scripts/photo-download.mjs — no editar a mano.
// Fotos de Wikimedia Commons con licencia libre. Se muestran sin filtro, con su crédito.
export interface Photo { src: number; author: string; license: string; url: string }

export const PHOTOS: Record<string, Photo> = {
${lines.join("\n")}
};
`);
