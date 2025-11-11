import updateAvatar from "@/services/profile/updateAvatar";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "../auth/useAuth";
import { useAuthStore } from "@/storage/Admin/authStore";
import { AppErrorShape } from "@/utils/errorHandler";

export default function useUpdateAvatar() {
  const { profile } = useAuth();
  const { setProfile } = useAuthStore();

  return useMutation({
    mutationKey: ["updateAvatar"],
    mutationFn: (avatarData: AvatarData) => updateAvatar(avatarData),
    onSuccess: (data) => {
      toast.success("Avatar actualizado!");
    
      if (profile) {
        setProfile({
          ...profile,
          avatarurl: data.avatarurl,
          color: data.color as string,
        });
      }
    },
    
    onError: (error: AppErrorShape) => {
      toast.error(error.message || "Error al actualizar avatar");
    },
  });
}
