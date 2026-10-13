import type { Recipe } from "@comocomo/schemas";
import { r } from "./helpers";

type Base = Omit<Parameters<typeof r>[0], "cuisine" | "origin" | "authenticity"> & {
  cuisine?: string; origin?: string; authenticity?: "traditional" | "adapted";
};

/**
 * Recetas basadas en recetarios publicados: los pasos están reescritos para COMOCOMO y los
 * ingredientes adaptados al catálogo; la nota siempre cita la fuente.
 */
export function fromSource(source: string, defaults: { cuisine: string; origin: string }) {
  return (x: Base): Recipe =>
    r({
      cuisine: x.cuisine ?? defaults.cuisine,
      origin: x.origin ?? defaults.origin,
      authenticity: x.authenticity ?? "traditional",
      ...x,
      note: x.note ? `${x.note} ${source}` : source,
    });
}

/** «1000 recetas de oro», de Karlos Arguiñano. */
export const arg = fromSource("Basada en una receta de «1000 recetas de oro», de Karlos Arguiñano.", { cuisine: "espanola", origin: "España" });
