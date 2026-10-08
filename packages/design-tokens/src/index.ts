/** Fuente única de verdad visual. Valores iniciales, validados por contraste en tokens.test.ts */
export const light = {
  paper: "#FBF6EE",
  crust: "#F1E6D4",
  ink: "#1F1A17",
  inkMuted: "#6B5F56",
  tomato: "#C23A24",
  onTomato: "#FFFFFF",
  olive: "#4F6B3A",
  saffron: "#8A5A00",
  plum: "#5B2E4A",
  line: "#E0D3BE",
} as const;

export const dark = {
  paper: "#171311",
  crust: "#241E1A",
  ink: "#F5EDE0",
  inkMuted: "#B3A698",
  tomato: "#F0735C",
  onTomato: "#1A0D09",
  olive: "#A3C487",
  saffron: "#F0BE5A",
  plum: "#D8A6C4",
  line: "#3A312B",
} as const;

export const space = [0, 4, 8, 12, 16, 24, 32, 48, 64] as const;
export const radius = { sm: 6, md: 10, lg: 16 } as const;
export const control = { height: 48 } as const;
export const motion = { fast: 120, base: 200, easing: "cubic-bezier(0.2, 0, 0, 1)" } as const;
export const font = {
  display: "Fraunces",
  ui: "Instrument Sans",
} as const;
