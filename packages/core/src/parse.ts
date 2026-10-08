import type { Ingredient } from "@comocomo/schemas";

export interface ParsedQuery {
  servings?: number;
  budget?: number;
  maxMinutes?: number;
  /** ids de ingredientes que el usuario tiene */
  have: string[];
  /** ids de ingredientes que no quiere */
  dislikes: string[];
  /** alérgenos o ids de ingrediente (restricción dura) */
  allergies: string[];
  equipment: string[];
}

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const EQUIPMENT_TERMS: Record<string, string[]> = {
  horno: ["horno"],
  microondas: ["microondas", "micro ondas"],
  airfryer: ["air fryer", "airfryer", "freidora de aire"],
  sarten: ["sarten"],
  olla: ["olla", "cacerola"],
  batidora: ["batidora", "licuadora"],
};

const ALLERGEN_TERMS: Record<string, string[]> = {
  gluten: ["gluten", "celiaco", "celiaca"],
  lactose: ["lactosa", "lactosa", "lacteos"],
  milk: ["leche"],
  egg: ["huevo", "huevos"],
  shellfish: ["marisco", "mariscos", "crustaceos"],
  fish: ["pescado", "pescados"],
  nuts: ["frutos secos", "cacahuetes"],
  soy: ["soja"],
  sesame: ["sesamo", "ajonjoli"],
  mollusc: ["molusco", "moluscos", "calamar", "calamares", "pulpo", "mejillones"],
  peanut: ["cacahuete", "cacahuetes", "mani"],
};

const NEG = /\b(no me gusta(?:n)?|no quiero|no como|sin|odio|no soporto|evitar)\b/;
const ALLERGY = /\b(alergia(?:s)? a(?:l)?|alergico(?:s)? a(?:l)?|alergica(?:s)? a(?:l)?|intolerante a(?:l)?|intolerancia a(?:l)?)\b/;

function termRegex(term: string) {
  return new RegExp(`(?<![a-z])${esc(norm(term))}(?:s|es)?(?![a-z])`);
}

/**
 * Interpreta texto libre ("Tengo pollo y arroz, 8 €, somos 3, sin cebolla") en filtros.
 * Basado en reglas: rápido, gratuito y predecible. La IA solo entra cuando esto no basta.
 */
export function parseQuery(text: string, catalog: Ingredient[]): ParsedQuery {
  const t = norm(text);
  const out: ParsedQuery = { have: [], dislikes: [], allergies: [], equipment: [] };

  const servings = t.match(/\bsomos (\d{1,2})\b|\b(\d{1,2}) (?:personas|comensales|raciones)\b|\bpara (\d{1,2})\b/);
  if (servings) out.servings = Number(servings[1] ?? servings[2] ?? servings[3]);
  else if (/\bsolo para mi\b|\bpara uno\b|\bvivo solo\b/.test(t)) out.servings = 1;
  else if (/\bsomos dos\b|\bpara dos\b|\bpareja\b/.test(t)) out.servings = 2;

  const budget = t.match(/(\d+(?:[.,]\d+)?)\s*(?:€|euros?|eur)(?![a-z])/) ?? t.match(/\b(?:presupuesto|gastar|con) (?:de )?(\d+(?:[.,]\d+)?)\b/);
  if (budget) out.budget = Number(budget[1]!.replace(",", "."));

  if (/\bmedia hora\b/.test(t)) out.maxMinutes = 30;
  else if (/\bun cuarto de hora\b/.test(t)) out.maxMinutes = 15;
  else {
    const h = t.match(/(\d+(?:[.,]\d+)?)\s*(?:h|horas?)\b/);
    const m = t.match(/(\d{1,3})\s*(?:min|minutos)\b/);
    if (m) out.maxMinutes = Number(m[1]);
    else if (h) out.maxMinutes = Math.round(Number(h[1]!.replace(",", ".")) * 60);
    else if (/\buna hora\b/.test(t)) out.maxMinutes = 60;
  }

  for (const [id, terms] of Object.entries(EQUIPMENT_TERMS)) {
    if (terms.some((x) => termRegex(x).test(t))) out.equipment.push(id);
  }

  // Condiciones que implican una restricción dura aunque no digan "alergia".
  // Ante la duda, restringir: es preferible ocultar una receta que sugerir una insegura.
  if (/(?<![a-z])(celiac[oa]s?|sin gluten)(?![a-z])/.test(t)) out.allergies.push("gluten");
  if (/(?<![a-z])(sin lactosa|intolerante a la lactosa)(?![a-z])/.test(t)) out.allergies.push("lactose");

  // Segmenta por cláusulas y clasifica cada una: alergia / rechazo / posesión
  const clauses = t.split(/[.;\n]|\bpero\b/);
  const matchers = catalog.map((i) => ({
    id: i.id,
    re: [i.id.replace(/-/g, " "), ...i.aliases].map(termRegex),
  }));
  const named = (s: string) => matchers.filter((m) => m.re.some((r) => r.test(s))).map((m) => m.id);

  for (const clause of clauses) {
    const allergyAt = clause.search(ALLERGY);
    const negAt = clause.search(NEG);
    if (allergyAt >= 0) {
      const tail = clause.slice(allergyAt);
      for (const [al, terms] of Object.entries(ALLERGEN_TERMS)) {
        if (terms.some((x) => termRegex(x).test(tail))) out.allergies.push(al);
      }
      out.allergies.push(...named(tail));
    } else if (negAt >= 0) {
      // lo anterior a la negación puede ser posesión ("tengo pollo, sin cebolla")
      out.have.push(...named(clause.slice(0, negAt)));
      out.dislikes.push(...named(clause.slice(negAt)));
    } else {
      out.have.push(...named(clause));
    }
  }

  const uniq = <T>(a: T[]) => [...new Set(a)];
  out.have = uniq(out.have).filter((id) => !out.dislikes.includes(id));
  out.dislikes = uniq(out.dislikes);
  out.allergies = uniq(out.allergies);
  return out;
}
