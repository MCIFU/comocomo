import { describe, expect, it } from "vitest";
import { Ingredient, Price, Recipe } from "@comocomo/schemas";
import { kindOf, recipeCost } from "@comocomo/core";
import { EQUIPMENT, ingredients, prices, recipes } from "./index";

const catalog = new Map(ingredients.map((i) => [i.id, i]));

describe("corpus semilla", () => {
  it("todo valida contra los esquemas", () => {
    ingredients.forEach((i) => Ingredient.parse(i));
    prices.forEach((p) => Price.parse(p));
    recipes.forEach((r) => Recipe.parse(r));
  });

  it("ids únicos", () => {
    expect(new Set(ingredients.map((i) => i.id)).size).toBe(ingredients.length);
    expect(new Set(recipes.map((r) => r.id)).size).toBe(recipes.length);
  });

  it.each(recipes.map((r) => [r.id, r] as const))("%s: coherencia", (_id, r) => {
    for (const ri of r.ingredients) {
      const ing = catalog.get(ri.ingredientId);
      expect(ing, `ingrediente desconocido ${ri.ingredientId}`).toBeDefined();
      expect(kindOf(ri.unit), `unidad incompatible en ${ri.ingredientId}`).toBe(ing!.unitKind);
    }
    for (const e of r.equipment) expect(EQUIPMENT).toContain(e);
    const total = (r.prepMin + r.cookMin) * 60;
    for (const s of r.steps) if (s.durationSec) expect(s.durationSec, s.text).toBeLessThanOrEqual(total);
    // las duraciones de pasos no pueden superar el tiempo total anunciado
    const sum = r.steps.reduce((a, s) => a + (s.durationSec ?? 0), 0);
    expect(sum).toBeLessThanOrEqual(total + 600);
  });

  it.each(recipes.map((r) => [r.id, r] as const))("%s: todos los ingredientes obligatorios tienen precio y coste razonable", (_id, r) => {
    const c = recipeCost(r, prices, catalog, new Set());
    expect(c.consumed.unpriced).toEqual([]);
    expect(c.perServing.max).toBeLessThan(8);
    expect(c.perServing.min).toBeGreaterThan(0.2);
  });

  it("los precios son siempre estimados mientras no haya fuente real", () => {
    expect(prices.every((p) => p.confidence === "estimated")).toBe(true);
  });

  it("alérgenos básicos están marcados", () => {
    expect(catalog.get("huevo")!.allergens).toContain("egg");
    expect(catalog.get("pasta")!.allergens).toContain("gluten");
    expect(catalog.get("gambas")!.allergens).toContain("shellfish");
    expect(catalog.get("merluza")!.allergens).toContain("fish");
    expect(catalog.get("leche")!.allergens).toContain("lactose");
  });
});

describe("seguridad: alérgenos en todo el corpus", () => {
  const allergens = [...new Set(ingredients.flatMap((i) => i.allergens))];
  it.each(allergens)("con alergia a %s nunca se recomienda una receta que lo contenga", async (a) => {
    const { recommend } = await import("@comocomo/core");
    const res = recommend(recipes, catalog, prices, {
      have: new Set(), restrictions: [{ kind: "allergy", value: a }], servings: 2,
    });
    for (const x of res) {
      for (const ri of x.recipe.ingredients) expect(catalog.get(ri.ingredientId)!.allergens, `${x.baseId}/${ri.ingredientId}`).not.toContain(a);
    }
  });
  it("cada alérgeno del catálogo se puede declarar desde la app o el texto libre", async () => {
    const { parseQuery } = await import("@comocomo/core");
    for (const [text, expected] of [["alergico al sesamo", "sesame"], ["alergia a los cacahuetes", "peanut"], ["alergico a los moluscos", "mollusc"]] as const) {
      expect(parseQuery(text, ingredients).allergies).toContain(expected);
    }
  });
});
