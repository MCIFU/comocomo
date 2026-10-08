import type { Recipe } from "@comocomo/schemas";
import { Image, Linking, Pressable, View, type ViewStyle } from "react-native";
import { PHOTOS } from "./lib/photos";
import { Isotype } from "./Logo";
import { usePalette } from "./theme";
import { T } from "./ui";

/** Foto real del plato. Si una receta no tiene foto, un hueco neutro con el isotipo. */
export function RecipePhoto({ recipe, width, aspect, radius = 8, style }: {
  recipe: Recipe; width: number; aspect: number; radius?: number; style?: ViewStyle;
}) {
  const c = usePalette();
  const photo = PHOTOS[recipe.id];
  return (
    <View style={[{ width, height: width / aspect, borderRadius: radius, overflow: "hidden", backgroundColor: c.crust, alignItems: "center", justifyContent: "center" }, style]}>
      {photo ? (
        <Image
          source={photo.src}
          accessibilityLabel={`Foto de ${recipe.title}`}
          resizeMode="cover"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      ) : (
        <Isotype size={Math.round(width * 0.22)} />
      )}
    </View>
  );
}

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
