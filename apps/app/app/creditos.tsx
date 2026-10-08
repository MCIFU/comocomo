import { useRouter } from "expo-router";
import { Linking, Pressable, View } from "react-native";
import { Screen } from "../src/Screen";
import { PHOTOS } from "../src/lib/photos";
import { recipeById } from "../src/lib/data";
import { fonts, usePalette } from "../src/theme";
import { Display, Label, T } from "../src/ui";

/** Créditos de fotografía: obligatorio por las licencias CC BY / CC BY-SA. */
export default function Creditos() {
  const c = usePalette();
  const router = useRouter();
  return (
    <Screen>
      <Pressable accessibilityRole="link" onPress={() => (router.canGoBack() ? router.back() : router.replace("/"))} style={{ minHeight: 44, justifyContent: "center" }}>
        <T style={{ fontFamily: fonts.uiBold }}>← Volver</T>
      </Pressable>
      <View style={{ gap: 6 }}>
        <Label tone="tomato">Créditos</Label>
        <Display size={36}>Fotografía</Display>
        <T tone="muted">
          Las fotos de los platos proceden de Wikimedia Commons y se usan según su licencia, sin modificar salvo el recorte. Gracias a sus autores.
        </T>
      </View>
      <View>
        {Object.entries(PHOTOS).map(([id, p]) => (
          <Pressable
            key={id}
            accessibilityRole="link"
            onPress={() => Linking.openURL(p.url)}
            style={({ hovered }: any) => ({ paddingVertical: 12, borderTopWidth: 1, borderTopColor: c.line, backgroundColor: hovered ? c.crust : "transparent" })}
          >
            <T style={{ fontFamily: fonts.uiBold }}>{recipeById.get(id)?.title ?? id}</T>
            <T tone="muted" style={{ fontSize: 14 }}>{p.author} · {p.license}</T>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
