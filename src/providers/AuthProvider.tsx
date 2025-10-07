'use client';

import { initializeAuth, setupAuthListener } from '@/utils/auth-helpers';
import { useEffect } from 'react';


export function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializar auth al montar
    initializeAuth();

    // Configurar listener para cambios de auth
    const unsubscribe = setupAuthListener();

    // Cleanup al desmontar
    return () => {
      unsubscribe();
    };
  }, []);

  return <>{children}</>;
}