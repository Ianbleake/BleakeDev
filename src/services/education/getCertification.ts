import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export async function getCertification(Id: string): Promise<Certification | undefined> {

  try{
    
    const { data } = await supabaseBrowser
      .from("certifications")
      .select("*")
      .eq("id",Id)
      .single();

      return data;

  }catch(error){
    handleError(error,"getCertification");
  }
}