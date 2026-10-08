import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { fonts, usePalette } from "./theme";
import { Text } from "react-native";

/**
 * Isotipo: dos "o" que se solapan. La vacía es el ingrediente, la llena es el plato servido;
 * el solape es la transformación. Es también el juego como / cómo (verbo / pregunta).
 */
export function Isotype({ size = 28 }: { size?: number }) {
  const c = usePalette();
  return (
    <Svg width={size * 1.5} height={size} viewBox="0 0 48 32">
      <Circle cx={32} cy={16} r={12} fill={c.tomato} />
      <Circle cx={16} cy={16} r={12} fill="none" stroke={c.ink} strokeWidth={3} />
    </Svg>
  );
}

/** "como" + "cómo": el acento es la pregunta. */
export function Wordmark({ size = 22 }: { size?: number }) {
  const c = usePalette();
  return (
    <View accessible accessibilityLabel="COMOCOMO" accessibilityRole="header" style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Isotype size={size} />
      <Text style={{ fontFamily: fonts.displayBold, fontSize: size, letterSpacing: -0.5, color: c.ink }}>
        como<Text style={{ color: c.tomato }}>cómo</Text>
      </Text>
    </View>
  );
}
