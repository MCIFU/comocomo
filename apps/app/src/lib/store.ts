import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSyncExternalStore } from "react";

/** Estado local persistido. Se sustituirá por Supabase (misma forma de datos) al llegar la cuenta. */
export interface State {
  favorites: string[];
  /** recetas añadidas a la lista de la compra, con las raciones elegidas */
  cart: { recipeId: string; servings: number }[];
  /** ids de ingrediente marcados como comprados */
  checked: string[];
  dislikes: string[];
  allergies: string[];
  hydrated: boolean;
}

const KEY = "comocomo:v1";
let state: State = { favorites: [], cart: [], checked: [], dislikes: [], allergies: [], hydrated: false };
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
        state = { ...state, ...JSON.parse(raw) };
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

export const getState = () => state;

export const actions = {
  toggleFavorite(id: string) {
    const f = state.favorites;
    set({ favorites: f.includes(id) ? f.filter((x) => x !== id) : [id, ...f] });
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
  setAllergies(allergies: string[]) {
    set({ allergies });
  },
  clearCart() {
    set({ cart: [], checked: [] });
  },
};
