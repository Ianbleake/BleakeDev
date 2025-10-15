import { updateDegreeInfo } from "@/services/education/updateDegreeInfo";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


export default function useUpdateGradeInfo(type: 'degree' | 'certification') {

  const updateDegreeInfoMutation = useMutation({
    mutationKey: ['UpdateDegreeInfo' ],
    mutationFn: (updatedInfo:DegreeInfo) => updateDegreeInfo(updatedInfo),
    onSuccess: () => {
      // TODO: Create a gradeContext and update the degree InfoHere
      toast.success('Informacion Actualizada');
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message);
    },
    
  })

  if(type === 'degree'){
    return updateDegreeInfoMutation 
  }
}