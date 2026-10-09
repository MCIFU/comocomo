import { formatMinutes, formatMoney, priceTier, PRICE_TIERS } from "@comocomo/core";
import { priceScale } from "@comocomo/design-tokens";
import type { Recipe } from "@comocomo/schemas";
import { Animated, Platform, Pressable, View } from "react-native";
import { CUISINE_LABEL } from "./lib/labels";
import { useEnter } from "./motion";
import { RecipePhoto } from "./RecipePhoto";
import { fonts, radius, stroke, usePalette } from "./theme";
import { Display, T } from "./ui";


/** Tarjeta de receta: foto cuadrada, origen y tiempo, nombre y precio para N personas en una pegatina. */
export function RecipeCard({ recipe, price, servings, index, width, onPress }: {
  recipe: Recipe; price: { min: number; max: number }; servings: number; index: number; width: number; onPress: () => void;
}) {
  const c = usePalette();
  const enter = useEnter(index, recipe.id);
  const title = recipe.title.replace(/\s*\(.*\)/, "");
  // El color del precio depende solo de lo que cuesta por persona (no del país).
  const tier = priceTier((price.min + price.max) / 2 / servings);
  const tag = priceScale[tier];
  // La escala de precio es fija (no cambia con el tema): texto claro solo sobre la etiqueta más oscura.
  const tagText = tier === 3 ? priceScale[0] : priceScale[3];
  const inner = width - stroke.width * 2 - 6;
  return (
    <Animated.View style={[{ width }, enter]}>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`${title}. ${formatMinutes(recipe.prepMin + recipe.cookMin)}. ${formatMoney(price.min, price.max)} para ${servings} personas.`}
        onPress={onPress}
        style={Platform.OS === "web" ? ({ cursor: "pointer" } as object) : undefined}
      >
        {({ hovered, pressed }: any) => {
          const lift = pressed ? 0 : hovered ? -3 : 0;
          const shadow = pressed ? 2 : hovered ? 9 : 6;
          return (
            <View style={{ paddingRight: 6, paddingBottom: 6 }}>
              <View style={{ position: "absolute", left: shadow, top: shadow, right: 6 - shadow, bottom: 6 - shadow, backgroundColor: c.ink, borderRadius: radius.lg }} />
              <View
                style={{
                  backgroundColor: c.card, borderWidth: stroke.width, borderColor: c.ink, borderRadius: radius.lg, overflow: "hidden",
                  transform: [{ translateX: lift }, { translateY: lift }, { rotate: hovered && !pressed ? "-0.4deg" : "0deg" }],
                }}
              >
                <View style={{ borderBottomWidth: stroke.width, borderColor: c.ink }}>
                  <RecipePhoto recipe={recipe} width={inner} aspect={1} radius={0} />
                </View>
                <View style={{ padding: 14, gap: 6 }}>
                  <T numberOfLines={1} style={{ fontFamily: fonts.monoBold, fontSize: 11.5, lineHeight: 15, textTransform: "uppercase" }}>
                    {CUISINE_LABEL[recipe.cuisine] ?? recipe.origin} · {formatMinutes(recipe.prepMin + recipe.cookMin)}
                  </T>
                  <Display size={width < 200 ? 19 : 22} numberOfLines={2} style={{ minHeight: (width < 200 ? 19 : 22) * 2 }}>{title}</Display>
                  <View
                    accessibilityLabel={`${PRICE_TIERS[tier].name}: ${formatMoney(price.min, price.max)} para ${servings} personas`}
                    style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "baseline", gap: 6, marginTop: 4, backgroundColor: tag, borderWidth: 2, borderColor: c.ink, borderRadius: 10, paddingHorizontal: 9, paddingVertical: 2 }}
                  >
                    <T style={{ fontFamily: fonts.display, fontSize: 18, lineHeight: 24, color: tagText }}>{formatMoney(price.min, price.max).replace("≈ ", "")}</T>
                    <T style={{ fontFamily: fonts.monoBold, fontSize: 12.5, lineHeight: 18, color: tagText }}>{PRICE_TIERS[tier].label}</T>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      </Pressable>
    </Animated.View>
  );
}
