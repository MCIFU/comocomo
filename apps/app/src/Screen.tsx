import type { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MAX_WIDTH, usePalette } from "./theme";

const WIDE_MAX = 1120;

/** Contenedor de pantalla: scroll, gutter de 16 px y ancho máximo (columna de lectura o dos paneles). */
export function Screen({ children, wide = false, edges = ["top"] }: { children: ReactNode; wide?: boolean; edges?: ("top" | "bottom")[] }) {
  const c = usePalette();
  return (
    <SafeAreaView edges={edges} style={{ flex: 1, backgroundColor: c.paper }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingHorizontal: wide ? 32 : 16, paddingTop: wide ? 32 : 20, paddingBottom: 48, alignItems: "center" }}
      >
        <View style={{ width: "100%", maxWidth: wide ? WIDE_MAX : MAX_WIDTH, gap: 20 }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
