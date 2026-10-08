import type { Ingredient, Price, Recipe } from "@comocomo/schemas";
import { toBase } from "./units";

export interface Money { min: number; max: number }

export interface PurchaseLine {
  ingredientId: string;
  /** cantidad que pide la receta, en unidad base (g, ml, unidades) */
  needBase: number;
  /** envases que hay que comprar; undefined si se compra a granel */
  packs?: number;
  packLabel?: string;
  /** cantidad que realmente te llevas a casa (envases completos), en unidad base */
  buyBase: number;
  /** lo que sobra después de cocinar, en unidad base */
  leftoverBase: number;
  cost: Money;
}

/** Precio por unidad base (g, ml o unidad) de un ingrediente. */
function perBase(p: Price): Money {
  const k = 1 / toBase(1, p.perUnit);
  return { min: p.min * k, max: p.max * k };
}

/**
 * Lo que cuesta comprar `needBase` de un ingrediente en el súper.
 * Con envase: se redondea hacia arriba a envases completos (550 g de tomate = 2 botes de 400 g).
 * A granel: se paga lo que se pide.
 */
export function purchase(ing: Ingredient, needBase: number, price: Price): PurchaseLine {
  const pb = perBase(price);
  let buyBase = needBase;
  let packs: number | undefined;
  if (ing.pack) {
    const packBase = toBase(ing.pack.qty, ing.pack.unit);
    // Tolerancia del 3 %: 405 g no obliga a comprar un segundo bote de 400 g.
    packs = Math.max(1, Math.ceil(needBase / packBase - 0.03));
    buyBase = packs * packBase;
  }
  return {
    ingredientId: ing.id, needBase, packs, packLabel: ing.pack?.label, buyBase,
    leftoverBase: Math.max(0, buyBase - needBase),
    cost: { min: buyBase * pb.min, max: buyBase * pb.max },
  };
}

export interface Cost {
  /** Lo que pagas en el súper por lo que te falta, contando envases completos. */
  toBuy: Money & { lines: PurchaseLine[]; unpriced: string[] };
  /** Lo que te comes: parte proporcional de todos los ingredientes (también los que ya tienes). */
  consumed: Money & { unpriced: string[] };
  perServing: Money;
}

export function recipeCost(recipe: Recipe, prices: Price[], catalog: Map<string, Ingredient>, have: ReadonlySet<string>): Cost {
  const byIng = new Map(prices.map((p) => [p.ingredientId, p]));
  const toBuy: Cost["toBuy"] = { min: 0, max: 0, lines: [], unpriced: [] };
  const consumed: Cost["consumed"] = { min: 0, max: 0, unpriced: [] };
  for (const ri of recipe.ingredients) {
    if (ri.optional) continue;
    const p = byIng.get(ri.ingredientId);
    const ing = catalog.get(ri.ingredientId);
    if (!p || !ing) {
      consumed.unpriced.push(ri.ingredientId);
      if (!have.has(ri.ingredientId)) toBuy.unpriced.push(ri.ingredientId);
      continue;
    }
    const need = toBase(ri.qty, ri.unit);
    const pb = perBase(p);
    consumed.min += need * pb.min;
    consumed.max += need * pb.max;
    if (!have.has(ri.ingredientId)) {
      const line = purchase(ing, need, p);
      toBuy.lines.push(line);
      toBuy.min += line.cost.min;
      toBuy.max += line.cost.max;
    }
  }
  const s = recipe.baseServings;
  return { toBuy, consumed, perServing: { min: consumed.min / s, max: consumed.max / s } };
}
