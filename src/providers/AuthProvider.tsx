'use client';

import { initializeAuth } from '@/services/auth/initializeAuth';
import { setupAuthListener } from '@/services/auth/setupAuthListener';
import { useEffect } from 'react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeAuth();               // Hidrata sesión + perfil
    const unsubscribe = setupAuthListener(); // Escucha cambios en tiempo real
    return () => unsubscribe();
  }, []);

  return <>{children}</>;
}
