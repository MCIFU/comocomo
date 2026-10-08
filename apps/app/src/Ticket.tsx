import { useState, type ReactNode } from "react";
import { View, type ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { fonts, usePalette } from "./theme";
import { T } from "./ui";

const TOOTH = 12;
const SHADOW = 6;

/** Dientes del borde del ticket, pintados con el color del fondo de la página. */
function Teeth({ width, edge, color }: { width: number; edge: "top" | "bottom"; color: string }) {
  const n = Math.ceil(width / TOOTH);
  let d = edge === "top" ? `M0 0 ` : `M0 ${TOOTH / 2} `;
  for (let i = 0; i < n; i++) {
    const x = i * TOOTH;
    d += edge === "top" ? `L${x + TOOTH / 2} ${TOOTH / 2} L${x + TOOTH} 0 ` : `L${x + TOOTH / 2} 0 L${x + TOOTH} ${TOOTH / 2} `;
  }
  d += edge === "top" ? `L${n * TOOTH} 0 Z` : `L${n * TOOTH} ${TOOTH / 2} Z`;
  return (
    <Svg width={width} height={TOOTH / 2} style={{ position: "absolute", left: 0, [edge]: 0 }} pointerEvents="none">
      <Path d={d} fill={color} />
    </Svg>
  );
}

/** Ticket del súper: papel blanco, texto monoespaciado, bordes dentados y sombra dura. */
export function Ticket({ children, style, label }: { children: ReactNode; style?: ViewStyle; label?: string }) {
  const c = usePalette();
  const [w, setW] = useState(0);
  return (
    <View accessibilityLabel={label} onLayout={(e) => setW(e.nativeEvent.layout.width)} style={[{ paddingRight: SHADOW, paddingBottom: SHADOW }, style]}>
      <View style={{ position: "absolute", left: SHADOW, top: SHADOW, right: 0, bottom: 0, backgroundColor: c.ink }} />
      <View style={{ backgroundColor: "#FFFFFF", paddingVertical: 30, paddingHorizontal: 24 }}>{children}</View>
      {w > 0 && <Teeth width={w} edge="top" color={c.paper} />}
      {w > 0 && <Teeth width={w} edge="bottom" color={c.paper} />}
    </View>
  );
}

/** Línea del ticket: concepto a la izquierda, valor a la derecha. */
export function TicketLine({ left, right, strong, sub }: { left: string; right?: string; strong?: boolean; sub?: string }) {
  return (
    <View style={{ paddingVertical: 3 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 12 }}>
        <T numberOfLines={1} style={{ flex: 1, fontFamily: strong ? fonts.monoBold : fonts.mono, fontSize: strong ? 22 : 15, lineHeight: strong ? 30 : 22 }}>{left}</T>
        {right !== undefined && (
          <T style={{ fontFamily: strong ? fonts.monoBold : fonts.mono, fontSize: strong ? 22 : 15, lineHeight: strong ? 30 : 22, fontVariant: ["tabular-nums"] }}>{right}</T>
        )}
      </View>
      {sub && <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 12.5, lineHeight: 17 }}>{sub}</T>}
    </View>
  );
}

export function TicketRule() {
  return <View style={{ borderTopWidth: 2, borderStyle: "dashed", borderColor: "#BBB", marginVertical: 12 }} />;
}

export function TicketCenter({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <T tone={muted ? "muted" : "ink"} style={{ textAlign: "center", fontFamily: muted ? fonts.mono : fonts.monoBold, fontSize: muted ? 13 : 15, lineHeight: muted ? 19 : 22, letterSpacing: muted ? 0 : 2 }}>
      {children}
    </T>
  );
}
