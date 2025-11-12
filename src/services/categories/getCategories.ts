import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function getCategories () {

  try{

    const { data, error } = await supabaseBrowser
      .from("categories")
      .select("*");
    
    if(error) throw error;

    return data;
    
  }catch(error){
    handleError(error,"getCategories");
  }
}