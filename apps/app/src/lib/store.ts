import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSyncExternalStore } from "react";

/** Estado local persistido. Se sustituirá por Supabase (misma forma de datos) al llegar la cuenta. */
export interface State {
  favorites: string[];
  /** recetas añadidas a la lista de la compra, con las personas elegidas */
  cart: { recipeId: string; servings: number }[];
  /** ids de ingrediente marcados como cogidos */
  checked: string[];
  /** número de personas habitual: se recuerda entre visitas */
  servings: number;
  hydrated: boolean;
}

const KEY = "comocomo:v2";
let state: State = { favorites: [], cart: [], checked: [], servings: 4, hydrated: false };
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function persist() {
  const { hydrated: _h, ...rest } = state;
  AsyncStorage.setItem(KEY, JSON.stringify(rest)).catch(() => {});
}

export function set(patch: Partial<State>) {
  state = { ...state, ...patch };
  emit();
  persist();
}

AsyncStorage.getItem(KEY)
  .then((raw) => {
    if (raw) {
      try {
        const saved = JSON.parse(raw) as Partial<State>;
        state = {
          ...state,
          favorites: saved.favorites ?? [],
          cart: saved.cart ?? [],
          checked: saved.checked ?? [],
          servings: saved.servings ?? 4,
        };
      } catch {
        /* datos corruptos: se ignoran */
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
  clearCart() {
    set({ cart: [], checked: [] });
  },
};
