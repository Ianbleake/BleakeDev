import { supabaseBrowser } from '@/supabase/client';
import { handleError } from '@/utils/errorHandler';

export async function updateProfile(updates: UserProfile): Promise<UserProfile> {

  const updatedProfile: Partial<UserProfile> = {
    id: updates.id,
    first_name: updates.first_name,
    last_name: updates.last_name,
    username: updates.username,
    email: updates.email,
    avatarurl: updates.avatarurl,
    created_at: updates.created_at,
    color: updates.color,
    banner: updates.banner,
  };

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