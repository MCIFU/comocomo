import type { Price, Recipe } from "@comocomo/schemas";
import { toBase } from "./units";

export interface CostRange {
  min: number;
  max: number;
  /** ingredientes sin precio conocido: el total es entonces una cota inferior */
  unpriced: string[];
}

export interface Cost {
  /** coste de los ingredientes que faltan (lo que hay que pagar) */
  toBuy: CostRange;
  /** valor de lo que ya se tiene */
  owned: CostRange;
  total: CostRange;
  perServing: { min: number; max: number };
}

const zero = (): CostRange => ({ min: 0, max: 0, unpriced: [] });

/** Coste proporcional (parte usada), no el paquete completo. */
export function recipeCost(recipe: Recipe, prices: Price[], haveIds: ReadonlySet<string>): Cost {
  const byIng = new Map(prices.map((p) => [p.ingredientId, p]));
  const toBuy = zero();
  const owned = zero();
  for (const ri of recipe.ingredients) {
    if (ri.optional) continue;
    const target = haveIds.has(ri.ingredientId) ? owned : toBuy;
    const p = byIng.get(ri.ingredientId);
    if (!p) {
      target.unpriced.push(ri.ingredientId);
      continue;
    }
    const base = toBase(ri.qty, ri.unit);
    const perBase = 1 / toBase(1, p.perUnit);
    target.min += base * perBase * p.min;
    target.max += base * perBase * p.max;
  }
  const total: CostRange = {
    min: toBuy.min + owned.min,
    max: toBuy.max + owned.max,
    unpriced: [...toBuy.unpriced, ...owned.unpriced],
  };
  const s = recipe.baseServings;
  return { toBuy, owned, total, perServing: { min: total.min / s, max: total.max / s } };
}
