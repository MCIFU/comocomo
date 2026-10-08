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
} as const;

/** Se mantiene el nombre para el resto del código: la app usa una sola paleta clara. */
export const light = mercado;

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
