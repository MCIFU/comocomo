import { DESSERTS } from "@comocomo/content";
import type { Restriction } from "@comocomo/schemas";

export const DIFFICULTY: Record<string, string> = { easy: "Fácil", medium: "Media", hard: "Difícil" };

export const CUISINE_LABEL: Record<string, string> = {
  espanola: "España", asturiana: "Asturias", italiana: "Italia", mexicana: "México", china: "China",
  india: "India", japonesa: "Japón", argentina: "Argentina", turca: "Turquía", tailandesa: "Tailandia",
  peruana: "Perú", griega: "Grecia", coreana: "Corea", marroqui: "Marruecos", "oriente-medio": "Oriente Medio",
  francesa: "Francia", estadounidense: "EE. UU.", brasilena: "Brasil", vietnamita: "Vietnam",
  alemana: "Alemania", britanica: "Reino Unido", portuguesa: "Portugal", indonesia: "Indonesia", filipina: "Filipinas",
  cubana: "Cuba", colombiana: "Colombia", venezolana: "Venezuela", chilena: "Chile",
  nigeriana: "Nigeria", etiope: "Etiopía", senegalesa: "Senegal", sudafricana: "Sudáfrica",
  hungara: "Hungría", polaca: "Polonia", irlandesa: "Irlanda", sueca: "Suecia", noruega: "Noruega", malaya: "Malasia",
  dominicana: "Rep. Dominicana", salvadorena: "El Salvador", costarricense: "Costa Rica", australiana: "Australia", rusa: "Rusia", egipcia: "Egipto",
};

/** Pegatinas de la portada: agrupan cocinas para no tener 15 botones. */
export const REGION_FILTERS: { key: string; label: string; cuisines: string[] }[] = [
  { key: "espana", label: "España", cuisines: ["espanola", "asturiana"] },
  { key: "italia", label: "Italia", cuisines: ["italiana"] },
  { key: "europa", label: "Europa", cuisines: ["francesa", "alemana", "britanica", "portuguesa", "griega", "turca", "hungara", "polaca", "irlandesa", "sueca", "noruega"] },
  { key: "asia", label: "Asia", cuisines: ["japonesa", "china", "coreana", "tailandesa", "india", "vietnamita", "indonesia", "filipina", "malaya"] },
  { key: "america", label: "América", cuisines: ["mexicana", "estadounidense", "cubana", "colombiana", "venezolana", "peruana", "argentina", "chilena", "brasilena", "dominicana", "salvadorena", "costarricense"] },
  { key: "africa", label: "África y Oriente Medio", cuisines: ["marroqui", "oriente-medio", "nigeriana", "etiope", "senegalesa", "sudafricana", "egipcia"] },
];

/** Filtros rápidos: tiempo y restricciones habituales. Las alergias se aplican en código, siempre. */
export const QUICK_FILTERS: { key: string; label: string; maxMinutes?: number; restrictions?: Restriction[]; ids?: string[] }[] = [
  { key: "postres", label: "Postres", ids: DESSERTS },
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
