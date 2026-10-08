import type { Aisle, Ingredient, Price, UnitId, UnitKind } from "@comocomo/schemas";

type Row = [id: string, name: string, aisle: Aisle, kind: UnitKind, allergens: string[], tags: string[], price: [unit: UnitId, min: number, max: number]];

const MILK = ["milk", "lactose"];

/**
 * Ingredientes + precio de referencia (EUR, España, supermercado, 2026).
 * Los precios son ESTIMACIONES orientativas, no datos de tienda: confidence = "estimated".
 */
const rows: Row[] = [
  ["pollo", "Pollo (muslos o pechuga)", "butcher", "mass", [], ["meat", "poultry"], ["kg", 5, 8]],
  ["chorizo", "Chorizo", "butcher", "mass", [], ["meat", "pork"], ["kg", 8, 14]],
  ["morcilla", "Morcilla asturiana", "butcher", "mass", [], ["meat", "pork"], ["kg", 7, 11]],
  ["panceta", "Panceta o tocino", "butcher", "mass", [], ["meat", "pork"], ["kg", 6, 11]],
  ["merluza", "Merluza (lomos)", "fish", "mass", ["fish"], ["fish", "seafood"], ["kg", 9, 14]],
  ["gambas", "Gambas", "fish", "mass", ["shellfish"], ["seafood"], ["kg", 12, 22]],
  ["huevo", "Huevos", "dairy", "count", ["egg"], [], ["unit", 0.2, 0.35]],
  ["leche", "Leche", "dairy", "volume", MILK, [], ["l", 0.9, 1.3]],
  ["queso", "Queso (curado, rallado o para fundir)", "dairy", "mass", MILK, [], ["kg", 8, 14]],
  ["mantequilla", "Mantequilla", "dairy", "mass", MILK, [], ["kg", 8, 12]],
  ["yogur", "Yogur natural", "dairy", "count", MILK, [], ["unit", 0.25, 0.5]],
  ["patata", "Patatas", "produce", "mass", [], [], ["kg", 1, 1.8]],
  ["cebolla", "Cebolla", "produce", "count", [], ["allium"], ["unit", 0.2, 0.4]],
  ["ajo", "Ajo (dientes)", "produce", "count", [], ["allium"], ["unit", 0.05, 0.1]],
  ["tomate", "Tomate", "produce", "mass", [], [], ["kg", 2, 3.5]],
  ["pimiento", "Pimiento", "produce", "count", [], [], ["unit", 0.5, 0.9]],
  ["zanahoria", "Zanahoria", "produce", "mass", [], [], ["kg", 1, 1.6]],
  ["calabacin", "Calabacín", "produce", "mass", [], [], ["kg", 1.5, 2.5]],
  ["espinacas", "Espinacas", "produce", "mass", [], [], ["kg", 5, 8]],
  ["aguacate", "Aguacate", "produce", "count", [], [], ["unit", 0.8, 1.5]],
  ["limon", "Limón", "produce", "count", [], [], ["unit", 0.25, 0.5]],
  ["lima", "Lima", "produce", "count", [], [], ["unit", 0.2, 0.4]],
  ["chile", "Chile o guindilla", "produce", "count", [], [], ["unit", 0.1, 0.25]],
  ["jengibre", "Jengibre fresco", "produce", "mass", [], [], ["kg", 6, 10]],
  ["cilantro", "Cilantro fresco", "produce", "mass", [], [], ["kg", 15, 30]],
  ["perejil", "Perejil fresco", "produce", "mass", [], [], ["kg", 15, 25]],
  ["albahaca", "Albahaca fresca", "produce", "mass", [], [], ["kg", 30, 60]],
  ["arroz", "Arroz", "pantry", "mass", [], [], ["kg", 1.2, 2]],
  ["pasta", "Pasta seca", "pantry", "mass", ["gluten"], [], ["kg", 1.2, 2.2]],
  ["harina", "Harina de trigo", "pantry", "mass", ["gluten"], [], ["kg", 0.9, 1.5]],
  ["pan-rallado", "Pan rallado", "pantry", "mass", ["gluten"], [], ["kg", 1.5, 2.5]],
  ["garbanzos", "Garbanzos secos", "pantry", "mass", [], [], ["kg", 2, 3.5]],
  ["lentejas", "Lentejas secas", "pantry", "mass", [], [], ["kg", 2, 3.5]],
  ["fabes", "Fabes (alubias blancas secas)", "pantry", "mass", [], [], ["kg", 7, 12]],
  ["tomate-triturado", "Tomate triturado", "pantry", "mass", [], [], ["kg", 1.5, 2.5]],
  ["leche-coco", "Leche de coco", "pantry", "volume", [], [], ["l", 2.5, 4.5]],
  ["caldo", "Caldo de verduras", "pantry", "volume", [], [], ["l", 0.6, 1.5]],
  ["aceite", "Aceite de oliva", "pantry", "volume", [], [], ["l", 5, 9]],
  ["vinagre", "Vinagre", "pantry", "volume", ["sulfites"], [], ["l", 1, 2]],
  ["vino-blanco", "Vino blanco", "pantry", "volume", ["sulfites"], [], ["l", 2, 4]],
  ["soja", "Salsa de soja", "pantry", "volume", ["soy", "gluten"], [], ["l", 4, 8]],
  ["azucar", "Azúcar", "pantry", "mass", [], [], ["kg", 1, 1.5]],
  ["sal", "Sal", "pantry", "mass", [], [], ["kg", 0.5, 1]],
  ["pimenton", "Pimentón", "pantry", "mass", [], [], ["kg", 8, 14]],
  ["comino", "Comino molido", "pantry", "mass", [], [], ["kg", 15, 25]],
  ["curry", "Curry en polvo", "pantry", "mass", [], [], ["kg", 12, 22]],
  ["pimienta", "Pimienta negra", "pantry", "mass", [], [], ["kg", 15, 30]],
  ["pan", "Pan (del día anterior)", "bakery", "mass", ["gluten"], [], ["kg", 2.5, 4]],
  ["tortilla-maiz", "Tortillas de maíz", "bakery", "count", [], [], ["unit", 0.08, 0.15]],
];

export const ingredients: Ingredient[] = rows.map(([id, name, aisle, unitKind, allergens, tags]) => ({
  id, name, aisle, unitKind, allergens, tags,
}));

export const prices: Price[] = rows.map(([ingredientId, , , , , , [perUnit, min, max]]) => ({
  ingredientId, perUnit, currency: "EUR", min, max, confidence: "estimated",
}));

export const EQUIPMENT = ["sarten", "olla", "horno", "batidora"] as const;
