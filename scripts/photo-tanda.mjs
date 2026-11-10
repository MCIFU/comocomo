// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "hamburguesa-salmon-bacalao-gambas": "seafood burger",
 "hamburguesa-merluza-patata": "fish cakes potato",
 "hamburguesa-quinoa-pollo": "quinoa patties",
 "hamburguesa-arroz-acelga": "chard patties",
 "hamburguesa-pavo-tropical": "turkey burger mango salsa",
 "hamburguesa-tres-carnes": "burger patties grill",
 "hamburguesa-pollo-calabacin": "zucchini chicken patties",
 "hamburguesa-lentejas-calabaza": "lentil patties",
 "hamburguesa-garbanzos-jamon-queso": "chickpea patties",
 "hamburguesa-doble-salsa-especial": "double cheeseburger",
 "hamburguesa-bacon-barbacoa": "bacon cheeseburger",
 "hamburguesa-pescado-empanado": "fish sandwich fried",
 "pan-hamburguesa-casero": "hamburger buns homemade"
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
writeFileSync("scripts/photo-libro-hamburguesas-84-2.json", JSON.stringify(out, null, 1));
