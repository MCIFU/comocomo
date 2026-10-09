/**
 * Dirección "Mercado": colores vivos de puesto de mercado, tinta casi negra y bordes duros.
 * Fuente única de verdad visual; contrastes verificados en tokens.test.ts.
 */
export const mercado = {
  /** fondo de página */
  paper: "#FFF7E6",
  /** superficie secundaria */
  crust: "#F7EBD3",
  /** tarjetas y tickets */
  card: "#FFFDF8",
  ink: "#1B1712",
  inkMuted: "#5E554B",
  /** acento principal y bloque de cabecera (oscurecido para texto claro AA) */
  tomato: "#CC3820",
  onTomato: "#FFFDF8",
  /** rojo para texto (etiquetas): igual que tomato en claro, más luminoso en oscuro */
  tomatoText: "#CC3820",
  mustard: "#F5B82E",
  sky: "#9FD1E8",
  pink: "#F6A6B2",
  mint: "#C9E7A6",
  /** éxito / "listo" */
  olive: "#2F7D4F",
  /** aviso en texto */
  saffron: "#8A5A00",
  plum: "#6B2E57",
  line: "#E6D7BB",
  cream: "#E3C78F",
  /** texto sobre pegatinas de color (mostaza, rosa, cielo, menta): siempre tinta oscura */
  onAccent: "#1B1712",
  /** papel del ticket de la compra */
  ticket: "#FFFFFF",
  /** separadores del ticket */
  ticketRule: "#BBBBBB",
};

/**
 * Escala de precio (barato → caro) en tonos de tinta: deliberadamente sin color,
 * para no confundirse con las pegatinas de país. Texto: tinta en los tres primeros, papel en el último.
 */
export const priceScale = ["#FFFDF8", "#E3D9C6", "#A99C88", "#1B1712"] as const;

/**
 * «Mercado de noche»: mismas claves que `mercado`. La tinta pasa a ser crema (texto, bordes y
 * sombras duras se ven como tiza sobre pizarra) y las pegatinas de color se mantienen, con texto oscuro.
 */
export const mercadoDark: { [K in keyof typeof mercado]: string } = {
  paper: "#15110E",
  crust: "#211B16",
  card: "#1E1914",
  ink: "#F3EAD9",
  inkMuted: "#B3A792",
  tomato: "#CC3820",
  onTomato: "#FFFDF8",
  tomatoText: "#F2765C",
  mustard: "#F5B82E",
  sky: "#8FC4DE",
  pink: "#EE9CAA",
  mint: "#B5D893",
  olive: "#3E9A63",
  saffron: "#E7AE45",
  plum: "#D69BC2",
  line: "#3A3028",
  cream: "#6B5A3A",
  onAccent: "#1B1712",
  ticket: "#2A231D",
  ticketRule: "#5C5045",
};

export const light = mercado;
export const dark = mercadoDark;

export const space = [0, 4, 8, 12, 16, 24, 32, 48, 64] as const;
export const radius = { sm: 10, md: 16, lg: 22, xl: 28 } as const;
/** Borde y sombra dura de la dirección Mercado */
export const stroke = { width: 3, shadow: 5 } as const;
export const control = { height: 48 } as const;
export const motion = { fast: 120, base: 200, easing: "cubic-bezier(0.2, 0, 0, 1)" } as const;
export const font = {
  display: "Bricolage Grotesque",
  ui: "Bricolage Grotesque",
  mono: "JetBrains Mono",
} as const;
export * from "./logo";
