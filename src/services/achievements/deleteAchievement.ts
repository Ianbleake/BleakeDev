import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function deleteAchievement(achievementId: string){
  try{

    const { data, error } = await supabaseBrowser
      .from("achievements")
      .delete()
      .eq("id", achievementId)
      .select()
      .single();

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,"deleteAchievement");
  }
}