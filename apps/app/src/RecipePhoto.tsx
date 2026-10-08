import type { Recipe } from "@comocomo/schemas";
import { forwardRef } from "react";
import { Image, Linking, Pressable, View, type ViewStyle } from "react-native";
import { PHOTOS } from "./lib/photos";
import { Plate } from "./Plate";
import { usePalette } from "./theme";
import { T } from "./ui";

/**
 * Foto real del plato (sin filtro) con el plato de datos como sello en la esquina.
 * Si la receta no tiene foto, se usa el plato de datos a tamaño completo.
 * La ref apunta al sello: es el elemento que viaja en la transición compartida.
 */
export const RecipePhoto = forwardRef<View, {
  recipe: Recipe; have?: ReadonlySet<string>; width: number; aspect: number; radius?: number; stamp?: number; style?: ViewStyle;
}>(function RecipePhoto({ recipe, have, width, aspect, radius = 8, stamp, style }, stampRef) {
  const c = usePalette();
  const photo = PHOTOS[recipe.id];
  const s = stamp ?? Math.round(width * 0.36);
  if (!photo) {
    return (
      <View ref={stampRef} collapsable={false} style={[{ width, alignItems: "center" }, style]}>
        <Plate recipe={recipe} have={have} size={Math.min(width, width / aspect)} />
      </View>
    );
  }
  return (
    <View style={[{ width }, style]}>
      <Image
        source={photo.src}
        accessibilityLabel={`Foto de ${recipe.title}`}
        resizeMode="cover"
        style={{ width, height: width / aspect, borderRadius: radius, backgroundColor: c.crust }}
      />
      <View
        ref={stampRef}
        collapsable={false}
        style={{ position: "absolute", right: -s * 0.18, bottom: -s * 0.18, borderRadius: s / 2, borderWidth: 3, borderColor: c.paper, backgroundColor: c.paper }}
      >
        <Plate recipe={recipe} have={have} size={s} />
      </View>
    </View>
  );
});

export function PhotoCredit({ recipeId }: { recipeId: string }) {
  const photo = PHOTOS[recipeId];
  if (!photo) return null;
  return (
    <Pressable accessibilityRole="link" onPress={() => Linking.openURL(photo.url)}>
      <T tone="muted" style={{ fontSize: 12, lineHeight: 17 }}>
        Foto: {photo.author} · {photo.license} · Wikimedia Commons
      </T>
    </Pressable>
  );
}
