import { supabaseBrowser } from '@/supabase/client';
import { handleError } from '@/utils/errorHandler';

export async function updateProfile(updates: UserProfile): Promise<UserProfile> {

  const { name, initials, ...updatedProfile } = updates;

  try {
    const { data, error } = await supabaseBrowser
      .from('profiles')
      .update(updatedProfile)
      .eq('id', updatedProfile.id)
      .select()
      .single();
      
    if(error) throw error;

    const completedProfile = {
      ...data,
      name: data.first_name + " " + data.last_name,
      initials: data.first_name.charAt(0) + data.last_name.charAt(0),
    }

    return completedProfile;
    
  } catch (error) {
    handleError(error,"updateProfile");
  }
}