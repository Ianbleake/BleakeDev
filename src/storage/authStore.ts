import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Session } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  setProfile: (profile: UserProfile | null) => void;
  setAuth: (user: User | null, session: Session | null, profile: UserProfile | null) => void;
  clearAuth: () => void;
  setIsLoading: (isLoading: boolean) => void;

  isAuthenticated: () => boolean;
  getFullName: () => string | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      session: null,
      profile: null,
      isLoading: true,

      setUser: (user) => set({ user }),
      setSession: (session) => set({ session }),
      setProfile: (profile) => set({ profile }),
      setAuth: (user, session, profile) => set({ user, session, profile, isLoading: false }),
      clearAuth: () => set({ user: null, session: null, profile: null, isLoading: false }),
      setIsLoading: (isLoading) => set({ isLoading }),

      isAuthenticated: () => {
        const state = get();
        return !!state.user && !!state.session;
      },

      getFullName: () => {
        const state = get();
        if (!state.profile) return null;
        return `${state.profile.first_name} ${state.profile.last_name}`.trim();
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ profile: state.profile }), // Persistimos solo el perfil
    }
  )
);
