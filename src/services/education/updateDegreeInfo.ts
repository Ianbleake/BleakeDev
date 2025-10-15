import { supabaseBrowser } from "@/supabase/client"
import { handleError } from "@/utils/errorHandler"

export async function updateDegreeInfo(updatedDegreeInfo: DegreeInfo){

  try{

    const { data:UpdatedDegree } = await supabaseBrowser
      .from('education')
      .update(updatedDegreeInfo)
      .eq('id', updatedDegreeInfo.id)
      .select()
      .single()

      return UpdatedDegree as Degree

  }catch(error){
    handleError(error,"updateDegreeInfo")
  }

}