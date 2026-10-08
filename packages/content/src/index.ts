import type { Recipe } from "@comocomo/schemas";
import { recipes as espana } from "./recipes";
import { recipesMundo } from "./recipes-mundo";

export { ingredients, prices, EQUIPMENT } from "./ingredients";
export const recipes: Recipe[] = [...espana, ...recipesMundo];
export { DISH_KEYWORDS } from "./dishes";
import { DISH_KEYWORDS } from "./dishes";
/** Para parseDishIntent: id de receta + nombres con los que se pide. */
export const dishes = Object.entries(DISH_KEYWORDS).map(([id, keywords]) => ({ id, keywords }));
