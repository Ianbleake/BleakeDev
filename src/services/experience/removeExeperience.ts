import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function removeExperience (experience: deleteExperiencePayload): Promise<string> {

  try{

    const { error } = await supabaseBrowser
      .from("experience")
      .delete()
      .eq("id",experience.experienceId);

    if(error) throw error;

    return experience.experienceId;

  }catch(error){
    handleError(error,"removeExperience")
  }
}