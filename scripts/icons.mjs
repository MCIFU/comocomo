// Genera todos los iconos (Android, iOS, web/PWA y favicon) a partir del logotipo «etiqueta»:
// «cómo» + «como» en una etiqueta de tinta girada sobre mostaza.
// Uso: node scripts/icons.mjs
import { Resvg } from "@resvg/resvg-js";
import { mkdirSync, writeFileSync } from "node:fs";

const INK = "#1B1712", MUSTARD = "#F5B82E", PAPER = "#FFF7E6";
const FONT = "node_modules/@expo-google-fonts/bricolage-grotesque/800ExtraBold/BricolageGrotesque_800ExtraBold.ttf";

function png(svg, width, out) {
  const r = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { fontFiles: [FONT], loadSystemFonts: false, defaultFontFamily: "Bricolage Grotesque" },
  });
  writeFileSync(out, r.render().asPng());
  console.log("✓", out, `${width}px`);
}

/**
 * Etiqueta en un lienzo de 100×100. `scale` = ancho de la etiqueta respecto al lienzo
 * (las versiones pequeñas la agrandan para que el texto se lea). `bg` null = transparente.
 */
function tag({ scale = 0.76, bg = MUSTARD, radius = 0 } = {}) {
  const w = 100 * scale, h = w * 0.56, x = (100 - w) / 2, y = (100 - h) / 2;
  const fs = h * 0.4;
  const line = (txt, ty, fill) =>
    `<text x="50" y="${ty}" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="${fs}" letter-spacing="${-fs * 0.03}" fill="${fill}">${txt}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  ${bg ? `<rect width="100" height="100" rx="${radius}" fill="${bg}"/>` : ""}
  <g transform="rotate(-6 50 50)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h * 0.2}" fill="${INK}"/>
    ${line("cómo", y + h * 0.47, PAPER)}
    ${line("como", y + h * 0.86, MUSTARD)}
  </g>
</svg>`;
}

const A = "apps/app/assets", P = "apps/app/public";
mkdirSync(P, { recursive: true });

// App (iOS/Expo): cuadrado completo; el sistema redondea las esquinas.
png(tag(), 1024, `${A}/icon.png`);
// Android adaptativo: solo la etiqueta, dentro de la zona segura (66 % central); el fondo mostaza va en app.json.
png(tag({ scale: 0.6, bg: null }), 1024, `${A}/adaptive-icon.png`);
// Pantalla de carga: etiqueta sola.
png(tag({ scale: 0.9, bg: null }), 400, `${A}/splash-icon.png`);
// Web / PWA / pantalla de inicio en móvil.
png(tag(), 180, `${P}/apple-touch-icon.png`);
png(tag(), 192, `${P}/icon-192.png`);
png(tag(), 512, `${P}/icon-512.png`);
png(tag({ scale: 0.6 }), 512, `${P}/icon-maskable-512.png`); // con margen para la máscara de Android
// Favicon de pestaña: la etiqueta ocupa casi todo para que el texto se lea en 16-48 px.
const fav = tag({ scale: 0.98, radius: 18 });
png(fav, 48, `${A}/favicon.png`);
png(fav, 48, `${P}/favicon-48.png`);
png(fav, 32, `${P}/favicon-32.png`);
png(fav, 16, `${P}/favicon-16.png`);

writeFileSync(`${P}/manifest.webmanifest`, JSON.stringify({
  name: "Cómocomo", short_name: "Cómocomo", description: "Tu cocina, tus ingredientes, tu presupuesto.",
  start_url: "/", display: "standalone", background_color: "#FBF6EE", theme_color: MUSTARD, lang: "es",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
}, null, 2));
console.log("✓", `${P}/manifest.webmanifest`);
