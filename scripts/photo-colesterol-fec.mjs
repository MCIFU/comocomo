// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "espinacas-pasas-pinones": "espinacas a la catalana",
 "pollo-mostaza-arroz": "chicken mustard sauce",
 "salmon-horno-limon": "baked salmon lemon",
 "salteado-calabacin-berenjena-pimiento": "sauteed zucchini eggplant",
 "bacalao-guisado-patatas": "bacalao con patatas",
 "patatas-guisadas-judias-verdes": "judías verdes con patatas",
 "boquerones-plancha-tomate": "grilled anchovies",
 "arroz-alcachofas": "arroz con alcachofas",
 "revuelto-trigueros-cebolleta": "revuelto de espárragos",
 "pavo-asado-patatas": "roast turkey breast potatoes",
 "lasana-atun-verduras": "tuna lasagna",
 "alubias-blancas-verduras": "white bean stew vegetables",
 "patatas-puerros-ligeras": "potatoes leeks",
 "pollo-naranja": "pollo a la naranja",
 "guisantes-estofados": "guisantes estofados",
 "merluza-esparragos-salsa-verde": "merluza en salsa verde",
 "ensalada-lentejas-arroz": "lentil rice salad",
 "albondigas-pavo-tomate": "albóndigas en salsa de tomate",
 "arroz-con-setas": "arroz con setas",
 "conejo-ajillo-pimientos-asados": "conejo al ajillo",
 "canelones-atun": "canelones de atún",
 "tortilla-cebolla-champinones": "mushroom omelette",
 "sopa-fideos-verduras": "sopa de fideos",
 "brochetas-pollo-champinones-cebolla": "chicken mushroom skewers",
 "espinacas-con-setas": "spinach mushrooms sauteed",
 "pechuga-pavo-hierbas": "turkey breast vegetables",
 "brocoli-almendras": "broccoli almonds",
 "brochetas-salmon-tomate": "salmon skewers"
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
writeFileSync("scripts/photo-colesterol-fec.json", JSON.stringify(out, null, 1));
