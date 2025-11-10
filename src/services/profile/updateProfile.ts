import { useAuthStore } from '@/storage/Admin/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { handleError } from '@/utils/errorHandler';

export async function updateProfile(updates: Partial<Omit<UserProfile, 'id' | 'created_at'>>) {

  const { profile, setProfile } = useAuthStore.getState();
  
  if (!profile) {
    handleError({ messagge: "No profile to update." },"updateProfile")
  }

  try {
    const { data, error } = await supabaseBrowser
      .from('profiles')
      .update(updates)
      .eq('id', profile.id)
      .select()
      .single();
      
    if(error) throw error;

    setProfile(data);
    return data;
    
  } catch (error) {
    handleError(error,"updateProfile");
  }
}