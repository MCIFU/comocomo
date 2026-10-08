import Svg, { Circle } from "react-native-svg";
import { usePalette } from "./theme";

/** Plato vacío para estados vacíos (lista de la compra, guardadas). */
export function EmptyPlate({ size = 120 }: { size?: number }) {
  const c = usePalette();
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Circle cx={50} cy={50} r={49} fill={c.crust} />
      <Circle cx={50} cy={50} r={41} fill={c.paper} />
      <Circle cx={50} cy={50} r={41} fill="none" stroke={c.line} strokeWidth={1} strokeDasharray="3 4" />
    </Svg>
  );
}
