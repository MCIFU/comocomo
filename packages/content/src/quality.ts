import type { Ingredient, Recipe } from "@comocomo/schemas";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
/** Ingredientes que suelen quedar implícitos en los pasos («sazona», «en el aceite»). */
const SILENT = new Set(["sal", "pimienta", "aceite"]);
/** Formas genéricas válidas de referirse a un ingrediente en los pasos. */
const GENERIC: Record<string, string[]> = {
  huevo: ["yema", "clara"], merluza: ["pescado"], salmon: ["pescado"], bacalao: ["pescado"],
  ternera: ["carne"], cerdo: ["carne"], cordero: ["carne"], "ternera-picada": ["carne"], pollo: ["carne"],
  perejil: ["hierbas"], cilantro: ["hierbas"], menta: ["hierbas"], albahaca: ["hierbas"],
  comino: ["especias"], pimenton: ["especias"], curry: ["especias"], canela: ["especias"], oregano: ["especias"],
  zanahoria: ["verduras"], calabacin: ["verduras"], cebolla: ["verduras"], pimiento: ["verduras"], berenjena: ["verduras"],
  parmesano: ["queso"], feta: ["queso"], mozzarella: ["queso"], "queso-crema": ["queso"],
};
const STOP = new Set(["de", "del", "para", "con", "seca", "secas", "seco", "fresco", "fresca", "cocidos", "cocidas", "lata", "bote"]);

function words(ing: Ingredient): string[] {
  const base = norm(ing.name.replace(/\s*\(.*\)/, "")).split(/[\s,]+/).filter((w) => w.length > 2 && !STOP.has(w));
  return [...base.map((w) => w.slice(0, Math.max(4, w.length - 2))), ...ing.aliases.map(norm), norm(ing.id).split("-")[0]!, ...(GENERIC[ing.id] ?? [])];
}

/**
 * Comprobaciones de coherencia editorial de una receta. Devuelve los problemas encontrados:
 * ingredientes que ningún paso usa, equipo declarado que no coincide con los pasos y tiempos incoherentes.
 */
export function auditRecipe(r: Recipe, catalog: Map<string, Ingredient>): string[] {
  const out: string[] = [];
  const text = norm(r.steps.map((s) => s.text).join(" ") + " " + (r.note ?? ""));
  for (const ri of r.ingredients) {
    const ing = catalog.get(ri.ingredientId);
    if (!ing || SILENT.has(ri.ingredientId)) continue;
    if (!words(ing).some((w) => w && text.includes(w))) out.push(`ningún paso usa «${ri.ingredientId}»`);
  }
  if (/(?<!papel de )horn(o|ea)/.test(text) && !r.equipment.includes("horno") && !/o la sarten|o al horno|en el horno o|sin horno/.test(text)) out.push("usa el horno pero no lo declara");
  if (r.equipment.includes("horno") && !/horn|gratin/.test(text)) out.push("declara horno y no lo usa");
  if (/tritura(?!d)/.test(text) && !/no en batidora|si la quieres|tritura o machaca|si quieres/.test(text) && !r.equipment.includes("batidora")) out.push("tritura sin batidora declarada");
  const stepMin = r.steps.reduce((a, s) => a + (s.durationSec ?? 0), 0) / 60;
  if (r.cookMin > 0 && stepMin < r.cookMin * 0.5) out.push(`los pasos suman ${stepMin} min y la cocción declarada es ${r.cookMin} min`);
  for (const s of r.steps) if (s.tempC && (s.tempC < 140 || s.tempC > 260)) out.push(`temperatura poco habitual: ${s.tempC} °C`);
  return out;
}
