import type { UnitId } from "@comocomo/schemas";

const UNIT_LABEL: Record<UnitId, string> = {
  g: "g", kg: "kg", oz: "oz", lb: "lb", ml: "ml", l: "l", tsp: "cdta", tbsp: "cda", cup: "taza", unit: "",
};

/** "≈ 4–5 €" · nunca presenta precisión que no existe. */
export function formatMoneyRange(min: number, max: number, currency = "EUR"): string {
  const sym = currency === "EUR" ? "€" : currency;
  const lo = Math.round(min);
  const hi = Math.round(max);
  if (hi < 1) return `≈ ${min.toFixed(1).replace(".", ",")} ${sym}`;
  return lo === hi ? `≈ ${lo} ${sym}` : `≈ ${lo}–${hi} ${sym}`;
}

/** Cantidad legible: "1,5 kg", "2", "½". */
export function formatQty(qty: number, unit: UnitId): string {
  const frac: Record<number, string> = { 0.25: "¼", 0.5: "½", 0.75: "¾" };
  const whole = Math.floor(qty);
  const rest = Math.round((qty - whole) * 100) / 100;
  let n: string;
  if (unit === "unit" && frac[rest]) n = `${whole > 0 ? whole : ""}${frac[rest]}`;
  else n = String(Math.round(qty * 10) / 10).replace(".", ",");
  const u = UNIT_LABEL[unit];
  return u ? `${n} ${u}` : n;
}

export function formatMinutes(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}
