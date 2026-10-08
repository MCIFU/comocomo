import { BASICS, buildShoppingList, formatMoney, formatQty, scaleRecipe } from "@comocomo/core";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import { Pressable, useWindowDimensions, View } from "react-native";
import { Screen } from "../../src/Screen";
import { Ticket, TicketCenter, TicketLine, TicketRule } from "../../src/Ticket";
import { AISLE_LABEL, AISLE_ORDER, catalog, prices, recipeById } from "../../src/lib/data";
import { pluralPack } from "../../src/lib/labels";
import { actions, useStore } from "../../src/lib/store";
import { fonts, usePalette } from "../../src/theme";
import { Button, Display, Empty, Label, T } from "../../src/ui";

/** Lista de la compra: un ticket del súper con todo lo que necesitas, agrupado por sección. */
export default function Compra() {
  const c = usePalette();
  const router = useRouter();
  const wide = useWindowDimensions().width >= 1024;
  const cart = useStore((s) => s.cart);
  const checked = useStore((s) => s.checked);

  const { list, total } = useMemo(() => {
    const scaled = cart.flatMap((e) => {
      const r = recipeById.get(e.recipeId);
      return r ? [scaleRecipe(r, e.servings)] : [];
    });
    // Los envases se calculan sobre la lista completa: dos recetas con tomate comparten bote.
    const basics = new Map([...BASICS].map((id) => [id, Number.POSITIVE_INFINITY]));
    const list = buildShoppingList(scaled, catalog, basics, "metric", prices);
    let min = 0;
    let max = 0;
    for (const lines of Object.values(list)) for (const l of lines) {
      min += l.cost?.min ?? 0;
      max += l.cost?.max ?? 0;
    }
    return { list, total: { min, max } };
  }, [cart]);

  const lines = AISLE_ORDER.flatMap((a) => list[a as keyof typeof list] ?? []);
  const done = lines.filter((l) => checked.includes(l.ingredientId)).length;

  return (
    <Screen wide={wide}>
      <View style={{ gap: 6 }}>
        <Label tone="tomato">Lista de la compra</Label>
        <Display size={wide ? 64 : 42}>Tu ticket</Display>
      </View>

      {cart.length === 0 ? (
        <Empty
          title="Todavía está vacía."
          body="Abre una receta y pulsa «Añadir a mi lista de la compra». Juntamos los ingredientes repetidos y calculamos los envases."
          action={<Button label="Buscar recetas" onPress={() => router.push("/")} />}
        />
      ) : (
        <View style={wide ? { flexDirection: "row", gap: 48, alignItems: "flex-start" } : { gap: 24 }}>
          <View style={{ flex: wide ? 1.1 : undefined, maxWidth: 560 }}>
            <Ticket label="Lista de la compra">
              <TicketCenter>COMOCOMO</TicketCenter>
              <TicketCenter muted>{done} de {lines.length} cogidos</TicketCenter>
              {AISLE_ORDER.filter((a) => list[a as keyof typeof list]?.length).map((aisle) => (
                <View key={aisle}>
                  <TicketRule />
                  <T style={{ fontFamily: fonts.monoBold, fontSize: 13, letterSpacing: 1, marginBottom: 4 }}>{AISLE_LABEL[aisle]!.toUpperCase()}</T>
                  {list[aisle as keyof typeof list]!.map((l) => {
                    const on = checked.includes(l.ingredientId);
                    return (
                      <Pressable
                        key={l.ingredientId}
                        accessibilityRole="checkbox"
                        accessibilityState={{ checked: on }}
                        onPress={() => actions.toggleChecked(l.ingredientId)}
                        style={({ pressed }) => ({ flexDirection: "row", gap: 10, alignItems: "flex-start", paddingVertical: 4, opacity: pressed ? 0.6 : 1 })}
                      >
                        <View style={{ width: 20, height: 20, marginTop: 2, borderWidth: 2, borderColor: c.ink, borderRadius: 4, backgroundColor: on ? c.ink : "transparent", alignItems: "center", justifyContent: "center" }}>
                          {on && <T style={{ color: c.paper, fontSize: 13, lineHeight: 15, fontFamily: fonts.monoBold }}>✓</T>}
                        </View>
                        <View style={{ flex: 1, opacity: on ? 0.45 : 1 }}>
                          <TicketLine
                            left={l.name.replace(/\s*\(.*\)\s*$/, "")}
                            right={l.cost ? formatMoney(l.cost.min, l.cost.max).replace("≈ ", "") : undefined}
                            sub={l.packs ? `${l.packs} ${pluralPack(l.packLabel!, l.packs)} de ${formatQty(l.packQty!, l.packUnit!)} · necesitas ${formatQty(l.qty, l.unit)}` : `${formatQty(l.qty, l.unit)} a granel`}
                          />
                        </View>
                      </Pressable>
                    );
                  })}
                </View>
              ))}
              <TicketRule />
              <TicketLine left="TOTAL" right={formatMoney(total.min, total.max)} strong />
              <View style={{ height: 8 }} />
              <TicketCenter muted>Aprox. · envases completos{"\n"}sin sal, aceite ni especias básicas</TicketCenter>
            </Ticket>
          </View>

          <View style={{ flex: wide ? 1 : undefined, gap: 14 }}>
            <Display size={28}>Recetas en la lista</Display>
            {cart.map((e) => {
              const r = recipeById.get(e.recipeId);
              return (
                <View key={e.recipeId} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12, paddingVertical: 10, borderTopWidth: 2, borderStyle: "dashed", borderColor: c.line }}>
                  <Pressable accessibilityRole="link" onPress={() => router.push({ pathname: "/receta/[id]", params: { id: e.recipeId } })} style={{ flex: 1 }}>
                    <T style={{ fontFamily: fonts.uiBold }}>{r?.title.replace(/\s*\(.*\)/, "") ?? e.recipeId}</T>
                    <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 13 }}>{e.servings} personas</T>
                  </Pressable>
                  <Button label="Quitar" kind="quiet" onPress={() => actions.removeFromCart(e.recipeId)} />
                </View>
              );
            })}
            <Button label="Vaciar la lista" kind="quiet" onPress={actions.clearCart} style={{ alignSelf: "flex-start", marginTop: 8 }} />
          </View>
        </View>
      )}
    </Screen>
  );
}
