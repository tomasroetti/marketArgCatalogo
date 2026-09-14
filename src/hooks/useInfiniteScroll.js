import { useEffect, useRef } from "react";

/**
 * Ejecuta `onIntersect` cuando el elemento observado entra en pantalla.
 * Se usa para disparar la carga de más productos al llegar al final del grid.
 */
export function useInfiniteScroll(onIntersect, { enabled = true } = {}) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [onIntersect, enabled]);

  return sentinelRef;
}
