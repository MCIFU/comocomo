import { describe, expect, it } from "vitest";
import type { Ingredient, Price, Recipe } from "@comocomo/schemas";
import { buildShoppingList, matchRecipes, purchase, recipeCost, roundNice, scaleRecipe, toBase, violatesHardRestriction } from "./index";

const ing = (id: string, o: Partial<Ingredient> = {}): Ingredient => ({
  id, name: id, aisle: "pantry", unitKind: "mass", allergens: [], tags: [], aliases: [], ...o,
});
const catalog = new Map<string, Ingredient>([
  ["pollo", ing("pollo", { aisle: "butcher" })],
  ["arroz", ing("arroz")],
  ["pimiento", ing("pimiento", { aisle: "produce", unitKind: "count" })],
  ["cebolla", ing("cebolla", { aisle: "produce", unitKind: "count", tags: ["allium"] })],
  ["leche", ing("leche", { aisle: "dairy", unitKind: "volume", allergens: ["lactose"] })],
]);
const step = { text: "Cocina a fuego medio durante unos minutos." };
const recipe = (id: string, ingredients: Recipe["ingredients"], extra: Partial<Recipe> = {}): Recipe => ({
  id, title: id, cuisine: "es", authenticity: "adapted", origin: "España", baseServings: 2, prepMin: 10, cookMin: 20,
  difficulty: "easy", equipment: [], ingredients, steps: [step, step], ...extra,
});
const pollo = recipe("pollo-arroz", [
  { ingredientId: "pollo", qty: 400, unit: "g", optional: false },
  { ingredientId: "arroz", qty: 200, unit: "g", optional: false },
  { ingredientId: "pimiento", qty: 1, unit: "unit", optional: false },
]);

describe("unidades", () => {
  it("convierte a base", () => {
    expect(toBase(1, "kg")).toBe(1000);
    expect(toBase(2, "tbsp")).toBe(30);
  });
  it("redondea sin falsos decimales", () => {
    expect(roundNice(203.4, "g")).toBe(205);
    expect(roundNice(12.4, "g")).toBe(12);
  });
});

describe("escalado", () => {
  it("2 -> 5 personas", () => {
    const s = scaleRecipe(pollo, 5);
    expect(s.ingredients[0]!.qty).toBe(1000);
    expect(s.baseServings).toBe(5);
  });
  it("no escala los tiempos", () => {
    expect(scaleRecipe(pollo, 6).cookMin).toBe(20);
  });
  it("rechaza raciones inválidas", () => {
    expect(() => scaleRecipe(pollo, 0)).toThrow();
  });
});

describe("coste", () => {
  const prices: Price[] = [
    { ingredientId: "pollo", perUnit: "kg", currency: "EUR", min: 6, max: 8, confidence: "estimated" },
    { ingredientId: "arroz", perUnit: "kg", currency: "EUR", min: 1.5, max: 2, confidence: "estimated" },
  ];
  it("a granel paga lo que pide; lo consumido incluye lo que ya tienes", () => {
    const c = recipeCost(pollo, prices, catalog, new Set(["arroz"]));
    expect(c.toBuy.min).toBeCloseTo(2.4); // 400 g de pollo a granel
    expect(c.consumed.min).toBeCloseTo(2.7); // + 200 g de arroz que ya tenías
    expect(c.toBuy.unpriced).toEqual(["pimiento"]);
    expect(c.perServing.min).toBeCloseTo(c.consumed.min / 2);
  });

  it("con envase compra envases completos: 550 g de tomate = 2 botes de 400 g", () => {
    const cat = new Map(catalog);
    cat.set("tomate-triturado", ing("tomate-triturado", { pack: { qty: 400, unit: "g", label: "bote" } }));
    const salsa = recipe("salsa", [{ ingredientId: "tomate-triturado", qty: 550, unit: "g", optional: false }]);
    const p: Price[] = [{ ingredientId: "tomate-triturado", perUnit: "kg", currency: "EUR", min: 2, max: 2, confidence: "estimated" }];
    const c = recipeCost(salsa, p, cat, new Set());
    expect(c.toBuy.lines[0]).toMatchObject({ packs: 2, buyBase: 800, leftoverBase: 250 });
    expect(c.toBuy.min).toBeCloseTo(1.6); // pagas 800 g
    expect(c.consumed.min).toBeCloseTo(1.1); // te comes 550 g
  });

  it("no obliga a un envase extra por un exceso mínimo (405 g = 1 bote)", () => {
    const tomate = ing("tomate-triturado", { pack: { qty: 400, unit: "g", label: "bote" } });
    const p: Price = { ingredientId: "tomate-triturado", perUnit: "kg", currency: "EUR", min: 2, max: 2, confidence: "estimated" };
    expect(purchase(tomate, 405, p).packs).toBe(1);
    expect(purchase(tomate, 420, p).packs).toBe(2);
  });
});

