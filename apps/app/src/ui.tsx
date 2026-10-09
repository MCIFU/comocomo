import type { ReactNode } from "react";
import { Platform, Pressable, StyleSheet, Text, TextProps, View, type ViewStyle } from "react-native";
import { fonts, radius, stroke, usePalette, type Palette } from "./theme";

type Tone = "ink" | "muted" | "tomato" | "olive" | "saffron" | "plum" | "onTomato";
const webCursor = Platform.OS === "web" ? ({ cursor: "pointer" } as object) : null;

export function T({ tone = "ink", style, ...p }: TextProps & { tone?: Tone }) {
  const c = usePalette();
  const color = tone === "muted" ? c.inkMuted : tone === "tomato" ? c.tomatoText : c[tone];
  return <Text {...p} style={[{ color, fontFamily: fonts.ui, fontSize: 17, lineHeight: 25 }, style]} />;
}

/** Titulares: Bricolage Grotesque ExtraBold, interletraje apretado. */
export function Display({ size = 34, style, ...p }: TextProps & { size?: number }) {
  const c = usePalette();
  return (
    <Text
      accessibilityRole="header"
      {...p}
      style={[{ color: c.ink, fontFamily: fonts.display, fontSize: size, lineHeight: size * 0.98, letterSpacing: -size * 0.04 }, style]}
    />
  );
}

/** Etiqueta monoespaciada en mayúsculas (estilo ticket). */
export function Label({ children, tone = "ink", style }: { children: ReactNode; tone?: Tone; style?: object }) {
  return (
    <T tone={tone} style={[{ fontFamily: fonts.monoBold, fontSize: 12.5, letterSpacing: 0.6, textTransform: "uppercase", lineHeight: 17 }, style]}>
      {children}
    </T>
  );
}

/**
 * Bloque con borde negro y sombra dura desplazada: la firma visual de la dirección Mercado.
 * La sombra es un rectángulo de tinta detrás (funciona igual en web y Android).
 */
export function Pop({ children, bg, r = radius.lg, offset = stroke.shadow, style, inner }: {
  children: ReactNode; bg?: string; r?: number; offset?: number; style?: ViewStyle; inner?: ViewStyle;
}) {
  const c = usePalette();
  return (
    <View style={[{ paddingRight: offset, paddingBottom: offset }, style]}>
      <View style={{ position: "absolute", left: offset, top: offset, right: 0, bottom: 0, backgroundColor: c.ink, borderRadius: r }} />
      <View style={[{ backgroundColor: bg ?? c.card, borderWidth: stroke.width, borderColor: c.ink, borderRadius: r, overflow: "hidden" }, inner]}>{children}</View>
    </View>
  );
}

export function Button({
  label, onPress, kind = "primary", disabled, style, accessibilityLabel,
}: { label: string; onPress: () => void; kind?: "primary" | "quiet" | "done" | "mustard"; disabled?: boolean; style?: ViewStyle; accessibilityLabel?: string }) {
  const c = usePalette();
  const bg = kind === "primary" ? c.tomato : kind === "done" ? c.olive : kind === "mustard" ? c.mustard : c.card;
  const fg = kind === "primary" || kind === "done" ? c.onTomato : kind === "mustard" ? c.onAccent : c.ink;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      onPress={onPress}
      style={[{ opacity: disabled ? 0.45 : 1 }, webCursor, style]}
    >
      {({ pressed }) => (
        <View style={{ paddingRight: 4, paddingBottom: 4 }}>
          <View style={{ position: "absolute", left: 4, top: 4, right: 0, bottom: 0, backgroundColor: c.ink, borderRadius: radius.md }} />
          <View
            style={{
              minHeight: 52, paddingHorizontal: 22, alignItems: "center", justifyContent: "center", backgroundColor: bg,
              borderWidth: stroke.width, borderColor: c.ink, borderRadius: radius.md,
              transform: pressed ? [{ translateX: 4 }, { translateY: 4 }] : [],
            }}
          >
            <T style={{ color: fg, fontFamily: fonts.uiBold, fontSize: 17 }}>{label}</T>
          </View>
        </View>
      )}
    </Pressable>
  );
}

const STICKERS: (keyof Palette)[] = ["card", "mustard", "sky", "pink", "mint"];

/** Pegatina: chip con borde y sombra dura. Seleccionada = tinta. */
export function Chip({ label, selected, onPress, color }: { label: string; selected?: boolean; onPress?: () => void; color?: number }) {
  const c = usePalette();
  const bg = selected ? c.ink : c[STICKERS[(color ?? 0) % STICKERS.length]!];
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected: !!selected }} onPress={onPress} style={webCursor}>
      {({ pressed }) => (
        <View style={{ paddingRight: 3, paddingBottom: 3 }}>
          <View style={{ position: "absolute", left: 3, top: 3, right: 0, bottom: 0, backgroundColor: c.ink, borderRadius: 999 }} />
          <View
            style={{
              minHeight: 38, paddingHorizontal: 16, justifyContent: "center", borderRadius: 999, borderWidth: 2.5, borderColor: c.ink, backgroundColor: bg,
              transform: pressed ? [{ translateX: 3 }, { translateY: 3 }] : [],
            }}
          >
            <T style={{ color: selected ? c.paper : (color ?? 0) % STICKERS.length === 0 ? c.ink : c.onAccent, fontFamily: fonts.uiBold, fontSize: 15, lineHeight: 20 }}>{label}</T>
          </View>
        </View>
      )}
    </Pressable>
  );
}

export function Stepper({ value, onChange, min = 1, max = 20, label, unit }: { value: number; onChange: (n: number) => void; min?: number; max?: number; label: string; unit?: string }) {
  const c = usePalette();
  const Btn = ({ sign, disabled }: { sign: "−" | "+"; disabled: boolean }) => (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={sign === "+" ? `Más ${label}` : `Menos ${label}`}
      disabled={disabled}
      onPress={() => onChange(value + (sign === "+" ? 1 : -1))}
      style={({ pressed }) => [s.step, { backgroundColor: c.mustard, opacity: disabled ? 0.35 : pressed ? 0.7 : 1 }, webCursor]}
    >
      <T style={{ color: c.onAccent, fontSize: 22, lineHeight: 26, fontFamily: fonts.uiBold }}>{sign}</T>
    </Pressable>
  );
  return (
    <Pop r={radius.md} offset={4} inner={{ flexDirection: "row", alignItems: "center", gap: 6, padding: 5 }}>
      <Btn sign="−" disabled={value <= min} />
      <T accessibilityLiveRegion="polite" style={{ minWidth: unit ? 104 : 36, textAlign: "center", fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"] }}>
        {value}{unit ? ` ${unit}` : ""}
      </T>
      <Btn sign="+" disabled={value >= max} />
    </Pop>
  );
}

export function Empty({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <View style={{ paddingVertical: 40, gap: 10, alignItems: "flex-start", maxWidth: 520 }}>
      <Display size={32}>{title}</Display>
      <T tone="muted">{body}</T>
      {action && <View style={{ marginTop: 10 }}>{action}</View>}
    </View>
  );
}

const s = StyleSheet.create({
  step: { width: 42, height: 42, borderRadius: 10, alignItems: "center", justifyContent: "center" },
});
