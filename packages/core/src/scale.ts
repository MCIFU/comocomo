import type { Recipe } from "@comocomo/schemas";

/** Escala ingredientes linealmente. Los tiempos de cocción NO se escalan. */
export function scaleRecipe(recipe: Recipe, servings: number): Recipe {
  if (!Number.isInteger(servings) || servings < 1) throw new RangeError("servings debe ser un entero >= 1");
  const k = servings / recipe.baseServings;
  return {
    ...recipe,
    baseServings: servings,
    ingredients: recipe.ingredients.map((i) => ({ ...i, qty: i.qty * k })),
  };
}
