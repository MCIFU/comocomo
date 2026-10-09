import type { Tabs } from "expo-router";
import type { ComponentProps } from "react";
import { Animated, Platform, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "./lib/store";
import { Wordmark } from "./Logo";
import { usePulse } from "./motion";
import { fonts, usePalette } from "./theme";
import { ThemeSwitch } from "./ThemeSwitch";
import { T } from "./ui";

type BottomTabBarProps = Parameters<NonNullable<ComponentProps<typeof Tabs>["tabBar"]>>[0];

const LABELS: Record<string, string> = { index: "Recetas", compra: "Lista", guardadas: "Guardadas" };

/** Navegación: arriba en escritorio (marca + pestañas), abajo en móvil. Activa = pegatina de tinta. */
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
        style={[wide ? s.itemWide : s.item, Platform.OS === "web" ? ({ cursor: "pointer" } as object) : null]}
      >
        <View style={[s.pill, { backgroundColor: focused ? c.ink : "transparent", borderColor: focused ? c.ink : "transparent" }]}>
          <T style={{ fontFamily: fonts.uiBold, fontSize: wide ? 16 : 14, lineHeight: 20, color: focused ? c.paper : c.ink }}>{LABELS[route.name]}</T>
          {count > 0 && <Badge count={count} strong={route.name === "compra"} />}
        </View>
      </Pressable>
    );
  });

  if (wide) {
    return (
      <View style={[s.top, { backgroundColor: c.paper }]}>
        <View style={s.topInner}>
          <Pressable accessibilityRole="link" accessibilityLabel="Cómocomo, inicio" onPress={() => navigation.navigate("index")}>
            <Wordmark size={24} />
          </Pressable>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            {items}
            <View style={{ marginLeft: 12 }}><ThemeSwitch /></View>
          </View>
        </View>
      </View>
    );
  }
  return <View style={[s.bottom, { backgroundColor: c.paper, borderTopColor: c.ink, paddingBottom: Math.max(insets.bottom, 8) }]}>{items}</View>;
}

/** Insignia con rebote al cambiar el número (p. ej. al añadir una receta a la lista). */
function Badge({ count, strong }: { count: number; strong: boolean }) {
  const c = usePalette();
  const pulse = usePulse(count, 0.35);
  return (
    <Animated.View style={[s.badge, { backgroundColor: strong ? c.tomato : c.mustard, borderColor: c.ink }, pulse]}>
      <T style={{ color: strong ? c.onTomato : c.onAccent, fontSize: 12, lineHeight: 15, fontFamily: fonts.monoBold, fontVariant: ["tabular-nums"] }}>{count}</T>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  top: { alignItems: "center", paddingHorizontal: 32 },
  topInner: { width: "100%", maxWidth: 1240, height: 84, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  itemWide: { justifyContent: "center" },
  bottom: { flexDirection: "row", borderTopWidth: 3, paddingTop: 8, paddingHorizontal: 8 },
  item: { flex: 1, minHeight: 48, alignItems: "center", justifyContent: "center" },
  pill: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, minHeight: 40, borderRadius: 999, borderWidth: 2.5 },
  badge: { minWidth: 20, height: 20, paddingHorizontal: 5, borderRadius: 10, borderWidth: 2, alignItems: "center", justifyContent: "center" },
});
