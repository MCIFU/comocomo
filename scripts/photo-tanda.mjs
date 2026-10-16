// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "endibias-rellenas-salmon": "endive smoked salmon",
 "coliflor-naranja-cava": "roasted cauliflower",
 "verduras-curry-basmati": "vegetable curry rice",
 "calabacines-ajoarriero": "stuffed zucchini",
 "arroz-esparragos-chorizo": "arroz con chorizo",
 "arroz-secreto-alcachofas": "arroz con alcachofas y carne",
 "pasta-conejo-curry": "fusilli curry",
 "pan-calabacin-beicon": "zucchini bread savory",
 "sopa-arroz-verduras-gambas": "sopa de arroz",
 "menestra-pollo": "menestra",
 "rape-panceta-crema-lechuga": "monkfish bacon",
 "crepes-mousse-chocolate-cafe": "chocolate crepes",
 "vasitos-yogur-mango-platano": "mango yogurt parfait",
 "frutos-rojos-platano-boina": "berry cobbler",
 "barritas-energeticas": "granola bars",
 "ensaladilla-langostinos-calabacin": "ensaladilla con langostinos",
 "ensalada-pollo-granada-aguacate": "chicken avocado salad",
 "albondigas-pollo-acelga-pera": "chicken meatballs",
 "acelgas-higos-nueces": "acelgas",
 "fideos-arroz-pollo-verduras": "rice noodles chicken stir fry",
 "crepes-puerro-queso": "savory crepes",
 "huevos-al-horno-tomate-esparragos": "huevos a la flamenca",
 "conejo-al-limon": "rabbit lemon",
 "alitas-limon-pimenton-patatas-setas": "chicken wings lemon",
 "merluza-salteada-curry": "fish curry potatoes",
 "milhojas-patata-jamon-crujiente": "mashed potato ham"
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
writeFileSync("scripts/photo-tanda-8.json", JSON.stringify(out, null, 1));
