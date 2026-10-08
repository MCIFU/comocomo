import { z } from "zod";

export const UnitKind = z.enum(["mass", "volume", "count"]);
export type UnitKind = z.infer<typeof UnitKind>;

/** Unidades soportadas. Masa en g, volumen en ml; "unit" = piezas. */
export const UnitId = z.enum(["g", "kg", "oz", "lb", "ml", "l", "tsp", "tbsp", "cup", "unit"]);
export type UnitId = z.infer<typeof UnitId>;

export const Aisle = z.enum(["produce", "butcher", "fish", "dairy", "pantry", "frozen", "bakery", "other"]);
export type Aisle = z.infer<typeof Aisle>;

export const PriceConfidence = z.enum(["estimated", "reference", "real"]);

export const Ingredient = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  aisle: Aisle,
  unitKind: UnitKind,
  /** g/ml, para convertir entre masa y volumen cuando haga falta */
  density: z.number().positive().optional(),
  /** Alérgenos que contiene (p. ej. "gluten", "lactose", "egg", "fish", "nuts") */
  allergens: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  /**
   * Envase habitual en el súper. Sin envase = se compra a granel (al peso o por unidades sueltas).
   * Sirve para calcular lo que de verdad pagas: no se pueden comprar 550 g de un bote de 400 g.
   */
  pack: z.object({ qty: z.number().positive(), unit: UnitId, label: z.string().min(1) }).optional(),
  /** Otras formas de nombrarlo (plurales, sinónimos, marcas genéricas) */
  aliases: z.array(z.string()).default([]),
});
export type Ingredient = z.infer<typeof Ingredient>;

export const RecipeIngredient = z.object({
  ingredientId: z.string().min(1),
  qty: z.number().positive(),
  unit: UnitId,
  optional: z.boolean().default(false),
});
export type RecipeIngredient = z.infer<typeof RecipeIngredient>;

export const RecipeStep = z.object({
  text: z.string().min(10),
  durationSec: z.number().int().positive().optional(),
  tempC: z.number().int().min(30).max(300).optional(),
});

export const Recipe = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  cuisine: z.string().min(1),
  authenticity: z.enum(["traditional", "adapted"]),
  /** Región/país y, si es una adaptación, qué se ha cambiado respecto a la versión tradicional */
  origin: z.string().min(1),
  note: z.string().optional(),
  baseServings: z.number().int().positive(),
  prepMin: z.number().int().nonnegative(),
  cookMin: z.number().int().nonnegative(),
  difficulty: z.enum(["easy", "medium", "hard"]),
  equipment: z.array(z.string()).default([]),
  ingredients: z.array(RecipeIngredient).min(1),
  steps: z.array(RecipeStep).min(2),
});
export type Recipe = z.infer<typeof Recipe>;

/** Precio de referencia por unidad base (g, ml o unit), siempre como rango. */
export const Price = z
  .object({
    ingredientId: z.string(),
    perUnit: UnitId,
    currency: z.string().length(3),
    min: z.number().nonnegative(),
    max: z.number().nonnegative(),
    confidence: PriceConfidence,
  })
  .refine((p) => p.max >= p.min, "max debe ser >= min");
export type Price = z.infer<typeof Price>;

export const Restriction = z.object({
  kind: z.enum(["allergy", "intolerance", "diet", "dislike"]),
  /** id de ingrediente, alérgeno o tag */
  value: z.string().min(1),
});
export type Restriction = z.infer<typeof Restriction>;
