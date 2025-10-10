import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { fetchUserProfile } from '@/services/profile/fetchUserProfile';
import { handleError } from '@/utils/errorHandler';

export async function initializeAuth() {
  
  const { setAuth, setIsLoading, user, profile } = useAuthStore.getState();

  try {
    setIsLoading(true);

    const { data: { session }, error } = await supabaseBrowser.auth.getSession();
    if (error) handleError(error, "initializeAuth");

    if (!session) {
      setAuth(null, null, null);
      return;
    }

    if (user && profile) return;

    const userProfile = profile || await fetchUserProfile(session.user.id);

    setAuth(session.user, session, userProfile);

  } catch (error) {
    handleError(error, "initializeAuth");
    setAuth(null, null, null);
  } finally {
    setIsLoading(false);
  }
}
