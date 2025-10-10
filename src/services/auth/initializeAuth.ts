import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { fetchUserProfile } from '../profile/fetchUserProfile';
import { handleError } from '@/utils/errorHandler';

export async function initializeAuth() {
  
  const { setAuth, setIsLoading, profile } = useAuthStore.getState();

  try {
    setIsLoading(true);

    const { data: { session }, error } = await supabaseBrowser.auth.getSession();
    if (error) handleError(error, "initializeAuth");

    if (!session) {
      setAuth(null, null, null);
      return;
    }

    if (profile) {
      setAuth(session.user, session, profile);
      return;
    }

    const freshProfile = await fetchUserProfile(session.user.id);
    setAuth(session.user, session, freshProfile);

  } catch (error) {
    handleError(error, "initializeAuth");
    setAuth(null, null, null);
  } finally {
    setIsLoading(false);
  }
}

