import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function deleteDegree ( gradeId: string ) {

  try{

    const { data, error } = await supabaseBrowser
      .from("education")
      .delete()
      .eq("id",gradeId)
      .select()
      .single();
    
    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,'deleteGrade');
  }

}