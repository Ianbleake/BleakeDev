import { useAuthStore } from '@/storage/Admin/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { handleError } from '@/utils/errorHandler';

export async function logout(): Promise<boolean> {
  try {
    const clearAuth = useAuthStore.getState().clearAuth;

    const { error } = await supabaseBrowser.auth.signOut();

    if (error) throw error; 

    clearAuth(); 
    return true;
  } catch (error) {
    handleError(error, "logout"); 
  }
}
