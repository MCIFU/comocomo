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
import { recipesTapasVeg } from "./recipes-tapas-veg";
import { recipesArg01 } from "./recipes-arg-01";
import { recipesArg02 } from "./recipes-arg-02";
import { recipesArg03 } from "./recipes-arg-03";
import { recipesArg04 } from "./recipes-arg-04";
import { recipesArg05 } from "./recipes-arg-05";
import { recipesArg06 } from "./recipes-arg-06";
import { recipesArg07 } from "./recipes-arg-07";
import { recipesArg08 } from "./recipes-arg-08";
import { recipesArg09 } from "./recipes-arg-09";
import { recipesArg10 } from "./recipes-arg-10";
import { recipesArg11 } from "./recipes-arg-11";
import { recipesArg12 } from "./recipes-arg-12";
import { recipesArg13 } from "./recipes-arg-13";
import { recipesArg14 } from "./recipes-arg-14";
import { recipesArg15 } from "./recipes-arg-15";
import { recipesArg16 } from "./recipes-arg-16";
import { recipesArg17 } from "./recipes-arg-17";
import { recipesArg18 } from "./recipes-arg-18";
import { recipesArg19 } from "./recipes-arg-19";
import { recipesArg20 } from "./recipes-arg-20";
import { recipesArg21 } from "./recipes-arg-21";
import { recipesArg22 } from "./recipes-arg-22";
import { recipesArg23 } from "./recipes-arg-23";
import { recipesArg24 } from "./recipes-arg-24";
import { recipesArg25 } from "./recipes-arg-25";
import { recipesArg26 } from "./recipes-arg-26";
import { recipesArg27 } from "./recipes-arg-27";
import { recipesSalud } from "./recipes-salud";
import { recipesColesterol } from "./recipes-colesterol";
import { recipesColesterolFec } from "./recipes-colesterol-fec";

export { ingredients, prices, EQUIPMENT } from "./ingredients";
/** Platos de libros españoles cuyo origen real es otro país: así aparecen al filtrar por ese país. */
const CUISINE_FIX: Record<string, string> = {
  "lasana-calabacin-champinones-jamon": "italiana",
  "lasana-espinacas-pavo-calabacin": "italiana",
  "lasana-alcachofas-jamon": "italiana",
  "noquis-jamon-salsa-queso-azul": "italiana",
  "carpaccio-bonito-eneldo": "italiana",
  "tallarines-pesto-verduras": "italiana",
  "quiche-brocoli-almejas": "francesa",
  "quiche-calabacin-beicon": "francesa",
  "quiche-remolacha-esparragos": "francesa",
  "crepes-champinones-yogur-albahaca": "francesa",
  "crepes-verduras-langostinos": "francesa",
  "crepes-jamon-queso-frambuesa": "francesa",
  "crepes-pavo-queso-salsa-lechuga": "francesa",
  "crepes-berenjena-queso-pavo": "francesa",
  "crepes-puerro-queso": "francesa",
  "crepes-txistorra-huevo-cebolla": "francesa",
  "crepes-solomillo-queso-azul": "francesa",
  "crepes-queso-naranja-nueces": "francesa",
  "crepes-mousse-chocolate-cafe": "francesa",
  "crepes-chocolate-platano": "francesa",
  "vichyssoise-guisantes": "francesa",
  "macarrones-beicon-espinacas-mornay": "francesa",
  "hamburguesas-verduras-avena": "estadounidense",
  "hamburguesas-polenta-queso-azul": "estadounidense",
  "hamburguesas-garbanzo-panceta": "estadounidense",
  "hamburguesas-garbanzo-polenta": "estadounidense",
  "hamburguesas-arroz-lentejas": "estadounidense",
  "hamburguesas-rellenas-mozzarella": "estadounidense",
  "hamburguesa-hojaldre": "estadounidense",
  "hamburguesa-rebozada-cebolletas-puerros": "estadounidense",
  "hamburguesa-champinones-guacamole": "estadounidense",
  "hamburguesas-pavo-rellenas-queso": "estadounidense",
  "hamburguesas-bacalao-mermelada-calabaza": "estadounidense",
  "cordero-cuscus": "marroqui",
  "cuscus-conejo-naranja": "marroqui",
  "pierna-cordero-miel": "marroqui",
};
const ORIGIN_NAME: Record<string, string> = {"italiana":"Italia","francesa":"Francia","estadounidense":"Estados Unidos","marroqui":"Marruecos"};
const allRecipes: Recipe[] = [...espana, ...recipesMundo, ...recipesMundo2, ...recipesEspana2, ...recipesEuropa, ...recipesAsia, ...recipesAmericaAfrica, ...recipesCasa, ...recipesEuropa2, ...recipesAsia2, ...recipesAmerica2, ...recipesWok, ...recipesPostres, ...recipesCasa2, ...recipesTapasVeg, ...recipesArg01, ...recipesArg02, ...recipesArg03, ...recipesArg04, ...recipesArg05, ...recipesArg06, ...recipesArg07, ...recipesArg08, ...recipesArg09, ...recipesArg10, ...recipesArg11, ...recipesArg12, ...recipesArg13, ...recipesArg14, ...recipesArg15, ...recipesArg16, ...recipesArg17, ...recipesArg18, ...recipesArg19, ...recipesArg20, ...recipesArg21, ...recipesArg22, ...recipesArg23, ...recipesArg24, ...recipesArg25, ...recipesArg26, ...recipesArg27, ...recipesSalud, ...recipesColesterol, ...recipesColesterolFec];
export const recipes: Recipe[] = allRecipes.map((r) =>
  CUISINE_FIX[r.id] ? { ...r, cuisine: CUISINE_FIX[r.id] as Recipe["cuisine"], origin: `${ORIGIN_NAME[CUISINE_FIX[r.id]!]} (versión casera española)` } : r,
);
import { DISH_KEYWORDS as D1 } from "./dishes";
import { DISH_KEYWORDS_2 } from "./dishes-2";
export { DESSERTS, SEARCH_TAGS } from "./dishes-2";
export const DISH_KEYWORDS: Record<string, string[]> = { ...D1 };
for (const [k, v] of Object.entries(DISH_KEYWORDS_2)) DISH_KEYWORDS[k] = [...new Set([...(DISH_KEYWORDS[k] ?? []), ...v])];
/** Para parseDishIntent: id de receta + nombres con los que se pide. */
export const dishes = Object.entries(DISH_KEYWORDS).map(([id, keywords]) => ({ id, keywords }));

export { HEALTH_LABEL, NRV, healthTags, nutritionPerServing, type HealthTag, type Nutrients } from "./nutrition";
