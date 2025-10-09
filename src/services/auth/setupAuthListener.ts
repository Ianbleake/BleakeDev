import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { fetchUserProfile } from '@/services/profile/fetchUserProfile';

export function setupAuthListener() {

  const { setAuth, clearAuth } = useAuthStore.getState();

  const { data: { subscription } } = supabaseBrowser.auth.onAuthStateChange(
    async (event, session) => {
      console.log('Auth state changed:', event);

      if (event === 'SIGNED_IN' && session) {
        const profile = await fetchUserProfile(session.user.id);
        setAuth(session.user, session, profile);
      } else if (event === 'SIGNED_OUT') {
        clearAuth();
      } else if (event === 'TOKEN_REFRESHED' && session) {
        const profile = await fetchUserProfile(session.user.id);
        setAuth(session.user, session, profile);
      } else if (event === 'USER_UPDATED' && session) {
        const profile = await fetchUserProfile(session.user.id);
        setAuth(session.user, session, profile);
      }
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}