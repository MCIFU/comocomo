export const DIFFICULTY: Record<string, string> = { easy: "Fácil", medium: "Media", hard: "Difícil" };

/** Alergias/intolerancias que se pueden fijar desde la app. value = alérgeno del catálogo. */
export const ALLERGY_OPTIONS = [
  { value: "gluten", label: "Gluten" },
  { value: "lactose", label: "Lactosa" },
  { value: "egg", label: "Huevo" },
  { value: "shellfish", label: "Marisco" },
  { value: "fish", label: "Pescado" },
  { value: "nuts", label: "Frutos secos" },
  { value: "soy", label: "Soja" },
  { value: "peanut", label: "Cacahuete" },
  { value: "sesame", label: "Sésamo" },
  { value: "mollusc", label: "Moluscos" },
  { value: "sulfites", label: "Sulfitos" },
] as const;

export const EQUIPMENT_OPTIONS = [
  { value: "horno", label: "Horno" },
  { value: "airfryer", label: "Air fryer" },
  { value: "microondas", label: "Microondas" },
  { value: "batidora", label: "Batidora" },
] as const;

export const QUICK_INGREDIENTS = ["pollo", "arroz", "huevo", "patata", "pasta", "tomate", "queso", "lentejas"];

