import { parseDishIntent, parseQuery, recommend } from "@comocomo/core";
import { useRouter } from "expo-router";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Pressable, TextInput, useWindowDimensions, View } from "react-native";
import { Wordmark } from "../../src/Logo";
import { Screen } from "../../src/Screen";
import { ResultRow } from "../../src/ResultRow";
import { catalog, dishes, ingredients, prices, recipeById, recipes, shortName } from "../../src/lib/data";
import { ALLERGY_OPTIONS, CUISINE_LABEL, EQUIPMENT_OPTIONS } from "../../src/lib/labels";
import { actions, useStore } from "../../src/lib/store";
import { fonts, radius, usePalette } from "../../src/theme";
import { Chip, Display, Empty, Label, Stepper, T } from "../../src/ui";

const TIMES = [{ l: "15 min", v: 15 }, { l: "30 min", v: 30 }, { l: "45 min", v: 45 }, { l: "1 h", v: 60 }];
const BUDGETS = [5, 10, 15, 25];
// El placeholder rota entre ejemplos reales: enseña qué se puede escribir sin un tutorial.
const EXAMPLES = [
  "Tengo pollo, arroz y tomate. Sin cebolla.",
  "Quiero hacer tacos.",
  "Algo japonés con pollo.",
  "Huevos, patatas y queso.",
  "Me apetece una fabada.",
];

function useRotatingIndex(n: number, active: boolean) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 3800);
    return () => clearInterval(t);
  }, [n, active]);
  return i;
}

