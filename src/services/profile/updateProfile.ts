import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';

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