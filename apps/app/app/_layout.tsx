import { Fraunces_600SemiBold, Fraunces_700Bold } from "@expo-google-fonts/fraunces";
import { InstrumentSans_400Regular, InstrumentSans_500Medium, InstrumentSans_700Bold } from "@expo-google-fonts/instrument-sans";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Head from "expo-router/head";
import { useEffect } from "react";
import { Platform, View } from "react-native";
import { Isotype } from "../src/Logo";
import { usePalette } from "../src/theme";

/** CSS global solo para web: foco visible para teclado y selección con color de marca. */
function useWebGlobals(focus: string, paper: string) {
  useEffect(() => {
    if (Platform.OS !== "web" || typeof document === "undefined") return;
    const id = "comocomo-globals";
    let el = document.getElementById(id) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement("style");
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = `
      :focus-visible { outline: 2.5px solid ${focus} !important; outline-offset: 2px; border-radius: 6px; }
      ::selection { background: ${focus}; color: ${paper}; }
      body { background: ${paper}; }
      @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
    `;
    document.documentElement.lang = "es";
  }, [focus, paper]);
}

export default function Root() {
  const c = usePalette();
  useWebGlobals(c.tomato, c.paper);
  const [loaded, error] = useFonts({
    Fraunces_600SemiBold, Fraunces_700Bold, InstrumentSans_400Regular, InstrumentSans_500Medium, InstrumentSans_700Bold,
  });
  // Mientras cargan las fuentes, el isotipo en el centro (nunca una pantalla en blanco).
  // Si fallan, se usa la fuente del sistema.
  if (!loaded && !error) {
    return (
      <View style={{ flex: 1, backgroundColor: c.paper, alignItems: "center", justifyContent: "center" }}>
        <Isotype size={36} />
      </View>
    );
  }
  return (
    <>
      <Head>
        <title>COMOCOMO · Tu cocina, tus ingredientes, tu presupuesto</title>
        <meta name="description" content="Dime qué tienes, cuántos sois y cuánto quieres gastar. COMOCOMO te dice qué cocinar." />
      </Head>
      <StatusBar style={c.paper === "#171311" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.paper } }} />
    </>
  );
}
