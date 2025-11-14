import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function deleteCategory(categoryId: string): Promise<string> {

  try{

    const { error } = await supabaseBrowser
      .from("categories")
      .delete()
      .eq("id", categoryId);

      if(error) throw error;

    return categoryId;

      
  }catch(error){
    handleError(error,"deleteCategory");
  }
}