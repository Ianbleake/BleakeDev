import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export async function signIn(email: string, password: string) {
  try{

    const { data, error } = await supabaseBrowser.auth.signInWithPassword({ email, password, });
    if (error) handleError(error,"signIn");
    return data;

  } 
  
  catch(error) {
    handleError(error,"signIn");
  }
}
