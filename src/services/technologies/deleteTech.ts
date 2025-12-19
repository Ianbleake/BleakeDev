import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function deleteTech(techId: string): Promise<string> {

  try{

    const { error } = await supabaseBrowser
      .from("technologies")
      .delete()
      .eq("id", techId);

    if(error) throw error;

    return techId;
    
  }catch(error){
    handleError(error,"deleteeTech");
  }
}