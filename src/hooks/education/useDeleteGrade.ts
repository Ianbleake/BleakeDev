import { deleteAchievement } from "@/services/achievements/deleteAchievement";
import deleteCertification from "@/services/education/deleteCertification";
import { deleteDegree } from "@/services/education/deleteDegree";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type DeleteGradeParams = {
  gradeId: string;
  type: string;
  achievements: { id: string }[];
};

export default function useDeleteGrade() {
  const router = useRouter();

  const deleteGradeMutation = useMutation({
    mutationKey: ["deleteGrade"],
    mutationFn: async ({ gradeId, type, achievements }: DeleteGradeParams) => {

      const deletedGrade =
        type === "degree"
          ? await deleteDegree(gradeId)
          : await deleteCertification(gradeId);

      const deletedAchievements =
        achievements.length > 0
          ? await Promise.all(
              achievements.map((a) => deleteAchievement(a.id))
            )
          : [];

      return { deletedGrade, deletedAchievements };
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
