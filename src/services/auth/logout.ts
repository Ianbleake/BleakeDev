import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';
import { handleError } from '@/utils/errorHandler';

export async function logout(): Promise<boolean> {
  try {
    const clearAuth = useAuthStore.getState().clearAuth;

    const { error } = await supabaseBrowser.auth.signOut();
    if (error) {
      handleError(error, "logout"); 
    }

    clearAuth(); // 🔹 limpieza local
    return true;
  } catch (error) {
    handleError(error, "logout"); 
  }
}
