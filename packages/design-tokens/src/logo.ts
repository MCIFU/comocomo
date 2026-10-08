/**
 * Geometría del isotipo (dos "o" solapadas) con corrección óptica por tamaño.
 * A tamaños pequeños el contorno se engrosa y el radio se ajusta para que el trazo
 * no se coma el hueco interior; el solape se reduce para que las dos formas sigan leyéndose.
 * Fuente única: la usan el componente de la app y el script que genera los iconos PNG.
 */
export function isotypeGeometry(px: number) {
  const stroke = px <= 20 ? 4.6 : px <= 32 ? 3.8 : px <= 64 ? 3.2 : 2.8;
  const r = 12 - stroke / 2 + 1.2;
  // Separación entre centros: más aire a tamaños pequeños.
  const gap = px <= 20 ? 17.5 : px <= 32 ? 16.8 : 16;
  const cy = 16;
  const cxOutline = 24 - gap / 2;
  const cxFill = 24 + gap / 2;
  return { viewBox: "0 0 48 32", stroke, r, rFill: r + stroke / 2, cy, cxOutline, cxFill };
}

export function isotypeSvg(px: number, ink: string, tomato: string, background?: string) {
  const g = isotypeGeometry(px);
  const bg = background ? `<rect width="48" height="32" fill="${background}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${g.viewBox}">${bg}<circle cx="${g.cxFill}" cy="${g.cy}" r="${g.rFill}" fill="${tomato}"/><circle cx="${g.cxOutline}" cy="${g.cy}" r="${g.r}" fill="none" stroke="${ink}" stroke-width="${g.stroke}"/></svg>`;
}
