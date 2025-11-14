import { createAchievement } from "@/services/achievements/createAchievement";
import { createCertification } from "@/services/education/createCertification";
import { createDegree } from "@/services/education/createDegree";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function useCreateGrade( type: string) {

  const router = useRouter();

  return useMutation({
    mutationKey: ["createGrade", type ],
    mutationFn: async (gradeInfo: NewDegree | NewCertification ) => {

      const { achievements, ...gradeData } = gradeInfo as GradeInfo;
      
      const newGrade = type === "degree" ? await createDegree(gradeData) : await createCertification(gradeData);

      if( achievements?.length > 0 && newGrade?.id ) {

        const newAchievements = achievements.map((achievement: NewAchievement) => ({
          description: achievement.description,
          grade_id: newGrade.id,
          grade_type: type,
        }));

        const createdAchievements = await Promise.all(
          newAchievements.map((achievement: AddAchievementPayload) => createAchievement(achievement))
        );

        return { ...newGrade, achievements: createdAchievements };

      }

      return newGrade;

    },
    onSuccess: () => {
      toast.success("Información actualizada");
      router.push("/admin/education"); 
      router.refresh();
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message)
    }
  })
}