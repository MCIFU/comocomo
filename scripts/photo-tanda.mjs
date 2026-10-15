// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "humita": "humita",
 "huevos-al-nido": "huevos al nido",
 "mousse-de-limon": "lemon mousse",
 "arranque-roteno": "arranque roteño",
 "sopa-bacalao": "sopa de bacalao",
 "rancho-aragones": "rancho stew potatoes",
 "crema-de-verduras": "crema de verduras",
 "bonito-con-tomate": "bonito con tomate",
 "merluza-a-la-sidra": "merluza a la sidra",
 "moros-y-cristianos": "moros y cristianos",
 "calabacin-rebozado": "calabacín rebozado",
 "croquetas-bonito": "croquetas de atún",
 "croquetas-salmon": "salmon croquettes",
 "habas-catalana": "habas a la catalana",
 "granizado-sandia": "watermelon granita",
 "puerros-vinagreta": "puerros en vinagreta",
 "merluza-koxkera": "merluza koskera",
 "lentejas-morcilla": "lentejas con morcilla",
 "mousse-mango": "mango mousse",
 "escalopines-cabrales": "escalope salsa queso azul",
 "patatas-rellenas-horno": "stuffed baked potatoes",
 "clafoutis-uvas": "clafoutis",
 "puerros-romesco": "calçots romesco",
 "sopa-arroz-almejas": "arroz caldoso almejas",
 "carne-guisada-patatas": "carne guisada con patatas",
 "croquetas-pollo-jamon": "croquetas de jamón",
 "pollo-salsa-almendras": "pollo en salsa de almendras",
 "quiche-brocoli-almejas": "broccoli quiche",
 "conejo-en-salsa": "conejo guisado",
 "bacalao-con-pisto": "bacalao con tomate"
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
writeFileSync("scripts/photo-tanda-1.json", JSON.stringify(out, null, 1));
