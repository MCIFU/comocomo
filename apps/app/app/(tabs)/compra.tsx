import { buildShoppingList, formatMoneyRange, formatQty, recipeCost, scaleRecipe, STAPLES } from "@comocomo/core";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import { Pressable, View } from "react-native";
import { EmptyPlate } from "../../src/Plate";
import { Screen } from "../../src/Screen";
import { AISLE_LABEL, AISLE_ORDER, catalog, prices, recipeById } from "../../src/lib/data";
import { actions, useStore } from "../../src/lib/store";
import { fonts, usePalette } from "../../src/theme";
import { Button, Display, Empty, Label, T } from "../../src/ui";

export default function Compra() {
  const c = usePalette();
  const router = useRouter();
  const cart = useStore((s) => s.cart);
  const checked = useStore((s) => s.checked);

  const { list, total, scaled } = useMemo(() => {
    const scaled = cart.flatMap((e) => {
      const r = recipeById.get(e.recipeId);
      return r ? [scaleRecipe(r, e.servings)] : [];
    });
    const pantry = new Map([...STAPLES].map((id) => [id, Number.POSITIVE_INFINITY]));
    const list = buildShoppingList(scaled, catalog, pantry);
    let min = 0;
    let max = 0;
    for (const r of scaled) {
      const k = recipeCost(r, prices, STAPLES);
      min += k.toBuy.min;
      max += k.toBuy.max;
    }
    return { list, total: { min, max }, scaled };
  }, [cart]);

  const lines = AISLE_ORDER.flatMap((a) => (list[a as keyof typeof list] ?? []).map((l) => ({ ...l, aisle: a })));
  const done = lines.filter((l) => checked.includes(l.ingredientId)).length;

  return (
    <Screen>
      <View style={{ gap: 4 }}>
        <Label tone="tomato">Compra</Label>
        <Display size={36}>Tu lista</Display>
      </View>

      {cart.length === 0 ? (
        <Empty
          title="Todavía no hay nada que comprar"
          art={<EmptyPlate />}
          body="Añade recetas desde su ficha. Juntamos los ingredientes repetidos y los ordenamos por pasillo."
          action={<Button label="Buscar qué cocinar" onPress={() => router.push("/cocina")} />}
        />
      ) : (
        <>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
            <View style={{ gap: 2 }}>
              <Label>Compra estimada</Label>
              <T style={{ fontFamily: fonts.uiBold, fontSize: 28, lineHeight: 34, fontVariant: ["tabular-nums"] }}>{formatMoneyRange(total.min, total.max)}</T>
            </View>
            <T tone="muted" style={{ fontSize: 14 }}>{done} de {lines.length} cogidos</T>
          </View>

          {AISLE_ORDER.filter((a) => list[a as keyof typeof list]?.length).map((aisle) => (
            <View key={aisle} style={{ gap: 2 }}>
              <Label>{AISLE_LABEL[aisle]}</Label>
              {list[aisle as keyof typeof list]!.map((l) => {
                const on = checked.includes(l.ingredientId);
                return (
                  <Pressable
                    key={l.ingredientId}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: on }}
                    onPress={() => actions.toggleChecked(l.ingredientId)}
                    style={({ pressed, hovered }: any) => ({
                      flexDirection: "row", alignItems: "center", gap: 14, minHeight: 52, paddingHorizontal: 4,
                      backgroundColor: hovered ? c.crust : "transparent", opacity: pressed ? 0.7 : 1,
                    })}
                  >
                    <View style={{ width: 24, height: 24, borderRadius: 6, borderWidth: 1.5, borderColor: on ? c.olive : c.ink, backgroundColor: on ? c.olive : "transparent", alignItems: "center", justifyContent: "center" }}>
                      {on && <T style={{ color: c.paper, fontSize: 15, lineHeight: 18, fontFamily: fonts.uiBold }}>✓</T>}
                    </View>
                    <T style={{ flex: 1, textDecorationLine: on ? "line-through" : "none", color: on ? c.inkMuted : c.ink }}>{l.name.replace(/\s*\(.*\)\s*$/, "")}</T>
                    <T tone="muted" style={{ fontVariant: ["tabular-nums"] }}>{formatQty(l.qty, l.unit)}</T>
                  </Pressable>
                );
              })}
            </View>
          ))}

          <View style={{ gap: 8 }}>
            <Label>Recetas en la lista</Label>
            {cart.map((e) => (
              <View key={e.recipeId} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", minHeight: 44 }}>
                <T style={{ flex: 1 }}>{recipeById.get(e.recipeId)?.title ?? e.recipeId} · {e.servings} pers.</T>
                <Button label="Quitar" kind="quiet" onPress={() => actions.removeFromCart(e.recipeId)} style={{ minHeight: 40, paddingHorizontal: 14 }} />
              </View>
            ))}
          </View>
          <T tone="muted" style={{ fontSize: 12, lineHeight: 17 }}>
            Sin sal, pimienta, aceite, azúcar ni vinagre (los damos por tenidos). La estimación cuenta solo la parte que usas, no el paquete entero.
          </T>
          {scaled.length > 0 && <Button label="Vaciar lista" kind="quiet" onPress={actions.clearCart} />}
        </>
      )}
    </Screen>
  );
}
