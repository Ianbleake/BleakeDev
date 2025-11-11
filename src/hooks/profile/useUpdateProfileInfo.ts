import { updateProfile } from "@/services/profile/updateProfile";
import { useAuthStore } from "@/storage/Admin/authStore";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateProfileInfo () {

  const { setProfile } = useAuthStore();

  const updateProfileInfoMutation = useMutation({
    mutationKey: ["updateProfileInfo"],
    mutationFn: (updatedProfile: UserProfile) => updateProfile(updatedProfile),
    onSuccess: (updatedProfile: UserProfile) => {
      setProfile(updatedProfile);
      toast.success("Perfil Actualizado!");
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message)
    },
  });

  return updateProfileInfoMutation;
}