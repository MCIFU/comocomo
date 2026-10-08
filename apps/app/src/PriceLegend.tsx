import { PRICE_TIERS } from "@comocomo/core";
import { priceScale } from "@comocomo/design-tokens";
import { View } from "react-native";
import { fonts, usePalette } from "./theme";
import { T } from "./ui";

const RANGES = ["hasta 1,5 €", "hasta 3 €", "hasta 5 €", "más de 5 €"];

/** Leyenda de la escala de precio: el color del precio indica lo que cuesta por persona. */
export function PriceLegend({ servings }: { servings: number }) {
  const c = usePalette();
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: 14, rowGap: 6 }} accessibilityLabel="Escala de precio por persona">
      <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 12.5 }}>Precio total para {servings} · color según lo que cuesta por persona:</T>
      {PRICE_TIERS.map((t, i) => (
        <View key={t.label} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <View style={{ minWidth: 34, paddingHorizontal: 5, height: 20, borderRadius: 6, borderWidth: 2, borderColor: c.ink, backgroundColor: priceScale[i], alignItems: "center", justifyContent: "center" }}>
            <T style={{ fontFamily: fonts.monoBold, fontSize: 11, lineHeight: 14, color: i === 3 ? c.paper : c.ink }}>{t.label}</T>
          </View>
          <T tone="muted" style={{ fontFamily: fonts.mono, fontSize: 12.5 }}>{RANGES[i]}</T>
        </View>
      ))}
    </View>
  );
}
