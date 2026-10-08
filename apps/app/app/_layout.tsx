import { Fraunces_600SemiBold, Fraunces_700Bold } from "@expo-google-fonts/fraunces";
import { InstrumentSans_400Regular, InstrumentSans_500Medium, InstrumentSans_700Bold } from "@expo-google-fonts/instrument-sans";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { usePalette } from "../src/theme";

export default function Root() {
  const c = usePalette();
  const [loaded, error] = useFonts({
    Fraunces_600SemiBold, Fraunces_700Bold, InstrumentSans_400Regular, InstrumentSans_500Medium, InstrumentSans_700Bold,
  });
  // Si las fuentes fallan se usa la del sistema: la app no debe quedarse en blanco.
  if (!loaded && !error) return <View style={{ flex: 1, backgroundColor: c.paper }} />;
  return (
    <>
      <StatusBar style={c.paper === "#171311" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.paper } }} />
    </>
  );
}
