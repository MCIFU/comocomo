import type { Ingredient, Price, Recipe, Restriction } from "@comocomo/schemas";
import { recipeCost, type Money, type PurchaseLine } from "./cost";
import { violatesHardRestriction } from "./match";
import { scaleRecipe } from "./scale";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Básicos que casi todo el mundo tiene y no se cuentan en el precio de una receta. */
export const BASICS: ReadonlySet<string> = new Set(["sal", "aceite", "pimienta", "azucar", "vinagre"]);

export interface SearchOptions {
  /** textos extra por receta: país, nombres con los que se pide, etc. */
  extra?: Record<string, string[]>;
  restrictions?: Restriction[];
  maxMinutes?: number;
}

/**
 * Busca recetas por texto libre: todas las palabras deben aparecer en el título, el origen,
 * los ingredientes o los textos extra. Sin texto, devuelve todas. Las alergias siempre filtran.
 */
export function searchRecipes(recipes: Recipe[], catalog: Map<string, Ingredient>, query: string, opts: SearchOptions = {}): Recipe[] {
  const words = norm(query).split(/[^a-z0-9ñ]+/).filter((w) => w.length > 1 && !STOP.has(w));
  return recipes.filter((r) => {
    if (opts.restrictions?.length && violatesHardRestriction(r, catalog, opts.restrictions)) return false;
    if (opts.maxMinutes !== undefined && r.prepMin + r.cookMin > opts.maxMinutes) return false;
    if (!words.length) return true;
    const hay = norm([
      r.title, r.origin, r.cuisine,
      ...r.ingredients.map((i) => {
        const ing = catalog.get(i.ingredientId);
        return [ing?.name ?? "", ...(ing?.aliases ?? [])].join(" ");
      }),
      ...(opts.extra?.[r.id] ?? []),
    ].join(" "));
    // Coincidencia por prefijo de palabra: "pata" encuentra "patatas", "mex" encuentra "mexicana".
    return words.every((w) => new RegExp(`(^|[^a-z0-9ñ])${w}`).test(hay));
  });
}

const STOP = new Set(["de", "la", "el", "los", "las", "con", "y", "a", "al", "en", "un", "una", "algo", "quiero", "hacer", "receta", "recetas", "para", "me", "apetece"]);

export interface ShoppingPrice extends Money {
  lines: PurchaseLine[];
}

/**
 * Lo que cuesta comprar una receta para `servings` personas en el súper:
 * envases completos, sin contar los básicos (sal, aceite, pimienta, azúcar, vinagre).
 */
export function shoppingPrice(recipe: Recipe, servings: number, prices: Price[], catalog: Map<string, Ingredient>): ShoppingPrice {
  const c = recipeCost(scaleRecipe(recipe, servings), prices, catalog, BASICS);
  return { min: c.toBuy.min, max: c.toBuy.max, lines: c.toBuy.lines };
}
