'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  'data-delay'?: string;
}

export function RevealOnScroll({ children, className = '', style, 'data-delay': delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`} style={style} data-delay={delay}>{children}</div>;
}
