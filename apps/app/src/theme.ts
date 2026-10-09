import { mercado, mercadoDark, radius, space, stroke } from "@comocomo/design-tokens";
import { useColorScheme } from "react-native";
import { useStore } from "./lib/store";

export type Palette = { [K in keyof typeof mercado]: string };

/** Tema efectivo: el elegido por la persona o, en «Auto», el del sistema. */
export function useIsDark(): boolean {
  const pref = useStore((s) => s.theme);
  const system = useColorScheme();
  return pref === "dark" || (pref === "system" && system === "dark");
}

export function usePalette(): Palette {
  return useIsDark() ? mercadoDark : mercado;
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
