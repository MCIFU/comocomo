import { Tabs } from "expo-router";
import { useWindowDimensions } from "react-native";
import { useStore } from "../../src/lib/store";
import { fonts, usePalette } from "../../src/theme";

export default function TabsLayout() {
  const c = usePalette();
  const wide = useWindowDimensions().width >= 1024;
  const cartCount = useStore((s) => s.cart.length);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // En escritorio la navegación va arriba y alineada a la izquierda; en móvil, abajo.
        tabBarPosition: wide ? "top" : "bottom",
        tabBarActiveTintColor: c.ink,
        tabBarInactiveTintColor: c.inkMuted,
        tabBarStyle: {
          backgroundColor: c.paper, borderColor: c.line,
          ...(wide ? { height: 56, borderBottomWidth: 1, paddingHorizontal: 24 } : { height: 60, borderTopWidth: 1, paddingTop: 6 }),
        },
        tabBarItemStyle: wide ? { flex: 0, minWidth: 110, justifyContent: "center" } : undefined,
        tabBarLabelStyle: { fontFamily: fonts.uiMedium, fontSize: wide ? 15 : 13, marginBottom: wide ? 0 : 6 },
        tabBarIconStyle: { display: "none" },
        tabBarBadgeStyle: { backgroundColor: c.tomato, color: c.onTomato },
        sceneStyle: { backgroundColor: c.paper },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Cocinar" }} />
      <Tabs.Screen name="compra" options={{ title: "Compra", tabBarBadge: cartCount || undefined }} />
      <Tabs.Screen name="guardadas" options={{ title: "Guardadas" }} />
    </Tabs>
  );
}
