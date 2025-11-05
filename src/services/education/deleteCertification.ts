import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export default async function deleteCertification( certificationId: string ) {


  try{

    const { data, error } = await supabaseBrowser
      .from("certifications")
      .delete()
      .eq("id",certificationId)
      .select()
      .single();

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,"deleteCertification")
  }
}