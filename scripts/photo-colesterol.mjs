// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
  "cuscus-brocoli-habas-almendras": "couscous vegetables broccoli", "porridge-avena-granada-platano": "porridge banana pomegranate",
  "tortilla-alcachofas": "tortilla de alcachofas", "arroz-integral-salteado-verduras": "vegetable fried rice",
  "caballa-horno-puerros-patata": "baked mackerel potatoes", "merluza-plancha-verduras": "grilled hake vegetables",
  "ensalada-aguacate-tomate": "avocado tomato salad", "bol-arroz-verduras-atun": "tuna rice bowl",
  "alcachofas-al-ajillo": "alcachofas salteadas", "brochetas-pollo-pimientos": "chicken skewers peppers",
  "calabacin-relleno-atun-huevo": "stuffed zucchini", "lombarda-ajoarriero": "braised red cabbage",
  "tofu-marinado-cebolla-pochada": "grilled tofu", "bacalao-con-pisto": "bacalao con pisto",
  "pasta-champinones-atun": "pasta mushrooms tuna", "garbanzos-estofados-espinacas": "garbanzos con espinacas",
  "sopa-repollo-apio": "cabbage soup",
};
const FREE = /^(CC BY(-SA)? [\d.]+|CC0|Public domain|PD)/i;
const strip = (s = "") => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const UA = { "User-Agent": "COMOCOMO/0.1 (contacto: mcifuentesramos@gmail.com)" };
const out = {};
for (const [id, q] of Object.entries(Q)) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  Object.entries({ action: "query", generator: "search", gsrsearch: `filetype:bitmap ${q}`, gsrnamespace: "6", gsrlimit: "20", prop: "imageinfo", iiprop: "url|extmetadata|size", iiurlwidth: "960", format: "json" }).forEach(([k, v]) => u.searchParams.set(k, v));
  const j = await (await fetch(u, { headers: UA })).json();
  const c = Object.values(j.query?.pages ?? {}).sort((a, b) => a.index - b.index).map((p) => { const i = p.imageinfo[0], m = i.extmetadata ?? {}; return { page: i.descriptionurl, thumb: i.thumburl, w: i.width, h: i.height, license: strip(m.LicenseShortName?.value), author: strip(m.Artist?.value).slice(0, 80) }; })
    .filter((c) => FREE.test(c.license) && c.w >= 900 && c.h >= 650 && /\.jpe?g/i.test(c.thumb)).slice(0, 6);
  out[id] = c;
  for (const [k, x] of c.entries()) { const b = Buffer.from(await (await fetch(x.thumb, { headers: UA })).arrayBuffer()); writeFileSync(`${process.argv[2]}/${id}__${k}.jpg`, b); await new Promise((r) => setTimeout(r, 300)); }
  console.log(id, c.length);
}
writeFileSync("scripts/photo-colesterol.json", JSON.stringify(out, null, 1));
