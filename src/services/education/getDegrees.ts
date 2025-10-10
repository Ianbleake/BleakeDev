import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function getDegrees() {
  try{
    const { data } = await supabaseBrowser
      .from("education")
      .select("*");

    return data;

  }catch(error){
    handleError(error,"getDegrees")
  }
}