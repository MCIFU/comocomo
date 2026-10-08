import type { Aisle, Ingredient, Price, Recipe, UnitId } from "@comocomo/schemas";
import { purchase, type Money } from "./cost";
import { pickDisplayUnit, roundNice, toBase, type UnitSystem } from "./units";

export interface ShoppingLine {
  ingredientId: string;
  name: string;
  /** lo que necesitas para las recetas */
  qty: number;
  unit: UnitId;
  aisle: Aisle;
  /** envases a comprar (si el ingrediente se vende envasado) */
  packs?: number;
  packLabel?: string;
  packQty?: number;
  packUnit?: UnitId;
  cost?: Money;
}

/**
 * Combina recetas en una lista: suma duplicados en unidad base, resta lo que ya tienes
 * y redondea a envases completos (lo que de verdad hay que coger del estante).
 */
export function buildShoppingList(
  recipes: Recipe[],
  catalog: Map<string, Ingredient>,
  pantryBase: ReadonlyMap<string, number> = new Map(),
  system: UnitSystem = "metric",
  prices: Price[] = [],
): Record<Aisle, ShoppingLine[]> {
  const byPrice = new Map(prices.map((p) => [p.ingredientId, p]));
  const need = new Map<string, number>();
  for (const r of recipes) {
    for (const i of r.ingredients) {
      if (i.optional) continue;
      need.set(i.ingredientId, (need.get(i.ingredientId) ?? 0) + toBase(i.qty, i.unit));
    }
  }
  const out = {} as Record<Aisle, ShoppingLine[]>;
  for (const [id, total] of need) {
    const ing = catalog.get(id);
    if (!ing) continue;
    const missing = total - (pantryBase.get(id) ?? 0);
    if (missing <= 0) continue;
    const d = pickDisplayUnit(missing, ing.unitKind, system);
    const p = byPrice.get(id);
    const buy = p ? purchase(ing, missing, p) : undefined;
    (out[ing.aisle] ??= []).push({
      ingredientId: id,
      name: ing.name,
      qty: roundNice(d.qty, d.unit),
      unit: d.unit,
      aisle: ing.aisle,
      ...(ing.pack
        ? { packs: buy?.packs ?? Math.ceil(missing / toBase(ing.pack.qty, ing.pack.unit) - 0.03), packLabel: ing.pack.label, packQty: ing.pack.qty, packUnit: ing.pack.unit }
        : {}),
      ...(buy ? { cost: buy.cost } : {}),
    });
  }
  for (const lines of Object.values(out)) lines.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}
