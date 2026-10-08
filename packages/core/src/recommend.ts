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
  /** lo que el usuario ha escrito que tiene ahora: las recetas deben usar algo de ello */
  have: ReadonlySet<string>;
  /** lo que tiene guardado en su despensa: cuenta como "ya lo tienes", pero no obliga a usarlo */
  pantry?: ReadonlySet<string>;
  restrictions: Restriction[];
  servings: number;
  budget?: number;
  maxMinutes?: number;
  equipment?: ReadonlySet<string>;
  assumeStaples?: boolean;
  /** solo estas cocinas (si se pidió "algo mexicano") */
  cuisines?: string[];
  /** platos pedidos por su nombre: van primero */
  dishes?: string[];
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
  const haveAll = new Set([...input.have, ...(input.pantry ?? [])]);
  // Sin despensa configurada se asumen los básicos; con despensa, manda la despensa.
  if (input.assumeStaples ?? !input.pantry) STAPLES.forEach((s) => haveAll.add(s));
  const userGaveIngredients = [...input.have].some((id) => !STAPLES.has(id));

  const matches = matchRecipes(recipes, catalog, {
    have: haveAll,
    restrictions: input.restrictions,
    maxMinutes: input.maxMinutes,
    equipment: input.equipment,
  });

  const out: Recommendation[] = [];
  const asked = new Set(input.dishes ?? []);
  for (const m of matches) {
    const isAsked = asked.has(m.recipe.id);
    if (input.cuisines?.length && !isAsked && !input.cuisines.includes(m.recipe.cuisine)) continue;
    // Si el usuario dijo qué tiene, la receta debe usar algo de ello, salvo que pidiera ese plato
    // o una cocina concreta (entonces se muestran todas y las que usan lo suyo van primero).
    if (!isAsked && !input.cuisines?.length && userGaveIngredients && !m.have.some((id) => input.have.has(id) && !STAPLES.has(id))) continue;

    const recipe = scaleRecipe(m.recipe, input.servings);
    const cost = recipeCost(recipe, prices, catalog, haveAll);
    // El presupuesto se compara con lo que pagarías en caja (envases completos), no con la parte proporcional.
    const buyMid = (cost.toBuy.min + cost.toBuy.max) / 2;
    const withinBudget = input.budget === undefined || buyMid <= input.budget;
    if (!withinBudget && !isAsked) continue;
    const mayExceedBudget = input.budget !== undefined && cost.toBuy.max > input.budget;
    const totalMinutes = recipe.prepMin + recipe.cookMin;

    const usedFromUser = m.have.filter((id) => (input.have.has(id) || input.pantry?.has(id)) && !STAPLES.has(id)).length;
    const required = recipe.ingredients.filter((i) => !i.optional).length;
    const parts: string[] = [];
    if (isAsked) parts.push("es el plato que buscas");
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
      m.coverage * 10 - m.missing.length * 0.5 - (buyMid / input.servings) * 0.3 +
      (required ? usedFromUser / required : 0) * 4 + (isAsked ? 100 : 0);
    out.push({
      recipe, baseId: m.recipe.id, cost, have: m.have, missing: m.missing,
      withinBudget, mayExceedBudget, totalMinutes, reason, score,
    });
  }
  return out.sort((a, b) => b.score - a.score);
}
