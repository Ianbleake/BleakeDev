import { deleteAchievement } from "@/services/achievements/deleteAchievement";
import removeExperience from "@/services/experience/removeExeperience";
import { useExperienceStorage } from "@/storage/Admin/experienceStorage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


export default function useRemoveExperience () {

  const { removeExperience: removeExperienceStorage } = useExperienceStorage();

  const removeExperienceMutation = useMutation<
    { deletedExperience: string; deletedAchievements: Achievement[] }, 
    Error, 
    deleteExperiencePayload
  >({
    mutationKey: ["removeExperience"],
    mutationFn: async (experienceData) => {
      const deletedExperience = await removeExperience(experienceData);

      const deletedAchievements =
        experienceData.achievements.length > 0
          ? await Promise.all(
              experienceData.achievements.map((a) => deleteAchievement(a.id))
            )
          : [];

      return { deletedExperience, deletedAchievements };
    },
    onSuccess: (data) => {
      toast.success("Experience removed successfully");
      removeExperienceStorage(data.deletedExperience);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });


  return removeExperienceMutation

}