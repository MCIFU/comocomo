// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "sopa-serrana": "sopa de tomate",
 "sopa-arroz-pollo-maiz": "chicken rice soup corn",
 "huevos-gambas-ajetes-patatas-paja": "huevos rotos con gambas",
 "pierna-cordero-miel": "lamb tagine honey almonds",
 "pavo-mechado-manzana-asada": "roast turkey baked apples",
 "caballa-asada-patatas": "grilled mackerel potatoes",
 "vasitos-mango-galleta": "mango mousse glass",
 "pina-salteada-yogur-frambuesas": "grilled pineapple yogurt",
 "pimientos-adobados-champinones": "pimientos asados",
 "alcachofas-patatas-almejas": "alcachofas guisadas",
 "arroz-cordero-verduras": "arroz con cordero",
 "cestos-pan-huevo-jamon": "egg in bread basket",
 "osobuco-cerdo-salsa": "ossobuco",
 "villeroy-redondo-pavo-queso": "pollo villeroy",
 "canutillos-hojaldre-yogur-frutas": "cream horns",
 "pina-salteada-merengue-lima": "pineapple meringue",
 "tartitas-queso-lima-frutas": "cheesecake fruit tartlets",
 "limones-rellenos-helados": "limones rellenos helado",
 "arroz-almejas-verduras": "arroz con almejas",
 "bocados-lomo-jamon-tomate": "san jacobo",
 "calamares-patatas-guisantes": "calamares con patatas",
 "rape-a-la-catalana": "rape",
 "truchas-a-la-cazuela": "trucha guisada",
 "crepes-chocolate-platano": "banana chocolate crepes",
 "crema-fria-mango": "mango soup cold",
 "repapalos-bacalao": "buñuelos de bacalao en caldo",
 "alubias-bunuelos-berza-cordero": "alubias con cordero"
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
writeFileSync("scripts/photo-tanda-6.json", JSON.stringify(out, null, 1));
