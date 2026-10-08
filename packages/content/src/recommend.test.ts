import { describe, expect, it } from "vitest";
import { formatMinutes, formatMoney, formatQty, parseDishIntent, parseQuery, recommend } from "@comocomo/core";
import { dishes, ingredients, prices, recipes } from "./index";

const catalog = new Map(ingredients.map((i) => [i.id, i]));
const run = (text: string, over: Partial<Parameters<typeof recommend>[3]> = {}) => {
  const q = parseQuery(text, ingredients);
  return recommend(recipes, catalog, prices, {
    have: new Set(q.have),
    restrictions: [
      ...q.dislikes.map((value) => ({ kind: "dislike" as const, value })),
      ...q.allergies.map((value) => ({ kind: "allergy" as const, value })),
    ],
    servings: q.servings ?? 2,
    budget: q.budget,
    maxMinutes: q.maxMinutes,
    equipment: q.equipment.length ? new Set(q.equipment) : undefined,
    ...over,
  });
};

describe("recomendador sobre el corpus real", () => {
  it("pollo + arroz devuelve resultados que usan esos ingredientes", () => {
    const r = run("tengo pollo y arroz, somos 3");
    expect(r.length).toBeGreaterThan(0);
    for (const x of r) expect(x.have.some((id) => id === "pollo" || id === "arroz")).toBe(true);
    expect(r[0]!.recipe.baseServings).toBe(3);
  });

  it("un presupuesto bajo descarta recetas caras", () => {
    const all = run("tengo pollo, arroz, tomate y pimiento. somos 3");
    const cheap = run("tengo pollo, arroz, tomate y pimiento. somos 3. 1 euro");
    expect(cheap.length).toBeLessThan(all.length);
    for (const x of cheap) expect(x.cost.toBuy.min).toBeLessThanOrEqual(1);
  });

  it("alergia al marisco nunca devuelve gambas", () => {
    const r = run("alergico al marisco. tengo ajo y aceite", { assumeStaples: true });
    expect(r.every((x) => !x.recipe.ingredients.some((i) => i.ingredientId === "gambas"))).toBe(true);
  });

  it("alergia al gluten nunca devuelve pasta, pan ni harina", () => {
    const r = run("soy celiaco. tengo huevos y patatas");
    const bad = new Set(["pasta", "pan", "harina", "soja", "pan-rallado"]);
    expect(r.length).toBeGreaterThan(0);
    for (const x of r) expect(x.recipe.ingredients.some((i) => bad.has(i.ingredientId))).toBe(false);
  });

  it("no me gusta la cebolla descarta recetas con cebolla", () => {
    const r = run("tengo huevos y patatas, sin cebolla");
    expect(r.some((x) => x.baseId === "tortilla-de-patatas")).toBe(false);
    expect(r.some((x) => x.baseId === "huevos-rotos")).toBe(true);
  });

  it("filtra por tiempo", () => {
    for (const x of run("tengo huevos, patatas, pollo, arroz. media hora")) expect(x.totalMinutes).toBeLessThanOrEqual(30);
  });

  it("escala cantidades y coste con las personas", () => {
    const two = run("tengo huevos y patatas. somos 2").find((x) => x.baseId === "huevos-rotos")!;
    const six = run("tengo huevos y patatas. somos 6").find((x) => x.baseId === "huevos-rotos")!;
    expect(six.cost.consumed.max / two.cost.consumed.max).toBeCloseTo(3, 1);
  });

  it("siempre explica por qué", () => {
    for (const x of run("tengo pollo y arroz")) expect(x.reason.length).toBeGreaterThan(10);
  });

  it("sin datos devuelve sugerencias baratas en vez de nada", () => {
    expect(run("").length).toBeGreaterThan(5);
  });
});

describe("formato", () => {
  it("una sola cifra, sin falsa precisión", () => {
    expect(formatMoney(3.6, 5.2)).toBe("≈ 4,5 €");
    expect(formatMoney(6.1, 7.3)).toBe("≈ 6,5 €");
    expect(formatMoney(12.2, 15.1)).toBe("≈ 14 €");
    expect(formatMoney(0.2, 0.4)).toBe("< 0,5 €");
  });
  it("cantidades y tiempos", () => {
    expect(formatQty(1.5, "kg")).toBe("1,5 kg");
    expect(formatQty(0.5, "unit")).toBe("½");
    expect(formatQty(2.5, "unit")).toBe("2½");
    expect(formatMinutes(95)).toBe("1 h 35 min");
  });
});

describe("reloj", () => {
  it("formatea mm:ss y h:mm:ss", async () => {
    const { formatClock } = await import("@comocomo/core");
    expect(formatClock(725)).toBe("12:05");
    expect(formatClock(3725)).toBe("1:02:05");
    expect(formatClock(0)).toBe("00:00");
    expect(formatClock(-5)).toBe("00:00");
    expect(formatClock(59.2)).toBe("01:00");
  });
});

