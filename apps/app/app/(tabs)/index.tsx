import { formatMoney, searchRecipes, shoppingPrice } from "@comocomo/core";
import type { Recipe } from "@comocomo/schemas";
import { useRouter } from "expo-router";
import { useDeferredValue, useMemo, useState } from "react";
import { Pressable, ScrollView, TextInput, useWindowDimensions, View } from "react-native";
import { RecipeCard } from "../../src/RecipeCard";
import { Screen } from "../../src/Screen";
import { catalog, DISH_KEYWORDS, prices, recipes, SEARCH_TAGS } from "../../src/lib/data";
import { CONTINENTS, CUISINE_LABEL, FILTER_GROUPS, QUICK_FILTERS } from "../../src/lib/labels";
import { dailyMenu, dayKey, menuPoolSize, type Course } from "../../src/lib/menu";
import { actions, useStore } from "../../src/lib/store";
import { Wordmark } from "../../src/Logo";
import { ThemeSwitch } from "../../src/ThemeSwitch";
import { UserChip } from "../../src/Account";
import { PriceLegend } from "../../src/PriceLegend";
import { fonts, radius, stroke, usePalette } from "../../src/theme";
import { Button, Chip, Display, Empty, Label, Stepper, T } from "../../src/ui";

// El país también se puede escribir: "mexicana", "japón"…
const EXTRA: Record<string, string[]> = Object.fromEntries(
  recipes.map((r) => [r.id, [...(DISH_KEYWORDS[r.id] ?? []), ...(SEARCH_TAGS[r.id] ?? []), CUISINE_LABEL[r.cuisine] ?? "", r.origin ?? ""]]),
);

/** Cada filtro rápido como un conjunto de ids, calculado una vez: así contar es instantáneo. */
const FILTER_SETS: Record<string, Set<string>> = Object.fromEntries(
  QUICK_FILTERS.map((f) => {
    let list = f.restrictions ? searchRecipes(recipes, catalog, "", { restrictions: f.restrictions }) : recipes;
    if (f.maxMinutes) list = list.filter((r) => r.prepMin + r.cookMin <= f.maxMinutes!);
    if (f.ids) { const ids = new Set(f.ids); list = list.filter((r) => ids.has(r.id)); }
    return [f.key, new Set(list.map((r) => r.id))];
  }),
);

