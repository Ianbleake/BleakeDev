import { createAchievement } from "@/services/achievements/createAchievement";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateAchievement() {

  const { addAchievemnent } = useGradeStorage();
 
  const addAchievementMutation = useMutation({

    mutationKey: ["createAchievement"],
    mutationFn: async (achieventData: AddAchievementPayload) => {
      return createAchievement(achieventData);
    },
    onSuccess: (newAchievement) => {
      addAchievemnent(newAchievement);
      toast.success("Nuevo logro desbloqueado");
    },
    onError: (error) => {
      toast.error(error.message);
    }

  })

  return addAchievementMutation;
}