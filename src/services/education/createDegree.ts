import { handleError } from "@/utils/errorHandler";
import { supabaseBrowser } from "@/supabase/client";

export async function createDegree(newDegree:DegreeInfo): Promise<Degree> {

  try{

    const { data, error } = await supabaseBrowser
      .from("education")
      .insert(newDegree)
      .select()
      .single();
    
      if(error) throw error;

      return data as Degree;

  }catch(error){
    handleError(error,"createDegree");
  }
  
}