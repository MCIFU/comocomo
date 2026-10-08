import type { Recommendation } from "@comocomo/core";
import { formatMinutes, formatMoneyRange, STAPLES } from "@comocomo/core";
import { Pressable, StyleSheet, View } from "react-native";
import { shortName } from "./lib/data";
import { DIFFICULTY } from "./lib/labels";
import { fonts, usePalette } from "./theme";
import { Display, T } from "./ui";

export function ResultRow({ rec, onPress }: { rec: Recommendation; onPress: () => void }) {
  const c = usePalette();
  const { recipe, cost, missing } = rec;
  // Los básicos (sal, aceite…) se dan por tenidos: listarlos solo añade ruido.
  const have = rec.have.filter((id) => !STAPLES.has(id));
  const perServing = formatMoneyRange(cost.perServing.min, cost.perServing.max);
  const toBuy = missing.length === 0 ? "Nada que comprar" : formatMoneyRange(cost.toBuy.min, cost.toBuy.max);
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`${recipe.title}, ${formatMinutes(rec.totalMinutes)}, ${toBuy}`}
      onPress={onPress}
      style={({ pressed, hovered }: any) => [s.row, { borderTopColor: c.line, backgroundColor: hovered ? c.crust : "transparent", opacity: pressed ? 0.75 : 1 }]}
    >
      <View style={{ flex: 1, gap: 6 }}>
        <T tone="muted" style={s.meta}>
          {recipe.origin} · {formatMinutes(rec.totalMinutes)} · {DIFFICULTY[recipe.difficulty]}
          {recipe.authenticity === "adapted" ? " · Adaptación" : ""}
        </T>
        <Display size={24}>{recipe.title}</Display>
        <T tone="muted" style={{ fontSize: 15, lineHeight: 21 }}>{rec.reason}</T>
        {have.length > 0 && (
          <T style={s.line}>
            <T tone="olive" style={s.tag}>✓ Ya tienes </T>
            {have.slice(0, 5).map(shortName).join(", ")}
            {have.length > 5 ? ` y ${have.length - 5} más` : ""}
          </T>
        )}
        {missing.length > 0 && (
          <T style={s.line}>
            <T tone="saffron" style={s.tag}>+ Necesitas </T>
            {missing.map(shortName).join(", ")}
          </T>
        )}
      </View>
      <View style={{ alignItems: "flex-end", minWidth: 92, gap: 2 }}>
        <T style={{ fontFamily: fonts.uiBold, fontSize: 18, fontVariant: ["tabular-nums"], textAlign: "right" }}>{toBuy}</T>
        <T tone="muted" style={{ fontSize: 13, lineHeight: 18, textAlign: "right" }}>
          {perServing}{"\n"}por persona
        </T>
        {rec.mayExceedBudget && <T tone="saffron" style={{ fontSize: 12, lineHeight: 16, textAlign: "right", fontFamily: fonts.uiBold }}>Puede pasarse</T>}
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: "row", gap: 16, paddingVertical: 20, paddingHorizontal: 4, borderTopWidth: StyleSheet.hairlineWidth },
  meta: { fontSize: 13, lineHeight: 18, fontFamily: fonts.uiMedium },
  line: { fontSize: 14, lineHeight: 20 },
  tag: { fontSize: 14, lineHeight: 20, fontFamily: fonts.uiBold },
});
