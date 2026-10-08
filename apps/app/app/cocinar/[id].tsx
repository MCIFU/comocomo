import { formatClock, formatMinutes, scaleRecipe } from "@comocomo/core";
import { useKeepAwake } from "expo-keep-awake";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Platform, Pressable, ScrollView, Vibration, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { recipeById, shortName } from "../../src/lib/data";
import { actions } from "../../src/lib/store";
import { fonts, MAX_WIDTH, usePalette } from "../../src/theme";
import { Button, Display, Label, T } from "../../src/ui";

/** Temporizador basado en fecha de fin (no en contar ticks) para no desfasarse si la pestaña duerme. */
interface Timer { endsAt: number | null; remainingMs: number; done: boolean }

export default function Cocinando() {
  useKeepAwake();
  const c = usePalette();
  const router = useRouter();
  const { id, s } = useLocalSearchParams<{ id: string; s?: string }>();
  const base = recipeById.get(String(id));
  const recipe = useMemo(() => (base ? scaleRecipe(base, Math.min(20, Math.max(1, Number(s) || base.baseServings))) : null), [base, s]);
  const [i, setI] = useState(0);
  const [doneSteps, setDoneSteps] = useState<number[]>([]);
  const [timers, setTimers] = useState<Record<number, Timer>>({});
  const [now, setNow] = useState(Date.now());
  const [showIng, setShowIng] = useState(false);
  const [finished, setFinished] = useState(false);

  // Un único reloj para todos los temporizadores activos
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const expired = Object.entries(timers).filter(([, t]) => t.endsAt !== null && !t.done && t.endsAt <= now);
    if (!expired.length) return;
    setTimers((cur) => {
      const next = { ...cur };
      for (const [k] of expired) next[Number(k)] = { endsAt: null, remainingMs: 0, done: true };
      return next;
    });
    if (Platform.OS !== "web") Vibration.vibrate([0, 400, 200, 400]);
    else if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.([300, 150, 300]);
  }, [now, timers]);

  if (!recipe) return null;
  const step = recipe.steps[i]!;
  const last = i === recipe.steps.length - 1;
  const remaining = (k: number) => {
    const t = timers[k];
    if (!t) return null;
    return t.endsAt !== null ? Math.max(0, t.endsAt - now) : t.remainingMs;
  };
  const start = (k: number, sec: number) => setTimers((cur) => ({ ...cur, [k]: { endsAt: Date.now() + sec * 1000, remainingMs: sec * 1000, done: false } }));
  const pause = (k: number) => setTimers((cur) => { const t = cur[k]!; return { ...cur, [k]: { ...t, endsAt: null, remainingMs: Math.max(0, (t.endsAt ?? 0) - Date.now()) } }; });
  const resume = (k: number) => setTimers((cur) => { const t = cur[k]!; return { ...cur, [k]: { ...t, endsAt: Date.now() + t.remainingMs } }; });
  const reset = (k: number) => setTimers((cur) => { const { [k]: _x, ...rest } = cur; return rest; });

  const goNext = () => {
    setDoneSteps((d) => (d.includes(i) ? d : [...d, i]));
    if (last) setFinished(true);
    else setI(i + 1);
  };

  const running = Object.entries(timers).filter(([k, t]) => Number(k) !== i);
  const t = timers[i];
  const rem = remaining(i);

  if (finished) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: c.paper, alignItems: "center", justifyContent: "center", padding: 24 }}>
        <View style={{ width: "100%", maxWidth: 520, gap: 16 }}>
          <Label tone="olive">Terminado</Label>
          <Display size={40}>¡Buen provecho!</Display>
          <T tone="muted">{recipe.title} · {recipe.baseServings} raciones</T>
          <Button label="Volver a la receta" kind="quiet" onPress={() => router.back()} />
          <Button label="Buscar otra cosa para cocinar" onPress={() => router.replace("/")} />
          <Button label="Guardar receta" kind="quiet" onPress={() => { actions.toggleFavorite(recipe.id); router.replace("/guardadas"); }} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.paper }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40, alignItems: "center", flexGrow: 1 }}>
        <View style={{ width: "100%", maxWidth: MAX_WIDTH, flex: 1, gap: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Button label="✕ Salir" kind="quiet" onPress={() => router.back()} style={{ minHeight: 44, paddingHorizontal: 14 }} />
            <Button label={showIng ? "Ocultar ingredientes" : "Ingredientes"} kind="quiet" onPress={() => setShowIng((v) => !v)} style={{ minHeight: 44, paddingHorizontal: 14 }} />
          </View>

          {showIng && (
            <View style={{ gap: 4, padding: 16, backgroundColor: c.crust, borderRadius: 10 }}>
              {recipe.ingredients.map((ri) => (
                <T key={ri.ingredientId} style={{ fontSize: 16 }}>
                  {shortName(ri.ingredientId)} <T tone="muted">· {Math.round(ri.qty * 10) / 10} {ri.unit === "unit" ? "" : ri.unit}</T>
                </T>
              ))}
            </View>
          )}

          {running.length > 0 && (
            <View style={{ gap: 6 }}>
              {running.map(([k, tm]) => (
                <Pressable key={k} accessibilityRole="button" onPress={() => setI(Number(k))} style={{ flexDirection: "row", justifyContent: "space-between", padding: 12, borderRadius: 10, backgroundColor: tm.done ? c.tomato : c.crust }}>
                  <T style={{ color: tm.done ? c.onTomato : c.ink, fontFamily: fonts.uiBold }}>Paso {Number(k) + 1}{tm.done ? " · ¡Listo!" : ""}</T>
                  <T style={{ color: tm.done ? c.onTomato : c.ink, fontFamily: fonts.uiBold, fontVariant: ["tabular-nums"] }}>{formatClock((remaining(Number(k)) ?? 0) / 1000)}</T>
                </Pressable>
              ))}
            </View>
          )}

          <View style={{ gap: 6 }}>
            <Label tone="tomato">Paso {i + 1} de {recipe.steps.length}</Label>
            <View accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: recipe.steps.length, now: i + 1 }} style={{ flexDirection: "row", gap: 4 }}>
              {recipe.steps.map((_, k) => (
                <View key={k} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: k < i || doneSteps.includes(k) ? c.olive : k === i ? c.ink : c.line }} />
              ))}
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: "center", gap: 18, minHeight: 200 }} accessibilityLiveRegion="polite">
            <Display size={32} style={{ fontFamily: fonts.ui, letterSpacing: 0, lineHeight: 42 }}>{step.text}</Display>
            {(step.tempC || step.durationSec) && (
              <T tone="muted" style={{ fontFamily: fonts.uiBold, fontSize: 20 }}>
                {step.tempC ? `${step.tempC} °C` : ""}{step.tempC && step.durationSec ? " · " : ""}
                {step.durationSec ? formatMinutes(Math.round(step.durationSec / 60)) : ""}
              </T>
            )}
          </View>

          {step.durationSec ? (
            <View style={{ gap: 10 }}>
              {!t && <Button label={`INICIAR TEMPORIZADOR ${formatClock(step.durationSec)}`} onPress={() => start(i, step.durationSec!)} />}
              {t && (
                <View style={{ gap: 10, alignItems: "center" }}>
                  <T accessibilityLiveRegion={t.done ? "assertive" : "none"} style={{ fontFamily: fonts.displayBold, fontSize: 64, lineHeight: 72, fontVariant: ["tabular-nums"], color: t.done ? c.tomato : c.ink }}>
                    {t.done ? "¡Listo!" : formatClock((rem ?? 0) / 1000)}
                  </T>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    {!t.done && (t.endsAt !== null ? <Button label="Pausa" kind="quiet" onPress={() => pause(i)} /> : <Button label="Reanudar" kind="quiet" onPress={() => resume(i)} />)}
                    <Button label={t.done ? "Cerrar aviso" : "Reiniciar"} kind="quiet" onPress={() => reset(i)} />
                  </View>
                </View>
              )}
            </View>
          ) : null}

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Button label="← Anterior" kind="quiet" disabled={i === 0} onPress={() => setI(i - 1)} style={{ flex: 1 }} />
            <Button label={last ? "Terminar" : "Siguiente →"} onPress={goNext} style={{ flex: 2 }} />
          </View>
          <Button label="Repetir este paso" kind="quiet" onPress={() => reset(i)} style={{ minHeight: 44 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
