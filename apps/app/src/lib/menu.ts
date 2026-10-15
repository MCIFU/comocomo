import { DESSERTS } from "@comocomo/content";
import type { Recipe } from "@comocomo/schemas";
import { catalog, recipes } from "./data";

export type Course = "primero" | "segundo" | "postre";

const DESSERT_SET = new Set(DESSERTS);
// Platos que en un menú del día van de primero aunque lleven algo de carne o pescado.
const FIRST = /\b(sopa|crema|caldo|consom|gazpacho|salmorejo|vichyssoise|ensalad|ensaladilla|arroz|paella|risotto|pasta|espagueti|macarr|tallarin|fideo|fideu|lasa|canelon|ñoqui|noqui|lenteja|garbanzo|alubia|fabada|faba|judía|judias|potaje|menestra|pisto|verdura|puré|pure|cogollo|alcachofa|esparrago|espárrago|quiche|tarta salada|empanada)/i;
// Lo que no encaja en un menú del día (tapas sueltas, bebidas, salsas, panes...).
const SKIP = /\b(salsa|alioli|mayonesa|pan |tosta|bocadillo|montadito|pincho|brocheta|croqueta|empanadilla|hamburguesa|sándwich|sandwich|wrap|pizza|tacos?\b|dip|hummus|mojo)/i;

const hasProtein = (r: Recipe) =>
  r.ingredients.some((i) => {
    const tags = catalog.get(i.ingredientId)?.tags ?? [];
    return !i.optional && (tags.includes("meat") || tags.includes("fish") || tags.includes("seafood") || tags.includes("poultry"));
  });

export function courseOf(r: Recipe): Course | null {
  if (DESSERT_SET.has(r.id)) return "postre";
  if (SKIP.test(r.title)) return null;
  if (FIRST.test(r.title)) return "primero";
  if (hasProtein(r) || /\b(huevo|tortilla|revuelto)/i.test(r.title)) return "segundo";
  return "primero";
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
