import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateCertificationInfo } from "@/services/education/updateCertificationInfo";
import { updateDegreeInfo } from "@/services/education/updateDegreeInfo";
import { AppErrorShape } from "@/utils/errorHandler";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { periodToString } from "@/utils/periodToString";

export default function useUpdateGradeInfo( type: string ) {

  const { updateGradeInfo } = useGradeStorage();

  const isDegree = type === "degree";

  return useMutation({
    mutationKey: ["updateGradeInfo", type],
    mutationFn: async (updatedInfo: DegreeInfo | CertificationInfo) => {
      if (type === "degree") {
        return updateDegreeInfo(updatedInfo as DegreeInfo);
      }
      return updateCertificationInfo(updatedInfo as CertificationInfo);
    },
    onSuccess: (updatedData: GradeInfo ) => {

      let formatedData = null;

      if(isDegree){
        formatedData = {
          id: updatedData.id,
          name: updatedData.degree,
          description: updatedData.description,
          institution: updatedData.institution,
          date: updatedData?.period ? periodToString(updatedData.period) : "-",
          period: updatedData.period,
          location: updatedData.location,
        }
      }else{
        formatedData = {
          id: updatedData.id,
          name: updatedData.title,
          description: updatedData.description,
          institution: updatedData.issuer,
          date: updatedData.date,     
          credential: updatedData.credential,
        }
      }
      
      updateGradeInfo(formatedData);
      toast.success("Información actualizada");
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message);
    },
  });

}
