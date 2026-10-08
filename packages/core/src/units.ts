import type { UnitId, UnitKind } from "@comocomo/schemas";

/** Factor a la unidad base: g para masa, ml para volumen, pieza para conteo. */
const TABLE: Record<UnitId, { kind: UnitKind; factor: number }> = {
  g: { kind: "mass", factor: 1 },
  kg: { kind: "mass", factor: 1000 },
  oz: { kind: "mass", factor: 28.3495 },
  lb: { kind: "mass", factor: 453.592 },
  ml: { kind: "volume", factor: 1 },
  l: { kind: "volume", factor: 1000 },
  tsp: { kind: "volume", factor: 5 },
  tbsp: { kind: "volume", factor: 15 },
  cup: { kind: "volume", factor: 240 },
  unit: { kind: "count", factor: 1 },
};

export const kindOf = (u: UnitId): UnitKind => TABLE[u].kind;

export function toBase(qty: number, unit: UnitId): number {
  return qty * TABLE[unit].factor;
}

export function fromBase(base: number, unit: UnitId): number {
  return base / TABLE[unit].factor;
}

export type UnitSystem = "metric" | "imperial";

/** Elige una unidad de presentación legible para una cantidad en base. */
export function pickDisplayUnit(base: number, kind: UnitKind, system: UnitSystem = "metric"): { qty: number; unit: UnitId } {
  if (kind === "count") return { qty: base, unit: "unit" };
  if (kind === "mass") {
    if (system === "imperial") return base >= 453.592 ? { qty: fromBase(base, "lb"), unit: "lb" } : { qty: fromBase(base, "oz"), unit: "oz" };
    return base >= 1000 ? { qty: base / 1000, unit: "kg" } : { qty: base, unit: "g" };
  }
  if (system === "imperial") return { qty: fromBase(base, "cup"), unit: "cup" };
  return base >= 1000 ? { qty: base / 1000, unit: "l" } : { qty: base, unit: "ml" };
}

/** Redondeo humano: sin falsos decimales ("203,4 g" -> "205 g"). */
export function roundNice(qty: number, unit: UnitId): number {
  if (unit === "unit") return Math.round(qty * 4) / 4; // cuartos de pieza
  if (unit === "g" || unit === "ml") return qty < 50 ? Math.round(qty) : Math.round(qty / 5) * 5;
  return Math.round(qty * 10) / 10;
}
