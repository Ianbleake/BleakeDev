import { supabaseBrowser } from '@/supabase/client';
import { handleError } from '@/utils/errorHandler';

export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
  
  try {
    const { data, error } = await supabaseBrowser
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if(error) throw error;

    if (!data) {
      handleError({message: "No profile finded"},"fetchUserProfile");
      return null;
    }

    const userProfile = {
      ...data,
      name: data.first_name + " " + data.last_name,
      initials: data.first_name.charAt(0) + data.last_name.charAt(0),
    }

    return userProfile;

  } catch (error) {
    handleError(error,"fetchUserProfile");
    return null;
  }
}