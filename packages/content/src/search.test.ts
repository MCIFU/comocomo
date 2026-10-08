import { describe, expect, it } from "vitest";
import { searchRecipes, shoppingPrice } from "@comocomo/core";
import { DISH_KEYWORDS, ingredients, prices, recipes } from "./index";

const catalog = new Map(ingredients.map((i) => [i.id, i]));
const s = (q: string, o = {}) => searchRecipes(recipes, catalog, q, { extra: DISH_KEYWORDS, ...o }).map((r) => r.id);

describe("búsqueda", () => {
  it("sin texto devuelve todas", () => expect(s("")).toHaveLength(recipes.length));
  it("por nombre", () => expect(s("tortilla")).toContain("tortilla-de-patatas"));
  it("por país o cocina", () => {
    expect(s("mexicana")).toEqual(expect.arrayContaining(["tacos-de-pollo", "guacamole"]));
    expect(s("Italia")).toContain("carbonara");
  });
  it("por ingrediente, con plurales y prefijos", () => {
    expect(s("gambas")).toContain("gambas-al-ajillo");
    expect(s("patatas")).toContain("tortilla-de-patatas");
    expect(s("pollo")).toEqual(expect.arrayContaining(["pollo-al-ajillo", "tacos-de-pollo", "karaage"]));
  });
  it("por como la gente pide el plato", () => expect(s("tacos")).toContain("tacos-de-pollo"));
  it("todas las palabras deben coincidir", () => {
    const r = s("pollo japones");
    expect(r).toEqual(expect.arrayContaining(["karaage", "oyakodon"]));
    expect(r).not.toContain("pollo-al-ajillo");
  });
  it("ignora palabras vacías", () => expect(s("quiero hacer una tortilla")).toContain("tortilla-de-patatas"));
  it("las alergias siempre filtran", () => {
    expect(s("gambas", { restrictions: [{ kind: "allergy", value: "shellfish" }] })).not.toContain("gambas-al-ajillo");
  });
  it("filtra por tiempo", () => {
    for (const id of s("", { maxMinutes: 30 })) {
      const r = recipes.find((x) => x.id === id)!;
      expect(r.prepMin + r.cookMin).toBeLessThanOrEqual(30);
    }
  });
});

describe("precio de compra para N personas", () => {
  const tortilla = recipes.find((r) => r.id === "tortilla-de-patatas")!;
  it("crece con las personas, pero no de forma lineal (envases)", () => {
    const p2 = shoppingPrice(tortilla, 2, prices, catalog);
    const p8 = shoppingPrice(tortilla, 8, prices, catalog);
    expect(p8.max).toBeGreaterThan(p2.max);
    expect(p8.max).toBeLessThan(p2.max * 4);
  });
  it("no cuenta los básicos", () => {
    const lines = shoppingPrice(tortilla, 4, prices, catalog).lines.map((l) => l.ingredientId);
    expect(lines).not.toContain("sal");
    expect(lines).not.toContain("aceite");
  });
  it("todas las recetas tienen un precio razonable para 4 (entre 1 y 30 €)", () => {
    for (const r of recipes) {
      const p = shoppingPrice(r, 4, prices, catalog);
      const mid = (p.min + p.max) / 2;
      expect(mid, r.id).toBeGreaterThan(1);
      expect(mid, r.id).toBeLessThan(30);
    }
  });
});
