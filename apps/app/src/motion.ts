import { useEffect, useRef, useState } from "react";
import { AccessibilityInfo, Animated, Easing } from "react-native";
import { motion } from "@comocomo/design-tokens";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduced).catch(() => {});
    const sub = AccessibilityInfo.addEventListener("reduceMotionChanged", setReduced);
    return () => sub.remove();
  }, []);
  return reduced;
}

export const EASE = Easing.bezier(0.2, 0, 0, 1);

/** Entrada escalonada (opacidad + desplazamiento corto). Sin movimiento si el sistema lo pide. */
export function useEnter(index = 0, key?: unknown) {
  const reduced = useReducedMotion();
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (reduced) {
      v.setValue(1);
      return;
    }
    v.setValue(0);
    const a = Animated.timing(v, { toValue: 1, duration: 320, delay: Math.min(index, 8) * 45, easing: EASE, useNativeDriver: true });
    a.start();
    return () => a.stop();
  }, [reduced, index, key, v]);
  return {
    opacity: v,
    transform: [{ translateY: v.interpolate({ inputRange: [0, 1], outputRange: [10, 0] }) }],
  };
}

export const DURATION = motion;
