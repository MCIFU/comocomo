import type { Tabs } from "expo-router";
import type { ComponentProps } from "react";

type BottomTabBarProps = Parameters<NonNullable<ComponentProps<typeof Tabs>["tabBar"]>>[0];
import { Animated, Platform, Pressable, StyleSheet, View } from "react-native";
import { usePulse } from "./motion";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "./lib/store";
import { Wordmark } from "./Logo";
import { fonts, usePalette } from "./theme";
import { T } from "./ui";

const LABELS: Record<string, string> = { cocina: "Cocinar", despensa: "Despensa", compra: "Compra", guardadas: "Guardadas" };

/**
 * Navegación propia: en escritorio, barra superior con la marca y un subrayado en la sección activa;
 * en móvil, barra inferior con la misma lógica (indicador superior). Una sola pieza para ambas.
 */
export function TabBar({ state, navigation, wide }: BottomTabBarProps & { wide: boolean }) {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const cart = useStore((s) => s.cart.length);
  const favs = useStore((s) => s.favorites.length);
  const counts: Record<string, number> = { compra: cart, guardadas: favs };

  const items = state.routes.map((route, i) => {
    const focused = state.index === i;
    const count = counts[route.name] ?? 0;
    return (
      <Pressable
        key={route.key}
        accessibilityRole="link"
        accessibilityState={{ selected: focused }}
        accessibilityLabel={`${LABELS[route.name]}${count ? `, ${count}` : ""}`}
        onPress={() => {
          const e = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
          if (!focused && !e.defaultPrevented) navigation.navigate(route.name);
        }}
        style={({ hovered, pressed }: any) => [
          wide ? s.itemWide : s.item,
          { opacity: pressed ? 0.6 : 1 },
          hovered && !focused && { backgroundColor: c.crust },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <T style={{ fontFamily: focused ? fonts.uiBold : fonts.uiMedium, fontSize: wide ? 15 : 14, color: focused ? c.ink : c.inkMuted }}>{LABELS[route.name]}</T>
          {count > 0 && (
            <Badge count={count} strong={route.name === "compra"} />
          )}
        </View>
        <View style={[wide ? s.barWide : s.bar, { backgroundColor: focused ? c.tomato : "transparent" }]} />
      </Pressable>
    );
  });

  if (wide) {
    return (
      <View style={[s.top, { backgroundColor: c.paper, borderBottomColor: c.line }]}>
        <View style={s.topInner}>
          <Pressable accessibilityRole="link" accessibilityLabel="COMOCOMO, inicio" onPress={() => navigation.navigate("cocina")}>
            <Wordmark size={22} />
          </Pressable>
          <View style={{ flexDirection: "row", gap: 4 }}>{items}</View>
        </View>
      </View>
    );
  }
  return (
    <View style={[s.bottom, { backgroundColor: c.paper, borderTopColor: c.line, paddingBottom: Math.max(insets.bottom, 6) }]}>{items}</View>
  );
}

/** Insignia con rebote al cambiar el número (p. ej. al añadir una receta a la compra). */
function Badge({ count, strong }: { count: number; strong: boolean }) {
  const c = usePalette();
  const pulse = usePulse(count, 0.35);
  return (
    <Animated.View style={[s.badge, { backgroundColor: strong ? c.tomato : c.ink }, pulse]}>
      <T style={{ color: strong ? c.onTomato : c.paper, fontSize: 11, lineHeight: 14, fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"] }}>{count}</T>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  top: { borderBottomWidth: StyleSheet.hairlineWidth, alignItems: "center", paddingHorizontal: 32 },
  topInner: { width: "100%", maxWidth: 1120, height: 64, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  itemWide: {
    height: 64, paddingHorizontal: 16, justifyContent: "center", borderRadius: 6,
    ...(Platform.OS === "web" ? ({ cursor: "pointer" } as object) : null),
  },
  barWide: { position: "absolute", left: 16, right: 16, bottom: 0, height: 2.5, borderRadius: 2 },
  bottom: { flexDirection: "row", borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 2 },
  item: { flex: 1, minHeight: 56, alignItems: "center", justifyContent: "center" },
  bar: { position: "absolute", top: 0, width: 28, height: 2.5, borderRadius: 2 },
  badge: { minWidth: 18, height: 18, paddingHorizontal: 5, borderRadius: 9, alignItems: "center", justifyContent: "center" },
});
