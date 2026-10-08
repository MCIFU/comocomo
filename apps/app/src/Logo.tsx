import { isotypeGeometry } from "@comocomo/design-tokens";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { fonts, usePalette } from "./theme";

/**
 * Isotipo: dos "o" que se solapan. La vacía es el ingrediente, la llena es el plato servido;
 * el solape es la transformación. Es también el juego como / cómo (verbo / pregunta).
 * La geometría se corrige ópticamente según el tamaño (ver design-tokens/logo.ts).
 */
export function Isotype({ size = 28 }: { size?: number }) {
  const c = usePalette();
  const g = isotypeGeometry(size);
  return (
    <Svg width={size * 1.5} height={size} viewBox={g.viewBox}>
      <Circle cx={g.cxFill} cy={g.cy} r={g.rFill} fill={c.tomato} />
      <Circle cx={g.cxOutline} cy={g.cy} r={g.r} fill="none" stroke={c.ink} strokeWidth={g.stroke} />
    </Svg>
  );
}

/** "como" + "cómo": el acento es la pregunta. */
export function Wordmark({ size = 22 }: { size?: number }) {
  const c = usePalette();
  return (
    <View accessible accessibilityLabel="COMOCOMO" style={{ flexDirection: "row", alignItems: "center", gap: size * 0.36 }}>
      <Isotype size={size * 0.95} />
      <Text style={{ fontFamily: fonts.displayBold, fontSize: size, letterSpacing: size < 24 ? -0.2 : -0.6, color: c.ink }}>
        como<Text style={{ color: c.tomato }}>cómo</Text>
      </Text>
    </View>
  );
}
