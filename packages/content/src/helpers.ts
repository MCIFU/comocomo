import type { Recipe, UnitId } from "@comocomo/schemas";

// Helpers de escritura para mantener las recetas legibles.
export const I = (ingredientId: string, qty: number, unit: UnitId, optional = false) => ({ ingredientId, qty, unit, optional });
export const S = (text: string, min?: number, tempC?: number) => ({
  text,
  ...(min ? { durationSec: min * 60 } : {}),
  ...(tempC ? { tempC } : {}),
});

type R = Omit<Recipe, "equipment"> & { equipment?: string[] };
export const r = (x: R): Recipe => ({ equipment: [], ...x });
