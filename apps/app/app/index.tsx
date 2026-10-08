import { formatMinutes, formatMoneyRange, parseQuery, recommend } from "@comocomo/core";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Animated, Platform, Pressable, ScrollView, useWindowDimensions, View } from "react-native";
import { Wordmark } from "../src/Logo";
import { catalog, ingredients, prices, recipes } from "../src/lib/data";
import { ALLERGY_OPTIONS } from "../src/lib/labels";
import { useEnter, useReducedMotion } from "../src/motion";
import { Plate } from "../src/Plate";
import { fonts, usePalette } from "../src/theme";
import { Button, Display, Label, T } from "../src/ui";

const CUISINE: Record<string, string> = {
  espanola: "Española", asturiana: "Asturiana", italiana: "Italiana", mexicana: "Mexicana", china: "China",
  india: "India", japonesa: "Japonesa", argentina: "Argentina", turca: "Turca", tailandesa: "Tailandesa",
  peruana: "Peruana", griega: "Griega", coreana: "Coreana", marroqui: "Marroquí", "oriente-medio": "Oriente Medio",
};

const DEMOS = [
  "Tengo pollo y arroz. Somos 3, 10 €.",
  "Huevos y patatas, sin cebolla.",
  "Garbanzos y espinacas. Media hora.",
  "Pasta y ajo. Gastar lo mínimo.",
];

/** Portada pública (web). En la app nativa se entra directamente a la herramienta. */
export default function Portada() {
  if (Platform.OS !== "web") return <Redirect href="/cocina" />;
  return <Landing />;
}

