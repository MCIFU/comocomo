import { isotypeGeometry } from "@comocomo/design-tokens";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { fonts, usePalette } from "./theme";

/** Isotipo: dos "o" que se solapan (cómo / como). Geometría corregida ópticamente por tamaño. */
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

/** Logotipo Mercado: "cómo" + "como" en una etiqueta de tinta ligeramente girada. */
export function Wordmark({ size = 22 }: { size?: number }) {
  const c = usePalette();
  return (
    <View
      accessible
      accessibilityLabel="Cómocomo"
      style={{ alignSelf: "flex-start", backgroundColor: c.ink, borderRadius: 10, paddingHorizontal: size * 0.5, paddingVertical: size * 0.12, transform: [{ rotate: "-2deg" }] }}
    >
      <Text style={{ fontFamily: fonts.display, fontSize: size, lineHeight: size * 1.15, letterSpacing: -size * 0.04, color: c.paper }}>
        cómo<Text style={{ color: c.mustard }}>como</Text>
      </Text>
    </View>
  );
}
