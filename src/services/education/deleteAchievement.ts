import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";


export async function deleteAchievement(achievementId: string): Promise<void>{
  try{
    const { error } = await supabaseBrowser
      .from("achievements")
      .delete()
      .eq("id", achievementId)

    if(error) throw error;

  }catch(error){
    handleError(error,"deleteAchievement");
  }
}