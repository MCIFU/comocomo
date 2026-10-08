import { formatMoneyRange, parseQuery, recommend } from "@comocomo/core";
import { useRouter } from "expo-router";
import { useDeferredValue, useMemo, useState } from "react";
import { Pressable, TextInput, useWindowDimensions, View } from "react-native";
import { Wordmark } from "../../src/Logo";
import { Screen } from "../../src/Screen";
import { ResultRow } from "../../src/ResultRow";
import { catalog, ingredients, prices, recipes, shortName } from "../../src/lib/data";
import { ALLERGY_OPTIONS, EQUIPMENT_OPTIONS, QUICK_INGREDIENTS } from "../../src/lib/labels";
import { actions, useStore } from "../../src/lib/store";
import { fonts, radius, usePalette } from "../../src/theme";
import { Chip, Display, Empty, Label, Stepper, T } from "../../src/ui";

const TIMES = [{ l: "15 min", v: 15 }, { l: "30 min", v: 30 }, { l: "45 min", v: 45 }, { l: "1 h", v: 60 }];
const BUDGETS = [5, 10, 15, 25];

export default function Cocinar() {
  const c = usePalette();
  const router = useRouter();
  const [text, setText] = useState("");
  const [removed, setRemoved] = useState<string[]>([]);
  const [extra, setExtra] = useState<string[]>([]);
  const [servings, setServings] = useState<number | null>(null);
  const [budget, setBudget] = useState<number | null | "none">(null);
  const [time, setTime] = useState<number | null | "none">(null);
  const [equipment, setEquipment] = useState<string[] | null>(null);
  const [open, setOpen] = useState(false);
  const allergies = useStore((s) => s.allergies);

  const deferred = useDeferredValue(text);
  const parsed = useMemo(() => parseQuery(deferred, ingredients), [deferred]);

  const have = [...new Set([...parsed.have, ...extra])].filter((id) => !removed.includes(id));
  const eff = {
    servings: servings ?? parsed.servings ?? 2,
    budget: budget === "none" ? undefined : budget ?? parsed.budget,
    maxMinutes: time === "none" ? undefined : time ?? parsed.maxMinutes,
    equipment: equipment ?? parsed.equipment,
  };
  const restrictions = useMemo(
    () => [
      ...[...new Set([...allergies, ...parsed.allergies])].map((value) => ({ kind: "allergy" as const, value })),
      ...parsed.dislikes.map((value) => ({ kind: "dislike" as const, value })),
    ],
    [allergies, parsed],
  );

  const results = useMemo(
    () =>
      recommend(recipes, catalog, prices, {
        have: new Set(have),
        restrictions,
        servings: eff.servings,
        budget: eff.budget,
        maxMinutes: eff.maxMinutes,
        // sartén y olla se dan por supuestas si el usuario concreta su equipo
        equipment: eff.equipment.length ? new Set([...eff.equipment, "sarten", "olla"]) : undefined,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [have.join(), restrictions, eff.servings, eff.budget, eff.maxMinutes, eff.equipment.join()],
  );

  const toggleHave = (id: string) => {
    if (have.includes(id)) {
      setExtra((e) => e.filter((x) => x !== id));
      setRemoved((r) => [...r, id]);
    } else {
      setRemoved((r) => r.filter((x) => x !== id));
      setExtra((e) => [...e, id]);
    }
  };
  const toggleEquip = (v: string) => setEquipment((cur) => ((cur ?? eff.equipment).includes(v) ? (cur ?? eff.equipment).filter((x) => x !== v) : [...(cur ?? eff.equipment), v]));
  const toggleAllergy = (v: string) => {
    const a = toggled(allergies, v);
    actions.setAllergies(a);
  };

  const wide = useWindowDimensions().width >= 1024;
  const activeAllergies = [...new Set([...allergies, ...parsed.allergies])];
  const activeFilters = activeAllergies.length + eff.equipment.length + (eff.maxMinutes !== undefined ? 1 : 0);
  const hasInput = have.length > 0 || text.trim().length > 0;

  return (
    <Screen wide={wide}>
      <View style={wide ? { flexDirection: "row", gap: 56, alignItems: "flex-start" } : { gap: 20 }}>
      <View style={(wide ? { width: 380, gap: 20, position: "sticky", top: 20 } : { gap: 20 }) as object}>
      <View style={{ gap: 14 }}>
        <Wordmark size={wide ? 26 : 22} />
        <Display size={36}>¿Qué cocinamos hoy?</Display>
      </View>

      <View style={{ gap: 8 }}>
        <TextInput
          value={text}
          onChangeText={setText}
          multiline
          placeholder="Tengo pollo, arroz y 8 €. Somos 3, sin cebolla."
          placeholderTextColor={c.inkMuted}
          accessibilityLabel="Cuéntame qué tienes, cuántos sois y cuánto quieres gastar"
          style={{
            minHeight: 96, color: c.ink, fontFamily: fonts.ui, fontSize: 18, lineHeight: 26, padding: 16,
            borderWidth: 1.5, borderColor: c.ink, borderRadius: radius.md, textAlignVertical: "top",
            outlineStyle: "none",
          } as object}
        />
        <T tone="muted" style={{ fontSize: 14, lineHeight: 20 }}>
          Escribe como hablas. Los resultados se actualizan solos.
        </T>
      </View>

      <View style={{ gap: 10 }}>
        <Label>Tengo</Label>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {[...new Set([...have, ...QUICK_INGREDIENTS])].map((id) => (
            <Chip key={id} label={shortName(id)} selected={have.includes(id)} onPress={() => toggleHave(id)} />
          ))}
        </View>
      </View>

      <View style={{ gap: 14 }}>
        <Row label="Personas">
          <Stepper label="personas" value={eff.servings} onChange={setServings} max={20} />
        </Row>
        <Row label="Presupuesto">
          <Wrap>
            {BUDGETS.map((b) => <Chip key={b} label={`${b} €`} selected={eff.budget === b} onPress={() => setBudget(eff.budget === b ? "none" : b)} />)}
            {eff.budget !== undefined && !BUDGETS.includes(eff.budget) && <Chip label={`${eff.budget} €`} selected onPress={() => setBudget("none")} />}
          </Wrap>
        </Row>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ expanded: open }}
          onPress={() => setOpen((o) => !o)}
          style={({ pressed }) => ({ flexDirection: "row", alignItems: "center", gap: 8, minHeight: 44, opacity: pressed ? 0.6 : 1 })}
        >
          <T style={{ fontFamily: fonts.uiBold, textDecorationLine: "underline" }}>
            {open ? "Ocultar ajustes" : "Afinar: tiempo, equipo y alergias"}
          </T>
          {!open && activeFilters > 0 && <T tone="tomato" style={{ fontFamily: fonts.uiBold }}>· {activeFilters} activo{activeFilters > 1 ? "s" : ""}</T>}
        </Pressable>
        {!open && activeAllergies.length > 0 && (
          <T tone="olive" style={{ fontSize: 14, lineHeight: 20, fontFamily: fonts.uiMedium }}>
            Evitando: {activeAllergies.map((v) => ALLERGY_OPTIONS.find((a) => a.value === v)?.label ?? v).join(", ")}
          </T>
        )}
        {open && <>
        <Row label="Tiempo">
          <Wrap>
            {TIMES.map((t) => <Chip key={t.v} label={t.l} selected={eff.maxMinutes === t.v} onPress={() => setTime(eff.maxMinutes === t.v ? "none" : t.v)} />)}
          </Wrap>
        </Row>
        <Row label="Equipo">
          <Wrap>
            {EQUIPMENT_OPTIONS.map((e) => <Chip key={e.value} label={e.label} selected={eff.equipment.includes(e.value)} onPress={() => toggleEquip(e.value)} />)}
          </Wrap>
        </Row>
        <Row label="Alergias">
          <Wrap>
            {ALLERGY_OPTIONS.map((a) => (
              <Chip
                key={a.value}
                label={a.label}
                selected={allergies.includes(a.value) || parsed.allergies.includes(a.value)}
                onPress={() => toggleAllergy(a.value)}
              />
            ))}
          </Wrap>
        </Row>
        </>}
      </View>
      </View>

      <View style={{ flex: 1, gap: 4 }}>
        <Label tone="ink">{hasInput ? `${results.length} ${results.length === 1 ? "opción" : "opciones"}` : "Ideas para empezar"}</Label>
        {results.length === 0 ? (
          <Empty
            title="Nada encaja todavía"
            body="Prueba a subir el presupuesto, quitar un límite de tiempo o añadir algún ingrediente más."
          />
        ) : (
          results.slice(0, 12).map((rec) => (
            <ResultRow
              key={rec.baseId}
              rec={rec}
              onPress={() => router.push({ pathname: "/receta/[id]", params: { id: rec.baseId, s: String(eff.servings), h: have.join(",") } })}
            />
          ))
        )}
        <T tone="muted" style={{ fontSize: 12, lineHeight: 17, marginTop: 8 }}>
          Los precios son estimaciones orientativas, no precios de tienda. Si tienes alergias, revisa siempre las etiquetas: COMOCOMO no sustituye el consejo médico.
          {eff.budget !== undefined ? ` Presupuesto: ${formatMoneyRange(eff.budget, eff.budget)}.` : ""}
        </T>
      </View>
      </View>
    </Screen>
  );
}

function toggled(current: string[], v: string) {
  return current.includes(v) ? current.filter((x) => x !== v) : [...current, v];
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: 8 }}>
      <Label>{label}</Label>
      {children}
    </View>
  );
}
const Wrap = ({ children }: { children: React.ReactNode }) => <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>{children}</View>;
