import type { Recipe } from "@comocomo/schemas";
import { recipes as espana } from "./recipes";
import { recipesMundo } from "./recipes-mundo";
import { recipesMundo2 } from "./recipes-mundo-2";
import { recipesEspana2 } from "./recipes-espana-2";
import { recipesEuropa } from "./recipes-europa";
import { recipesAsia } from "./recipes-asia";
import { recipesAmericaAfrica } from "./recipes-america-africa";
import { recipesCasa } from "./recipes-casa";
import { recipesEuropa2 } from "./recipes-europa-2";
import { recipesAsia2 } from "./recipes-asia-2";
import { recipesAmerica2 } from "./recipes-america-2";
import { recipesWok } from "./recipes-wok";
import { recipesPostres } from "./recipes-postres";
import { recipesCasa2 } from "./recipes-casa-2";

export { ingredients, prices, EQUIPMENT } from "./ingredients";
export const recipes: Recipe[] = [...espana, ...recipesMundo, ...recipesMundo2, ...recipesEspana2, ...recipesEuropa, ...recipesAsia, ...recipesAmericaAfrica, ...recipesCasa, ...recipesEuropa2, ...recipesAsia2, ...recipesAmerica2, ...recipesWok, ...recipesPostres, ...recipesCasa2];
import { DISH_KEYWORDS as D1 } from "./dishes";
import { DISH_KEYWORDS_2 } from "./dishes-2";
export { DESSERTS, SEARCH_TAGS } from "./dishes-2";
export const DISH_KEYWORDS: Record<string, string[]> = { ...D1 };
for (const [k, v] of Object.entries(DISH_KEYWORDS_2)) DISH_KEYWORDS[k] = [...new Set([...(DISH_KEYWORDS[k] ?? []), ...v])];
/** Para parseDishIntent: id de receta + nombres con los que se pide. */
export const dishes = Object.entries(DISH_KEYWORDS).map(([id, keywords]) => ({ id, keywords }));
