// Auditoría de calidad de recetas: detecta incoherencias que los tests de esquema no ven.
// Uso: npx vite-node scripts/audit.mjs
import { recipes, ingredients } from "../packages/content/src/index.ts";
import { toBase } from "../packages/core/src/units.ts";
const cat = new Map(ingredients.map((i) => [i.id, i]));
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
// Palabras con las que un paso puede referirse a cada ingrediente
const WORDS = (id) => {
  const ing = cat.get(id);
  const base = norm(ing.name.replace(/\s*\(.*\)/, "")).split(/[\s,]+/).filter((w) => w.length > 2 && !["de", "del", "para", "con", "seca", "secas", "seco", "fresco", "fresca", "cocidos", "cocidas", "lata", "bote"].includes(w));
  return [...base.map((w) => w.slice(0, Math.max(4, w.length - 2))), ...ing.aliases.map(norm), norm(id).split("-")[0]];
};
const SILENT = new Set(["sal", "pimienta", "aceite"]);
// Formas genéricas válidas de referirse a un ingrediente en los pasos
const GENERIC = { huevo: ["yema", "clara"], merluza: ["pescado"], salmon: ["pescado"], bacalao: ["pescado"], ternera: ["carne"], cerdo: ["carne"], cordero: ["carne"], "ternera-picada": ["carne"], pollo: ["carne"],
  perejil: ["hierbas"], cilantro: ["hierbas"], menta: ["hierbas"], albahaca: ["hierbas"], comino: ["especias"], pimenton: ["especias"], curry: ["especias"], canela: ["especias"], oregano: ["especias"],
  zanahoria: ["verduras"], calabacin: ["verduras"], cebolla: ["verduras"], pimiento: ["verduras"], berenjena: ["verduras"], parmesano: ["queso"], feta: ["queso"], mozzarella: ["queso"] }; // a menudo implícitos («sazona», «en el aceite»)
const issues = [];
for (const r of recipes) {
  const text = norm(r.steps.map((s) => s.text).join(" ") + " " + (r.note ?? ""));
  const n = r.baseServings;
  for (const ri of r.ingredients) {
    const g = toBase(ri.qty, ri.unit) / n;
    if (!SILENT.has(ri.ingredientId) && ![...WORDS(ri.ingredientId), ...(GENERIC[ri.ingredientId] ?? [])].some((w) => w && text.includes(w))) issues.push([r.id, `no se menciona en los pasos: ${ri.ingredientId}`]);
    if (ri.ingredientId === "sal" && g > 4.5 && !/agua|hervir|cuece|cocer/.test(text)) issues.push([r.id, `sal alta: ${g.toFixed(1)} g/ración`]);
    if (["pollo", "ternera", "cerdo", "cordero", "ternera-picada", "merluza", "salmon", "bacalao"].includes(ri.ingredientId) && (g > 380 || g < 60)) issues.push([r.id, `${ri.ingredientId} ${g.toFixed(0)} g/ración`]);
    if (["pasta", "arroz", "arroz-basmati", "fideos-arroz", "fideos-ramen"].includes(ri.ingredientId) && !ri.optional && (g > 140 || g < 40) && r.cuisine !== "espanola") issues.push([r.id, `${ri.ingredientId} ${g.toFixed(0)} g/ración`]);
  }
  const sum = r.steps.reduce((a, s) => a + (s.durationSec ?? 0), 0) / 60;
  const total = r.prepMin + r.cookMin;
  if (r.cookMin > 0 && sum < r.cookMin * 0.5) issues.push([r.id, `pasos suman ${sum} min y la cocción declarada es ${r.cookMin} min`]);
  for (const s of r.steps) if (s.tempC && (s.tempC < 140 || s.tempC > 260)) issues.push([r.id, `temperatura rara ${s.tempC}`]);
  if (/(?<!papel de )horn(o|ea)/.test(text) && !r.equipment.includes("horno") && !/o la sarten|o al horno|en el horno o|sin horno/.test(text)) issues.push([r.id, "menciona horno pero no lo pide"]);
  if (r.equipment.includes("horno") && !/horn|gratin/.test(text)) issues.push([r.id, "pide horno y no lo usa"]);
  if (/tritura(?!d)/.test(text) && !/no en batidora|si la quieres|tritura o machaca|si quieres/.test(text) && !r.equipment.includes("batidora")) issues.push([r.id, "tritura sin batidora en equipo"]);
}
const by = new Map();
for (const [id, msg] of issues) by.set(id, [...(by.get(id) ?? []), msg]);
for (const [id, msgs] of by) console.log(id.padEnd(28), msgs.join(" | "));
console.log("\nrecetas con avisos:", by.size, "de", recipes.length);
