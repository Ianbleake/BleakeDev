import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function getAllTechnologies (): Promise<Technology[]> {
  try{

    const { data, error } = await supabaseBrowser
      .from("technologies")
      .select("*");

    if(error) throw error;

    return data as Technology[];

  }catch(error){
    handleError(error,"getAllTechnologies");
  }
}