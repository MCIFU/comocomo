import { mercado, radius, space, stroke } from "@comocomo/design-tokens";

export type Palette = { [K in keyof typeof mercado]: string };

/** Una sola paleta clara: la dirección Mercado vive de sus colores sobre crema. */
export function usePalette(): Palette {
  return mercado;
}

export const fonts = {
  display: "BricolageGrotesque_800ExtraBold",
  displayBold: "BricolageGrotesque_800ExtraBold",
  ui: "BricolageGrotesque_400Regular",
  uiMedium: "BricolageGrotesque_600SemiBold",
  uiBold: "BricolageGrotesque_700Bold",
  mono: "JetBrainsMono_400Regular",
  monoBold: "JetBrainsMono_600SemiBold",
} as const;

export { radius, space, stroke };
export const MAX_WIDTH = 1240;
