// Lote 5: busca en Wikimedia Commons una foto libre del «plato base» de cada receta sin foto.
// Los títulos de Arguiñano son largos («Crema de acelgas con croquetas de quinoa»), así que se prueba
// primero el plato principal en español y luego su equivalente en inglés.
// Uso: npx vite-node scripts/photo-auto-4.mjs  → scripts/photo-candidates-4.json (reanudable)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { recipes } from "../packages/content/src/index.ts";

const FREE = /^(CC BY(-SA)? [\d.]+|CC0|Public domain|PD)/i;
const strip = (s = "") => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const OUT = "scripts/photo-candidates-4.json";

const ts = readFileSync("apps/app/src/lib/photos.ts", "utf8");
const have = new Set([...ts.matchAll(/^\s+"([^"]+)": \{ src/gm)].map((m) => m[1]));

// Palabra clave del plato → búsqueda en inglés (Commons tiene muchas más fotos etiquetadas en inglés).
const EN = [
  [/^(crema|sopa)s? de (calabaza)/, "pumpkin soup"], [/^(crema|sopa)s? de (champi|seta|boletus)/, "mushroom soup"],
  [/^(crema|sopa)s? de (puerro)/, "leek soup"], [/^(crema|sopa)s? de (tomate)/, "tomato soup"], [/^(crema|sopa)s? de (lentejas)/, "lentil soup"],
  [/^(crema|sopa)s? de (calabac)/, "zucchini soup"], [/^(crema|sopa)s? de (zanahoria)/, "carrot soup"], [/^(crema|sopa)s? de (coliflor)/, "cauliflower soup"],
  [/^(crema|sopa)s? de (esp[aá]rrago)/, "asparagus soup"], [/^(crema|sopa)s? de (remolacha)/, "beetroot soup"], [/^(crema|sopa)s? de (garbanzo)/, "chickpea soup"],
  [/^(crema|sopa)s? de (alubia)/, "bean soup"], [/^(crema|sopa)s? de (guisante)/, "pea soup"], [/^(crema|sopa)s? de (pescado|marisco|mejill)/, "fish soup"],
  [/^(crema|sopa)s? de (pollo|arroz)/, "chicken soup"], [/^(crema|sopa)s? fr[ií]a/, "gazpacho"], [/^(crema|sopa)/, "vegetable soup"],
  [/^gazpacho/, "gazpacho"], [/^salmorejo/, "salmorejo"], [/^vichyssoise/, "vichyssoise"],
  [/^ensalada de (lentejas)/, "lentil salad"], [/^ensalada de (garbanzo)/, "chickpea salad"], [/^ensalada de (pasta|macarr)/, "pasta salad"],
  [/^ensalada de (arroz)/, "rice salad"], [/^ensalada de (patata)/, "potato salad"], [/^ensalada de (alubia)/, "bean salad"], [/^ensalada/, "mixed salad"],
  [/^ensaladilla/, "ensaladilla rusa"],
  [/^(tortilla|tortillas) de patata/, "tortilla de patatas"], [/^tortilla/, "omelette"], [/^revuelto/, "scrambled eggs"],
  [/^huevos? (rellenos)/, "deviled eggs"], [/^huevos? (escalfado|flor)/, "poached egg"], [/^huevos? (frito|roto)/, "fried egg potatoes"], [/^huevos?/, "egg dish"],
  [/merluza/, "hake fillet"], [/bacalao/, "bacalao"], [/salm[oó]n/, "salmon fillet"], [/rape/, "monkfish"], [/lubina/, "sea bass fish"],
  [/caballa|verdel/, "mackerel fish"], [/sardinas/, "sardines"], [/boquerones|anchoas/, "boquerones"], [/bonito|at[uú]n/, "tuna steak"],
  [/gallo|lenguado/, "fish fillet"], [/trucha/, "trout"], [/chipirones|calamar/, "calamares"], [/pulpo/, "pulpo"],
  [/mejillones/, "mussels"], [/almejas/, "clams"], [/langostinos|gambas/, "prawns"],
  [/^alb[oó]ndigas/, "meatballs"], [/^hamburguesa/, "hamburger"], [/conejo/, "rabbit stew"], [/cordero|chuletillas/, "lamb chops"],
  [/carrilleras/, "carrilleras"], [/costilla/, "ribs"], [/solomillo/, "pork tenderloin"], [/lomo|cerdo|chuleta/, "pork chop"],
  [/ternera|redondo|entrecot|filete|carne/, "beef stew"], [/pavo/, "turkey breast"], [/pollo|alitas|muslos/, "chicken dish"],
  [/lentejas/, "lentejas"], [/garbanzos/, "garbanzos"], [/alubias|fabes|jud[ií]as blancas/, "white beans stew"],
  [/^arroz con leche/, "arroz con leche"], [/^arroz/, "arroz"], [/paella/, "paella"], [/risotto/, "risotto"],
  [/^canelones/, "cannelloni"], [/^lasa[ñn]a/, "lasagna"], [/^(macarrones|espaguetis|tallarines|pasta|fideos|tagliatelle)/, "pasta dish"],
  [/[ñn]oquis/, "gnocchi"], [/^crepes?/, "crepes"], [/^empanadillas?/, "empanadillas"], [/^empanada/, "empanada"],
  [/^(quiche|tarta salada|tartaletas)/, "quiche"], [/^pizza/, "pizza"], [/^croquetas/, "croquetas"],
  [/^pimientos rellenos/, "stuffed peppers"], [/^berenjenas?/, "eggplant dish"], [/^calabac[ií]n/, "zucchini dish"], [/^alcachofas/, "artichokes"],
  [/^esp[aá]rragos/, "asparagus"], [/^coliflor/, "cauliflower"], [/^br[oó]coli/, "broccoli"], [/^acelgas/, "swiss chard"], [/^puerros/, "leeks"],
  [/^(setas|champi)/, "mushrooms dish"], [/^patatas?/, "potatoes dish"], [/^boniato/, "sweet potato"], [/^jud[ií]as verdes/, "green beans"],
  [/^guisantes/, "peas dish"], [/^habas/, "broad beans"], [/^menestra/, "menestra de verduras"], [/^pisto/, "pisto"], [/^verduras/, "roasted vegetables"],
  [/^tomates?/, "stuffed tomatoes"], [/^cebollas?/, "stuffed onions"], [/^repollo|^col/, "cabbage dish"],
  [/^flan/, "flan"], [/^(bizcocho|bizcochitos|magdalen)/, "sponge cake"], [/^tarta de (queso)/, "cheesecake"], [/^tarta de (chocolate)/, "chocolate cake"],
  [/^tarta de (manzana)/, "apple tart"], [/^tarta/, "cake slice"], [/^galletas/, "cookies"], [/^mousse/, "mousse dessert"], [/^helado/, "ice cream"],
  [/^(crema cuajada|natillas|crema)/, "custard dessert"], [/^(compota)/, "fruit compote"], [/^(brochetas de fruta|frutas)/, "fruit skewers"],
  [/^(torrijas)/, "torrijas"], [/^(buñuelos|bunuelos)/, "buñuelos"], [/^(merengues)/, "meringues"], [/^(granizado)/, "granita"],
  [/^(sorbete)/, "sorbet"], [/^(vasitos|copas?|chupitos)/, "dessert glass"], [/^(saquitos|canutillos|rollitos?|hojaldres?)/, "phyllo pastry"],
  [/^(tostas?|bocadillo|bollos)/, "toast tapa"], [/^brochetas?/, "skewers"], [/^(pastel|terrina)/, "pastel"], [/^(guiso|estofado|rancho)/, "stew"],
];

/** Plato base: lo que va antes de « con », « y », « al », « a la », « en »… */
function base(title) {
  return title.replace(/\s*\(.*\)/, "").split(/ con | y | al | a la | en | sobre | rellen| sin |,/i)[0].trim();
}

async function search(q) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  Object.entries({ action: "query", generator: "search", gsrsearch: `filetype:bitmap ${q}`, gsrnamespace: "6", gsrlimit: "15", prop: "imageinfo", iiprop: "url|extmetadata|size", iiurlwidth: "960", format: "json" }).forEach(([k, v]) => u.searchParams.set(k, v));
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const j = await (await fetch(u, { headers: { "User-Agent": "COMOCOMO/0.1 (contacto: mcifuentesramos@gmail.com)" } })).json();
      return Object.values(j.query?.pages ?? {}).sort((a, b) => a.index - b.index).map((p) => {
        const i = p.imageinfo[0], m = i.extmetadata ?? {};
        return { title: p.title, page: i.descriptionurl, thumb: i.thumburl.split("?")[0], w: i.width, h: i.height, license: strip(m.LicenseShortName?.value), author: strip(m.Artist?.value).slice(0, 80) };
      }).filter((c) => FREE.test(c.license) && c.w >= 700 && c.h >= 500 && /\.jpe?g$/i.test(c.thumb));
    } catch { await new Promise((r) => setTimeout(r, 2000)); }
  }
  return [];
}

const out = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const todo = recipes.filter((r) => !have.has(r.id) && !out[r.id]);
console.log("pendientes", todo.length);
let n = 0;
for (const r of todo) {
  const b = base(r.title);
  const nb = norm(b);
  const en = EN.find(([re]) => re.test(nb))?.[1];
  const queries = [b, en].filter(Boolean);
  let cands = [], q = "";
  for (const qq of queries) {
    const res = await search(qq);
    const key = norm(qq).split(/\s+/).filter((w) => w.length > 3)[0] ?? norm(qq);
    const good = res.filter((c) => norm(c.title).includes(key));
    if (good.length) { cands = [...good, ...res.filter((c) => !good.includes(c))]; q = qq; break; }
    if (!cands.length && res.length) { cands = res; q = qq; }
    await new Promise((res2) => setTimeout(res2, 400));
  }
  out[r.id] = { q, pick: 0, cands: cands.slice(0, 6) };
  if (++n % 25 === 0) { writeFileSync(OUT, JSON.stringify(out, null, 1)); console.log(n); }
}
writeFileSync(OUT, JSON.stringify(out, null, 1));
console.log("hecho", Object.keys(out).length, "sin candidatas:", Object.entries(out).filter(([, v]) => !v.cands.length).length);
