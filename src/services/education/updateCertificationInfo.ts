import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function updateCertificationInfo(UpdatedCertificationInfo:CertificationInfo){

  try{

    const { data:UpdatedCertification, error } = await supabaseBrowser
      .from('certifications')
      .update(UpdatedCertificationInfo)
      .eq('id', UpdatedCertificationInfo.id)
      .select()
      .single()
    
    // TODO: Add this throw error on every service to handle the errors properly
    if (error) throw error;

    return UpdatedCertification as CertificationInfo

  }catch(error){
    handleError(error,"updateCertificationInfo")
  }

}