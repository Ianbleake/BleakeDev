import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function getDegrees() {
  try{
    
    const { data, error } = await supabaseBrowser
      .from("education")
      .select("*");

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,"getDegrees")
  }
}