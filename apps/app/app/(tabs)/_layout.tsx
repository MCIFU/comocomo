import { Tabs } from "expo-router";
import { useStore } from "../../src/lib/store";
import { fonts, usePalette } from "../../src/theme";

export default function TabsLayout() {
  const c = usePalette();
  const cartCount = useStore((s) => s.cart.length);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: c.ink,
        tabBarInactiveTintColor: c.inkMuted,
        tabBarStyle: { backgroundColor: c.paper, borderTopColor: c.line, height: 60, paddingTop: 6 },
        tabBarLabelStyle: { fontFamily: fonts.uiMedium, fontSize: 13, marginBottom: 6 },
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
