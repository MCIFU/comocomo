import type { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MAX_WIDTH, usePalette } from "./theme";

/** Contenedor de pantalla: scroll, gutter de 16 px y ancho máximo en pantallas grandes. */
export function Screen({ children, edges = ["top"] }: { children: ReactNode; edges?: ("top" | "bottom")[] }) {
  const c = usePalette();
  return (
    <SafeAreaView edges={edges} style={{ flex: 1, backgroundColor: c.paper }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 48, alignItems: "center" }}
      >
        <View style={{ width: "100%", maxWidth: MAX_WIDTH, gap: 20 }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
