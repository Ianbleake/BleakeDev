import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function updateExperienceInfo (updatedExperience: ExperienceInfo): Promise<ExperienceInfo> {
   try{

    const { data, error } = await supabaseBrowser
      .from("experience")
      .update(updatedExperience)
      .eq("id",updatedExperience.id)
      .select()
      .single();

    if(error) throw error;

    return data;
    
   }catch(error){
      handleError(error,"updateExperienceInfo")
   }
}