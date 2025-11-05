import deleteCertification from "@/services/education/deleteCertification";
import { deleteDegree } from "@/services/education/deleteDegree";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function useDeleteGrade() {

  const router = useRouter();
  
  const deleteGradeMutation = useMutation({
    mutationKey: ["deleteGrade"],
    mutationFn: async ({ gradeId, type }: { gradeId: string; type: string }) => {
      if (type === "degree") {
        return deleteDegree(gradeId);
      }
      return deleteCertification(gradeId);
    },
    onSuccess: () => {
      toast.success("Grade deleted successfully");
      router.push("/admin/education"); 
      router.refresh();
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message);
    },
  });

  return deleteGradeMutation;
}