const COURSE_LABEL: Record<Course, string> = { primero: "Primer plato", segundo: "Segundo plato", postre: "Postre" };
const COURSES: Course[] = ["primero", "segundo", "postre"];

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
  const [shuffles, setShuffles] = useState<Record<Course, number>>({ primero: 0, segundo: 0, postre: 0 });
  const [quick, setQuick] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [gridW, setGridW] = useState(0);
  const dq = useDeferredValue(q);

  // Región (continente / país) como predicado.
  const cuisines = useMemo(() => {
    const cont = CONTINENTS.find((x) => x.key === continent);
    return country ? cont?.countries.find((x) => x.key === country)?.cuisines : cont?.countries.flatMap((x) => x.cuisines);
  }, [continent, country]);
  const inRegion = (r: Recipe) => !cuisines || cuisines.includes(r.cuisine);
  const passes = (r: Recipe, keys = quick) => keys.every((k) => FILTER_SETS[k]!.has(r.id));

  // Búsqueda + región, sin filtros rápidos: base para contar cuántas quedarían con cada filtro.
  const base = useMemo(() => searchRecipes(recipes, catalog, dq, { extra: EXTRA }).filter(inRegion), [dq, cuisines]);
  const results = useMemo(
    () => base.filter((r) => passes(r)).map((r) => ({ recipe: r, price: shoppingPrice(r, servings, prices, catalog) })),
    [base, quick, servings],
  );
  const counts = useMemo(() => {
    const out: Record<string, number> = {};
    for (const f of QUICK_FILTERS) {
      const keys = quick.includes(f.key) ? quick : [...quick, f.key];
      out[f.key] = base.reduce((n, r) => n + (passes(r, keys) ? 1 : 0), 0);
    }
    return out;
  }, [base, quick]);

  // Países con recetas dentro del continente elegido.
  const countries = useMemo(() => {
    const cont = CONTINENTS.find((x) => x.key === continent);
    if (!cont) return [];
    return cont.countries.filter((k) => recipes.some((r) => k.cuisines.includes(r.cuisine)));
  }, [continent]);

  // Menú del día: respeta región y filtros rápidos; cada plato se puede cambiar por separado.
  const pool = quick.length || cuisines ? (r: Recipe) => inRegion(r) && passes(r) : undefined;
  const poolSize = useMemo(() => menuPoolSize(pool), [quick, cuisines]);
  const menu = useMemo(() => {
    const m = dailyMenu(dayKey(), shuffles, pool);
    return COURSES.map((course) => ({ course, recipe: m[course]! }))
      .filter((x) => x.recipe)
      .map((x) => ({ ...x, price: shoppingPrice(x.recipe, servings, prices, catalog) }));
  }, [shuffles, servings, quick, cuisines]);
  const menuTotal = menu.reduce((a, x) => ({ min: a.min + x.price.min, max: a.max + x.price.max }), { min: 0, max: 0 });
  const reroll = (course?: Course) =>
    setShuffles((s) => (course ? { ...s, [course]: s[course] + 1 } : { primero: s.primero + 1, segundo: s.segundo + 1, postre: s.postre + 1 }));

  const cols = gridW >= 1000 ? 4 : gridW >= 700 ? 3 : 2;
  const gap = wide ? 22 : 12;
  const cardW = gridW ? Math.floor((gridW - gap * (cols - 1)) / cols) : 0;
  const hasFilters = !!continent || quick.length > 0;
  const showMenu = !q.trim() && !showAll;
  const menuCols = gridW >= 700 ? 3 : 1;
  const menuW = gridW ? (menuCols === 1 ? Math.min(gridW, 460) : Math.floor((gridW - gap * 2) / 3)) : 0;
  const clear = () => {
    setQ("");
    setContinent(null);
    setCountry(null);
    setQuick([]);
    setShowAll(false);
  };
  const toggle = (k: string) => setQuick(quick.includes(k) ? quick.filter((x) => x !== k) : [...quick, k]);
  const activeLabels = QUICK_FILTERS.filter((f) => quick.includes(f.key)).map((f) => f.label.toLowerCase());
  const regionLabel = country ? CONTINENTS.flatMap((x) => x.countries).find((x) => x.key === country)?.label : CONTINENTS.find((x) => x.key === continent)?.label;
  const hints = QUICK_FILTERS.filter((f) => quick.includes(f.key) && f.hint);
  const today = new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
  const filtersVisible = wide || filtersOpen || quick.length > 0;

  return (
    <Screen wide={wide}>
      {!wide && (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Wordmark size={22} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <UserChip />
            <ThemeSwitch />
          </View>
        </View>
      )}

      {/* Cabecera roja */}
      <View style={{ backgroundColor: c.tomato, borderRadius: wide ? 32 : 24, paddingHorizontal: wide ? 48 : 20, paddingTop: wide ? 56 : 18, paddingBottom: wide ? 44 : 16, overflow: "hidden" }}>
        <View style={{ position: "absolute", right: wide ? -70 : -80, top: wide ? -70 : -100, width: wide ? 300 : 170, height: wide ? 300 : 170, borderRadius: 999, backgroundColor: c.mustard, opacity: 0.95 }} />
        <Display size={wide ? 112 : 34} style={{ color: c.onTomato, lineHeight: (wide ? 112 : 34) * 0.9, maxWidth: wide ? 900 : 230 }}>
          ¿Qué cocinamos <T style={{ color: c.mustard, fontFamily: fonts.display, fontSize: wide ? 112 : 34, lineHeight: (wide ? 112 : 34) * 0.9 }}>hoy?</T>
        </Display>
        {wide ? (
          <T style={{ color: c.onTomato, fontSize: 21, lineHeight: 30, maxWidth: 540, marginTop: 16, marginBottom: 24, fontFamily: fonts.uiMedium }}>
            Busca un plato y te damos la receta, la lista de la compra y lo que te va a costar.
          </T>
        ) : (
          <View style={{ height: 14 }} />
        )}
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
              position: "relative", minHeight: wide ? 60 : 50, paddingHorizontal: 18, backgroundColor: c.card, borderWidth: stroke.width, borderColor: c.edge, borderRadius: radius.md,
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

      {/* Barra: título, personas y filtros */}
      <View style={{ gap: 14, marginTop: 8 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <View style={{ flexDirection: "row", alignItems: "baseline", gap: 12, flexShrink: 1, flexWrap: "wrap" }}>
            <Display size={wide ? 42 : 30}>{showMenu ? "Menú del día" : "Recetas"}</Display>
            {showMenu ? <Label tone="muted" style={{ fontSize: 13 }}>{today}</Label> : <Label tone="muted" style={{ fontSize: 13 }}>{results.length} {results.length === 1 ? "plato" : "platos"}</Label>}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            {wide && <Label>Precio para</Label>}
            <Stepper label="personas" unit={wide ? (servings === 1 ? "persona" : "personas") : "pers."} value={servings} onChange={actions.setServings} max={20} />
          </View>
        </View>
        <PriceLegend servings={servings} compact={!wide} />

        {/* Filtros agrupados con recuento: el número dice cuántas recetas quedarían al activarlo. */}
        {!wide && (
          <Pressable accessibilityRole="button" accessibilityState={{ expanded: filtersVisible }} onPress={() => setFiltersOpen(!filtersOpen)} style={{ alignSelf: "flex-start", minHeight: 40, justifyContent: "center" }}>
            <T style={{ fontFamily: fonts.uiBold }}>{filtersVisible ? "▾" : "▸"} Filtros{quick.length ? ` (${quick.length})` : ""}</T>
          </Pressable>
        )}
        {filtersVisible && (
          <View style={{ gap: 10 }}>
            {FILTER_GROUPS.map((g) => (
              <View key={g.key} style={{ flexDirection: wide ? "row" : "column", alignItems: wide ? "center" : "flex-start", gap: wide ? 14 : 6 }}>
                <Label tone="muted" style={{ width: wide ? 64 : undefined }}>{g.label}</Label>
                <ScrollView
                  horizontal={!wide}
                  showsHorizontalScrollIndicator={false}
                  style={wide ? { flex: 1 } : { marginHorizontal: -16, alignSelf: "stretch" }}
                  contentContainerStyle={{ flexDirection: "row", flexWrap: wide ? "wrap" : "nowrap", gap: 10, paddingHorizontal: wide ? 0 : 16 }}
                >
                  {QUICK_FILTERS.filter((f) => f.group === g.key).map((f) => (
                    <Chip
                      key={f.key}
                      label={f.label}
                      selected={quick.includes(f.key)}
                      count={counts[f.key]}
                      disabled={!quick.includes(f.key) && counts[f.key] === 0}
                      onPress={() => toggle(f.key)}
                    />
                  ))}
                </ScrollView>
              </View>
            ))}
            {hints.length > 0 && (
              <View style={{ gap: 4, borderLeftWidth: 4, borderColor: c.mustard, paddingLeft: 12, paddingVertical: 2 }}>
                {hints.map((f) => (
                  <T key={f.key} tone="muted" style={{ fontSize: 14, lineHeight: 20 }}>
                    <T style={{ fontFamily: fonts.uiBold, fontSize: 14 }}>{f.label}: </T>{f.hint}
                  </T>
                ))}
              </View>
            )}
            {hasFilters && (
              <Pressable accessibilityRole="button" onPress={clear} style={{ alignSelf: "flex-start", minHeight: 36, justifyContent: "center" }}>
                <T style={{ fontFamily: fonts.uiBold, textDecorationLine: "underline" }}>Quitar filtros</T>
              </Pressable>
            )}
          </View>
        )}
      </View>

      {/* Menú del día: primero, segundo y postre */}
      {showMenu && (
        <View onLayout={(e) => setGridW(e.nativeEvent.layout.width)} style={{ gap: 18 }}>
          {(activeLabels.length > 0 || regionLabel) && (
            <T tone="muted" style={{ fontSize: 15 }}>
              Menú {[regionLabel && `de ${regionLabel}`, activeLabels.length && `pensado para: ${activeLabels.join(", ")}`].filter(Boolean).join(" · ")}.
              {COURSES.some((k) => poolSize[k] === 0) ? " Algún plato no tiene opciones con estos filtros y se elige entre todos." : ""}
            </T>
          )}
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap, rowGap: gap + 10, justifyContent: menuCols === 1 ? "center" : "flex-start" }}>
            {menuW > 0 && menu.map(({ course, recipe, price }, i) => (
              <View key={course} style={{ width: menuW, gap: 8 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Label>{COURSE_LABEL[course]}</Label>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Cambiar ${COURSE_LABEL[course].toLowerCase()}`}
                    onPress={() => reroll(course)}
                    style={({ pressed }) => ({ minHeight: 32, paddingHorizontal: 10, justifyContent: "center", borderRadius: 999, borderWidth: 2, borderColor: c.edge, backgroundColor: pressed ? c.mustard : c.card })}
                  >
                    <T style={{ fontFamily: fonts.uiBold, fontSize: 13.5, lineHeight: 18 }}>↻ Cambiar</T>
                  </Pressable>
                </View>
                <RecipeCard recipe={recipe} price={price} servings={servings} index={i} width={menuW}
                  onPress={() => router.push({ pathname: "/receta/[id]", params: { id: recipe.id } })} />
              </View>
            ))}
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <T style={{ fontFamily: fonts.uiBold, fontSize: 16 }}>Menú completo para {servings} {servings === 1 ? "persona" : "personas"}: {formatMoney(menuTotal.min, menuTotal.max)}</T>
            <Button label="↻ Otro menú" kind="mustard" onPress={() => reroll()} />
            <Button
              label="Añadir el menú a la lista"
              kind="quiet"
              onPress={() => { for (const m of menu) actions.addToCart(m.recipe.id, servings); router.push("/compra"); }}
            />
            <Button label={hasFilters ? `Ver las ${results.length} recetas` : "Ver todas las recetas"} kind="quiet" onPress={() => setShowAll(true)} />
          </View>
        </View>
      )}

      {/* Rejilla */}
      {!showMenu && (
        <View onLayout={(e) => setGridW(e.nativeEvent.layout.width)} style={{ flexDirection: "row", flexWrap: "wrap", gap, rowGap: gap + 6 }}>
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
        </View>
      )}
      {!showMenu && results.length === 0 && (
        <Empty
          title={q.trim() ? `Ni rastro de «${q.trim()}».` : "Nada con esos filtros."}
          body="Prueba con otro plato, un ingrediente o un país. Por ejemplo: «pollo», «italiana» o «tortilla»."
          action={<Button label="Ver todas las recetas" kind="mustard" onPress={clear} />}
        />
      )}
      {showAll && !q.trim() && (
        <Pressable accessibilityRole="button" onPress={() => setShowAll(false)} style={{ alignSelf: "flex-start", minHeight: 40, justifyContent: "center" }}>
          <T style={{ fontFamily: fonts.uiBold, textDecorationLine: "underline" }}>← Volver al menú del día</T>
        </Pressable>
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
