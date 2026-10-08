import { formatMinutes, formatMoneyRange, formatQty, fromBase, recipeCost, roundNice, scaleRecipe, STAPLES, toBase } from "@comocomo/core";
import type { RecipeIngredient } from "@comocomo/schemas";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, useWindowDimensions, View } from "react-native";
import { Plate } from "../../src/Plate";
import { Screen } from "../../src/Screen";
import { catalog, prices, recipeById, shortName } from "../../src/lib/data";
import { DIFFICULTY } from "../../src/lib/labels";
import { actions, useStore } from "../../src/lib/store";
import { fonts, usePalette } from "../../src/theme";
import { Button, Display, Empty, Label, Rule, Stepper, T } from "../../src/ui";

/** Cantidad en una unidad cómoda (kg/l a partir de 1000). */
function displayQty(ri: RecipeIngredient) {
  if (ri.unit === "unit" || ri.unit === "tsp" || ri.unit === "tbsp" || ri.unit === "cup") return formatQty(roundNice(ri.qty, ri.unit), ri.unit);
  const kind = catalog.get(ri.ingredientId)?.unitKind ?? "mass";
  const b = toBase(ri.qty, ri.unit);
  const big = kind === "volume" ? "l" : "kg";
  const small = kind === "volume" ? "ml" : "g";
  return b >= 1000 ? formatQty(roundNice(fromBase(b, big), big), big) : formatQty(roundNice(b, small), small);
}

