import { describe, expect, it } from "vitest";
import { ingredients, recipes } from "./index";
import { healthTags, nutritionPerServing, NUTRITION_IDS } from "./nutrition";

describe("nutrición", () => {
  it("todos los ingredientes del catálogo tienen composición", () => {
    expect(ingredients.map((i) => i.id).filter((id) => !NUTRITION_IDS.has(id))).toEqual([]);
  });
  it("las raciones dan valores razonables", () => {
    for (const r of recipes) {
      const n = nutritionPerServing(r);
      expect(n.kcal, r.id).toBeGreaterThan(5);
      expect(n.kcal, r.id).toBeLessThan(2500);
    }
  });
  it("hay recetas en cada grupo de salud", () => {
    const count: Record<string, number> = {};
    for (const r of recipes) for (const t of healthTags(r, false)) count[t] = (count[t] ?? 0) + 1;
    for (const t of ["colesterol", "hierro", "vitamina-c", "vitaminas", "calcio", "fibra"]) expect(count[t] ?? 0, t).toBeGreaterThan(20);
  });
});
