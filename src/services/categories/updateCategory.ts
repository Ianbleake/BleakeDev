import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function updateCategory(updatedCategory: Category): Promise<Category> {

  try{
    const { data, error } = await supabaseBrowser
      .from("categories")
      .update(updatedCategory)
      .eq("id", updatedCategory.id)
      .select()
      .single();
    
    if(error)throw error;

    return data;

  }catch(error){
    handleError(error,"UpdateCategory");
  }
}