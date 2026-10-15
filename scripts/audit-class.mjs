import { recipes, DESSERTS } from "../packages/content/src/index.ts";
const D = new Set(DESSERTS);
const SWEET = new Set(["azucar","chocolate","leche-condensada","miel","cacao","dulce-de-leche","mascarpone","bizcochos","galletas"]);
const MEATFISH = /pollo|ternera|cerdo|cordero|conejo|pavo|jamon|chorizo|morcilla|panceta|beicon|salchichas|merluza|salmon|bacalao|atun|gambas|langostinos|mejillones|almejas|calamares|pulpo|rape|lubina|bonito|caballa|sardinas|boquerones|anchoas|trucha|gallo|txistorra|higado/;
const out = { sweetNotDessert: [], dessertWithMeat: [], cuisineSuspect: [] };
for (const r of recipes) {
  const sugar = r.ingredients.filter((i) => SWEET.has(i.ingredientId)).reduce((a, i) => a + (i.unit === "g" || i.unit === "ml" ? i.qty : 0), 0);
  const meat = r.ingredients.some((i) => MEATFISH.test(i.ingredientId));
  if (!D.has(r.id) && sugar >= 80 && !meat) out.sweetNotDessert.push(r.id + " | " + r.title);
  if (D.has(r.id) && meat) out.dessertWithMeat.push(r.id);
  const t = r.title.toLowerCase();
  const hints = [[/curry|tikka|masala|dal |naan/, "india"], [/sushi|teriyaki|tataki|ramen|miso|gyoza|tempura de|katsu/, "japonesa"], [/tacos|burrito|fajita|guacamole|nachos|quesadilla/, "mexicana"], [/ceviche/, "peruana"], [/wok|chop suey|agridulce/, "china"], [/risotto|lasa|carpaccio|tiramis|pesto|ñoquis|noquis|panna/, "italiana"], [/hummus|falafel|tabul|shawarma/, "oriente-medio"], [/couscous|cuscús|tajín|tajin/, "marroqui"], [/hamburguesa|brownie|cheesecake|pancake|tortitas americanas|barbacoa/, "estadounidense"], [/quiche|crepes?|clafoutis|vichyssoise|gratin/, "francesa"]];
  for (const [re, cu] of hints) if (re.test(t) && r.cuisine !== cu) { out.cuisineSuspect.push(`${r.id} [${r.cuisine}→${cu}?] ${r.title}`); break; }
}
for (const [k, v] of Object.entries(out)) console.log(`\n## ${k} (${v.length})\n` + v.join("\n"));
