import { deleteAchievement } from "@/services/achievements/deleteAchievement";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteAchievement() {

  const { removeAchievement: removeGradeAchievement } = useGradeStorage();
  const { removeAchievement: removeExperienceAchievement } = useDetailExperienceStorage();

  const deleteAchievementMutation = useMutation({
    mutationKey: ["deleteAchievement"],
    mutationFn: async (achievementId: string) => deleteAchievement(achievementId),
    onSuccess: (removedAchievement: Achievement) => {
      if(removedAchievement.type === "certification" || removedAchievement.type === "degree"){
        removeGradeAchievement(removedAchievement.id);
      }
      if(removedAchievement.type === "experience"){
        removeExperienceAchievement(removedAchievement.id);
      }
      toast.success("Achievement deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message)
    }
  });

  return deleteAchievementMutation;
}