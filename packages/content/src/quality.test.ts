import { describe, expect, it } from "vitest";
import { ingredients, recipes } from "./index";
import { auditRecipe } from "./quality";

const catalog = new Map(ingredients.map((i) => [i.id, i]));

describe("calidad editorial de las recetas", () => {
  it.each(recipes.map((r) => [r.id, r] as const))("%s: pasos coherentes con ingredientes, equipo y tiempos", (_id, r) => {
    expect(auditRecipe(r, catalog)).toEqual([]);
  });
  it("hay al menos 2 pasos con duración en recetas que se cocinan", () => {
    for (const r of recipes.filter((x) => x.cookMin > 0)) expect(r.steps.filter((s) => s.durationSec).length, r.id).toBeGreaterThanOrEqual(1);
  });
});
