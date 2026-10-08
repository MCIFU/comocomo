import { useColorScheme } from "react-native";
import { dark, light, radius, space } from "@comocomo/design-tokens";

export type Palette = { [K in keyof typeof light]: string };

export function usePalette(): Palette {
  return useColorScheme() === "dark" ? dark : light;
}

export const fonts = {
  display: "Fraunces_600SemiBold",
  displayBold: "Fraunces_700Bold",
  ui: "InstrumentSans_400Regular",
  uiMedium: "InstrumentSans_500Medium",
  uiBold: "InstrumentSans_700Bold",
} as const;

export { radius, space };
export const MAX_WIDTH = 720;
