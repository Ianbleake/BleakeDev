import { deleteAchievement } from "@/services/education/deleteAchievement";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteAchievement() {

  const { removeAchievement } = useGradeStorage();

  const deleteAchievementMutation = useMutation({
    mutationKey: ["deleteAchievement"],
    mutationFn: async (achievementId: string) => deleteAchievement(achievementId),
    onSuccess: (removedAchievement) => {
      removeAchievement(removedAchievement.id);
      toast.success("Achievement deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message)
    }
  });

  return deleteAchievementMutation;
}