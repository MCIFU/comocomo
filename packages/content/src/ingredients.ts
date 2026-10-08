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
  ["ajo", "Dientes de ajo", "produce", "count", [], ["allium"], ["unit", 0.05, 0.1]],
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
  ["pimenton", "Pimentón", "pantry", "mass", [], [], ["kg", 16, 28]],
  ["comino", "Comino molido", "pantry", "mass", [], [], ["kg", 25, 40]],
  ["curry", "Curry en polvo", "pantry", "mass", [], [], ["kg", 25, 40]],
  ["pimienta", "Pimienta negra", "pantry", "mass", [], [], ["kg", 30, 50]],
  ["pan", "Pan (del día anterior)", "bakery", "mass", ["gluten"], [], ["kg", 2.5, 4]],
  ["tortilla-maiz", "Tortillas de maíz", "bakery", "count", [], [], ["unit", 0.08, 0.15]],
  // — lote 2 —
  ["oregano", "Orégano seco", "pantry", "mass", [], [], ["kg", 40, 70]],
  ["calamares", "Calamares", "fish", "mass", ["mollusc"], ["seafood"], ["kg", 8, 14]],
  ["champinones", "Champiñones", "produce", "mass", [], [], ["kg", 4, 7]],
  ["pepino", "Pepino", "produce", "mass", [], [], ["kg", 1.5, 2.5]],
  ["feta", "Queso feta", "dairy", "mass", MILK, [], ["kg", 8, 14]],
  ["aceitunas", "Aceitunas", "pantry", "mass", [], [], ["kg", 4, 8]],
  ["pan-pita", "Pan de pita", "bakery", "count", ["gluten"], [], ["unit", 0.3, 0.6]],
  ["cuscus", "Cuscús", "pantry", "mass", ["gluten"], [], ["kg", 2, 3.5]],
  ["garbanzos-cocidos", "Garbanzos cocidos (bote)", "pantry", "mass", [], [], ["kg", 1.5, 2.5]],
  ["sesamo", "Semillas de sésamo", "pantry", "mass", ["sesame"], [], ["kg", 8, 14]],
  ["cacahuetes", "Cacahuetes", "pantry", "mass", ["peanut", "nuts"], [], ["kg", 5, 9]],
  ["pasta-curry-rojo", "Pasta de curry rojo (suele llevar pasta de gamba)", "pantry", "mass", ["shellfish"], ["seafood"], ["kg", 12, 20]],
];

type Pack = [qty: number, unit: UnitId, label: string];
/**
 * Envases habituales en supermercados españoles. Lo que no aparece se compra a granel
 * (fruta y verdura suelta, pescado y carne al corte). Tamaños orientativos.
 */
const PACKS: Record<string, Pack> = {
  pollo: [500, "g", "bandeja"], chorizo: [225, "g", "sarta"], morcilla: [250, "g", "paquete"], panceta: [200, "g", "paquete"],
  gambas: [400, "g", "bolsa"], huevo: [6, "unit", "media docena"], leche: [1, "l", "brik"], queso: [200, "g", "paquete"],
  mantequilla: [250, "g", "pastilla"], yogur: [4, "unit", "pack"], ajo: [10, "unit", "cabeza"], espinacas: [300, "g", "bolsa"],
  cilantro: [30, "g", "manojo"], perejil: [40, "g", "manojo"], albahaca: [20, "g", "tarrina"], champinones: [250, "g", "bandeja"],
  arroz: [1, "kg", "paquete"], pasta: [500, "g", "paquete"], harina: [1, "kg", "paquete"], "pan-rallado": [250, "g", "paquete"],
  garbanzos: [500, "g", "paquete"], lentejas: [500, "g", "paquete"], fabes: [500, "g", "paquete"], "tomate-triturado": [400, "g", "bote"],
  "leche-coco": [400, "ml", "lata"], caldo: [1, "l", "brik"], aceite: [1, "l", "botella"], vinagre: [500, "ml", "botella"],
  "vino-blanco": [750, "ml", "botella"], soja: [150, "ml", "botella"], azucar: [1, "kg", "paquete"], sal: [1, "kg", "paquete"],
  pimenton: [75, "g", "bote"], comino: [40, "g", "bote"], curry: [40, "g", "bote"], pimienta: [50, "g", "bote"], oregano: [15, "g", "bote"],
  pan: [250, "g", "barra"], "tortilla-maiz": [10, "unit", "paquete"], feta: [200, "g", "paquete"], aceitunas: [200, "g", "bote"],
  "pan-pita": [6, "unit", "paquete"], cuscus: [500, "g", "paquete"], "garbanzos-cocidos": [400, "g", "bote"], sesamo: [100, "g", "bolsa"],
  cacahuetes: [150, "g", "bolsa"], "pasta-curry-rojo": [110, "g", "tarro"],
};

const ALIASES: Record<string, string[]> = {
  pollo: ["pechuga", "pechugas", "muslo", "muslos", "contramuslo", "contramuslos"],
  huevo: ["huevos"],
  patata: ["patatas", "papa", "papas"],
  tomate: ["tomates"],
  pimiento: ["pimientos"],
  ajo: ["ajos"],
  zanahoria: ["zanahorias"],
  pasta: ["espagueti", "espaguetis", "spaghetti", "macarrones", "fideos", "tallarines"],
  queso: ["quesos", "parmesano", "mozzarella", "mozarela", "manchego", "cheddar"],
  chorizo: ["chorizos"],
  gambas: ["gamba", "langostinos", "langostino"],
  merluza: ["pescado blanco"],
  lentejas: ["lenteja"],
  garbanzos: ["garbanzo"],
  fabes: ["fabas", "alubias", "judias blancas"],
  aceite: ["aceite de oliva"],
  "tomate-triturado": ["tomate frito", "salsa de tomate"],
  pan: ["barra de pan"],
  limon: ["limones"],
  cebolla: ["cebollas"],
  aguacate: ["aguacates"],
  "tortilla-maiz": ["tortillas", "tortillas de maiz", "tortillas mexicanas"],
  "leche-coco": ["leche de coco"],
  soja: ["salsa de soja"],
  panceta: ["bacon", "beicon", "tocino"],
  calabacin: ["calabacines"],
  espinacas: ["espinaca"],
  oregano: ["oregano"],
  calamares: ["calamar", "chipirones", "chipiron"],
  champinones: ["champinon", "setas"],
  pepino: ["pepinos"],
  feta: ["queso feta"],
  aceitunas: ["aceituna", "olivas"],
  "pan-pita": ["pita", "pan arabe"],
  cuscus: ["couscous", "cous cous"],
  "garbanzos-cocidos": ["garbanzos cocidos", "bote de garbanzos"],
  sesamo: ["ajonjoli"],
  cacahuetes: ["cacahuete", "mani"],
};

export const ingredients: Ingredient[] = rows.map(([id, name, aisle, unitKind, allergens, tags]) => ({
  id, name, aisle, unitKind, allergens, tags, aliases: ALIASES[id] ?? [],
  ...(PACKS[id] ? { pack: { qty: PACKS[id]![0], unit: PACKS[id]![1], label: PACKS[id]![2] } } : {}),
}));

export const prices: Price[] = rows.map(([ingredientId, , , , , , [perUnit, min, max]]) => ({
  ingredientId, perUnit, currency: "EUR", min, max, confidence: "estimated",
}));

export const EQUIPMENT = ["sarten", "olla", "horno", "batidora", "airfryer", "microondas"] as const;
