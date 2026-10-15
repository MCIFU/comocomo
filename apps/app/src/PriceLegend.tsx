import { PRICE_TIERS } from "@comocomo/core";
import { priceScale } from "@comocomo/design-tokens";
import { View } from "react-native";
import { fonts, usePalette } from "./theme";
import { T } from "./ui";

const RANGES = ["hasta 1,5 €", "hasta 3 €", "hasta 5 €", "más de 5 €"];
const SHORT = ["≤1,5", "≤3", "≤5", ">5"];

/** Leyenda de la escala de precio: el color del precio indica lo que cuesta por persona. */
export function PriceLegend({ servings, compact }: { servings: number; compact?: boolean }) {
  const c = usePalette();
  if (compact) {
    // Móvil: una sola línea con la escala abreviada (€ por persona).
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6, flexWrap: "wrap" }} accessibilityLabel={`Precio total para ${servings}. El color indica lo que cuesta por persona: ${RANGES.join(", ")}`}>
        {PRICE_TIERS.map((t, i) => (
          <View key={t.label} style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <View style={{ paddingHorizontal: 4, height: 18, borderRadius: 5, borderWidth: 1.5, borderColor: c.edge, backgroundColor: priceScale[i], justifyContent: "center" }}>
              <T style={{ fontFamily: fonts.monoBold, fontSize: 10, lineHeight: 13, color: i === 3 ? priceScale[0] : priceScale[3] }}>{t.label}</T>
            </View>
            <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 11, lineHeight: 16 }}>{SHORT[i]}</T>
          </View>
        ))}
        <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 11, lineHeight: 16 }}>€/pers.</T>
      </View>
    );
  }
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: 14, rowGap: 6 }} accessibilityLabel="Escala de precio por persona">
      <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 12.5 }}>Precio total para {servings} · color según lo que cuesta por persona:</T>
      {PRICE_TIERS.map((t, i) => (
        <View key={t.label} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <View style={{ minWidth: 34, paddingHorizontal: 5, height: 20, borderRadius: 6, borderWidth: 2, borderColor: c.edge, backgroundColor: priceScale[i], alignItems: "center", justifyContent: "center" }}>
            <T style={{ fontFamily: fonts.monoBold, fontSize: 11, lineHeight: 14, color: i === 3 ? priceScale[0] : priceScale[3] }}>{t.label}</T>
          </View>
          <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 12.5 }}>{RANGES[i]}</T>
        </View>
      ))}
    </View>
  );
}
