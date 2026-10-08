import type { Recipe } from "@comocomo/schemas";
import { recipes as espana } from "./recipes";
import { recipesMundo } from "./recipes-mundo";

export { ingredients, prices, EQUIPMENT } from "./ingredients";
export const recipes: Recipe[] = [...espana, ...recipesMundo];
