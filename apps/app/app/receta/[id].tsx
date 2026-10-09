import { formatMinutes, formatMoney, formatQty, fromBase, roundNice, scaleRecipe, shoppingPrice, toBase, BASICS } from "@comocomo/core";
import type { RecipeIngredient } from "@comocomo/schemas";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Animated, Pressable, useWindowDimensions, View } from "react-native";
import { PhotoCredit, RecipePhoto } from "../../src/RecipePhoto";
import { Screen } from "../../src/Screen";
import { Ticket, TicketCenter, TicketLine, TicketRule } from "../../src/Ticket";
import { catalog, prices, recipeById, shortName } from "../../src/lib/data";
import { CUISINE_LABEL, DIFFICULTY, pluralPack } from "../../src/lib/labels";
import { actions, useStore } from "../../src/lib/store";
import { useEnter, usePulse } from "../../src/motion";
import { fonts, radius, stroke, usePalette } from "../../src/theme";
import { Button, Display, Empty, Label, Pop, Stepper, T } from "../../src/ui";

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
  const { width } = useWindowDimensions();
  const wide = width >= 1024;
  const { id } = useLocalSearchParams<{ id: string }>();
  const base = recipeById.get(String(id));
  const servings = useStore((s) => s.servings);
  const isFav = useStore((s) => s.favorites.includes(String(id)));
  const inCart = useStore((s) => s.cart.some((x) => x.recipeId === String(id)));
  const [added, setAdded] = useState(false);
  const cartPulse = usePulse(inCart, 0.04);
  const enter = useEnter(0);
  const ticketIn = useEnter(2);

  if (!base) {
    return (
      <Screen>
        <Empty title="No encontramos esta receta" body="Puede que se haya retirado del catálogo." action={<Button label="Ver recetas" onPress={() => router.replace("/")} />} />
      </Screen>
    );
  }

  const recipe = scaleRecipe(base, servings);
  const price = shoppingPrice(base, servings, prices, catalog);
  const lines = new Map(price.lines.map((l) => [l.ingredientId, l]));
  const title = recipe.title.replace(/\s*\(.*\)/, "");
  const back = () => (router.canGoBack() ? router.back() : router.replace("/"));
  const start = () => router.push({ pathname: "/cocinar/[id]", params: { id: base.id, s: String(servings) } });
  const mainW = wide ? Math.min(width - 64, 1240) * 0.6 - 40 : width - 32 - 8 - 6;

  const topBar = (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <Pressable accessibilityRole="link" onPress={back} style={({ pressed }) => ({ minHeight: 44, justifyContent: "center", opacity: pressed ? 0.6 : 1 })}>
        <T style={{ fontFamily: fonts.uiBold }}>← Recetas</T>
      </Pressable>
      <Button kind={isFav ? "primary" : "quiet"} label={isFav ? "♥ Guardada" : "♡ Guardar"} onPress={() => actions.toggleFavorite(base.id)} accessibilityLabel={isFav ? "Quitar de guardadas" : "Guardar receta"} />
    </View>
  );

  const main = (
    <Animated.View style={enter}>
      <Pop r={radius.xl} offset={8} inner={{ backgroundColor: c.card }}>
        <View style={{ borderBottomWidth: stroke.width, borderColor: c.ink }}>
          <RecipePhoto recipe={recipe} width={mainW} aspect={16 / 10} radius={0} />
        </View>
        <View style={{ padding: wide ? 32 : 20, gap: 14 }}>
          <Label>{CUISINE_LABEL[recipe.cuisine] ?? recipe.origin} · {recipe.authenticity === "traditional" ? "Receta tradicional" : "Adaptación"}</Label>
          <Display size={wide ? 64 : 40}>{title}</Display>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {[`⏱ ${formatMinutes(recipe.prepMin + recipe.cookMin)}`, DIFFICULTY[recipe.difficulty]!, `${recipe.steps.length} pasos`].map((m) => (
              <View key={m} style={{ borderWidth: 2, borderColor: c.ink, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 3 }}>
                <T style={{ fontFamily: fonts.uiBold, fontSize: 15 }}>{m}</T>
              </View>
            ))}
          </View>
          {recipe.note && <T tone="muted" style={{ fontSize: 16, lineHeight: 24 }}>{recipe.note}</T>}
          <PhotoCredit recipeId={recipe.id} />
        </View>
      </Pop>
    </Animated.View>
  );

  const steps = (
    <View style={{ gap: 6 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
        <Display size={wide ? 36 : 30}>Cómo se hace</Display>
        {wide && <Button label="Empezar a cocinar →" onPress={start} />}
      </View>
      {recipe.steps.map((st, i) => (
        <View key={i} style={{ flexDirection: "row", gap: 14, paddingVertical: 16, borderTopWidth: 2, borderStyle: "dashed", borderColor: c.line }}>
          <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: c.tomato, borderWidth: 2.5, borderColor: c.ink, alignItems: "center", justifyContent: "center" }}>
            <T style={{ color: c.onTomato, fontFamily: fonts.display, fontSize: 18, lineHeight: 22 }}>{i + 1}</T>
          </View>
          <View style={{ flex: 1, gap: 8 }}>
            <T style={{ fontSize: 18, lineHeight: 27 }}>{st.text}</T>
            {(st.durationSec || st.tempC) && (
              <View style={{ flexDirection: "row", gap: 8 }}>
                {st.tempC ? <Pill text={`${st.tempC} °C`} bg={c.pink} /> : null}
                {st.durationSec ? <Pill text={`⏱ ${formatMinutes(Math.round(st.durationSec / 60))}`} bg={c.mustard} /> : null}
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );

  const ticket = (
    <Animated.View style={[{ gap: 18 }, ticketIn]}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <Label>Para</Label>
        <Stepper label="personas" unit={servings === 1 ? "persona" : "personas"} value={servings} onChange={actions.setServings} max={20} />
      </View>
      <Ticket label={`Lista de la compra de ${title} para ${servings} personas`}>
        <TicketCenter>CÓMOCOMO</TicketCenter>
        <TicketCenter muted>{title.toUpperCase()}{"\n"}{servings} {servings === 1 ? "PERSONA" : "PERSONAS"}</TicketCenter>
        <TicketRule />
        {recipe.ingredients.map((ri) => {
          const l = lines.get(ri.ingredientId);
          const basic = BASICS.has(ri.ingredientId);
          return (
            <TicketLine
              key={ri.ingredientId}
              left={`${shortName(ri.ingredientId)}${ri.optional ? " (opc.)" : ""}`}
              right={displayQty(ri)}
              sub={basic ? undefined : l?.packs ? `${l.packs} ${pluralPack(l.packLabel!, l.packs)} · ${formatMoney(l.cost.min, l.cost.max)}` : l ? `a granel · ${formatMoney(l.cost.min, l.cost.max)}` : undefined}
            />
          );
        })}
        <TicketRule />
        <TicketLine left="TOTAL" right={formatMoney(price.min, price.max)} strong />
        <TicketLine left="Por persona" right={formatMoney(price.min / servings, price.max / servings)} />
        <View style={{ height: 10 }} />
        <TicketCenter muted>Aprox. · envases completos</TicketCenter>
      </Ticket>
      <Animated.View style={cartPulse}>
        <Button
          kind={added || inCart ? "done" : "mustard"}
          label={added || inCart ? "✓ En tu lista · ver lista" : "Añadir a mi lista de la compra"}
          onPress={() => {
            if (added || inCart) return router.push("/compra");
            actions.addToCart(base.id, servings);
            setAdded(true);
          }}
        />
      </Animated.View>
    </Animated.View>
  );

  return (
    <Screen wide={wide} edges={["top", "bottom"]} footer={wide ? undefined : <Button label="Empezar a cocinar →" onPress={start} />}>
      <Stack.Screen options={{ title: `${title} · Cómocomo` }} />
      {topBar}
      {wide ? (
        <View style={{ flexDirection: "row", gap: 40, alignItems: "flex-start" }}>
          <View style={{ flex: 1.5, gap: 40 }}>
            {main}
            {steps}
          </View>
          <View style={{ flex: 1, position: "sticky", top: 24 } as object}>{ticket}</View>
        </View>
      ) : (
        <>
          {main}
          {ticket}
          {steps}
        </>
      )}
    </Screen>
  );
}

function Pill({ text, bg }: { text: string; bg: string }) {
  const c = usePalette();
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 2, borderRadius: 999, backgroundColor: bg, borderWidth: 2, borderColor: c.ink }}>
      <T style={{ fontSize: 14, lineHeight: 20, fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"] }}>{text}</T>
    </View>
  );
}
