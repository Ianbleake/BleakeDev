import { deleteAchievement } from "@/services/education/deleteAchievement";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteAchievement() {

  const deleteAchievementMutation = useMutation({
    mutationKey: ["deleteAchievement"],
    mutationFn: async (achievementId: string) => deleteAchievement(achievementId),
    onSuccess: () => {
      toast.success("Achievement deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message)
    }
  });

  return deleteAchievementMutation;
}