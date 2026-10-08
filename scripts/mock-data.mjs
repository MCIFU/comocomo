// Datos reales para las maquetas de diseño: recetas, ingredientes y precio por envases completos.
import { writeFileSync } from "node:fs";
import { recipes, ingredients, prices } from "../packages/content/src/index.ts";
import { recipeCost, scaleRecipe, formatMinutes } from "../packages/core/src/index.ts";
const catalog = new Map(ingredients.map((i) => [i.id, i]));
const BASICS = new Set(["sal", "aceite", "pimienta", "azucar", "vinagre"]);
const IDS = ["tortilla-de-patatas", "fabada-asturiana", "carbonara", "tacos-de-pollo", "shakshuka", "karaage", "risotto-champinones", "gambas-al-ajillo"];
const CUIS = { espanola: "España", asturiana: "Asturias", italiana: "Italia", mexicana: "México", "oriente-medio": "Oriente Medio", japonesa: "Japón" };
const DIFF = { easy: "Fácil", medium: "Media", hard: "Difícil" };
const out = IDS.map((id) => {
  const r = recipes.find((x) => x.id === id);
  const price = {};
  for (const n of [1, 2, 3, 4, 5, 6, 8]) {
    const c = recipeCost(scaleRecipe(r, n), prices, catalog, BASICS);
    price[n] = Math.round(((c.toBuy.min + c.toBuy.max) / 2) * 2) / 2;
  }
  const s4 = scaleRecipe(r, 4);
  return {
    id, title: r.title, cuisine: CUIS[r.cuisine] ?? r.origin, time: formatMinutes(r.prepMin + r.cookMin), difficulty: DIFF[r.difficulty],
    note: r.note ?? "", price, base: r.baseServings,
    ingredients: r.ingredients.map((i) => ({ name: catalog.get(i.ingredientId).name.replace(/\s*\(.*\)$/, ""), qty: i.qty / r.baseServings, unit: i.unit, optional: i.optional })),
    steps: r.steps.map((s) => s.text),
  };
});
writeFileSync("docs/mockups/disenos/data.js", "window.RECIPES = " + JSON.stringify(out) + ";");
console.log(out.map((r) => `${r.title}: 2p ${r.price[2]}€ · 4p ${r.price[4]}€`).join("\n"));