export default function Receta() {
  const c = usePalette();
  const router = useRouter();
  const wide = useWindowDimensions().width >= 1024;
  const { id, s, h } = useLocalSearchParams<{ id: string; s?: string; h?: string }>();
  const base = recipeById.get(String(id));
  const [servings, setServings] = useState(Math.min(20, Math.max(1, Number(s) || base?.baseServings || 2)));
  const [added, setAdded] = useState(false);
  const isFav = useStore((st) => st.favorites.includes(String(id)));
  const inCart = useStore((st) => st.cart.some((x) => x.recipeId === String(id)));

  if (!base) {
    return (
      <Screen>
        <Empty title="No encontramos esta receta" body="Puede que se haya retirado del catálogo." action={<Button label="Volver a cocinar" onPress={() => router.replace("/")} />} />
      </Screen>
    );
  }

  const recipe = scaleRecipe(base, servings);
  const userHave = h ? String(h).split(",").filter(Boolean) : [];
  const have = new Set([...userHave, ...STAPLES]);
  const cost = recipeCost(recipe, prices, have);
  const missingCount = recipe.ingredients.filter((i) => !i.optional && !have.has(i.ingredientId)).length;
  const back = () => (router.canGoBack() ? router.back() : router.replace("/"));

  const header = (
    <View style={{ gap: 18 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Pressable accessibilityRole="link" onPress={back} style={({ pressed }) => ({ minHeight: 44, justifyContent: "center", opacity: pressed ? 0.6 : 1 })}>
          <T style={{ fontFamily: fonts.uiBold }}>← Volver</T>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ selected: isFav }}
          accessibilityLabel={isFav ? "Quitar de guardadas" : "Guardar receta"}
          onPress={() => actions.toggleFavorite(base.id)}
          style={({ pressed, hovered }: any) => ({
            minHeight: 44, paddingHorizontal: 14, borderRadius: 999, borderWidth: 1, justifyContent: "center",
            borderColor: isFav ? c.tomato : c.line, backgroundColor: isFav ? c.tomato : hovered ? c.crust : "transparent", opacity: pressed ? 0.7 : 1,
          })}
        >
          <T style={{ fontFamily: fonts.uiBold, fontSize: 14, color: isFav ? c.onTomato : c.ink }}>{isFav ? "♥ Guardada" : "♡ Guardar"}</T>
        </Pressable>
      </View>

      <View style={{ alignItems: wide ? "flex-start" : "center", gap: 18 }}>
        <Plate recipe={recipe} have={userHave.length ? have : undefined} size={wide ? 200 : 168} />
        <View style={{ gap: 8, alignSelf: "stretch" }}>
          <Label tone={recipe.authenticity === "traditional" ? "olive" : "plum"}>
            {recipe.origin.replace(/\s*\(adaptado\)/, "")} · {recipe.authenticity === "traditional" ? "Receta tradicional" : "Adaptación"}
          </Label>
          <Display size={wide ? 46 : 36} style={{ letterSpacing: -1 }}>{recipe.title}</Display>
          {recipe.note && <T tone="muted" style={{ fontSize: 15, lineHeight: 22 }}>{recipe.note}</T>}
        </View>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 14, paddingVertical: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: c.line }}>
        <Fact k="Tiempo" v={formatMinutes(recipe.prepMin + recipe.cookMin)} />
        <Fact k="Dificultad" v={DIFFICULTY[recipe.difficulty]!} />
        <Fact k="Por comprar" v={missingCount === 0 ? "Nada" : formatMoneyRange(cost.toBuy.min, cost.toBuy.max)} accent={missingCount === 0 ? c.olive : undefined} />
        <Fact k="Por persona" v={formatMoneyRange(cost.perServing.min, cost.perServing.max)} />
      </View>
    </View>
  );

  const ingredients = (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ gap: 2 }}>
          <Label>Ingredientes</Label>
          <T tone="muted" style={{ fontSize: 13 }}>{missingCount === 0 ? "Tienes todo" : `Te faltan ${missingCount}`}</T>
        </View>
        <View style={{ alignItems: "flex-end", gap: 4 }}>
          <Stepper label="raciones" value={servings} onChange={setServings} max={20} />
          <T tone="muted" style={{ fontSize: 12 }}>{servings} {servings === 1 ? "ración" : "raciones"}</T>
        </View>
      </View>
      <View accessibilityRole="list">
        {recipe.ingredients.map((ri) => {
          const got = have.has(ri.ingredientId);
          return (
            <View key={ri.ingredientId} accessibilityRole="text" style={{ flexDirection: "row", gap: 12, paddingVertical: 10, alignItems: "center", borderTopWidth: 1, borderTopColor: c.line }}>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: got ? c.olive : "transparent", borderWidth: 2, borderColor: got ? c.olive : c.saffron }} />
              <T style={{ flex: 1 }}>
                {shortName(ri.ingredientId)}
                {ri.optional ? <T tone="muted"> · opcional</T> : null}
              </T>
              <T style={{ fontVariant: ["tabular-nums"], fontFamily: fonts.uiMedium }}>{displayQty(ri)}</T>
              <T tone={got ? "olive" : "saffron"} style={{ width: 66, fontSize: 12.5, textAlign: "right", fontFamily: fonts.uiBold }}>{got ? "Tienes" : "Comprar"}</T>
            </View>
          );
        })}
      </View>
      <T tone="muted" style={{ fontSize: 12.5, lineHeight: 18 }}>
        Damos por hecho sal, pimienta, aceite, azúcar y vinagre. Precios estimados, no de tienda.
      </T>
      <Button
        kind="quiet"
        label={added || inCart ? "En tu lista · ver compra" : `Añadir ${missingCount ? missingCount + " ingredientes " : ""}a la compra`}
        onPress={() => {
          if (added || inCart) return router.push("/compra");
          actions.addToCart(base.id, servings);
          setAdded(true);
        }}
      />
    </View>
  );

  const startButton = <Button label="Empezar a cocinar  →" onPress={() => router.push({ pathname: "/cocinar/[id]", params: { id: base.id, s: String(servings) } })} />;

  const steps = (
    <View style={{ gap: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
        <View style={{ gap: 2 }}>
          <Label>Preparación</Label>
          <T tone="muted" style={{ fontSize: 13 }}>{recipe.steps.length} pasos · {formatMinutes(recipe.prepMin + recipe.cookMin)}</T>
        </View>
      </View>
      {wide && startButton}
      <View>
        {recipe.steps.map((st, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 18, paddingVertical: 18, borderTopWidth: 1, borderTopColor: c.line }}>
            <T numberOfLines={1} style={{ width: 46, color: c.tomato, fontFamily: fonts.displayBold, fontSize: 28, lineHeight: 30, fontVariant: ["tabular-nums"] }}>{String(i + 1).padStart(2, "0")}</T>
            <View style={{ flex: 1, gap: 8 }}>
              <T style={{ fontSize: 17, lineHeight: 26 }}>{st.text}</T>
              {(st.durationSec || st.tempC) && (
                <View style={{ flexDirection: "row", gap: 8 }}>
                  {st.tempC ? <Pill text={`${st.tempC} °C`} /> : null}
                  {st.durationSec ? <Pill text={formatMinutes(Math.round(st.durationSec / 60))} /> : null}
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <Screen wide={wide} edges={["top", "bottom"]} footer={wide ? undefined : startButton}>
      <Stack.Screen options={{ title: `${recipe.title} · COMOCOMO` }} />
      {wide ? (
        <View style={{ flexDirection: "row", gap: 64, alignItems: "flex-start" }}>
          <View style={{ width: 420, gap: 28, position: "sticky", top: 24 } as object}>
            {header}
            {ingredients}
          </View>
          <View style={{ flex: 1, paddingTop: 60 }}>{steps}</View>
        </View>
      ) : (
        <>
          {header}
          {ingredients}
          <Rule />
          {steps}
        </>
      )}
    </Screen>
  );
}

function Fact({ k, v, accent }: { k: string; v: string; accent?: string }) {
  return (
    <View style={{ gap: 2, width: "50%" }}>
      <Label>{k}</Label>
      <T style={{ fontFamily: fonts.uiBold, fontSize: 19, lineHeight: 25, fontVariant: ["tabular-nums"], color: accent }}>{v}</T>
    </View>
  );
}

function Pill({ text }: { text: string }) {
  const c = usePalette();
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999, backgroundColor: c.crust }}>
      <T style={{ fontSize: 13, lineHeight: 18, fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"] }}>{text}</T>
    </View>
  );
}
