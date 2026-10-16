import { useState } from "react";
import { Platform, Pressable, ScrollView, TextInput, View } from "react-native";
import { auth, useStore } from "./lib/store";
import { Wordmark } from "./Logo";
import { fonts, radius, stroke, usePalette } from "./theme";
import { Button, Display, Label, Pop, T } from "./ui";

const webCursor = Platform.OS === "web" ? ({ cursor: "pointer" } as object) : null;

/** Pantalla de entrada: iniciar sesión o crear cuenta. Todos los datos se guardan en la cuenta. */
export function LoginScreen() {
  const c = usePalette();
  const lastUser = useStore((s) => s.lastUser);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [user, setUser] = useState(lastUser);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const register = mode === "register";

  async function submit() {
    setError("");
    if (!user.trim() || !password) return setError("Escribe tu usuario y tu contraseña.");
    if (register && password !== password2) return setError("Las dos contraseñas no coinciden.");
    setBusy(true);
    try {
      if (register) await auth.register(user.trim(), password, remember);
      else await auth.login(user.trim(), password, remember);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  const input = {
    minHeight: 52, borderWidth: stroke.width, borderColor: c.edge, borderRadius: radius.md, backgroundColor: c.paper,
    color: c.ink, fontFamily: fonts.ui, fontSize: 17, paddingHorizontal: 14,
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.paper }} contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
      <View style={{ width: "100%", maxWidth: 420, gap: 22 }}>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Wordmark size={30} />
          <T tone="muted" style={{ textAlign: "center" }}>Recetas, lista de la compra y lo que cuestan.</T>
        </View>
        <Pop inner={{ padding: 22, gap: 14 }}>
          <Display size={30}>{register ? "Crear cuenta" : "Entrar"}</Display>
          <View style={{ gap: 6 }}>
            <Label>Usuario</Label>
            <TextInput
              value={user} onChangeText={setUser} autoCapitalize="none" autoCorrect={false}
              autoComplete="username" textContentType="username" accessibilityLabel="Usuario"
              onSubmitEditing={submit} style={input}
            />
          </View>
          <View style={{ gap: 6 }}>
            <Label>Contraseña</Label>
            <TextInput
              value={password} onChangeText={setPassword} secureTextEntry
              autoComplete={register ? "new-password" : "current-password"} textContentType={register ? "newPassword" : "password"}
              accessibilityLabel="Contraseña" onSubmitEditing={submit} style={input}
            />
          </View>
          {register && (
            <View style={{ gap: 6 }}>
              <Label>Repite la contraseña</Label>
              <TextInput
                value={password2} onChangeText={setPassword2} secureTextEntry autoComplete="new-password"
                accessibilityLabel="Repite la contraseña" onSubmitEditing={submit} style={input}
              />
            </View>
          )}
          <Pressable
            accessibilityRole="checkbox" accessibilityState={{ checked: remember }} onPress={() => setRemember(!remember)}
            style={[{ flexDirection: "row", alignItems: "center", gap: 10, minHeight: 40 }, webCursor]}
          >
            <View style={{ width: 24, height: 24, borderRadius: 6, borderWidth: 2.5, borderColor: c.edge, backgroundColor: remember ? c.ink : c.paper, alignItems: "center", justifyContent: "center" }}>
              {remember && <T style={{ color: c.paper, fontFamily: fonts.uiBold, fontSize: 14, lineHeight: 18 }}>✓</T>}
            </View>
            <T>Recordarme en este dispositivo</T>
          </Pressable>
          {!!error && <T accessibilityLiveRegion="polite" tone="tomato" style={{ fontFamily: fonts.uiBold }}>{error}</T>}
          <Button label={busy ? "Un momento…" : register ? "Crear cuenta" : "Entrar"} onPress={submit} disabled={busy} />
        </Pop>
        <Pressable onPress={() => { setMode(register ? "login" : "register"); setError(""); }} style={[{ alignItems: "center", minHeight: 44, justifyContent: "center" }, webCursor]}>
          <T style={{ textDecorationLine: "underline" }}>{register ? "¿Ya tienes cuenta? Entra" : "¿No tienes cuenta? Créala"}</T>
        </Pressable>
      </View>
    </ScrollView>
  );
}

/** Usuario con sesión abierta y botón para salir. */
export function UserChip() {
  const c = usePalette();
  const user = useStore((s) => s.user);
  if (!user) return null;
  return (
    <Pressable
      accessibilityRole="button" accessibilityLabel={`Sesión de ${user}. Salir`} onPress={() => auth.logout()}
      style={({ pressed }) => [{ flexDirection: "row", alignItems: "center", gap: 8, minHeight: 40, paddingHorizontal: 12, borderRadius: 999, borderWidth: 2.5, borderColor: c.edge, backgroundColor: c.card, opacity: pressed ? 0.7 : 1 }, webCursor]}
    >
      <T style={{ fontFamily: fonts.uiBold, fontSize: 14, lineHeight: 20 }}>{user}</T>
      <T tone="muted" style={{ fontSize: 13, lineHeight: 20 }}>· Salir</T>
    </Pressable>
  );
}
