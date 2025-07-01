// src/hooks/useIntersectionObserver.ts (CORRECTED)
import { useRef, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const useIntersectionObserver = <T extends HTMLElement = HTMLElement>({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: Args): [React.RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);

      if (freezeOnceVisible && entry.isIntersecting) {
        observer.disconnect();
      }
    }, {
      threshold,
      root,
      rootMargin,
    });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver; // ENSURE THIS IS `export default`