import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export async function createCertification(newCertification: CertificationInfo): Promise<Certification> {

  try {
    
    const { data, error } = await supabaseBrowser
    .from("certification")
    .insert(newCertification)
    .select()
    .single();

    if(error) throw error;

    return data as Certification;

  } catch(error){
    handleError(error,"createCertification");
  }

}