function Landing() {
  const c = usePalette();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const wide = width >= 1024;
  const mid = width >= 700;
  const pad = wide ? 48 : 20;
  const go = () => router.push("/cocina");

  const cuisines = useMemo(() => {
    const m = new Map<string, number>();
    for (const r of recipes) m.set(r.cuisine, (m.get(r.cuisine) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const section = { paddingHorizontal: pad, paddingVertical: wide ? 112 : 72, alignItems: "center" as const };
  const inner = { width: "100%" as const, maxWidth: 1180 };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.paper }}>
      {/* Barra */}
      <View style={{ paddingHorizontal: pad, alignItems: "center" }}>
        <View style={[inner, { height: 76, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }]}>
          <Wordmark size={wide ? 24 : 21} />
          <Button label={mid ? "Abrir COMOCOMO" : "Abrir"} kind="quiet" onPress={go} style={{ minHeight: 44, paddingHorizontal: 16 }} />
        </View>
      </View>

      {/* Hero */}
      <View style={[section, { paddingTop: wide ? 56 : 28 }]}>
        <View style={[inner, { flexDirection: wide ? "row" : "column", gap: wide ? 72 : 48, alignItems: wide ? "center" : "stretch" }]}>
          <HeroCopy wide={wide} onStart={go} />
          <Demo size={wide ? 380 : Math.min(width - 80, 320)} />
        </View>
      </View>

      {/* Cómo funciona */}
      <View style={[section, { borderTopWidth: 1, borderColor: c.line }]}>
        <View style={[inner, { gap: wide ? 56 : 36 }]}>
          <SectionTitle kicker="Cómo funciona" title={"Tres pasos.\nNinguno es rellenar formularios."} wide={wide} />
          <View style={{ flexDirection: mid ? "row" : "column", gap: mid ? 40 : 32 }}>
            <Step n="01" title="Dime qué hay" body="Escribe como hablas: lo que tienes, cuántos sois, cuánto quieres gastar y lo que no te gusta. No hace falta rellenar nada más." />
            <Step n="02" title="Te digo qué cocinar" body="Recetas que encajan de verdad, con lo que ya tienes, lo que te falta y por qué te la recomendamos. Cambia las raciones y todo se recalcula." />
            <Step n="03" title="Cocina sin perderte" body="Modo paso a paso con letra grande, temperaturas, tiempos y temporizadores. Pensado para cuando tienes las manos ocupadas." />
          </View>
        </View>
      </View>

      {/* Presupuesto honesto */}
      <View style={[section, { backgroundColor: c.crust }]}>
        <View style={[inner, { flexDirection: wide ? "row" : "column", gap: wide ? 80 : 32, alignItems: wide ? "center" : "flex-start" }]}>
          <View style={{ flex: wide ? 1 : undefined, gap: 20 }}>
            <SectionTitle kicker="Tu presupuesto" title={"Lo que cuesta,\nsin inventar."} wide={wide} />
            <T style={{ fontSize: wide ? 19 : 17, lineHeight: wide ? 30 : 27, maxWidth: 520 }}>
              Separamos lo que ya tienes de lo que hay que comprar, y te damos el coste por persona. Mientras no tengamos precios reales de tu supermercado, te damos un rango estimado y te lo decimos.
            </T>
          </View>
          <View style={{ flex: wide ? 1 : undefined, gap: 6, alignItems: wide ? "flex-end" : "flex-start" }}>
            <T style={{ fontFamily: fonts.displayBold, fontSize: wide ? 132 : 84, lineHeight: wide ? 140 : 92, letterSpacing: -4, color: c.ink, fontVariant: ["tabular-nums"] }}>≈ 2–3 €</T>
            <T tone="muted" style={{ fontFamily: fonts.uiMedium, fontSize: 16 }}>por persona · estimado, no precio de tienda</T>
          </View>
        </View>
      </View>

      {/* Mundo */}
      <View style={section}>
        <View style={[inner, { gap: 40 }]}>
          <SectionTitle kicker="Cocina del mundo" title={`${recipes.length} recetas de ${cuisines.length} cocinas.\nY creciendo.`} wide={wide} />
          <View style={{ flexDirection: "row", flexWrap: "wrap", columnGap: wide ? 28 : 16, rowGap: wide ? 4 : 2, alignItems: "baseline" }}>
            {cuisines.map(([k, n]) => (
              <View key={k} style={{ flexDirection: "row", alignItems: "baseline", gap: 6 }}>
                <T style={{ fontFamily: fonts.display, fontSize: wide ? 52 : 32, lineHeight: wide ? 64 : 42, letterSpacing: -1, color: c.ink }}>{CUISINE[k] ?? k}</T>
                <T style={{ fontFamily: fonts.uiBold, fontSize: wide ? 16 : 13, color: c.tomato, fontVariant: ["tabular-nums"] }}>{n}</T>
              </View>
            ))}
          </View>
          <T tone="muted" style={{ fontSize: 16, lineHeight: 25, maxWidth: 640 }}>
            Cuando una receta está adaptada a ingredientes de supermercado, lo decimos y explicamos qué cambia respecto a la versión tradicional.
          </T>
        </View>
      </View>

      {/* Alergias */}
      <View style={[section, { borderTopWidth: 1, borderColor: c.line }]}>
        <View style={[inner, { flexDirection: wide ? "row" : "column", gap: wide ? 80 : 28 }]}>
          <View style={{ flex: wide ? 1 : undefined }}>
            <SectionTitle kicker="Alergias e intolerancias" title={"Tus alergias\nvan en serio."} wide={wide} />
          </View>
          <View style={{ flex: wide ? 1 : undefined, gap: 20 }}>
            <T style={{ fontSize: wide ? 19 : 17, lineHeight: wide ? 30 : 27 }}>
              Una alergia no es una preferencia: es una restricción que se aplica en el código, receta a receta, nunca a criterio de una IA. Si dices «soy celíaco», no verás nada con gluten.
            </T>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {ALLERGY_OPTIONS.map((a) => (
                <View key={a.value} style={{ paddingHorizontal: 14, minHeight: 34, justifyContent: "center", borderRadius: 999, borderWidth: 1, borderColor: c.line }}>
                  <T style={{ fontSize: 14, fontFamily: fonts.uiMedium }}>Sin {a.label.toLowerCase()}</T>
                </View>
              ))}
            </View>
            <T tone="muted" style={{ fontSize: 13, lineHeight: 19 }}>Revisa siempre las etiquetas de los productos. COMOCOMO no sustituye el consejo médico.</T>
          </View>
        </View>
      </View>

      {/* Cierre */}
      <View style={[section, { backgroundColor: c.ink }]}>
        <View style={[inner, { gap: 28, alignItems: wide ? "center" : "flex-start" }]}>
          <T style={{ fontFamily: fonts.displayBold, color: c.paper, fontSize: wide ? 88 : 52, lineHeight: wide ? 92 : 56, letterSpacing: wide ? -3 : -1.5, textAlign: wide ? "center" : "left" }}>
            ¿Qué cocinamos hoy<T style={{ color: c.tomato, fontFamily: fonts.displayBold, fontSize: wide ? 88 : 52 }}>?</T>
          </T>
          <Pressable
            accessibilityRole="button"
            onPress={go}
            style={({ pressed, hovered }: any) => ({
              minHeight: 56, paddingHorizontal: 28, borderRadius: 10, justifyContent: "center",
              backgroundColor: c.tomato, opacity: pressed ? 0.85 : 1, transform: [{ scale: hovered ? 1.02 : 1 }],
            })}
          >
            <T style={{ color: c.onTomato, fontFamily: fonts.uiBold, fontSize: 17 }}>Empezar a cocinar →</T>
          </Pressable>
        </View>
      </View>

      <View style={{ paddingHorizontal: pad, paddingVertical: 32, alignItems: "center" }}>
        <View style={[inner, { flexDirection: mid ? "row" : "column", justifyContent: "space-between", gap: 12 }]}>
          <T tone="muted" style={{ fontSize: 13 }}>COMOCOMO · Tu cocina, tus ingredientes, tu presupuesto.</T>
          <T tone="muted" style={{ fontSize: 13 }}>Precios orientativos · © 2026</T>
        </View>
      </View>
    </ScrollView>
  );
}

function HeroCopy({ wide, onStart }: { wide: boolean; onStart: () => void }) {
  const c = usePalette();
  const e1 = useEnter(0);
  const e2 = useEnter(2);
  const e3 = useEnter(4);
  return (
    <View style={{ flex: wide ? 1.45 : undefined, gap: 28 }}>
      <Animated.View style={e1}>
        <Label tone="tomato">Tu cocina, tus ingredientes, tu presupuesto</Label>
      </Animated.View>
      <Animated.View style={e2}>
        <Display size={wide ? 76 : 39} style={{ letterSpacing: wide ? -3 : -1.2, lineHeight: wide ? 80 : 44 }}>
          Dime qué tienes.{"\n"}Te digo qué cocinar<T style={{ color: c.tomato, fontFamily: fonts.display, fontSize: wide ? 76 : 39, lineHeight: wide ? 80 : 44 }}>.</T>
        </Display>
      </Animated.View>
      <Animated.View style={[e3, { gap: 28 }]}>
        <T tone="muted" style={{ fontSize: wide ? 20 : 17, lineHeight: wide ? 31 : 27, maxWidth: 520 }}>
          Escribe lo que hay en tu nevera, cuántos sois y cuánto quieres gastar. COMOCOMO te propone platos reales, con lo que cuestan y lo que te falta.
        </T>
        <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
          <Button label="Empezar a cocinar →" onPress={onStart} style={{ minHeight: 56, paddingHorizontal: 26 }} />
        </View>
      </Animated.View>
    </View>
  );
}

/** Demo en vivo: se "teclea" una petición y el plato de la mejor receta se monta pieza a pieza. */
function Demo({ size }: { size: number }) {
  const c = usePalette();
  const reduced = useReducedMotion();
  const [d, setD] = useState(0);
  const [typed, setTyped] = useState(reduced ? DEMOS[0]!.length : 0);
  const [pieces, setPieces] = useState(reduced ? 99 : 0);
  const text = DEMOS[d]!;

  const top = useMemo(() => {
    const q = parseQuery(text, ingredients);
    const res = recommend(recipes, catalog, prices, {
      have: new Set(q.have),
      restrictions: q.dislikes.map((value) => ({ kind: "dislike" as const, value })),
      servings: q.servings ?? 2, budget: q.budget, maxMinutes: q.maxMinutes,
    });
    return { rec: res[0], have: new Set(q.have) };
  }, [text]);

  useEffect(() => {
    if (reduced) {
      setTyped(text.length);
      setPieces(99);
      const t = setTimeout(() => setD((x) => (x + 1) % DEMOS.length), 5000);
      return () => clearTimeout(t);
    }
    // Tecleo → montaje del plato → pausa → siguiente ejemplo
    if (typed < text.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), 38);
      return () => clearTimeout(t);
    }
    const total = top.rec?.recipe.ingredients.length ?? 0;
    if (pieces < total) {
      const t = setTimeout(() => setPieces((n) => n + 1), pieces === 0 ? 250 : 140);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setD((x) => (x + 1) % DEMOS.length);
      setTyped(0);
      setPieces(0);
    }, 3200);
    return () => clearTimeout(t);
  }, [typed, pieces, text, top, reduced]);

  const rec = top.rec;
  const done = pieces > 0;
  return (
    <View
      accessible
      accessibilityLabel={rec ? `Ejemplo: "${text}". Propuesta: ${rec.recipe.title}.` : undefined}
      style={{ flex: 1, alignItems: "center", gap: 24 }}
    >
      <View style={{ alignSelf: "stretch", borderWidth: 1.5, borderColor: c.ink, borderRadius: 10, padding: 16, minHeight: 60, justifyContent: "center", backgroundColor: c.paper }}>
        <T style={{ fontSize: 17, lineHeight: 24 }}>
          {text.slice(0, typed)}
          <T style={{ color: c.tomato, fontFamily: fonts.uiBold }}>{typed < text.length || !reduced ? "▍" : ""}</T>
        </T>
      </View>
      {rec && <Plate recipe={rec.recipe} have={top.have} size={size} reveal={pieces} />}
      <View style={{ alignItems: "center", gap: 4, minHeight: 64, opacity: done ? 1 : 0 }}>
        {rec && (
          <>
            <Display size={28} style={{ textAlign: "center" }}>{rec.recipe.title}</Display>
            <T tone="muted" style={{ fontSize: 14, fontFamily: fonts.uiMedium }}>
              {formatMinutes(rec.totalMinutes)} · {rec.missing.length === 0 ? "nada que comprar" : `${formatMoneyRange(rec.cost.toBuy.min, rec.cost.toBuy.max)} por comprar`}
            </T>
          </>
        )}
      </View>
    </View>
  );
}

function SectionTitle({ kicker, title, wide }: { kicker: string; title: string; wide: boolean }) {
  return (
    <View style={{ gap: 14 }}>
      <Label tone="tomato">{kicker}</Label>
      <Display size={wide ? 60 : 38} style={{ letterSpacing: wide ? -2 : -1, lineHeight: wide ? 64 : 42 }}>{title}</Display>
    </View>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  const c = usePalette();
  return (
    <View style={{ flex: 1, gap: 12, borderTopWidth: 2, borderTopColor: c.ink, paddingTop: 20 }}>
      <T style={{ fontFamily: fonts.displayBold, fontSize: 40, lineHeight: 44, color: c.tomato, fontVariant: ["tabular-nums"] }}>{n}</T>
      <Display size={26}>{title}</Display>
      <T tone="muted" style={{ fontSize: 16, lineHeight: 25 }}>{body}</T>
    </View>
  );
}
