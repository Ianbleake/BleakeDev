import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function createTech(newTech: NewTechnology ): Promise<Technology>{

  try {

    const { data, error } = await supabaseBrowser
      .from("technologies")
      .insert(newTech)
      .select()
      .single();

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error, "createTech");
  }
  
}