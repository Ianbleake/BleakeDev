import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export async function getDegree(Id: string): Promise<Degree | undefined> {
  
  try{

    const { data } = await supabaseBrowser
      .from("education")
      .select("*")
      .eq("id",Id)
      .single();

      return data;

  }catch(error){
    handleError(error,"getDegree")
  }
}