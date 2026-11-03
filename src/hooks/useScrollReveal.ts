import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class when they
 * scroll into view. Returns a ref to attach to the scroll container (optional).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = ref.current ?? document;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? '0';
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    nodes.forEach((n) => observer.observe(n));
    setReady(true);
    return () => observer.disconnect();
  }, []);

  return { ref, ready };
}
