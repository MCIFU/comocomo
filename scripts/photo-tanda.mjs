// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "sopa-de-pescado": "sopa de pescado",
 "caballa-escabeche-limon": "caballa en escabeche",
 "cazuela-pulpo-habitas": "pulpo guisado",
 "merluza-panaderas-almejas": "merluza con almejas",
 "pastelitos-limon-leche-condensada": "lemon tartlets",
 "dulce-de-coco": "coconut pudding",
 "guisantes-huevos-setas": "guisantes con huevo",
 "arroz-de-mar": "arroz a banda",
 "macarrones-pollo-curry": "pasta chicken curry",
 "huevos-rellenos-champinones-gambas": "huevos rellenos",
 "boquerones-en-vinagre": "boquerones en vinagre",
 "galletas-cereales-pinones": "oat cookies",
 "semifrio-melon": "melon dessert",
 "cremoso-limon-queso": "lemon cheesecake raspberries",
 "mejillones-vapor-limon-perejil": "steamed mussels lemon",
 "coliflor-patatas-alioli": "coliflor al vapor",
 "coliflor-brocoli-escabeche": "pickled cauliflower",
 "crema-brocoli-gambas": "broccoli soup",
 "berenjenas-horno-carne-bechamel": "moussaka",
 "garbanzos-verduras-tomate": "chickpea stew tomato",
 "lentejas-boniato-arroz": "lentil stew sweet potato",
 "arroz-mejillones-escabeche": "arroz con mejillones",
 "tallarines-pesto-verduras": "pasta pesto zucchini tomatoes",
 "tarta-almejas-calabaza": "savory tart pumpkin",
 "tartaletas-avena-verduras": "vegetable tartlets",
 "pizza-patatas-riojana": "potato pizza",
 "bocados-queso-azul-nueces": "fried cheese balls"
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
writeFileSync("scripts/photo-tanda-5.json", JSON.stringify(out, null, 1));
