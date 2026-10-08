import { describe, expect, it } from "vitest";
import { parseQuery } from "@comocomo/core";
import { ingredients } from "./index";

const p = (s: string) => parseQuery(s, ingredients);

describe("parseQuery (español)", () => {
  it("el ejemplo del producto", () => {
    const q = p("Somos 3 personas. Tengo 15 €. Tengo arroz, pollo y huevos. No me gusta la cebolla ni el pescado. Tengo horno, microondas y air fryer. Tengo 40 minutos.");
    expect(q.servings).toBe(3);
    expect(q.budget).toBe(15);
    expect(q.maxMinutes).toBe(40);
    expect(q.have.sort()).toEqual(["arroz", "huevo", "pollo"]);
    expect(q.dislikes).toContain("cebolla");
    expect(q.equipment.sort()).toEqual(["airfryer", "horno", "microondas"]);
  });
  it("frase corta con presupuesto y personas", () => {
    const q = p("Tengo huevos, patatas, queso y 8 euros. Somos 3");
    expect(q).toMatchObject({ servings: 3, budget: 8 });
    expect(q.have.sort()).toEqual(["huevo", "patata", "queso"]);
  });
  it("entiende plurales y sinónimos", () => {
    expect(p("tengo pechuga y papas").have.sort()).toEqual(["patata", "pollo"]);
  });
  it("tiempo en lenguaje natural", () => {
    expect(p("algo que no tarde más de media hora").maxMinutes).toBe(30);
    expect(p("tengo 1,5 horas").maxMinutes).toBe(90);
  });
  it("alergias van aparte de los gustos", () => {
    const q = p("Soy alérgico a los frutos secos y al marisco. Tengo pollo.");
    expect(q.allergies.sort()).toEqual(["nuts", "shellfish"]);
    expect(q.have).toEqual(["pollo"]);
  });
  it("intolerancia a la lactosa", () => {
    expect(p("soy intolerante a la lactosa").allergies).toContain("lactose");
  });
  it("lo negado no cuenta como posesión", () => {
    const q = p("tengo pollo, sin cebolla");
    expect(q.have).toEqual(["pollo"]);
    expect(q.dislikes).toEqual(["cebolla"]);
  });
  it("no confunde palabras que contienen un ingrediente", () => {
    expect(p("tengo pastel de pasteleria").have).toEqual([]);
  });
  it("texto vacío o sin datos no inventa nada", () => {
    expect(p("")).toEqual({ have: [], dislikes: [], allergies: [], equipment: [] });
  });
});
