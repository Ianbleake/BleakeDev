import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { fetchUserProfile } from '../profile/fetchUserProfile';

export async function initializeAuth() {

  const { setAuth, setIsLoading } = useAuthStore.getState();
  
  try {
    setIsLoading(true);

    const { data: { session }, error: sessionError } = await supabaseBrowser.auth.getSession();
    
    if (sessionError) {
      console.error('Error getting session:', sessionError);
      setAuth(null, null, null);
      return;
    }

    if (!session) {
      setAuth(null, null, null);
      return;
    }

    const profile = await fetchUserProfile(session.user.id);
    
    setAuth(session.user, session, profile);
  } catch (error) {
    console.error('Error initializing auth:', error);
    setAuth(null, null, null);
  } finally {
    setIsLoading(false);
  }
}