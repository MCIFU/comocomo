import { DESSERTS, DISH_KEYWORDS, dishes, healthTags, ingredients, prices, recipes, SEARCH_TAGS, type HealthTag } from "@comocomo/content";

export const catalog = new Map(ingredients.map((i) => [i.id, i]));
export const recipeById = new Map(recipes.map((r) => [r.id, r]));
export { DISH_KEYWORDS, dishes, ingredients, prices, recipes, SEARCH_TAGS };

export const ingredientName = (id: string) => catalog.get(id)?.name ?? id;
/** Nombre corto para chips y listas ("Pollo (muslos o pechuga)" -> "Pollo") */
export const shortName = (id: string) => ingredientName(id).replace(/\s*\(.*\)\s*$/, "");

export const AISLE_LABEL: Record<string, string> = {
  produce: "Frutas y verduras", butcher: "Carnicería", fish: "Pescadería", dairy: "Lácteos y huevos",
  pantry: "Despensa", frozen: "Congelados", bakery: "Panadería", other: "Otros",
};
export const AISLE_ORDER = ["produce", "butcher", "fish", "dairy", "bakery", "pantry", "frozen", "other"];

/** Etiquetas de salud de cada receta (se calculan una vez a partir de los ingredientes). */
const dessertSet = new Set(DESSERTS);
export const HEALTH = new Map(recipes.map((r) => [r.id, healthTags(r, dessertSet.has(r.id))]));
export const idsWithHealth = (tag: HealthTag) => recipes.filter((r) => HEALTH.get(r.id)!.includes(tag)).map((r) => r.id);
