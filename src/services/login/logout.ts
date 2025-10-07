import { useAuthStore } from '@/storage/authStore';
import { supabaseBrowser } from '@/supabase/client';

export async function logout() {
  const clearAuth = useAuthStore.getState().clearAuth;
  
  const { error } = await supabaseBrowser.auth.signOut();
  
  if (error) {
    console.error('Error en signOut:', error);
    throw error;
  }
  
  clearAuth();
  
  return true;
}