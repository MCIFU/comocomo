// Lote 5, paso final: asigna foto a TODAS las recetas sin foto.
// 1) Candidatas revisadas a ojo (primera vuelta y alternativas de repetidas), cada foto como mucho 3 veces.
// 2) El resto: una foto ya revisada del mismo tipo de plato (crema, ensalada, lentejas, arroz…), la menos usada, máx. 4 veces.
// Salida: scripts/photo-plan-4.json  →  { id: { copy?: "cand/<file>", reuse?: "<otroId>", author, license, url } }
import { readFileSync, writeFileSync } from "node:fs";
import { recipes } from "../packages/content/src/index.ts";

const c = JSON.parse(readFileSync("scripts/photo-candidates-4.json", "utf8"));
const rv = JSON.parse(readFileSync("scripts/photo-review-4.json", "utf8"));
const retryOrder = JSON.parse(readFileSync("scripts/photo-retry-order.json", "utf8"));
const acc1 = new Set(readFileSync(process.argv[2], "utf8").split(/\s+/).filter(Boolean).map(Number));
const acc2 = new Set(readFileSync(process.argv[3], "utf8").split(/\s+/).filter(Boolean).map(Number));
const ts = readFileSync("apps/app/src/lib/photos.ts", "utf8");

// Fotos existentes: id → { file, author, license, url }
const existing = {};
for (const m of ts.matchAll(/^\s+"([^"]+)": \{ src: require\("\.\.\/\.\.\/assets\/photos\/([^"]+)"\), author: ("[^"]*"), license: ("[^"]*"), url: ("[^"]*") \}/gm))
  existing[m[1]] = { file: m[2], author: JSON.parse(m[3]), license: JSON.parse(m[4]), url: JSON.parse(m[5]) };

const uses = new Map(); // url → nº de recetas que la usan
for (const e of Object.values(existing)) uses.set(e.url, (uses.get(e.url) ?? 0) + 1);
const plan = {};
const items = Object.entries(c).filter(([, v]) => v.cands.length);
const accepted1 = new Set(items.filter((_, i) => acc1.has(i + 1)).map(([id]) => id));
const accepted2 = new Set(retryOrder.filter((_, i) => acc2.has(i + 1)));

function take(id, k) {
  const x = c[id].cands[k];
  const n = uses.get(x.page) ?? 0;
  if (n >= 3) return false;
  uses.set(x.page, n + 1);
  plan[id] = { copy: `cand/${id}${k ? "__" + k : ""}.jpg`, author: x.author || "Autor desconocido", license: x.license, url: x.page, k };
  return true;
}
for (const id of Object.keys(c)) {
  if (accepted2.has(id) && take(id, rv.retry[id])) continue;
  if (accepted1.has(id)) take(id, c[id].pick);
}

// Tipo de plato para el reparto de reserva.
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const main = (t) => norm(t.replace(/\s*\(.*\)/, "").split(/ con | en | sobre | al | a la | y |,/i)[0]);
const CATS = [
  ["crema", /^(crema|vichyssoise)/], ["sopa", /^(sopa|caldo)/], ["fria", /^(gazpacho|salmorejo|crema fria|sopa fria)/],
  ["ensaladilla", /^ensaladilla/], ["ensalada", /^ensalada/], ["lentejas", /lenteja/], ["garbanzos", /garbanzo/], ["alubias", /alubia|fabes|judias blancas/],
  ["paella", /paella|fideua/], ["arroz", /^arroz|risotto/], ["pasta", /^(macarrones|espaguetis|tallarines|pasta|fideos|espirales|tagliatelle)/], ["lasana", /lasana|canelon/],
  ["noquis", /noquis/], ["crepes", /crepe/], ["empanadillas", /empanadilla/], ["empanada", /^(empanada|quiche|tarta salada|tartaleta|pan salado|coques)/],
  ["pizza", /^pizza/], ["hamburguesa", /hamburguesa/], ["croquetas", /croqueta|bunuelo/], ["tortilla", /^(tortilla|revuelto)/], ["huevos", /^huevo/],
  ["merluza", /merluza|gallo|pescadilla/], ["bacalao", /bacalao/], ["salmon", /salmon|trucha/], ["pescado-azul", /caballa|sardina|boqueron|bonito|anchoa/],
  ["rape", /rape|lubina/], ["marisco", /mejillon|almeja|langostino|gamba|zarzuela/], ["calamar", /calamar|chipiron|pulpo|sepia/],
  ["pollo", /pollo|alitas|muslos|pechuga/], ["pavo", /pavo/], ["conejo", /conejo/], ["cordero", /cordero|chuletill/], ["albondigas", /albondiga/],
  ["cerdo", /cerdo|lomo|costilla|solomillo|presa|aguja|chuleta|longaniza|codillo|magras/], ["ternera", /ternera|carrillera|redondo|entrecot|filete|carne|rabo|aleta|falda|espaldilla|osobuco|guiso|estofado|rancho/],
  ["verdura-rellena", /rellen/], ["patatas", /^patata/], ["verduras", /^(verdura|menestra|pisto|alcachofa|esparrago|coliflor|brocoli|acelga|pencas|puerro|calabacin|berenjena|judias verdes|setas|champi|coles|repollo|habas|guisantes|pimiento|tomate|cebolla|endibia|cogollo|boniato|calabaza)/],
  ["flan", /^flan|crema cuajada|natillas/], ["bizcocho", /bizcoch|magdalen|pastel|brazo/], ["tarta", /^tarta|tartita|tartaleta/], ["galletas", /galleta|lenguas de gato|barritas|orejas/],
  ["mousse", /mousse|semifrio|goxua|vasito|copa|chupito|crema fria de mango/], ["helado", /helado|sorbete|granizado|limones rellenos/],
  ["fruta", /fruta|brocheta|pina|melon|kiwi|compota|manzana|pera|carpaccio de naranja|sopa de fresa/], ["masa-dulce", /saquito|canutillo|hojaldre|rollito|estrella|berlinesa/],
];
const catOf = (t) => (CATS.find(([, re]) => re.test(main(t))) ?? CATS.find(([, re]) => re.test(norm(t))))?.[0];

// Banco de fotos revisadas por tipo: existentes + asignadas ahora.
const title = Object.fromEntries(recipes.map((r) => [r.id, r.title]));
const bank = {};
for (const [id, e] of Object.entries(existing)) { const k = catOf(title[id] ?? ""); if (k) (bank[k] ??= []).push({ reuse: id, file: e.file, author: e.author, license: e.license, url: e.url }); }
for (const [id, p] of Object.entries(plan)) { const k = catOf(title[id]); if (k) (bank[k] ??= []).push({ reuse: id, file: `${id}.jpg`, author: p.author, license: p.license, url: p.url }); }

let fallback = 0; const none = [];
for (const r of recipes) {
  if (existing[r.id] || plan[r.id]) continue;
  const k = catOf(r.title);
  // Si el tipo no tiene fotos libres, se prueba un tipo parecido y, al final, se permite repetir algo más.
  const NEAR = { pavo: ["pollo"], conejo: ["pollo", "ternera"], rape: ["merluza", "bacalao"], "pescado-azul": ["salmon", "merluza"], crepes: ["masa-dulce", "bizcocho"], "masa-dulce": ["bizcocho", "tarta"], verduras: ["verdura-rellena", "patatas"], undefined: ["verduras", "patatas", "huevos"] };
  const pick = (cap) => [k, ...(NEAR[k] ?? [])].map((kk) => (bank[kk] ?? []).filter((o) => (uses.get(o.url) ?? 0) < cap).sort((a, b) => (uses.get(a.url) ?? 0) - (uses.get(b.url) ?? 0))).find((l) => l.length) ?? [];
  let opts = pick(4); if (!opts.length) opts = pick(6); if (!opts.length) opts = pick(9);
  if (!opts.length) { none.push(`${r.id} [${k ?? "?"}] ${r.title}`); continue; }
  const o = opts[0];
  uses.set(o.url, (uses.get(o.url) ?? 0) + 1);
  plan[r.id] = { reuse: o.reuse, file: o.file, author: o.author, license: o.license, url: o.url };
  fallback++;
}
writeFileSync("scripts/photo-plan-4.json", JSON.stringify(plan, null, 1));
console.log("propias", Object.values(plan).filter((p) => p.copy).length, "de plato base", fallback, "sin foto", none.length);
console.log(none.join("\n"));