describe("compra realista (envases completos)", () => {
  it("lo que pagas en el súper nunca es menor que lo que consumes", () => {
    for (const x of run("")) expect(x.cost.toBuy.min).toBeGreaterThanOrEqual(x.cost.consumed.min - 1e-9 - 0); // sin despensa: compras todo
  });
  it("una receta con tomate triturado compra el bote entero", () => {
    const pisto = run("").find((x) => x.baseId === "pisto-con-huevo")!;
    const t = pisto.cost.toBuy.lines.find((l) => l.ingredientId === "tomate-triturado")!;
    expect(t.packs).toBe(1);
    expect(t.buyBase).toBe(400);
  });
  it("el presupuesto se compara con la compra real", () => {
    for (const x of run("tengo huevos y patatas. 3 euros")) expect((x.cost.toBuy.min + x.cost.toBuy.max) / 2).toBeLessThanOrEqual(3);
  });
});

describe("idea de plato", () => {
  const intent = (s: string) => parseDishIntent(s, dishes);
  it("reconoce platos y cocinas", () => {
    expect(intent("quiero hacer tacos").recipeIds).toEqual(["tacos-de-pollo"]);
    expect(intent("me apetece una fabada").recipeIds).toEqual(["fabada-asturiana"]);
    expect(intent("algo mexicano que no tarde").cuisines).toEqual(["mexicana"]);
    expect(intent("comida japonesa").cuisines).toEqual(["japonesa"]);
  });
  it("no confunde ingredientes con platos", () => {
    expect(intent("tengo tortillas y lentejas").recipeIds).toEqual([]);
  });
  it("el plato pedido sale el primero", () => {
    const i = intent("quiero hacer carbonara");
    const r = recommend(recipes, catalog, prices, { have: new Set(), restrictions: [], servings: 2, dishes: i.recipeIds });
    expect(r[0]!.baseId).toBe("carbonara");
  });
  it("la cocina pedida filtra los resultados", () => {
    const r = recommend(recipes, catalog, prices, { have: new Set(), restrictions: [], servings: 2, cuisines: ["mexicana"] });
    expect(r.length).toBeGreaterThan(0);
    for (const x of r) expect(x.recipe.cuisine).toBe("mexicana");
  });
  it("una alergia manda aunque pidas el plato", () => {
    const r = recommend(recipes, catalog, prices, { have: new Set(), restrictions: [{ kind: "allergy", value: "shellfish" }], servings: 2, dishes: ["gambas-al-ajillo"] });
    expect(r.some((x) => x.baseId === "gambas-al-ajillo")).toBe(false);
  });
});

describe("cocina pedida + ingredientes", () => {
  it("muestra todas las de esa cocina y prioriza las que usan lo tuyo", () => {
    const r = recommend(recipes, catalog, prices, { have: new Set(["pollo"]), restrictions: [], servings: 2, cuisines: ["mexicana"] });
    expect(r.length).toBeGreaterThan(1);
    expect(r[0]!.have).toContain("pollo");
  });
});

describe("despensa", () => {
  const base = { have: new Set<string>(), restrictions: [], servings: 2 };
  it("lo que está en la despensa no se paga", () => {
    const sin = recommend(recipes, catalog, prices, { ...base, pantry: new Set(["sal", "aceite"]) }).find((x) => x.baseId === "pasta-aglio-olio")!;
    const con = recommend(recipes, catalog, prices, { ...base, pantry: new Set(["sal", "aceite", "pasta", "ajo"]) }).find((x) => x.baseId === "pasta-aglio-olio")!;
    expect(con.cost.toBuy.max).toBeLessThan(sin.cost.toBuy.max);
    expect(con.missing).toEqual([]);
  });
  it("con despensa configurada no se asumen básicos que no estén en ella", () => {
    const r = recommend(recipes, catalog, prices, { ...base, pantry: new Set() }).find((x) => x.baseId === "pasta-aglio-olio")!;
    expect(r.missing).toContain("aceite");
  });
  it("la despensa no obliga a usarla: no filtra resultados", () => {
    const todas = recommend(recipes, catalog, prices, base).length;
    const conDespensa = recommend(recipes, catalog, prices, { ...base, pantry: new Set(["fabes"]) }).length;
    expect(conDespensa).toBe(todas);
  });
  it("las recetas que aprovechan la despensa suben", () => {
    const r = recommend(recipes, catalog, prices, { ...base, pantry: new Set(["fabes", "chorizo", "morcilla", "panceta", "sal"]) });
    expect(r.findIndex((x) => x.baseId === "fabada-asturiana")).toBeLessThan(3);
  });
});
