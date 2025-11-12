import updateBanner from "@/services/profile/updateBanner";
import { AppErrorShape } from "@/utils/errorHandler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "../auth/useAuth";
import { useAuthStore } from "@/storage/Admin/authStore";

export default function useUpdateBanner () {

  const { profile } = useAuth();
  const { setProfile } = useAuthStore();

  const updateBannerMutation = useMutation({
    mutationKey: ["updateBanner"],
    mutationFn: (bannerData:BannerData) => updateBanner(bannerData),
    onSuccess: (updatedBanner: string) => {
      toast.success("Banner Actualizado!");

      if(profile){
        setProfile({
          ...profile,
          banner: updatedBanner as string
        })
      }
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message)
    },
  });

  return updateBannerMutation;
}