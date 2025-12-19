import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function updateTech(UpdatedTech: Technology): Promise<Technology>{
  try {

    const { data, error } = await supabaseBrowser
      .from("technologies")
      .update({name: UpdatedTech.name})
      .eq("id", UpdatedTech.id)
      .select()
      .single();

    if(error) throw error;

    return data as Technology;
  }catch(error){
    handleError(error,"updateTech");
  }
}