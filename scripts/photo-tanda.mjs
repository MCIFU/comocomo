// Busca en Commons fotos para las recetas de colesterol y las descarga para revisarlas a ojo.
import { writeFileSync } from "node:fs";
const Q = {
 "acelgas-con-arroz": "acelgas con arroz",
 "zorongollo": "zorongollo",
 "langostinos-al-whisky": "langostinos al whisky",
 "cuscus-conejo-naranja": "couscous rabbit",
 "caballa-setas-boniato": "mackerel fillet sweet potato",
 "calabacines-rellenos": "calabacines rellenos",
 "pimientos-asados": "ensalada de pimientos asados",
 "albondigas-patata": "potato croquettes balls",
 "cazuela-pulpo-patatas": "pulpo con patatas",
 "setas-gratinadas": "gratinated mushrooms",
 "garbanzos-pisto": "garbanzos con pisto",
 "calamares-salsa-cuscus": "calamares en salsa",
 "berenjenas-rellenas-bacalao": "berenjenas rellenas",
 "quiche-puerros-gambas": "leek tartlets",
 "conejo-garbanzos-acelgas": "conejo con garbanzos",
 "hojaldres-pera-almendra": "pear puff pastry",
 "empanadillas-bonito-horno": "empanadillas de atún",
 "magras-con-tomate": "magras con tomate",
 "secretaria-alcalaina": "pollo en salsa",
 "ajoarriero-aragones": "ajoarriero",
 "caballa-cazuela-verduras": "caballa guisada",
 "salmon-papillote": "salmon papillote",
 "ensaladilla-bacalao": "ensaladilla",
 "crema-mejillones-hojaldre": "mussel soup",
 "estrella-hojaldre-chocolate": "star bread chocolate puff pastry",
 "pollo-griego-limon": "greek lemon chicken potatoes",
 "pizza-pavo-pina-picante": "hawaiian pizza"
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
writeFileSync("scripts/photo-tanda-2.json", JSON.stringify(out, null, 1));
