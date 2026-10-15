import { DESSERTS } from "@comocomo/content";
import type { Recipe } from "@comocomo/schemas";
import { catalog, recipes } from "./data";

export type Course = "primero" | "segundo" | "postre";

const DESSERT_SET = new Set(DESSERTS);
// Platos que en un menú del día van de primero (se mira en el plato principal del título).
const FIRST = /(^|\s)(sopa|crema|caldo|consom|gazpacho|salmorejo|vichyssoise|ensalad|ensaladilla|arroz|paella|risotto|pasta|espagueti|macarr|tallarin|fideo|fideu|lasa|canelon|ñoqui|noqui|lenteja|garbanzo|alubia|fabada|fabes|jud[ií]as|potaje|menestra|pisto|verdura|cogollo|alcachofa|esp[aá]rrago|quiche|tarta salada|empanada|coliflor|br[oó]coli|acelga|pencas|puerro|calabac|berenjena|pimientos? rellenos|tomates? rellenos|setas|champi|patatas|boniato|guisantes|habas|polenta|cusc[uú]s|quinoa|crepes)/i;
// Lo que no encaja en un menú del día (tapas sueltas, salsas, panes, bocadillos…).
const SKIP = /^(salsa|alioli|mayonesa|hummus|mojo|dip |pan |pan$|tostas? |tostada|bocadillo|montadito|pinchos? |pinchitos|croquetas? |empanadillas? |hamburguesas? |s[aá]ndwich|wraps? |pizzas? |tacos |naan|volovanes|brochetas de queso|saquitos|cestas)/i;
// Carne, pescado o huevo como plato principal → segundo.
const PROTEIN = /(^|\s)(pollo|pavo|ternera|cerdo|cordero|conejo|carrilleras?|chuletas?|chuletillas|solomillo|lomo|costillas?|alb[oó]ndigas|merluza|salm[oó]n|bacalao|rape|lubina|bonito|at[uú]n|caballa|sardinas|boquerones|anchoas|gallo|trucha|calamar|chipirones|pulpo|sepia|mejillones|almejas|langostinos|gambas|cachopo|filetes?|entrecot|redondo|muslos|alitas|pechugas?|codillo|magras|osobuco|aleta|falda|espaldilla|marmitako|zarzuela|huevos?|tortilla|revuelto|guiso de|estofado|rancho|aguja|cerdo|presa|picantones|secretaria|caracolas|rollitos de (pavo|pollo|trucha|gallo)|popietas)/i;

const hasProtein = (r: Recipe) =>
  r.ingredients.some((i) => {
    const tags = catalog.get(i.ingredientId)?.tags ?? [];
    return !i.optional && (tags.includes("meat") || tags.includes("fish") || tags.includes("seafood") || tags.includes("poultry"));
  });

/** Lo principal del título: lo que va antes de « con », « en », « sobre »… («Merluza en papillote con verduras» → «Merluza»). */
const mainDish = (title: string) => title.replace(/\s*\(.*\)/, "").split(/ con | en | sobre | al | a la | y |,/i)[0]!;

export function courseOf(r: Recipe): Course | null {
  if (DESSERT_SET.has(r.id)) return "postre";
  if (SKIP.test(r.title + " ")) return null;
  const main = mainDish(r.title);
  if (PROTEIN.test(main) && !/^(ensalad|crema|sopa|paella|arroz|fideu|pasta|macarr|espagueti|tallarin|salmorejo|lentejas|garbanzos|alubias)/i.test(main)) return "segundo";
  if (FIRST.test(main)) return "primero";
  return hasProtein(r) ? "segundo" : "primero";
}

const byCourse: Record<Course, Recipe[]> = { primero: [], segundo: [], postre: [] };
for (const r of recipes) {
  const c = courseOf(r);
  if (c) byCourse[c].push(r);
}

/** Generador pseudoaleatorio con semilla: el mismo día da el mismo menú. */
function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

export function dayKey(d = new Date()) {
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

/** Menú del día: primero, segundo y postre. Cada plato tiene su propio «barajado», para poder cambiar uno solo.
 *  `pool` limita los platos (filtros activos); si un plato no tiene candidatos con el filtro, se usa la lista completa. */
export function dailyMenu(day: number, shuffles: Record<Course, number>, pool?: (r: Recipe) => boolean): Record<Course, Recipe | undefined> {
  const pick = (course: Course, i: number) => {
    const list = byCourse[course];
    const l = pool ? list.filter(pool) : list;
    const src = l.length ? l : list;
    const rand = rng(day * 31 + i * 101 + shuffles[course] * 7919);
    rand(); rand();
    return src[Math.floor(rand() * src.length)];
  };
  return { primero: pick("primero", 0), segundo: pick("segundo", 1), postre: pick("postre", 2) };
}

/** Cuántos candidatos tiene cada plato con el filtro actual. */
export function menuPoolSize(pool?: (r: Recipe) => boolean): Record<Course, number> {
  const n = (c: Course) => (pool ? byCourse[c].filter(pool).length : byCourse[c].length);
  return { primero: n("primero"), segundo: n("segundo"), postre: n("postre") };
}
