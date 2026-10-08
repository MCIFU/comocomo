import { formatMinutes, formatMoneyRange, formatQty, recipeCost, roundNice, scaleRecipe, STAPLES, fromBase, toBase } from "@comocomo/core";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Screen } from "../../src/Screen";
import { catalog, prices, recipeById, shortName } from "../../src/lib/data";
import { DIFFICULTY } from "../../src/lib/labels";
import { actions, useStore } from "../../src/lib/store";
import { fonts, usePalette } from "../../src/theme";
import { Button, Display, Empty, Label, Rule, Stepper, T } from "../../src/ui";

export default function Receta() {
  const c = usePalette();
  const router = useRouter();
  const { id, s, h } = useLocalSearchParams<{ id: string; s?: string; h?: string }>();
  const base = recipeById.get(String(id));
  const [servings, setServings] = useState(Math.min(20, Math.max(1, Number(s) || base?.baseServings || 2)));
  const [added, setAdded] = useState(false);
  const isFav = useStore((st) => st.favorites.includes(String(id)));

  if (!base) {
    return (
      <Screen>
        <Empty title="No encontramos esta receta" body="Puede que se haya retirado del catálogo." action={<Button label="Volver a cocinar" onPress={() => router.replace("/")} />} />
      </Screen>
    );
  }

  const recipe = scaleRecipe(base, servings);
  const have = new Set([...(h ? String(h).split(",") : []), ...STAPLES]);
  const cost = recipeCost(recipe, prices, have);

  return (
    <Screen>
      <Stack.Screen options={{ title: recipe.title }} />
      <Button label="← Volver" kind="quiet" onPress={() => (router.canGoBack() ? router.back() : router.replace("/"))} style={{ alignSelf: "flex-start", minHeight: 44 }} />

      <View style={{ gap: 8 }}>
        <T tone="muted" style={{ fontFamily: fonts.uiMedium, fontSize: 13 }}>
          {recipe.origin} · {recipe.authenticity === "traditional" ? "Receta tradicional" : "Adaptación"}
        </T>
        <Display size={36}>{recipe.title}</Display>
        {recipe.note && <T tone="muted" style={{ fontSize: 15 }}>{recipe.note}</T>}
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 24 }}>
        <Fact k="Tiempo" v={formatMinutes(recipe.prepMin + recipe.cookMin)} />
        <Fact k="Dificultad" v={DIFFICULTY[recipe.difficulty]!} />
        <Fact k="Por comprar" v={cost.toBuy.unpriced.length === recipe.ingredients.length ? "—" : formatMoneyRange(cost.toBuy.min, cost.toBuy.max)} />
        <Fact k="Por persona" v={formatMoneyRange(cost.perServing.min, cost.perServing.max)} />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Label>Raciones</Label>
        <Stepper label="raciones" value={servings} onChange={setServings} max={20} />
      </View>

      <Rule />
      <Label>Ingredientes</Label>
      <View accessibilityRole="list" style={{ gap: 2 }}>
        {recipe.ingredients.map((ri) => {
          const got = have.has(ri.ingredientId);
          const ing = catalog.get(ri.ingredientId);
          const ingKind = ing?.unitKind ?? "mass";
          const b = toBase(ri.qty, ri.unit);
          // presentamos la cantidad en una unidad cómoda: kg/l si pasa de 1000
          const disp = ri.unit === "unit" || ri.unit === "tsp" || ri.unit === "tbsp" || ri.unit === "cup"
            ? { qty: ri.qty, unit: ri.unit }
            : b >= 1000 ? { qty: fromBase(b, ingKind === "volume" ? "l" : "kg"), unit: ingKind === "volume" ? ("l" as const) : ("kg" as const) } : { qty: b, unit: ingKind === "volume" ? ("ml" as const) : ("g" as const) };
          return (
            <View key={ri.ingredientId} accessibilityRole="text" style={{ flexDirection: "row", gap: 12, paddingVertical: 8, alignItems: "baseline" }}>
              <T tone={got ? "olive" : "saffron"} style={{ width: 22, fontFamily: fonts.uiBold }}>{got ? "✓" : "+"}</T>
              <T style={{ flex: 1 }}>
                {shortName(ri.ingredientId)}
                {ri.optional ? " (opcional)" : ""}
              </T>
              <T tone="muted" style={{ fontVariant: ["tabular-nums"] }}>{formatQty(roundNice(disp.qty, disp.unit), disp.unit)}</T>
              <T tone={got ? "olive" : "saffron"} style={{ width: 74, fontSize: 13, textAlign: "right", fontFamily: fonts.uiMedium }}>{got ? "Ya tienes" : "Comprar"}</T>
            </View>
          );
        })}
      </View>
      <T tone="muted" style={{ fontSize: 13, lineHeight: 18 }}>
        Damos por hecho que tienes sal, pimienta, aceite, azúcar y vinagre. Precios estimados; el coste real depende de tu tienda.
      </T>

      <Rule />
      <Label>Preparación</Label>
      <View style={{ gap: 20 }}>
        {recipe.steps.map((st, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 14 }}>
            <Display size={26} style={{ width: 30, color: c.tomato }}>{i + 1}</Display>
            <View style={{ flex: 1, gap: 6 }}>
              <T>{st.text}</T>
              {(st.durationSec || st.tempC) && (
                <T tone="muted" style={{ fontSize: 14, fontFamily: fonts.uiMedium }}>
                  {st.tempC ? `${st.tempC} °C` : ""}
                  {st.tempC && st.durationSec ? " · " : ""}
                  {st.durationSec ? formatMinutes(Math.round(st.durationSec / 60)) : ""}
                </T>
              )}
            </View>
          </View>
        ))}
      </View>

      <Rule />
      <View style={{ gap: 10 }}>
        <Button
          label={added ? "Añadida · ver lista de la compra" : "Añadir a la lista de la compra"}
          onPress={() => {
            if (added) return router.push("/compra");
            actions.addToCart(base.id, servings);
            setAdded(true);
          }}
        />
        <Button label={isFav ? "Guardada ✓ · quitar de guardadas" : "Guardar receta"} kind="quiet" onPress={() => actions.toggleFavorite(base.id)} />
      </View>
    </Screen>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <View style={{ gap: 2 }}>
      <Label>{k}</Label>
      <T style={{ fontFamily: fonts.uiBold, fontSize: 20, lineHeight: 26, fontVariant: ["tabular-nums"] }}>{v}</T>
    </View>
  );
}
