'use client';

import { initializeAuth } from '@/services/auth/initializeAuth';
import { setupAuthListener } from '@/services/auth/setupAuthListener';
import { useEffect } from 'react';


export function AuthProvider({ children }: { children: React.ReactNode }) {

  useEffect(() => {

    initializeAuth();

    const unsubscribe = setupAuthListener();

    return () => {
      unsubscribe();
    };
  }, []);

  return <>{children}</>;
}