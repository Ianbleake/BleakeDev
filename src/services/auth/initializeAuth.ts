import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { fetchUserProfile } from '../profile/fetchUserProfile';
import { handleError } from '@/utils/errorHandler';

export async function initializeAuth() {
  const { setAuth, setIsLoading } = useAuthStore.getState();

  try {
    setIsLoading(true);

    const { data: { session }, error: sessionError } = await supabaseBrowser.auth.getSession();
    
    if (sessionError) {
      handleError(sessionError, "initializeAuth");
    }

    if (!session) {
      setAuth(null, null, null);
      return;
    }

    let profile = null;
    try {
      profile = await fetchUserProfile(session.user.id);
    } catch (error) {
      handleError(error, "initializeAuth:fetchUserProfile");
    }

    setAuth(session.user, session, profile);

  } catch (error) {
    handleError(error, "initializeAuth");
    setAuth(null, null, null);
  } finally {
    setIsLoading(false);
  }
}
