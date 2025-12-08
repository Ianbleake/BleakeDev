import { useAuthStore } from '@/storage/Admin/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { fetchUserProfile } from '@/services/profile/fetchUserProfile';

export function setupAuthListener() {
  const { setAuth, clearAuth } = useAuthStore.getState();

  const { data: { subscription } } = supabaseBrowser.auth.onAuthStateChange(
    async (event, session) => {

      const eventsNeedingProfile = [ 'TOKEN_REFRESHED', 'USER_UPDATED', ];

      if (eventsNeedingProfile.includes(event) && session) {
        const { profile } = useAuthStore.getState();

        const finalProfile = profile || await fetchUserProfile(session.user.id);
        setAuth(session.user, session, finalProfile);
      } else if (event === 'SIGNED_OUT') {
        clearAuth();
      }
    }
  );

  return () => subscription.unsubscribe();
}

