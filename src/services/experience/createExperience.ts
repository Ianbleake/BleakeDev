import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function createExperience (newExperience: NewExperience) {

  try{
    const { data, error } = await supabaseBrowser
      .from('experience')
      .insert(newExperience)
      .select()
      .single();

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error, "createExperience");
  }
}