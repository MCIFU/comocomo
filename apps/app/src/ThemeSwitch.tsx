import { Platform, Pressable, View } from "react-native";
import { actions, useStore, type ThemePref } from "./lib/store";
import { fonts, usePalette } from "./theme";
import { T } from "./ui";

const OPTIONS: { key: ThemePref; label: string; a11y: string }[] = [
  { key: "system", label: "Auto", a11y: "Tema automático, igual que el sistema" },
  { key: "light", label: "☀", a11y: "Tema claro" },
  { key: "dark", label: "☾", a11y: "Tema oscuro" },
];

/** Selector de tema: Auto (sigue al sistema), claro u oscuro. Se recuerda entre visitas. */
export function ThemeSwitch() {
  const c = usePalette();
  const pref = useStore((s) => s.theme);
  return (
    <View accessibilityRole="radiogroup" accessibilityLabel="Tema" style={{ flexDirection: "row", borderWidth: 2.5, borderColor: c.ink, borderRadius: 999, padding: 2, gap: 2, backgroundColor: c.card }}>
      {OPTIONS.map((o) => {
        const on = pref === o.key;
        return (
          <Pressable
            key={o.key}
            accessibilityRole="radio"
            accessibilityState={{ checked: on }}
            accessibilityLabel={o.a11y}
            onPress={() => actions.setTheme(o.key)}
            style={[
              { minWidth: 36, height: 30, paddingHorizontal: 10, borderRadius: 999, alignItems: "center", justifyContent: "center", backgroundColor: on ? c.ink : "transparent" },
              Platform.OS === "web" ? ({ cursor: "pointer" } as object) : null,
            ]}
          >
            <T style={{ color: on ? c.paper : c.ink, fontFamily: fonts.uiBold, fontSize: 14, lineHeight: 18 }}>{o.label}</T>
          </Pressable>
        );
      })}
    </View>
  );
}
