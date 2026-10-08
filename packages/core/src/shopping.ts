import type { Aisle, Ingredient, Recipe } from "@comocomo/schemas";
import { kindOf, pickDisplayUnit, roundNice, toBase, type UnitSystem } from "./units";
import type { UnitId } from "@comocomo/schemas";

export interface ShoppingLine {
  ingredientId: string;
  name: string;
  qty: number;
  unit: UnitId;
  aisle: Aisle;
}

/**
 * Combina recetas en una lista: fusiona duplicados sumando en unidad base
 * y resta lo que el usuario ya tiene (en base). Agrupa por pasillo.
 */
export function buildShoppingList(
  recipes: Recipe[],
  catalog: Map<string, Ingredient>,
  pantryBase: ReadonlyMap<string, number> = new Map(),
  system: UnitSystem = "metric",
): Record<Aisle, ShoppingLine[]> {
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
    (out[ing.aisle] ??= []).push({
      ingredientId: id,
      name: ing.name,
      qty: roundNice(d.qty, d.unit),
      unit: d.unit,
      aisle: ing.aisle,
    });
  }
  for (const lines of Object.values(out)) lines.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}

export { kindOf };
