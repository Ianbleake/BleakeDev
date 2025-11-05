import { supabaseBrowser } from "@/supabase/client"
import { handleError } from "@/utils/errorHandler"

export async function updateDegreeInfo(updatedDegreeInfo: DegreeInfo){

  try{

    const { data:UpdatedDegree, error } = await supabaseBrowser
      .from('education')
      .update(updatedDegreeInfo)
      .eq('id', updatedDegreeInfo.id)
      .select()
      .single()

    if (error) throw error;

    return UpdatedDegree as DegreeInfo

  }catch(error){
    handleError(error,"updateDegreeInfo")
  }

}