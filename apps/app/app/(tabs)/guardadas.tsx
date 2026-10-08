import { formatMinutes } from "@comocomo/core";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { EmptyPlate } from "../../src/Plate";
import { RecipePhoto } from "../../src/RecipePhoto";
import { Screen } from "../../src/Screen";
import { recipeById } from "../../src/lib/data";
import { DIFFICULTY } from "../../src/lib/labels";
import { useStore } from "../../src/lib/store";
import { usePalette } from "../../src/theme";
import { Button, Display, Empty, Label, T } from "../../src/ui";

export default function Guardadas() {
  const c = usePalette();
  const router = useRouter();
  const favs = useStore((s) => s.favorites).flatMap((id) => {
    const r = recipeById.get(id);
    return r ? [r] : [];
  });

  return (
    <Screen>
      <View style={{ gap: 4 }}>
        <Label tone="tomato">Guardadas</Label>
        <Display size={36}>Tus recetas</Display>
      </View>
      {favs.length === 0 ? (
        <Empty
          title="Aún no has guardado ninguna"
          art={<EmptyPlate />}
          body="Pulsa ♡ Guardar en cualquier receta y la tendrás aquí."
          action={<Button label="Buscar qué cocinar" onPress={() => router.push("/cocina")} />}
        />
      ) : (
        <View>
          {favs.map((r) => (
            <Pressable
              key={r.id}
              accessibilityRole="link"
              onPress={() => router.push({ pathname: "/receta/[id]", params: { id: r.id } })}
              style={({ pressed, hovered }: any) => ({
                gap: 4, paddingVertical: 18, paddingHorizontal: 4, borderTopWidth: 1, borderTopColor: c.line,
                backgroundColor: hovered ? c.crust : "transparent", opacity: pressed ? 0.7 : 1,
              })}
            >
              <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
                <RecipePhoto recipe={r} width={64} aspect={1} />
                <View style={{ flex: 1, gap: 4 }}>
                  <T tone="muted" style={{ fontSize: 13 }}>{r.origin.replace(/s*(adaptado)/, "")} · {formatMinutes(r.prepMin + r.cookMin)} · {DIFFICULTY[r.difficulty]}</T>
                  <Display size={23}>{r.title}</Display>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </Screen>
  );
}
