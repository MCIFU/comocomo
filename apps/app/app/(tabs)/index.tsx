import { formatMoney, searchRecipes, shoppingPrice } from "@comocomo/core";
import type { Restriction } from "@comocomo/schemas";
import { useRouter } from "expo-router";
import { useDeferredValue, useMemo, useState } from "react";
import { Pressable, ScrollView, TextInput, useWindowDimensions, View } from "react-native";
import { RecipeCard } from "../../src/RecipeCard";
import { Screen } from "../../src/Screen";
import { catalog, DISH_KEYWORDS, prices, recipes, SEARCH_TAGS } from "../../src/lib/data";
import { CONTINENTS, CUISINE_LABEL, QUICK_FILTERS } from "../../src/lib/labels";
import { dailyMenu, dayKey, type Course } from "../../src/lib/menu";
import { actions, useStore } from "../../src/lib/store";
import { Wordmark } from "../../src/Logo";
import { ThemeSwitch } from "../../src/ThemeSwitch";
import { PriceLegend } from "../../src/PriceLegend";
import { fonts, radius, stroke, usePalette } from "../../src/theme";
import { Button, Chip, Display, Empty, Label, Stepper, T } from "../../src/ui";

// El país también se puede escribir: "mexicana", "japón"…
const EXTRA: Record<string, string[]> = Object.fromEntries(
  recipes.map((r) => [r.id, [...(DISH_KEYWORDS[r.id] ?? []), ...(SEARCH_TAGS[r.id] ?? []), CUISINE_LABEL[r.cuisine] ?? "", r.origin ?? ""]]),
);

