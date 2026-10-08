import type { Recipe } from "@comocomo/schemas";
import { recipes as espana } from "./recipes";
import { recipesMundo } from "./recipes-mundo";
import { recipesMundo2 } from "./recipes-mundo-2";
import { recipesEspana2 } from "./recipes-espana-2";
import { recipesEuropa } from "./recipes-europa";
import { recipesAsia } from "./recipes-asia";
import { recipesAmericaAfrica } from "./recipes-america-africa";

export { ingredients, prices, EQUIPMENT } from "./ingredients";
export const recipes: Recipe[] = [...espana, ...recipesMundo, ...recipesMundo2, ...recipesEspana2, ...recipesEuropa, ...recipesAsia, ...recipesAmericaAfrica];
export { DISH_KEYWORDS } from "./dishes";
import { DISH_KEYWORDS } from "./dishes";
/** Para parseDishIntent: id de receta + nombres con los que se pide. */
export const dishes = Object.entries(DISH_KEYWORDS).map(([id, keywords]) => ({ id, keywords }));
