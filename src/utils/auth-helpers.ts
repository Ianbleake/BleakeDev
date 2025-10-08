import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';

// TODO: Refactor that as hooks and services, this file is getting too big
// TODO: Check why profile fetch do every reload

export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabaseBrowser
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching profile:", error.message);
      return null;
    }

    if (!data) {
      console.warn(`No profile found for user_id: ${userId}`);
      return null;
    }

    const userProfile = {
      ...data,
      initials: data.first_name.charAt(0) + data.last_name.charAt(0)
    }

    console.log("Profile data:",userProfile);

    return userProfile;

  } catch (error) {
    console.error("Error in fetchUserProfile:", error);
    return null;
  }
}


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

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const session = useAuthStore((state) => state.session);
  const profile = useAuthStore((state) => state.profile);
  const isLoading = useAuthStore((state) => state.isLoading);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
  const fullName = useAuthStore((state) => state.getFullName());

  return {
    user,
    session,
    profile,
    isLoading,
    isAuthenticated,
    fullName,
  };
}

export async function updateProfile(updates: Partial<Omit<UserProfile, 'id' | 'created_at'>>) {
  const { profile, setProfile } = useAuthStore.getState();
  
  if (!profile) {
    throw new Error('No profile to update');
  }

  try {
    const { data, error } = await supabaseBrowser
      .from('profiles')
      .update(updates)
      .eq('id', profile.id)
      .select()
      .single();

    if (error) throw error;

    setProfile(data);
    return data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
}