describe("lista de la compra", () => {
  it("fusiona duplicados entre recetas: 500 g + 300 g = 800 g", () => {
    const a = recipe("a", [{ ingredientId: "pollo", qty: 500, unit: "g", optional: false }]);
    const b = recipe("b", [{ ingredientId: "pollo", qty: 300, unit: "g", optional: false }]);
    const list = buildShoppingList([a, b], catalog);
    expect(list.butcher).toEqual([{ ingredientId: "pollo", name: "pollo", qty: 800, unit: "g", aisle: "butcher" }]);
  });
  it("resta la despensa y omite lo cubierto", () => {
    const list = buildShoppingList([pollo], catalog, new Map([["arroz", 500], ["pollo", 100]]));
    expect(list.pantry).toBeUndefined();
    expect(list.butcher![0]!.qty).toBe(300);
  });
  it("sube a kg al superar 1000 g", () => {
    const a = recipe("a", [{ ingredientId: "pollo", qty: 1.2, unit: "kg", optional: false }]);
    expect(buildShoppingList([a], catalog).butcher![0]).toMatchObject({ qty: 1.2, unit: "kg" });
  });
});

describe("restricciones (seguridad)", () => {
  const lactose = recipe("flan", [{ ingredientId: "leche", qty: 500, unit: "ml", optional: false }]);
  it("alergia por alérgeno descarta la receta", () => {
    expect(violatesHardRestriction(lactose, catalog, [{ kind: "allergy", value: "lactose" }])).toBe(true);
  });
  it("incluso si el ingrediente es opcional", () => {
    const opt = recipe("x", [
      { ingredientId: "arroz", qty: 100, unit: "g", optional: false },
      { ingredientId: "leche", qty: 50, unit: "ml", optional: true },
    ]);
    expect(violatesHardRestriction(opt, catalog, [{ kind: "allergy", value: "lactose" }])).toBe(true);
  });
  it("ingrediente desconocido se trata como inseguro", () => {
    const unk = recipe("u", [{ ingredientId: "misterio", qty: 1, unit: "g", optional: false }]);
    expect(violatesHardRestriction(unk, catalog, [{ kind: "allergy", value: "nuts" }])).toBe(true);
  });
  it("sin restricciones no descarta", () => {
    expect(violatesHardRestriction(lactose, catalog, [])).toBe(false);
  });
});

describe("matching", () => {
  const sopa = recipe("sopa", [
    { ingredientId: "cebolla", qty: 2, unit: "unit", optional: false },
    { ingredientId: "arroz", qty: 100, unit: "g", optional: false },
  ]);
  it("ordena por cobertura y respeta no-me-gusta", () => {
    const have = new Set(["pollo", "arroz"]);
    const r = matchRecipes([sopa, pollo], catalog, { have, restrictions: [{ kind: "dislike", value: "cebolla" }] });
    expect(r.map((m) => m.recipe.id)).toEqual(["pollo-arroz"]);
    expect(r[0]!.missing).toEqual(["pimiento"]);
    expect(r[0]!.coverage).toBeCloseTo(2 / 3);
  });
  it("filtra por tiempo y equipo", () => {
    const air = recipe("air", [{ ingredientId: "pollo", qty: 1, unit: "g", optional: false }], { equipment: ["airfryer"] });
    const q = { have: new Set(["pollo"]), restrictions: [] };
    expect(matchRecipes([air], catalog, { ...q, equipment: new Set(["horno"]) })).toHaveLength(0);
    expect(matchRecipes([air], catalog, { ...q, equipment: new Set(["airfryer"]) })).toHaveLength(1);
    expect(matchRecipes([air], catalog, { ...q, maxMinutes: 20 })).toHaveLength(0);
  });
});
