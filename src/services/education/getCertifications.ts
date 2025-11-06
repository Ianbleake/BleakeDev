import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function getCertifications() {
  try{
    const { data, error } = await supabaseBrowser
      .from("certifications")
      .select("*");

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,"getCertifications")
  }
}