import { useMemo, useState } from "react";
import { Pressable, TextInput, useWindowDimensions, View } from "react-native";
import { Screen } from "../../src/Screen";
import { shortName } from "../../src/lib/data";
import { PANTRY_SECTIONS } from "../../src/lib/labels";
import { actions, useStore } from "../../src/lib/store";
import { fonts, radius, usePalette } from "../../src/theme";
import { Button, Chip, Display, Label, T } from "../../src/ui";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/**
 * Despensa: lo que el usuario tiene en casa. Se guarda y cuenta como "ya lo tienes"
 * en todas las recetas: no se suma a la compra y las recetas que lo aprovechan suben.
 */
export default function Despensa() {
  const c = usePalette();
  const wide = useWindowDimensions().width >= 1024;
  const pantry = useStore((s) => s.pantry);
  const [q, setQ] = useState("");

  const sections = useMemo(() => {
    const nq = norm(q.trim());
    return PANTRY_SECTIONS.map((s) => ({ ...s, ids: nq ? s.ids.filter((id) => norm(shortName(id)).includes(nq)) : s.ids })).filter((s) => s.ids.length);
  }, [q]);

  return (
    <Screen wide={wide}>
      <View style={{ gap: 10, maxWidth: 720 }}>
        <Label tone="tomato">Despensa</Label>
        <Display size={wide ? 48 : 36} style={{ letterSpacing: -1 }}>Lo que tienes en casa</Display>
        <T tone="muted" style={{ fontSize: 16, lineHeight: 24 }}>
          Marca lo que hay en tu cocina. Lo tendremos en cuenta en todas las recetas: no se suma a la compra y verás primero lo que lo aprovecha.
        </T>
      </View>

      <View style={{ flexDirection: wide ? "row" : "column", gap: 12, alignItems: wide ? "center" : "stretch" }}>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Buscar un ingrediente"
          placeholderTextColor={c.inkMuted}
          accessibilityLabel="Buscar un ingrediente en la despensa"
          style={{
            flex: wide ? 1 : undefined, maxWidth: wide ? 420 : undefined, minHeight: 48, paddingHorizontal: 16, color: c.ink, fontFamily: fonts.ui, fontSize: 16,
            borderWidth: 1, borderColor: c.line, borderRadius: radius.md, backgroundColor: c.paper, outlineStyle: "none",
          } as object}
        />
        <T style={{ fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"] }} accessibilityLiveRegion="polite">
          {pantry.length} {pantry.length === 1 ? "producto" : "productos"} en tu despensa
        </T>
      </View>

      <View style={wide ? { flexDirection: "row", flexWrap: "wrap", columnGap: 48 } : { gap: 4 }}>
        {sections.map((s) => {
          const have = s.ids.filter((id) => pantry.includes(id)).length;
          const all = have === s.ids.length;
          return (
            <View key={s.key} style={{ width: wide ? "47%" : "100%", gap: 12, paddingVertical: 20, borderTopWidth: 1, borderTopColor: c.line }}>
              <View style={{ flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <View style={{ flex: 1, gap: 2 }}>
                  <Display size={22}>{s.title}</Display>
                  {!!s.hint && <T tone="muted" style={{ fontSize: 13 }}>{s.hint}</T>}
                </View>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={all ? `Desmarcar todo en ${s.title}` : `Marcar todo en ${s.title}`}
                  onPress={() => (all ? s.ids.forEach((id) => pantry.includes(id) && actions.togglePantry(id)) : actions.addToPantry(s.ids))}
                  style={({ pressed }) => ({ minHeight: 36, justifyContent: "center", opacity: pressed ? 0.6 : 1 })}
                >
                  <T style={{ fontSize: 13, fontFamily: fonts.uiBold, textDecorationLine: "underline" }}>
                    {have}/{s.ids.length} · {all ? "Quitar todo" : "Tengo todo"}
                  </T>
                </Pressable>
              </View>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                {s.ids.map((id) => {
                  const on = pantry.includes(id);
                  return <Chip key={id} label={`${on ? "✓ " : ""}${shortName(id)}`} selected={on} onPress={() => actions.togglePantry(id)} />;
                })}
              </View>
            </View>
          );
        })}
        {sections.length === 0 && <T tone="muted">No hay ningún ingrediente con «{q}» en el catálogo.</T>}
      </View>

      {pantry.length > 0 && (
        <Button label="Vaciar despensa" kind="quiet" onPress={actions.clearPantry} style={{ alignSelf: "flex-start" }} />
      )}
    </Screen>
  );
}
