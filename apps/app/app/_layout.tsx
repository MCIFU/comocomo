import { BricolageGrotesque_400Regular, BricolageGrotesque_600SemiBold, BricolageGrotesque_700Bold, BricolageGrotesque_800ExtraBold } from "@expo-google-fonts/bricolage-grotesque";
import { JetBrainsMono_400Regular, JetBrainsMono_600SemiBold } from "@expo-google-fonts/jetbrains-mono";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import Head from "expo-router/head";
import { StatusBar } from "expo-status-bar";
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
      :focus-visible { outline: 3px solid ${focus} !important; outline-offset: 3px; border-radius: 10px; }
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
    BricolageGrotesque_400Regular, BricolageGrotesque_600SemiBold, BricolageGrotesque_700Bold, BricolageGrotesque_800ExtraBold,
    JetBrainsMono_400Regular, JetBrainsMono_600SemiBold,
  });
  // Mientras cargan las fuentes, el isotipo en el centro (nunca una pantalla en blanco).
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
        <title>COMOCOMO · Recetas, ingredientes y lo que cuestan</title>
        <meta name="description" content="Busca un plato y te damos la receta, la lista de la compra y lo que te va a costar." />
      </Head>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.paper } }} />
    </>
  );
}
