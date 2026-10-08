import { DISH_KEYWORDS, dishes, ingredients, prices, recipes } from "@comocomo/content";

export const catalog = new Map(ingredients.map((i) => [i.id, i]));
export const recipeById = new Map(recipes.map((r) => [r.id, r]));
export { DISH_KEYWORDS, dishes, ingredients, prices, recipes };

export const ingredientName = (id: string) => catalog.get(id)?.name ?? id;
/** Nombre corto para chips y listas ("Pollo (muslos o pechuga)" -> "Pollo") */
export const shortName = (id: string) => ingredientName(id).replace(/\s*\(.*\)\s*$/, "");

export const AISLE_LABEL: Record<string, string> = {
  produce: "Frutas y verduras", butcher: "Carnicería", fish: "Pescadería", dairy: "Lácteos y huevos",
  pantry: "Despensa", frozen: "Congelados", bakery: "Panadería", other: "Otros",
};
export const AISLE_ORDER = ["produce", "butcher", "fish", "dairy", "bakery", "pantry", "frozen", "other"];
