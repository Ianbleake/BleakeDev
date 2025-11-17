import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function getAchievements(gradeId: string) {
  try{
    const { data, error } = await supabaseBrowser
      .from("achievements")
      .select("*")
      .eq("element_id",gradeId);

    if(error) throw error;

    return data as Achievement[];
    
  }catch(error){
    handleError(error,"getAchievements");
  }
}