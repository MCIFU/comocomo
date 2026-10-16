import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSyncExternalStore } from "react";

/** Estado de la app. Los datos de usuario se guardan en su cuenta (servidor de Cómocomo, /api) y en una copia local. */
export type ThemePref = "system" | "light" | "dark";

export interface UserData {
  favorites: string[];
  /** recetas añadidas a la lista de la compra, con las personas elegidas */
  cart: { recipeId: string; servings: number }[];
  /** ids de ingrediente marcados como cogidos */
  checked: string[];
  /** número de personas habitual: se recuerda entre visitas */
  servings: number;
  /** tema elegido: "system" sigue al teléfono u ordenador */
  theme: ThemePref;
}

export interface State extends UserData {
  /** usuario con sesión abierta (null = hay que entrar) */
  user: string | null;
  /** último usuario que entró en este dispositivo, para rellenar el formulario */
  lastUser: string;
  hydrated: boolean;
}

const SESSION_KEY = "comocomo:session";
const cacheKey = (user: string) => `comocomo:data:${user.toLowerCase()}`;
const EMPTY: UserData = { favorites: [], cart: [], checked: [], servings: 4, theme: "system" };

let state: State = { ...EMPTY, user: null, lastUser: "", hydrated: false };
let token = "";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

const userData = (): UserData => ({ favorites: state.favorites, cart: state.cart, checked: state.checked, servings: state.servings, theme: state.theme });

function clean(saved: Partial<UserData> | undefined): UserData {
  return {
    favorites: saved?.favorites ?? [],
    cart: saved?.cart ?? [],
    checked: saved?.checked ?? [],
    servings: saved?.servings ?? 4,
    theme: saved?.theme ?? "system",
  };
}

/* ------------------------------------------------------------------ API */

async function api<T>(method: string, path: string, body?: unknown): Promise<T> {
  const res = await fetch(path, {
    method,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  let json: any = {};
  try { json = await res.json(); } catch { /* respuesta vacía */ }
  if (!res.ok) throw new Error(json.error ?? "No se pudo conectar con el servidor de Cómocomo.");
  return json as T;
}

/** Guarda en la cuenta, agrupando cambios seguidos (medio segundo). */
let saveTimer: ReturnType<typeof setTimeout> | undefined;
function persist() {
  if (!state.user) return;
  AsyncStorage.setItem(cacheKey(state.user), JSON.stringify(userData())).catch(() => {});
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { api("PUT", "/api/data", userData()).catch(() => {}); }, 500);
}

export function set(patch: Partial<UserData>) {
  state = { ...state, ...patch };
  emit();
  persist();
}

async function startSession(user: string, newToken: string, data: Partial<UserData> | undefined, remember: boolean) {
  token = newToken;
  state = { ...state, ...clean(data), user, lastUser: user };
  emit();
  // «Recordarme»: se guarda la sesión (no la contraseña) para entrar directamente la próxima vez.
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(remember ? { user, token } : { lastUser: user })).catch(() => {});
  AsyncStorage.setItem(cacheKey(user), JSON.stringify(userData())).catch(() => {});
}

/* ------------------------------------------------------------------ arranque */

AsyncStorage.getItem(SESSION_KEY)
  .then(async (raw) => {
    const s = raw ? (JSON.parse(raw) as { user?: string; token?: string; lastUser?: string }) : {};
    state = { ...state, lastUser: s.user ?? s.lastUser ?? "" };
    if (!s.user || !s.token) return;
    token = s.token;
    try {
      const me = await api<{ user: string; data: Partial<UserData> }>("GET", "/api/me");
      state = { ...state, ...clean(me.data), user: me.user };
    } catch (e) {
      // Sin conexión: se entra con la copia local; si la sesión caducó, hay que volver a entrar.
      if (String((e as Error).message).includes("Sesión caducada")) {
        token = "";
        await AsyncStorage.setItem(SESSION_KEY, JSON.stringify({ lastUser: s.user })).catch(() => {});
      } else {
        const cached = await AsyncStorage.getItem(cacheKey(s.user)).catch(() => null);
        state = { ...state, ...clean(cached ? JSON.parse(cached) : undefined), user: s.user };
      }
    }
  })
  .catch(() => {})
  .finally(() => {
    state = { ...state, hydrated: true };
    emit();
  });

export function useStore<T>(select: (s: State) => T): T {
  return useSyncExternalStore(
    (cb) => (listeners.add(cb), () => listeners.delete(cb)),
    () => select(state),
    () => select(state),
  );
}

export const auth = {
  async login(user: string, password: string, remember: boolean) {
    const r = await api<{ user: string; token: string; data: Partial<UserData> }>("POST", "/api/login", { user, password });
    await startSession(r.user, r.token, r.data, remember);
  },
  async register(user: string, password: string, remember: boolean) {
    // Lo que se hubiera guardado antes de tener cuenta pasa a la cuenta nueva.
    const r = await api<{ user: string; token: string }>("POST", "/api/register", { user, password });
    const data = userData();
    await startSession(r.user, r.token, data, remember);
    api("PUT", "/api/data", data).catch(() => {});
  },
  async logout() {
    clearTimeout(saveTimer);
    if (state.user) await api("PUT", "/api/data", userData()).catch(() => {});
    api("POST", "/api/logout").catch(() => {});
    token = "";
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify({ lastUser: state.user ?? state.lastUser })).catch(() => {});
    state = { ...state, ...EMPTY, user: null };
    emit();
  },
};

export const actions = {
  toggleFavorite(id: string) {
    const f = state.favorites;
    set({ favorites: f.includes(id) ? f.filter((x) => x !== id) : [id, ...f] });
  },
  setServings(n: number) {
    set({ servings: Math.min(20, Math.max(1, n)) });
  },
  addToCart(recipeId: string, servings: number) {
    set({ cart: [...state.cart.filter((c) => c.recipeId !== recipeId), { recipeId, servings }] });
  },
  removeFromCart(recipeId: string) {
    set({ cart: state.cart.filter((c) => c.recipeId !== recipeId) });
  },
  toggleChecked(ingredientId: string) {
    const c = state.checked;
    set({ checked: c.includes(ingredientId) ? c.filter((x) => x !== ingredientId) : [...c, ingredientId] });
  },
  setTheme(theme: ThemePref) {
    set({ theme });
  },
  clearCart() {
    set({ cart: [], checked: [] });
  },
};
