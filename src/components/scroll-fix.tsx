'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined') {
      console.log('ScrollFix ejecutándose...');
      
      // Solución más agresiva para móviles
      const preventScroll = () => {
        // 1. Eliminar hash de la URL sin hacer scroll
        if (window.location.hash) {
          const urlWithoutHash = window.location.href.split('#')[0];
          window.history.replaceState(null, '', urlWithoutHash);
          console.log('Hash eliminado:', window.location.hash);
        }
        
        // 2. Scroll forzado múltiple
        window.scrollTo(0, 0);
        setTimeout(() => window.scrollTo(0, 0), 100);
        setTimeout(() => window.scrollTo(0, 0), 500);
        
        // 3. También forzar en elementos específicos
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      // Ejecutar inmediatamente
      preventScroll();
      
      // Y en eventos de carga por si acaso
      window.addEventListener('load', preventScroll);
      document.addEventListener('DOMContentLoaded', preventScroll);
      
      // Cleanup
      return () => {
        window.removeEventListener('load', preventScroll);
        document.removeEventListener('DOMContentLoaded', preventScroll);
      };
    }
  }, [pathname]);

  return null;
}