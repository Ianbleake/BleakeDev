import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

//TODO: Separate technologies by feature join and own functionalities

export async function getTechnology(ids: (string | null)[]) {
  try {
    
    if(!ids || ids.length === 0 ){
      return [];
    } 

    const { data, error } = await supabaseBrowser
      .from("technologies")
      .select("*")
      .in("id", ids);

    if (error) throw error;

    return data;
    
  } catch (error) {
    handleError(error, "getTechnology");
  }
}
