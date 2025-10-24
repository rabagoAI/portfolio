'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Prevenir scroll automático a anclas en la carga inicial
    if (window.location.hash) {
      // Reemplazar la URL sin el hash pero sin hacer scroll
      const newUrl = window.location.pathname + window.location.search;
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    }

    // Scroll suave al top en cada cambio de ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    // Scroll al top en la carga inicial
    window.scrollTo(0, 0);
  }, []);

  return null;
}