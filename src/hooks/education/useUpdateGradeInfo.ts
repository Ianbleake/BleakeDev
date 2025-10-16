import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateCertificationInfo } from "@/services/education/updateCertificationInfo";
import { updateDegreeInfo } from "@/services/education/updateDegreeInfo";
import { AppErrorShape } from "@/utils/errorHandler";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";

export default function useUpdateGradeInfo( type: string ) {

  const { updateGrade } = useGradeStorage();

  return useMutation({
    mutationKey: ["updateGradeInfo", type],
    mutationFn: async (updatedInfo: DegreeInfo | CertificationInfo) => {
      if (type === "degree") {
        return updateDegreeInfo(updatedInfo as DegreeInfo);
      }
      return updateCertificationInfo(updatedInfo as CertificationInfo);
    },
    onSuccess: (updatedData) => {
      updateGrade(updatedData);
      toast.success("Información actualizada");
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message);
    },
  });

}
