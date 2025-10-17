import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export async function updateAchievement( updatedAchievement: Achievement): Promise<Achievement> {
  try{

    const { data, error } = await supabaseBrowser
      .from("achievements")
      .update(updatedAchievement)
      .eq("id", updatedAchievement.id)
      .select()
      .single();
    
    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,"updateAchievement");
  }
} 