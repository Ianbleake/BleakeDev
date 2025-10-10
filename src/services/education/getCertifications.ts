import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function getCertifications() {
  try{
    const { data } = await supabaseBrowser
      .from("certifications")
      .select("*");

    return data;

  }catch(error){
    handleError(error,"getCertifications")
  }
}