import { supabaseBrowser } from "@/supabase/client";

export async function signIn(email: string, password: string) {
  const { data, error } = await supabaseBrowser.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}
