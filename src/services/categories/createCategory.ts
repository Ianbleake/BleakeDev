import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function createCategory(newCategory: Omit<Category, "id">): Promise<Category> {

  try{

    const { data, error } = await supabaseBrowser
      .from("categories")
      .insert(newCategory)
      .select()
      .single();

    if(error) throw error;

    return data;

  }catch(error){
    handleError(error,"createCategory");
  }
}