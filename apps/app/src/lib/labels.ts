import type { Restriction } from "@comocomo/schemas";

export const DIFFICULTY: Record<string, string> = { easy: "Fácil", medium: "Media", hard: "Difícil" };

export const CUISINE_LABEL: Record<string, string> = {
  espanola: "España", asturiana: "Asturias", italiana: "Italia", mexicana: "México", china: "China",
  india: "India", japonesa: "Japón", argentina: "Argentina", turca: "Turquía", tailandesa: "Tailandia",
  peruana: "Perú", griega: "Grecia", coreana: "Corea", marroqui: "Marruecos", "oriente-medio": "Oriente Medio",
};

/** Pegatinas de la portada: agrupan cocinas para no tener 15 botones. */
export const REGION_FILTERS: { key: string; label: string; cuisines: string[] }[] = [
  { key: "espana", label: "España", cuisines: ["espanola", "asturiana"] },
  { key: "italia", label: "Italia", cuisines: ["italiana"] },
  { key: "mexico", label: "México", cuisines: ["mexicana"] },
  { key: "asia", label: "Asia", cuisines: ["japonesa", "china", "coreana", "tailandesa", "india"] },
  { key: "mundo", label: "Más mundo", cuisines: ["argentina", "turca", "peruana", "griega", "marroqui", "oriente-medio"] },
];

/** Filtros rápidos: tiempo y restricciones habituales. Las alergias se aplican en código, siempre. */
export const QUICK_FILTERS: { key: string; label: string; maxMinutes?: number; restrictions?: Restriction[] }[] = [
  { key: "rapidas", label: "Rápidas (30 min)", maxMinutes: 30 },
  { key: "vegetarianas", label: "Vegetarianas", restrictions: [{ kind: "diet", value: "meat" }, { kind: "diet", value: "seafood" }] },
  { key: "sin-gluten", label: "Sin gluten", restrictions: [{ kind: "allergy", value: "gluten" }] },
  { key: "sin-lactosa", label: "Sin lactosa", restrictions: [{ kind: "allergy", value: "lactose" }] },
];

/** Plural de un envase: "bote" → "botes", "media docena" → "medias docenas". */
export function pluralPack(label: string, n: number) {
  if (n === 1) return label;
  return label.split(" ").map((w) => (/[aeiouáéó]$/.test(w) ? w + "s" : w + "es")).join(" ");
}
