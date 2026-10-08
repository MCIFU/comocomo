import { shoppingPrice } from "@comocomo/core";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { RecipeCard } from "../../src/RecipeCard";
import { Screen } from "../../src/Screen";
import { catalog, prices, recipeById } from "../../src/lib/data";
import { useStore } from "../../src/lib/store";
import { Button, Display, Empty, Label } from "../../src/ui";

export default function Guardadas() {
  const router = useRouter();
  const wide = useWindowDimensions().width >= 1024;
  const servings = useStore((s) => s.servings);
  const [gridW, setGridW] = useState(0);
  const favs = useStore((s) => s.favorites).flatMap((id) => {
    const r = recipeById.get(id);
    return r ? [r] : [];
  });
  const cols = gridW >= 1000 ? 4 : gridW >= 700 ? 3 : 2;
  const gap = wide ? 22 : 12;
  const cardW = gridW ? Math.floor((gridW - gap * (cols - 1)) / cols) : 0;

  return (
    <Screen wide={wide}>
      <View style={{ gap: 6 }}>
        <Label tone="tomato">Guardadas</Label>
        <Display size={wide ? 64 : 42}>Tus recetas</Display>
      </View>
      {favs.length === 0 ? (
        <Empty
          title="Aún no has guardado ninguna."
          body="Pulsa «♡ Guardar» en cualquier receta y la tendrás aquí, a mano."
          action={<Button label="Buscar recetas" onPress={() => router.push("/")} />}
        />
      ) : (
        <View onLayout={(e) => setGridW(e.nativeEvent.layout.width)} style={{ flexDirection: "row", flexWrap: "wrap", gap, rowGap: gap + 6 }}>
          {cardW > 0 &&
            favs.map((r, i) => (
              <RecipeCard
                key={r.id}
                recipe={r}
                price={shoppingPrice(r, servings, prices, catalog)}
                servings={servings}
                index={i}
                width={cardW}
                onPress={() => router.push({ pathname: "/receta/[id]", params: { id: r.id } })}
              />
            ))}
        </View>
      )}
    </Screen>
  );
}
