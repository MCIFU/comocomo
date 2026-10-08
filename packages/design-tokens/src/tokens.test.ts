import { describe, expect, it } from "vitest";
import { mercado as t, priceScale } from "./index";

function lum(hex: string) {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) =>
    v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * c[0]! + 0.7152 * c[1]! + 0.0722 * c[2]!;
}
const ratio = (a: string, b: string) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi! + 0.05) / (lo! + 0.05);
};

describe("contraste AA (Mercado)", () => {
  it("texto sobre fondo, superficie y tarjeta", () => {
    for (const bg of [t.paper, t.crust, t.card]) {
      expect(ratio(t.ink, bg)).toBeGreaterThanOrEqual(4.5);
      expect(ratio(t.inkMuted, bg)).toBeGreaterThanOrEqual(4.5);
    }
  });
  it("texto claro sobre el bloque rojo", () => {
    expect(ratio(t.onTomato, t.tomato)).toBeGreaterThanOrEqual(4.5);
  });
  it("tinta sobre las pegatinas de color", () => {
    for (const k of ["mustard", "sky", "pink", "mint", "cream"] as const) expect(ratio(t.ink, t[k]), k).toBeGreaterThanOrEqual(4.5);
  });
  it("colores de estado legibles como texto", () => {
    for (const k of ["olive", "saffron", "tomato", "plum"] as const) expect(ratio(t[k], t.paper), k).toBeGreaterThanOrEqual(4.5);
  });
  it("escala de precio legible en todos sus niveles", () => {
    priceScale.forEach((bg, i) => expect(ratio(i === 3 ? t.paper : t.ink, bg), bg).toBeGreaterThanOrEqual(4.5));
  });
});
