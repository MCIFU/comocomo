import { describe, expect, it } from "vitest";
import { formatMinutes, formatMoneyRange, formatQty, parseQuery, recommend } from "@comocomo/core";
import { ingredients, prices, recipes } from "./index";

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
    expect(six.cost.total.max / two.cost.total.max).toBeCloseTo(3, 1);
  });

  it("siempre explica por qué", () => {
    for (const x of run("tengo pollo y arroz")) expect(x.reason.length).toBeGreaterThan(10);
  });

  it("sin datos devuelve sugerencias baratas en vez de nada", () => {
    expect(run("").length).toBeGreaterThan(5);
  });
});

describe("formato", () => {
  it("rangos de dinero no fingen precisión", () => {
    expect(formatMoneyRange(3.6, 5.2)).toBe("≈ 4–5 €");
    expect(formatMoneyRange(4.2, 4.4)).toBe("≈ 4 €");
    expect(formatMoneyRange(0.2, 0.4)).toBe("≈ 0,4 €");
    expect(formatMoneyRange(0.6, 1.1)).toBe("≈ 0,5–1 €");
    expect(formatMoneyRange(1.2, 1.9)).toBe("≈ 1–2 €");
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
