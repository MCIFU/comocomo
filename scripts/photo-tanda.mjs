// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "pan-chorizo-huevo-frito": "chorizo bread",
 "terrina-carne-platano": "pastelón",
 "tostas-pavo-aguacate-cabra": "avocado toast goat cheese",
 "ensaladilla-salmon-aguacate": "potato salad salmon",
 "ensalada-champinones-naranja": "mushroom salad",
 "endibias-guisadas-jamon": "braised endives ham",
 "quinoa-verduras-alioli-tomate": "quinoa vegetables",
 "guisantes-morcilla-panceta": "guisantes con jamón",
 "arroz-verduras-asadas-alioli": "rice roasted vegetables",
 "minipizzas-marisco-champinones": "seafood pizza",
 "sopa-vina-ab": "sopa de pescado",
 "frutas-sabayon-vino-dulce": "fruit gratin sabayon",
 "timbal-patata-pimiento-bacalao": "timbal de bacalao",
 "arroz-cerdo-jerez": "arroz con magro",
 "gazpacho-habas": "cold soup broad beans",
 "sopa-pollo-albondigas-garbanzos": "sopa de cocido",
 "higadillos-pollo-garbanzos": "chicken livers",
 "merluza-papillote-verduras": "fish en papillote",
 "mejillones-escabeche-patatas-panadera": "mejillones en escabeche",
 "galletas-almendra-fresas": "almond tuiles",
 "gelatina-chocolate-fresas": "chocolate pudding strawberries",
 "tofu-salteado-brocoli-sesamo": "tofu broccoli stir fry",
 "pollo-frutas-pasas-pasta": "chicken dried fruit sauce",
 "endibias-rellenas-judias-bacalao": "stuffed endive",
 "salmon-salsa-berros-aros-cebolla": "salmon fillet green sauce",
 "cerdo-melon-salsa-tomate": "pork stir fry peppers"
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
writeFileSync("scripts/photo-tanda-7.json", JSON.stringify(out, null, 1));
