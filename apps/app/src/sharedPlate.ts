import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, type View } from "react-native";
import { EASE, useReducedMotion } from "./motion";

/**
 * Transición compartida del plato (técnica FLIP) entre la lista y la receta:
 * el origen guarda dónde estaba el plato; el destino, al montarse, arranca en esa
 * posición/escala y se anima hasta la suya. Funciona igual en web y en Android.
 */
type Rect = { x: number; y: number; size: number };
let pending: { id: string; rect: Rect; at: number } | null = null;

export function rememberPlate(id: string, node: View | null, then: () => void) {
  if (!node) return then();
  node.measureInWindow((x, y, w) => {
    pending = { id, rect: { x, y, size: w }, at: Date.now() };
    then();
  });
}

type From = { dx: number; dy: number; s: number };

export function useSharedPlate(id: string) {
  const reduced = useReducedMotion();
  const ref = useRef<View>(null);
  // Sin pestaña visible (p. ej. abierta en segundo plano) no hay nada que animar: se muestra directamente.
  const hidden = typeof document !== "undefined" && document.hidden;
  const [src] = useState(() => (!hidden && pending && pending.id === id && Date.now() - pending.at < 1500 ? pending.rect : null));
  const [from, setFrom] = useState<From | null>(null);
  // Si venimos de la lista, el destino espera invisible hasta medirse (sin parpadeo).
  const [waiting, setWaiting] = useState(!!src);
  const t = useRef(new Animated.Value(0)).current;

  const measured = useRef(false);
  const onLayout = useCallback(() => {
    if (!src || measured.current || !ref.current?.measureInWindow) return;
    measured.current = true;
    pending = null;
    ref.current.measureInWindow((x, y, w) => {
      if (reduced || !w) return setWaiting(false);
      setFrom({ dx: src.x + src.size / 2 - (x + w / 2), dy: src.y + src.size / 2 - (y + w / 2), s: src.size / w });
    });
  }, [src, reduced]);

  // Por si el layout no llega (o llega antes que la ref): medir tras el montaje y,
  // pase lo que pase, nunca dejar el plato oculto más de 600 ms.
  useEffect(() => {
    if (!src) return;
    const m = setTimeout(onLayout, 16);
    const fail = setTimeout(() => setWaiting(false), 600);
    return () => {
      clearTimeout(m);
      clearTimeout(fail);
    };
  }, [src, onLayout]);

  useEffect(() => {
    if (!from) return;
    setWaiting(false);
    t.setValue(0);
    const a = Animated.timing(t, { toValue: 1, duration: 480, easing: EASE, useNativeDriver: true });
    a.start();
    return () => a.stop();
  }, [from, t]);

  const style = from
    ? {
        transform: [
          { translateX: t.interpolate({ inputRange: [0, 1], outputRange: [from.dx, 0] }) },
          { translateY: t.interpolate({ inputRange: [0, 1], outputRange: [from.dy, 0] }) },
          { scale: t.interpolate({ inputRange: [0, 1], outputRange: [from.s, 1] }) },
        ],
      }
    : { opacity: waiting ? 0 : 1 };
  return { ref, onLayout, style, animating: !!from };
}
