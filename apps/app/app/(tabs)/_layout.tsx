import { Tabs } from "expo-router";
import { useWindowDimensions } from "react-native";
import { TabBar } from "../../src/TabBar";
import { usePalette } from "../../src/theme";

export default function TabsLayout() {
  const c = usePalette();
  const wide = useWindowDimensions().width >= 1024;
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} wide={wide} />}
      screenOptions={{
        headerShown: false,
        // En escritorio la navegación va arriba; en móvil, abajo al alcance del pulgar.
        tabBarPosition: wide ? "top" : "bottom",
        sceneStyle: { backgroundColor: c.paper },
      }}
    >
      <Tabs.Screen name="cocina" options={{ title: "Cocinar" }} />
      <Tabs.Screen name="compra" options={{ title: "Compra" }} />
      <Tabs.Screen name="guardadas" options={{ title: "Guardadas" }} />
    </Tabs>
  );
}
