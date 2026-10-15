// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "cazuelitas-huevos-escondidos": "huevos en cazuela",
 "empanadillas-almejas-brocoli": "empanadillas",
 "saquitos-peras-pasas": "filo pastry purses",
 "crema-cuajada-horno-limon": "baked custard",
 "albondigas-caballa-salsa-verde": "fish balls green sauce",
 "merluza-horno-cebolla-queso": "baked hake",
 "merluza-marinera-mejillones": "merluza a la marinera",
 "tartitas-chocolate-blanco-queso": "white chocolate cheesecake",
 "mejillones-tomate-picante": "mejillones con tomate",
 "champinones-salsa-vino": "champiñones en salsa",
 "jarullos": "bacalao con patatas guiso",
 "habas-morcilla": "habas con morcilla",
 "habas-huevo-escalfado": "broad beans poached egg",
 "pinchos-cerdo-papas-alinadas": "pinchos morunos",
 "salteado-pollo-verduras-soja": "chicken stir fry vegetables",
 "pastel-bacalao-patatas": "brandada de bacalao gratinada",
 "vasitos-crema-cafe": "coffee mousse glass",
 "copas-melocoton-queso": "peach dessert glass",
 "sorbete-pina-sirope-granada": "pineapple sorbet",
 "galletas-nata-chocolate": "chocolate dipped cookies",
 "crumble-pera-fresa": "pear crumble",
 "helado-platano": "nice cream banana",
 "huevos-espinacas-horno": "baked eggs spinach",
 "cebollas-rellenas-espinacas": "stuffed onions",
 "tomates-rellenos-marisco": "stuffed tomatoes seafood",
 "acelgas-refrito-jamon": "acelgas con patatas",
 "paella-pescado-romero": "paella de pescado",
 "arroz-pisto-gratinado": "arroz gratinado",
 "brocoli-mejillones-salsa-verde": "mejillones en salsa verde"
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
writeFileSync("scripts/photo-tanda-4.json", JSON.stringify(out, null, 1));
