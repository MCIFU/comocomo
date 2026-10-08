import type { Recommendation } from "@comocomo/core";
import { formatMinutes, formatMoneyRange, STAPLES } from "@comocomo/core";
import { useRef } from "react";
import { Animated, Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import { rememberPlate } from "./sharedPlate";
import { shortName } from "./lib/data";
import { DIFFICULTY } from "./lib/labels";
import { useEnter } from "./motion";
import { RecipePhoto } from "./RecipePhoto";
import { fonts, usePalette } from "./theme";
import { Display, T } from "./ui";

export function ResultRow({ rec, index, have, onPress }: { rec: Recommendation; index: number; have?: ReadonlySet<string>; onPress: () => void }) {
  const c = usePalette();
  const compact = useWindowDimensions().width < 520;
  const enter = useEnter(index, rec.baseId);
  const plateRef = useRef<View>(null);
  const { recipe, cost, missing } = rec;
  // Los básicos (sal, aceite…) se dan por tenidos: listarlos solo añade ruido.
  const owned = rec.have.filter((id) => !STAPLES.has(id));
  const nothingToBuy = missing.length === 0;
  const toBuy = nothingToBuy ? "0 €" : formatMoneyRange(cost.toBuy.min, cost.toBuy.max);

  return (
    <Animated.View style={enter}>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`${recipe.title}. ${formatMinutes(rec.totalMinutes)}. ${nothingToBuy ? "No necesitas comprar nada" : `Comprar ${toBuy}`}. ${rec.reason}`}
        onPress={() => rememberPlate(rec.baseId, plateRef.current, onPress)}
        style={({ pressed, hovered, focused }: any) => [
          s.row,
          { borderTopColor: c.line, backgroundColor: hovered || focused ? c.crust : "transparent" },
          pressed && { transform: [{ scale: 0.995 }] },
        ]}
      >
        <RecipePhoto ref={plateRef} recipe={recipe} have={have} width={compact ? 76 : 104} aspect={4 / 5} stamp={compact ? 30 : 38} />
        <View style={{ flex: 1, gap: 5, minWidth: 0 }}>
          <T tone="muted" style={s.meta} numberOfLines={1}>
            {recipe.origin.replace(/\s*\(adaptado\)/, "")} · {formatMinutes(rec.totalMinutes)} · {DIFFICULTY[recipe.difficulty]}
          </T>
          <Display size={compact ? 21 : 25} style={{ letterSpacing: -0.3 }}>{recipe.title}</Display>
          {compact && (
            <T style={{ fontSize: 14, lineHeight: 20 }}>
              <T style={[s.price, { fontSize: 15, color: nothingToBuy ? c.olive : c.ink }]}>{nothingToBuy ? "Nada que comprar" : toBuy}</T>
              <T tone="muted" style={{ fontSize: 13 }}>{nothingToBuy ? "" : " por comprar"} · {formatMoneyRange(cost.perServing.min, cost.perServing.max)}/pers.</T>
              {rec.mayExceedBudget ? <T tone="saffron" style={{ fontSize: 13, fontFamily: fonts.uiBold }}> · puede pasarse</T> : null}
            </T>
          )}
          <T tone="muted" style={{ fontSize: 14.5, lineHeight: 20 }}>{rec.reason}</T>
          <View style={{ gap: 2, marginTop: 2 }}>
            {owned.length > 0 && (
              <T style={s.line} numberOfLines={2}>
                <T tone="olive" style={s.tag}>Tienes </T>
                {owned.map(shortName).join(", ")}
              </T>
            )}
            {missing.length > 0 && (
              <T style={s.line} numberOfLines={2}>
                <T tone="saffron" style={s.tag}>Falta </T>
                {missing.map(shortName).join(", ")}
              </T>
            )}
          </View>
        </View>
        {!compact && <View style={{ alignItems: "flex-end", gap: 2, minWidth: 96 }}>
          <T style={[s.price, { color: nothingToBuy ? c.olive : c.ink, fontSize: compact ? 18 : 22 }]}>{toBuy}</T>
          <T tone="muted" style={s.small}>{nothingToBuy ? "nada que comprar" : "por comprar"}</T>
          <T tone="muted" style={[s.small, { marginTop: 6 }]}>{formatMoneyRange(cost.perServing.min, cost.perServing.max)}/pers.</T>
          {rec.mayExceedBudget && <T tone="saffron" style={[s.small, { fontFamily: fonts.uiBold }]}>Puede pasarse</T>}
        </View>}
      </Pressable>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: "row", gap: 16, paddingVertical: 20, paddingHorizontal: 8, borderTopWidth: StyleSheet.hairlineWidth, borderRadius: 4, alignItems: "flex-start" },
  meta: { fontSize: 12.5, lineHeight: 17, fontFamily: fonts.uiMedium, letterSpacing: 0.2 },
  line: { fontSize: 14, lineHeight: 20 },
  tag: { fontSize: 14, lineHeight: 20, fontFamily: fonts.uiBold },
  price: { fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"], textAlign: "right", letterSpacing: -0.3 },
  small: { fontSize: 12.5, lineHeight: 16, textAlign: "right" },
});
