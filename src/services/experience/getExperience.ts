import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function getExperience(){

  try{
    const { data, error } = await supabaseBrowser
      .from("experience")
      .select("*");

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,"getExperience");
  }
}