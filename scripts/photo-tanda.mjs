// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "ensalada-marisco-pepino-thai": "thai seafood salad",
 "langostinos-ajo-salsa-picante": "garlic prawns stir fry",
 "curry-cremoso-langostinos": "prawn curry coconut",
 "calamares-guindillas-thai": "stir fried squid chili",
 "pescado-frito-salsa-jengibre": "fried fish ginger sauce",
 "tallarines-tailandeses-gambas-pollo": "thai rice noodles stir fry",
 "curry-rojo-ternera-judias": "red curry beef",
 "curry-pollo-cacahuete": "chicken peanut curry",
 "ternera-ostras-setas-thai": "beef oyster sauce mushrooms",
 "ternera-picante-maiz": "beef baby corn stir fry",
 "pollo-guindillas-albahaca": "pad kra pao",
 "natillas-coco-thai": "coconut custard"
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
writeFileSync("scripts/photo-libro-thai-2.json", JSON.stringify(out, null, 1));
