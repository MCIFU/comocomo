// Genera los iconos PNG (Android, favicon, splash) a partir de la geometría del isotipo.
// Uso: node --experimental-strip-types scripts/icons.mjs
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";
import { isotypeSvg } from "../packages/design-tokens/src/logo.ts";

const INK = "#1F1A17", TOMATO = "#C23A24", PAPER = "#FBF6EE";

function png(svg, width, out) {
  const r = new Resvg(svg, { fitTo: { mode: "width", value: width } });
  writeFileSync(out, r.render().asPng());
  console.log("✓", out);
}

// Icono cuadrado: isotipo centrado sobre papel, con margen para la máscara de Android.
function square(px, pad, bg) {
  const inner = isotypeSvg(px, INK, TOMATO).replace(/<svg[^>]*>|<\/svg>/g, "");
  const s = 48 / (1 - pad * 2);
  const off = (s - 48) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}">${bg ? `<rect width="${s}" height="${s}" fill="${bg}"/>` : ""}<g transform="translate(${off} ${off + 8})">${inner}</g></svg>`;
}

const A = "apps/app/assets";
png(square(512, 0.16, PAPER), 1024, `${A}/icon.png`);
png(square(512, 0.3, null), 1024, `${A}/adaptive-icon.png`); // Android recorta un círculo: más margen
png(square(16, 0.04, PAPER), 48, `${A}/favicon.png`);
png(square(200, 0.36, null), 400, `${A}/splash-icon.png`);
