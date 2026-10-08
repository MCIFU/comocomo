import { STAPLES, toBase } from "@comocomo/core";
import type { Recipe } from "@comocomo/schemas";
import { memo, useMemo } from "react";
import Svg, { Circle, G } from "react-native-svg";
import { catalog } from "./lib/data";
import { usePalette, type Palette } from "./theme";

const GOLDEN = Math.PI * (3 - Math.sqrt(5));

function aisleColor(aisle: string, c: Palette) {
  switch (aisle) {
    case "produce": return c.olive;
    case "butcher": return c.tomato;
    case "fish": return c.plum;
    case "dairy": return c.cream;
    case "bakery": return c.saffron;
    default: return c.saffron;
  }
}

/**
 * "Plato de datos": la receta vista desde arriba. Cada ingrediente es una pieza
 * (color = pasillo, tamaño = peso relativo). Relleno = ya lo tienes; contorno = te falta.
 * Sustituye a la fotografía hasta tener una dirección fotográfica real y comunica información.
 */
export const Plate = memo(function Plate({ recipe, have, size = 72, reveal }: { recipe: Recipe; have?: ReadonlySet<string>; size?: number; reveal?: number }) {
  const c = usePalette();
  const pieces = useMemo(() => {
    const items = recipe.ingredients
      .filter((i) => !STAPLES.has(i.ingredientId) && !i.optional)
      .map((i) => {
        const ing = catalog.get(i.ingredientId);
        const grams = i.unit === "unit" ? i.qty * 90 : toBase(i.qty, i.unit);
        return { id: i.ingredientId, aisle: ing?.aisle ?? "other", w: Math.sqrt(Math.max(grams, 4)) };
      })
      .sort((a, b) => b.w - a.w);
    const maxW = Math.max(...items.map((x) => x.w), 1);
    const n = items.length;
    return items.map((it, i) => {
      const rr = 0.66 * Math.sqrt((i + 0.6) / Math.max(n, 1));
      const a = i * GOLDEN + 0.6;
      const r = (0.075 + 0.105 * (it.w / maxW)) * (n <= 2 ? 1.45 : n <= 4 ? 1.2 : n <= 6 ? 0.95 : 0.82);
      // Ninguna pieza se sale del plato: se acerca al centro si hace falta.
      let d = rr * 0.5;
      if (d + r > 0.39) d = Math.max(0, 0.39 - r);
      return { ...it, x: 0.5 + d * Math.cos(a), y: 0.5 + d * Math.sin(a), r };
    });
  }, [recipe]);

  const S = 100;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${S} ${S}`}>
      <Circle cx={50} cy={50} r={49} fill={c.crust} />
      <Circle cx={50} cy={50} r={41} fill={c.paper} />
      {/* `reveal` limita cuántas piezas se pintan: permite "montar" el plato pieza a pieza */}
      {(reveal === undefined ? pieces : pieces.slice(0, reveal)).map((p) => {
        // Sin información de despensa, todo se pinta lleno (vista neutra de la receta).
        const owned = !have || have.has(p.id);
        const col = aisleColor(p.aisle, c);
        return (
          <G key={p.id}>
            <Circle cx={p.x * S} cy={p.y * S} r={p.r * S} fill={col} opacity={owned ? 0.95 : 0.16} />
            {!owned && <Circle cx={p.x * S} cy={p.y * S} r={p.r * S - 1} fill="none" stroke={col} strokeWidth={2} />}
          </G>
        );
      })}
    </Svg>
  );
});

/** Plato vacío para estados vacíos: la misma pieza visual, sin ingredientes. */
export function EmptyPlate({ size = 120 }: { size?: number }) {
  const c = usePalette();
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Circle cx={50} cy={50} r={49} fill={c.crust} />
      <Circle cx={50} cy={50} r={41} fill={c.paper} />
      <Circle cx={50} cy={50} r={41} fill="none" stroke={c.line} strokeWidth={1} strokeDasharray="3 4" />
    </Svg>
  );
}