export default function Recetas() {
  const c = usePalette();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const wide = width >= 1024;
  const servings = useStore((s) => s.servings);
  const [q, setQ] = useState("");
  const [continent, setContinent] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [shuffle, setShuffle] = useState(0);
  const [quick, setQuick] = useState<string[]>([]);
  const [gridW, setGridW] = useState(0);
  const dq = useDeferredValue(q);

  const results = useMemo(() => {
    const qf = QUICK_FILTERS.filter((f) => quick.includes(f.key));
    const restrictions: Restriction[] = qf.flatMap((f) => f.restrictions ?? []);
    const maxMinutes = qf.find((f) => f.maxMinutes)?.maxMinutes;
    const cont = CONTINENTS.find((x) => x.key === continent);
    const cuisines = country ? cont?.countries.find((x) => x.key === country)?.cuisines : cont?.countries.flatMap((x) => x.cuisines);
    return searchRecipes(recipes, catalog, dq, { extra: EXTRA, restrictions, maxMinutes })
      .filter((r) => !cuisines || cuisines.includes(r.cuisine))
      .filter((r) => qf.every((f) => !f.ids || f.ids.includes(r.id)))
      .map((r) => ({ recipe: r, price: shoppingPrice(r, servings, prices, catalog) }));
  }, [dq, continent, country, quick, servings]);

  // Países con recetas dentro del continente elegido.
  const countries = useMemo(() => {
    const cont = CONTINENTS.find((x) => x.key === continent);
    if (!cont) return [];
    return cont.countries.filter((k) => recipes.some((r) => k.cuisines.includes(r.cuisine)));
  }, [continent]);

  const menu = useMemo(() => {
    const m = dailyMenu(dayKey(), shuffle);
    return (["primero", "segundo", "postre"] as Course[])
      .map((course) => ({ course, recipe: m[course]! }))
      .filter((x) => x.recipe)
      .map((x) => ({ ...x, price: shoppingPrice(x.recipe, servings, prices, catalog) }));
  }, [shuffle, servings]);
  const menuTotal = menu.reduce((a, x) => ({ min: a.min + x.price.min, max: a.max + x.price.max }), { min: 0, max: 0 });

  const cols = gridW >= 1000 ? 4 : gridW >= 700 ? 3 : 2;
  const gap = wide ? 22 : 12;
  const cardW = gridW ? Math.floor((gridW - gap * (cols - 1)) / cols) : 0;
  const filtered = !!q.trim() || !!continent || quick.length > 0;
  const showMenu = !filtered && !showAll;
  const menuCols = gridW >= 700 ? 3 : 1;
  const menuW = gridW ? (menuCols === 1 ? Math.min(gridW, 420) : Math.floor((gridW - gap * 2) / 3)) : 0;
  const clear = () => {
    setQ("");
    setContinent(null);
    setCountry(null);
    setQuick([]);
    setShowAll(false);
  };
  const COURSE_LABEL: Record<Course, string> = { primero: "Primer plato", segundo: "Segundo plato", postre: "Postre" };
  const today = new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });

  return (
    <Screen wide={wide}>
      {!wide && (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Wordmark size={22} />
          <ThemeSwitch />
        </View>
      )}

      {/* Cabecera roja */}
      <View style={{ backgroundColor: c.tomato, borderRadius: wide ? 32 : 24, paddingHorizontal: wide ? 48 : 20, paddingTop: wide ? 56 : 24, paddingBottom: wide ? 44 : 20, overflow: "hidden" }}>
        <View style={{ position: "absolute", right: wide ? -70 : -90, top: wide ? -70 : -110, width: wide ? 300 : 220, height: wide ? 300 : 220, borderRadius: 999, backgroundColor: c.mustard, opacity: 0.95 }} />
        <Display size={wide ? 112 : 42} style={{ color: c.onTomato, lineHeight: (wide ? 112 : 42) * 0.88, maxWidth: 900 }}>
          ¿Qué cocinamos <T style={{ color: c.mustard, fontFamily: fonts.display, fontSize: wide ? 112 : 42, lineHeight: (wide ? 112 : 42) * 0.88 }}>hoy?</T>
        </Display>
        <T style={{ color: c.onTomato, fontSize: wide ? 21 : 16, lineHeight: wide ? 30 : 22, maxWidth: 540, marginTop: wide ? 16 : 10, marginBottom: wide ? 24 : 16, fontFamily: fonts.uiMedium }}>
          {wide ? "Busca un plato y te damos la receta, la lista de la compra y lo que te va a costar." : "Receta, lista de la compra y lo que te va a costar."}
        </T>
        <View style={{ maxWidth: 720, paddingRight: 5, paddingBottom: 5 }}>
          <View style={{ position: "absolute", left: 5, top: 5, right: 0, bottom: 0, backgroundColor: c.shadow, borderRadius: radius.md }} />
          <TextInput
            value={q}
            onChangeText={setQ}
            placeholder={wide ? "Ej: tortilla, tacos, pollo, algo japonés…" : "Tortilla, tacos, pollo…"}
            placeholderTextColor={c.inkMuted}
            accessibilityLabel="Buscar recetas por plato, país o ingrediente"
            returnKeyType="search"
            style={{
              position: "relative", minHeight: wide ? 60 : 54, paddingHorizontal: 18, backgroundColor: c.card, borderWidth: stroke.width, borderColor: c.edge, borderRadius: radius.md,
              fontFamily: fonts.uiBold, fontSize: wide ? 21 : 18, color: c.ink, outlineStyle: "none",
            } as object}
          />
        </View>
        <ScrollView
          horizontal={!wide}
          showsHorizontalScrollIndicator={false}
          style={wide ? undefined : { marginHorizontal: -20 }}
          contentContainerStyle={{ flexDirection: "row", flexWrap: wide ? "wrap" : "nowrap", gap: 10, marginTop: wide ? 20 : 16, paddingHorizontal: wide ? 0 : 20 }}
        >
          <Chip label="Todas" selected={!continent && showAll} onPress={() => { setContinent(null); setCountry(null); setShowAll(true); }} />
          {CONTINENTS.map((r, i) => (
            <Chip key={r.key} label={r.label} color={i + 1} selected={continent === r.key} onPress={() => { setCountry(null); setContinent(continent === r.key ? null : r.key); }} />
          ))}
        </ScrollView>
        {countries.length > 0 && (
          <ScrollView
            horizontal={!wide}
            showsHorizontalScrollIndicator={false}
            style={wide ? undefined : { marginHorizontal: -20 }}
            contentContainerStyle={{ flexDirection: "row", flexWrap: wide ? "wrap" : "nowrap", gap: 8, marginTop: 10, paddingHorizontal: wide ? 0 : 20 }}
          >
            <Chip label={"Todo " + (CONTINENTS.find((x) => x.key === continent)?.label ?? "")} selected={!country} onPress={() => setCountry(null)} />
            {countries.map((k) => (
              <Chip key={k.key} label={k.label} selected={country === k.key} onPress={() => setCountry(country === k.key ? null : k.key)} />
            ))}
          </ScrollView>
        )}
      </View>

      {/* Barra: título, personas y filtros rápidos */}
      <View style={{ gap: 16, marginTop: 8 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <View style={{ flexDirection: "row", alignItems: "baseline", gap: 12 }}>
            <Display size={wide ? 42 : 30}>{showMenu ? "Menú del día" : "Recetas"}</Display>
            {showMenu ? <Label tone="muted" style={{ fontSize: 13 }}>{today}</Label> : wide && <Label tone="muted" style={{ fontSize: 13 }}>{results.length} {results.length === 1 ? "plato" : "platos"}</Label>}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            {wide && <Label>Precio para</Label>}
            <Stepper label="personas" unit={wide ? (servings === 1 ? "persona" : "personas") : "pers."} value={servings} onChange={actions.setServings} max={20} />
          </View>
        </View>
        <PriceLegend servings={servings} />
        <ScrollView
          horizontal={!wide}
          showsHorizontalScrollIndicator={false}
          style={wide ? undefined : { marginHorizontal: -16 }}
          contentContainerStyle={{ flexDirection: "row", flexWrap: wide ? "wrap" : "nowrap", gap: 10, paddingHorizontal: wide ? 0 : 16 }}
        >
          {QUICK_FILTERS.map((f) => (
            <Chip key={f.key} label={f.label} selected={quick.includes(f.key)} onPress={() => setQuick(quick.includes(f.key) ? quick.filter((x) => x !== f.key) : [...quick, f.key])} />
          ))}
          {filtered && (
            <Pressable accessibilityRole="button" onPress={clear} style={{ minHeight: 41, justifyContent: "center", paddingHorizontal: 6 }}>
              <T style={{ fontFamily: fonts.uiBold, textDecorationLine: "underline" }}>Quitar filtros</T>
            </Pressable>
          )}
        </ScrollView>
      </View>

      {/* Menú del día: primero, segundo y postre */}
      {showMenu && (
        <View onLayout={(e) => setGridW(e.nativeEvent.layout.width)} style={{ gap: 18 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap, rowGap: gap + 6, justifyContent: menuCols === 1 ? "center" : "flex-start" }}>
            {menuW > 0 && menu.map(({ course, recipe, price }, i) => (
              <View key={course} style={{ width: menuW, gap: 8 }}>
                <Label>{COURSE_LABEL[course]}</Label>
                <RecipeCard recipe={recipe} price={price} servings={servings} index={i} width={menuW}
                  onPress={() => router.push({ pathname: "/receta/[id]", params: { id: recipe.id } })} />
              </View>
            ))}
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <T style={{ fontFamily: fonts.uiBold, fontSize: 16 }}>Menú completo para {servings} {servings === 1 ? "persona" : "personas"}: {formatMoney(menuTotal.min, menuTotal.max)}</T>
            <Button label="Otro menú" kind="mustard" onPress={() => setShuffle(shuffle + 1)} />
            <Button label="Ver todas las recetas" kind="quiet" onPress={() => setShowAll(true)} />
          </View>
        </View>
      )}

      {/* Rejilla */}
      {!showMenu && <View onLayout={(e) => setGridW(e.nativeEvent.layout.width)} style={{ flexDirection: "row", flexWrap: "wrap", gap, rowGap: gap + 6 }}>
        {cardW > 0 &&
          results.map(({ recipe, price }, i) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              price={price}
              servings={servings}
              index={i}
              width={cardW}
              onPress={() => router.push({ pathname: "/receta/[id]", params: { id: recipe.id } })}
            />
          ))}
      </View>}
      {!showMenu && results.length === 0 && (
        <Empty
          title={q.trim() ? `Ni rastro de «${q.trim()}».` : "Nada con esos filtros."}
          body="Prueba con otro plato, un ingrediente o un país. Por ejemplo: «pollo», «italiana» o «tortilla»."
          action={<Button label="Ver todas las recetas" kind="mustard" onPress={clear} />}
        />
      )}

      <T tone="muted" style={{ fontSize: 13, lineHeight: 19, marginTop: 12, maxWidth: 760 }}>
        Precio aproximado de comprarlo todo en un supermercado en España, con envases completos. Si tienes alergias, revisa siempre las etiquetas.{" "}
        <T tone="muted" accessibilityRole="link" onPress={() => router.push("/creditos")} style={{ fontSize: 13, textDecorationLine: "underline" }}>
          Créditos de las fotos
        </T>
      </T>
    </Screen>
  );
}
