import type { Ingredient, Price, Recipe, Restriction } from "@comocomo/schemas";
import { recipeCost, type Cost } from "./cost";
import { matchRecipes } from "./match";
import { scaleRecipe } from "./scale";

/** Básicos que se asumen en casa salvo que el usuario diga lo contrario. */
export const STAPLES: ReadonlySet<string> = new Set(["sal", "pimienta", "aceite", "azucar", "vinagre"]);

export const EQUIPMENT_LABEL: Record<string, string> = {
  sarten: "sartén", olla: "olla", horno: "horno", batidora: "batidora", airfryer: "air fryer", microondas: "microondas",
};

export interface RecommendInput {
  have: ReadonlySet<string>;
  restrictions: Restriction[];
  servings: number;
  budget?: number;
  maxMinutes?: number;
  equipment?: ReadonlySet<string>;
  assumeStaples?: boolean;
}

export interface Recommendation {
  recipe: Recipe; // ya escalada a `servings`
  baseId: string;
  cost: Cost;
  have: string[];
  missing: string[];
  /** todo el coste mínimo cabe en el presupuesto */
  withinBudget: boolean;
  /** el mínimo cabe pero el máximo lo supera */
  mayExceedBudget: boolean;
  totalMinutes: number;
  reason: string;
  score: number;
}

export function recommend(
  recipes: Recipe[],
  catalog: Map<string, Ingredient>,
  prices: Price[],
  input: RecommendInput,
): Recommendation[] {
  const haveAll = new Set(input.have);
  if (input.assumeStaples ?? true) STAPLES.forEach((s) => haveAll.add(s));
  const userGaveIngredients = [...input.have].some((id) => !STAPLES.has(id));

  const matches = matchRecipes(recipes, catalog, {
    have: haveAll,
    restrictions: input.restrictions,
    maxMinutes: input.maxMinutes,
    equipment: input.equipment,
  });

  const out: Recommendation[] = [];
  for (const m of matches) {
    // Si el usuario dijo qué tiene, la receta debe usar al menos algo de ello.
    if (userGaveIngredients && !m.have.some((id) => input.have.has(id) && !STAPLES.has(id))) continue;

    const recipe = scaleRecipe(m.recipe, input.servings);
    const cost = recipeCost(recipe, prices, haveAll);
    const withinBudget = input.budget === undefined || cost.toBuy.min <= input.budget;
    if (!withinBudget) continue;
    const mayExceedBudget = input.budget !== undefined && cost.toBuy.max > input.budget;
    const totalMinutes = recipe.prepMin + recipe.cookMin;

    const usedFromUser = m.have.filter((id) => input.have.has(id) && !STAPLES.has(id)).length;
    const required = recipe.ingredients.filter((i) => !i.optional).length;
    const parts: string[] = [];
    if (usedFromUser > 0) parts.push(`Usa ${usedFromUser} de tus ingredientes`);
    if (m.missing.length === 0) parts.push("no necesitas comprar nada");
    else if (m.missing.length === 1) parts.push("solo te falta 1 ingrediente");
    else if (m.missing.length <= 3) parts.push(`solo te faltan ${m.missing.length} ingredientes`);
    if (input.budget !== undefined) parts.push(mayExceedBudget ? "puede rozar tu presupuesto" : "encaja con tu presupuesto");
    const eq = recipe.equipment.find((e) => input.equipment?.has(e));
    if (eq) parts.push(`se hace con tu ${EQUIPMENT_LABEL[eq] ?? eq}`);
    if (input.maxMinutes !== undefined) parts.push(`lista en ${totalMinutes} min`);
    const reason = parts.length
      ? parts[0]![0]!.toUpperCase() + parts.join(", ").slice(1) + "."
      : `Plato de ${recipe.origin} listo en ${totalMinutes} min.`;

    const score =
      m.coverage * 10 - m.missing.length * 0.5 - (cost.toBuy.max / input.servings) * 0.3 +
      (required ? usedFromUser / required : 0) * 4;
    out.push({
      recipe, baseId: m.recipe.id, cost, have: m.have, missing: m.missing,
      withinBudget, mayExceedBudget, totalMinutes, reason, score,
    });
  }
  return out.sort((a, b) => b.score - a.score);
}
