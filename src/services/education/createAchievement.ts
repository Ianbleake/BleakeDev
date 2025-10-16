import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export async function createAchievement(achievementData: AddAchievementPayload ): Promise<Achievement>{

  try {
    
    const { data, error } = await supabaseBrowser
      .from("achievements")
      .insert(achievementData)
      .select()
      .single();
      
    if(error) throw error;

    return data as Achievement;

  }catch(error){
    handleError(error,"createAchievement");
  }
}