export default function Cocinar() {
  const c = usePalette();
  const router = useRouter();
  const wide = useWindowDimensions().width >= 1024;
  const [text, setText] = useState("");
  // Lo que el usuario quita de "lo que he entendido" (por si el texto se interpretó mal)
  const [dropped, setDropped] = useState<string[]>([]);
  const [servings, setServings] = useState<number | null>(null);
  const [budget, setBudget] = useState<number | null | "none">(null);
  const [time, setTime] = useState<number | null | "none">(null);
  const [equipment, setEquipment] = useState<string[] | null>(null);
  const [open, setOpen] = useState(false);
  const allergies = useStore((s) => s.allergies);
  const pantry = useStore((s) => s.pantry);

  const deferred = useDeferredValue(text);
  const ex = useRotatingIndex(EXAMPLES.length, text.length === 0);
  const parsed = useMemo(() => parseQuery(deferred, ingredients), [deferred]);
  const intent = useMemo(() => parseDishIntent(deferred, dishes), [deferred]);

  const keep = (key: string) => !dropped.includes(key);
  const have = parsed.have.filter((id) => keep(`have:${id}`));
  const dislikes = parsed.dislikes.filter((id) => keep(`no:${id}`));
  const askedDishes = intent.recipeIds.filter((id) => keep(`dish:${id}`));
  const askedCuisines = intent.cuisines.filter((id) => keep(`cuisine:${id}`));
  const eff = {
    servings: servings ?? parsed.servings ?? 2,
    budget: budget === "none" ? undefined : budget ?? parsed.budget,
    maxMinutes: time === "none" ? undefined : time ?? parsed.maxMinutes,
    equipment: equipment ?? parsed.equipment,
  };
  const activeAllergies = [...new Set([...allergies, ...parsed.allergies])];

  const results = useMemo(
    () =>
      recommend(recipes, catalog, prices, {
        have: new Set(have),
        pantry: new Set(pantry),
        restrictions: [
          ...activeAllergies.map((value) => ({ kind: "allergy" as const, value })),
          ...dislikes.map((value) => ({ kind: "dislike" as const, value })),
        ],
        servings: eff.servings,
        budget: eff.budget,
        maxMinutes: eff.maxMinutes,
        // sartén y olla se dan por supuestas si el usuario concreta su equipo
        equipment: eff.equipment.length ? new Set([...eff.equipment, "sarten", "olla"]) : undefined,
        cuisines: askedCuisines,
        dishes: askedDishes,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [have.join(), pantry.join(), dislikes.join(), activeAllergies.join(), askedDishes.join(), askedCuisines.join(), eff.servings, eff.budget, eff.maxMinutes, eff.equipment.join()],
  );

  // Resumen de lo que se ha entendido del texto: cada cosa se puede quitar si se interpretó mal.
  const understood = [
    ...askedDishes.map((id) => ({ key: `dish:${id}`, label: recipeById.get(id)?.title ?? id, kind: "Plato" })),
    ...askedCuisines.map((id) => ({ key: `cuisine:${id}`, label: `Cocina ${CUISINE_LABEL[id]?.toLowerCase() ?? id}`, kind: "Cocina" })),
    ...have.map((id) => ({ key: `have:${id}`, label: shortName(id), kind: "Tienes" })),
    ...dislikes.map((id) => ({ key: `no:${id}`, label: `Sin ${shortName(id).toLowerCase()}`, kind: "Sin" })),
  ];

  const toggleEquip = (v: string) => {
    const cur = equipment ?? eff.equipment;
    setEquipment(cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]);
  };
  const toggleAllergy = (v: string) => actions.setAllergies(allergies.includes(v) ? allergies.filter((x) => x !== v) : [...allergies, v]);
  const activeFilters = activeAllergies.length + eff.equipment.length + (eff.maxMinutes !== undefined ? 1 : 0);
  const hasInput = text.trim().length > 0;

  return (
    <Screen wide={wide}>
      <View style={wide ? { flexDirection: "row", gap: 56, alignItems: "flex-start" } : { gap: 22 }}>
        <View style={(wide ? { width: 420, gap: 24, position: "sticky", top: 24 } : { gap: 22 }) as object}>
          <View style={{ gap: 14 }}>
            {!wide && <Wordmark size={22} />}
            <Display size={wide ? 52 : 40} style={{ letterSpacing: wide ? -1.4 : -0.8 }}>
              ¿Qué cocinamos hoy<T style={{ color: c.tomato, fontFamily: fonts.display, fontSize: wide ? 52 : 40, lineHeight: (wide ? 52 : 40) * 1.15 }}>?</T>
            </Display>
          </View>

          <View style={{ gap: 10 }}>
            <TextInput
              value={text}
              onChangeText={(v) => {
                setText(v);
                if (!v.trim()) setDropped([]);
              }}
              multiline
              placeholder={EXAMPLES[ex]}
              placeholderTextColor={c.inkMuted}
              accessibilityLabel="Escribe lo que tienes en casa o el plato que te apetece"
              style={{
                minHeight: wide ? 112 : 96, color: c.ink, fontFamily: fonts.ui, fontSize: 18, lineHeight: 26, padding: 16,
                borderWidth: 1.5, borderColor: c.ink, borderRadius: radius.md, textAlignVertical: "top", outlineStyle: "none",
              } as object}
            />
            <T tone="muted" style={{ fontSize: 14, lineHeight: 20 }}>
              Escribe lo que tienes en casa, o el plato que te apetece.
            </T>
            {understood.length > 0 && (
              <View style={{ gap: 8 }} accessibilityLiveRegion="polite">
                <Label>Lo que he entendido</Label>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                  {understood.map((u) => (
                    <Chip key={u.key} label={u.label} selected={u.kind !== "Sin"} onRemove={() => setDropped((d) => [...d, u.key])} />
                  ))}
                </View>
              </View>
            )}
          </View>

          <View style={{ gap: 16 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Label>Personas</Label>
              <Stepper label="personas" value={eff.servings} onChange={setServings} max={20} />
            </View>

            <View style={{ gap: 8 }}>
              <Label>¿Cuánto quieres gastar en la compra?</Label>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                <Chip label="Sin límite" selected={eff.budget === undefined} onPress={() => setBudget("none")} />
                {BUDGETS.map((b) => <Chip key={b} label={`${b} €`} selected={eff.budget === b} onPress={() => setBudget(b)} />)}
                {eff.budget !== undefined && !BUDGETS.includes(eff.budget) && <Chip label={`${eff.budget} €`} selected onPress={() => setBudget("none")} />}
              </View>
              <T tone="muted" style={{ fontSize: 13, lineHeight: 19 }}>
                Contamos lo que pagarías en el súper con envases completos: si la receta pide 550 g de tomate, son 2 botes.
              </T>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityState={{ expanded: open }}
              onPress={() => setOpen((o) => !o)}
              style={({ pressed }) => ({ flexDirection: "row", alignItems: "center", gap: 8, minHeight: 44, opacity: pressed ? 0.6 : 1 })}
            >
              <T style={{ fontFamily: fonts.uiBold, textDecorationLine: "underline" }}>{open ? "Ocultar ajustes" : "Afinar: tiempo, equipo y alergias"}</T>
              {!open && activeFilters > 0 && <T tone="tomato" style={{ fontFamily: fonts.uiBold }}>· {activeFilters} activo{activeFilters > 1 ? "s" : ""}</T>}
            </Pressable>
            {!open && activeAllergies.length > 0 && (
              <T tone="olive" style={{ fontSize: 14, lineHeight: 20, fontFamily: fonts.uiMedium }}>
                Evitando: {activeAllergies.map((v) => ALLERGY_OPTIONS.find((a) => a.value === v)?.label ?? v).join(", ")}
              </T>
            )}
            {open && (
              <>
                <Row label="Tiempo máximo">
                  {TIMES.map((t) => <Chip key={t.v} label={t.l} selected={eff.maxMinutes === t.v} onPress={() => setTime(eff.maxMinutes === t.v ? "none" : t.v)} />)}
                </Row>
                <Row label="Tengo en la cocina">
                  {EQUIPMENT_OPTIONS.map((e) => <Chip key={e.value} label={e.label} selected={eff.equipment.includes(e.value)} onPress={() => toggleEquip(e.value)} />)}
                </Row>
                <Row label="Alergias e intolerancias">
                  {ALLERGY_OPTIONS.map((a) => (
                    <Chip key={a.value} label={a.label} selected={activeAllergies.includes(a.value)} onPress={() => toggleAllergy(a.value)} />
                  ))}
                </Row>
              </>
            )}
          </View>
        </View>

        <View style={{ flex: 1, gap: 4 }}>
          <Label tone="ink">
            {askedDishes.length ? "Lo que buscas y más ideas" : hasInput ? `${results.length} ${results.length === 1 ? "opción" : "opciones"}` : "Para empezar: rápido y barato"}
          </Label>
          {results.length === 0 ? (
            <Empty title="Nada encaja todavía" body="Prueba a subir el presupuesto, quitar un límite de tiempo o escribir algún ingrediente más." />
          ) : (
            results.slice(0, 12).map((rec, idx) => (
              <ResultRow
                key={rec.baseId}
                rec={rec}
                index={idx}
                onPress={() => router.push({ pathname: "/receta/[id]", params: { id: rec.baseId, s: String(eff.servings), h: have.join(",") } })}
              />
            ))
          )}
          <T tone="muted" style={{ fontSize: 12, lineHeight: 17, marginTop: 8 }}>
            Precios estimados de supermercado en España, no de una tienda concreta. Lo que tienes en tu despensa no se suma a la compra. Si tienes alergias, revisa siempre las etiquetas: COMOCOMO no sustituye el consejo médico.
          </T>
        </View>
      </View>
    </Screen>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: 8 }}>
      <Label>{label}</Label>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>{children}</View>
    </View>
  );
}
