import type { ReactNode } from "react";
import { Platform, Pressable, StyleSheet, Text, TextProps, View, ViewStyle } from "react-native";
import { fonts, radius, usePalette } from "./theme";

type Tone = "ink" | "muted" | "tomato" | "olive" | "saffron" | "plum";

export function T({ tone = "ink", style, ...p }: TextProps & { tone?: Tone }) {
  const c = usePalette();
  const color = tone === "muted" ? c.inkMuted : c[tone];
  return <Text {...p} style={[{ color, fontFamily: fonts.ui, fontSize: 16, lineHeight: 23 }, style]} />;
}

export function Display({ size = 30, style, ...p }: TextProps & { size?: number }) {
  const c = usePalette();
  return (
    <Text
      accessibilityRole="header"
      {...p}
      style={[{ color: c.ink, fontFamily: fonts.display, fontSize: size, lineHeight: size * 1.15, letterSpacing: -0.4 }, style]}
    />
  );
}

/** Etiqueta pequeña en mayúsculas para separar secciones. */
export function Label({ children, tone = "muted" }: { children: ReactNode; tone?: Tone }) {
  return (
    <T tone={tone} style={{ fontFamily: fonts.uiBold, fontSize: 12, letterSpacing: 1.1, textTransform: "uppercase", lineHeight: 16 }}>
      {children}
    </T>
  );
}

export function Button({
  label, onPress, kind = "primary", disabled, style,
}: { label: string; onPress: () => void; kind?: "primary" | "quiet" | "done"; disabled?: boolean; style?: ViewStyle }) {
  const c = usePalette();
  const primary = kind === "primary";
  const done = kind === "done";
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed, hovered }: any) => [
        s.btn,
        {
          backgroundColor: primary ? c.tomato : done ? c.olive : "transparent",
          borderColor: primary ? c.tomato : done ? c.olive : c.line,
          opacity: disabled ? 0.45 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
        hovered && !disabled && !done && { backgroundColor: primary ? c.tomato : c.crust },
        style,
      ]}
    >
      <T style={{ color: primary ? c.onTomato : done ? c.paper : c.ink, fontFamily: fonts.uiBold }}>{label}</T>
    </Pressable>
  );
}

export function Chip({
  label, selected, onPress, onRemove,
}: { label: string; selected?: boolean; onPress?: () => void; onRemove?: () => void }) {
  const c = usePalette();
  const press = onRemove ?? onPress;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      accessibilityLabel={onRemove ? `Quitar ${label}` : label}
      onPress={press}
      style={({ pressed, hovered }: any) => [
        s.chip,
        { borderColor: selected ? c.ink : c.line, backgroundColor: selected ? c.ink : hovered ? c.crust : "transparent", opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <T style={{ color: selected ? c.paper : c.ink, fontSize: 14, lineHeight: 20, fontFamily: fonts.uiMedium }}>
        {label}
        {onRemove ? "  ×" : ""}
      </T>
    </Pressable>
  );
}

export function Stepper({ value, onChange, min = 1, max = 20, label }: { value: number; onChange: (n: number) => void; min?: number; max?: number; label: string }) {
  const c = usePalette();
  const Btn = ({ sign, disabled }: { sign: "−" | "+"; disabled: boolean }) => (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={sign === "+" ? `Más ${label}` : `Menos ${label}`}
      disabled={disabled}
      onPress={() => onChange(value + (sign === "+" ? 1 : -1))}
      style={({ pressed }) => [s.step, { borderColor: c.line, opacity: disabled ? 0.35 : pressed ? 0.6 : 1 }]}
    >
      <T style={{ fontSize: 20, lineHeight: 24 }}>{sign}</T>
    </Pressable>
  );
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <Btn sign="−" disabled={value <= min} />
      <T accessibilityLiveRegion="polite" style={{ minWidth: 28, textAlign: "center", fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"] }}>
        {value}
      </T>
      <Btn sign="+" disabled={value >= max} />
    </View>
  );
}

export function Rule() {
  const c = usePalette();
  return <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: c.line, marginVertical: 4 }} />;
}

export function Empty({ title, body, action, art }: { title: string; body: string; action?: ReactNode; art?: ReactNode }) {
  return (
    <View style={{ paddingVertical: 40, gap: 10, alignItems: "flex-start", maxWidth: 480 }}>
      {art && <View style={{ marginBottom: 12 }}>{art}</View>}
      <Display size={26}>{title}</Display>
      <T tone="muted">{body}</T>
      {action && <View style={{ marginTop: 10 }}>{action}</View>}
    </View>
  );
}

const s = StyleSheet.create({
  btn: {
    minHeight: 48, borderRadius: radius.md, borderWidth: 1, paddingHorizontal: 20,
    alignItems: "center", justifyContent: "center",
    ...(Platform.OS === "web" ? ({ cursor: "pointer", transitionDuration: "120ms" } as object) : null),
  },
  chip: {
    minHeight: 36, borderRadius: 999, borderWidth: 1, paddingHorizontal: 14, justifyContent: "center",
    ...(Platform.OS === "web" ? ({ cursor: "pointer" } as object) : null),
  },
  step: { width: 44, height: 44, borderRadius: radius.md, borderWidth: 1, alignItems: "center", justifyContent: "center" },
});
