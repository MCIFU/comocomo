import type { UnitId } from "@comocomo/schemas";

const UNIT_LABEL: Record<UnitId, string> = {
  g: "g", kg: "kg", oz: "oz", lb: "lb", ml: "ml", l: "l", tsp: "cdta", tbsp: "cda", cup: "taza", unit: "",
};

/**
 * Una sola cifra estimada ("≈ 7 €"), punto medio del rango. Los rangos confundían más de lo que informaban.
 * Por debajo de 10 € se redondea a medio euro; por encima, a euros enteros.
 */
export function formatMoney(min: number, max: number = min, currency = "EUR"): string {
  const sym = currency === "EUR" ? "€" : currency;
  const mid = (min + max) / 2;
  if (mid < 0.5) return `< 0,5 ${sym}`;
  const v = mid < 10 ? Math.round(mid * 2) / 2 : Math.round(mid);
  return `≈ ${String(v).replace(".", ",")} ${sym}`;
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

/** Reloj de temporizador: 725 -> "12:05", 3725 -> "1:02:05". */
export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.ceil(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = String(s % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${String(m).padStart(2, "0")}:${sec}`;
}
