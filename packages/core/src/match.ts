import type { Ingredient, Recipe, Restriction } from "@comocomo/schemas";

export interface Query {
  have: ReadonlySet<string>;
  restrictions: Restriction[];
  maxMinutes?: number;
  equipment?: ReadonlySet<string>;
}

/**
 * SEGURIDAD: alergias/intolerancias/dietas son restricciones duras.
 * Una receta se descarta si cualquier ingrediente (incluso opcional) coincide
 * por id, por alérgeno o por tag. Esto es código determinista, nunca IA.
 */
export function violatesHardRestriction(recipe: Recipe, catalog: Map<string, Ingredient>, restrictions: Restriction[]): boolean {
  const hard = restrictions.filter((r) => r.kind !== "dislike");
  if (!hard.length) return false;
  return recipe.ingredients.some((ri) => {
    const ing = catalog.get(ri.ingredientId);
    // ingrediente desconocido: por seguridad, se trata como incompatible
    if (!ing) return true;
    return hard.some((r) => r.value === ing.id || ing.allergens.includes(r.value) || ing.tags.includes(r.value));
  });
}

function hitsDislike(recipe: Recipe, catalog: Map<string, Ingredient>, restrictions: Restriction[]): boolean {
  const dis = restrictions.filter((r) => r.kind === "dislike");
  return recipe.ingredients.some((ri) => {
    if (ri.optional) return false;
    const ing = catalog.get(ri.ingredientId);
    return !!ing && dis.some((r) => r.value === ing.id || ing.tags.includes(r.value));
  });
}

export interface Match {
  recipe: Recipe;
  have: string[];
  missing: string[];
  /** 0..1: fracción de ingredientes obligatorios que ya se tienen */
  coverage: number;
}

export function matchRecipes(recipes: Recipe[], catalog: Map<string, Ingredient>, q: Query): Match[] {
  const results: Match[] = [];
  for (const recipe of recipes) {
    if (violatesHardRestriction(recipe, catalog, q.restrictions)) continue;
    if (hitsDislike(recipe, catalog, q.restrictions)) continue;
    if (q.maxMinutes !== undefined && recipe.prepMin + recipe.cookMin > q.maxMinutes) continue;
    if (q.equipment && recipe.equipment.some((e) => !q.equipment!.has(e))) continue;
    const required = recipe.ingredients.filter((i) => !i.optional);
    const have = required.filter((i) => q.have.has(i.ingredientId)).map((i) => i.ingredientId);
    const missing = required.filter((i) => !q.have.has(i.ingredientId)).map((i) => i.ingredientId);
    results.push({ recipe, have, missing, coverage: required.length ? have.length / required.length : 0 });
  }
  return results.sort((a, b) => b.coverage - a.coverage || a.missing.length - b.missing.length);
}
