import { describe, expect, it } from "vitest";
import { dark, light } from "./index";

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

describe.each([
  ["light", light],
  ["dark", dark],
])("contraste AA (%s)", (_n, t) => {
  it("texto sobre fondo y superficie", () => {
    expect(ratio(t.ink, t.paper)).toBeGreaterThanOrEqual(4.5);
    expect(ratio(t.ink, t.crust)).toBeGreaterThanOrEqual(4.5);
    expect(ratio(t.inkMuted, t.paper)).toBeGreaterThanOrEqual(4.5);
  });
  it("botón primario", () => {
    expect(ratio(t.onTomato, t.tomato)).toBeGreaterThanOrEqual(4.5);
  });
  it("colores semánticos legibles sobre fondo", () => {
    for (const k of ["olive", "saffron", "tomato"] as const) {
      expect(ratio(t[k], t.paper), k).toBeGreaterThanOrEqual(4.5);
    }
  });
});
