import { DESSERTS } from "@comocomo/content";
import type { Restriction } from "@comocomo/schemas";
import { idsWithHealth } from "./data";

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

/** Filtro de la portada en dos niveles: continente y, dentro, país. España agrupa también Asturias. */
export type Country = { key: string; label: string; cuisines: string[] };
const country = (key: string, label?: string, extra: string[] = []): Country => ({ key, label: label ?? CUISINE_LABEL[key] ?? key, cuisines: [key, ...extra] });

export const CONTINENTS: { key: string; label: string; countries: Country[] }[] = [
  {
    key: "europa", label: "Europa",
    countries: [
      country("espanola", "España", ["asturiana"]), country("italiana"), country("francesa"), country("portuguesa"), country("griega"),
      country("alemana"), country("britanica"), country("irlandesa"), country("hungara"), country("polaca"), country("sueca"),
      country("noruega"), country("rusa"), country("turca"),
    ],
  },
  {
    key: "asia", label: "Asia",
    countries: [
      country("japonesa"), country("china"), country("tailandesa"), country("coreana"), country("india"), country("vietnamita"),
      country("indonesia"), country("filipina"), country("malaya"), country("oriente-medio"),
    ],
  },
  {
    key: "america", label: "América",
    countries: [
      country("estadounidense"), country("mexicana"), country("argentina"), country("peruana"), country("brasilena"), country("colombiana"),
      country("venezolana"), country("chilena"), country("cubana"), country("dominicana"), country("salvadorena"), country("costarricense"),
    ],
  },
  {
    key: "africa", label: "África",
    countries: [country("marroqui"), country("egipcia"), country("nigeriana"), country("etiope"), country("senegalesa"), country("sudafricana")],
  },
  { key: "oceania", label: "Oceanía", countries: [country("australiana")] },
];

/** Filtros rápidos: tiempo y restricciones habituales. Las alergias se aplican en código, siempre. */
export const QUICK_FILTERS: { key: string; label: string; maxMinutes?: number; restrictions?: Restriction[]; ids?: string[] }[] = [
  { key: "postres", label: "Postres", ids: DESSERTS },
  { key: "rapidas", label: "Rápidas (30 min)", maxMinutes: 30 },
  { key: "vegetarianas", label: "Vegetarianas", restrictions: [{ kind: "diet", value: "meat" }, { kind: "diet", value: "seafood" }] },
  { key: "sin-gluten", label: "Sin gluten", restrictions: [{ kind: "allergy", value: "gluten" }] },
  { key: "sin-lactosa", label: "Sin lactosa", restrictions: [{ kind: "allergy", value: "lactose" }] },
  { key: "colesterol", label: "♥ Colesterol", ids: idsWithHealth("colesterol") },
  { key: "hierro", label: "Hierro", ids: idsWithHealth("hierro") },
  { key: "vitamina-c", label: "Vitamina C", ids: idsWithHealth("vitamina-c") },
  { key: "vitaminas", label: "Vitaminas", ids: idsWithHealth("vitaminas") },
  { key: "calcio", label: "Calcio", ids: idsWithHealth("calcio") },
  { key: "fibra", label: "Fibra", ids: idsWithHealth("fibra") },
];

/** Plural de un envase: "bote" → "botes", "media docena" → "medias docenas". */
export function pluralPack(label: string, n: number) {
  if (n === 1) return label;
  return label.split(" ").map((w) => (/[aeiouáéó]$/.test(w) ? w + "s" : w + "es")).join(" ");
}
