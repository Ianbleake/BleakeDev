import { signIn } from "@/services/auth/singIn";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/storage/authStore";
import { useProfileQuery } from "../profile/useProfileQuery";
import { AppErrorShape } from "@/utils/errorHandler";
import { useEffect } from "react";

export function useLoginMutation() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
    onSuccess: () => {
      toast.success("Inicio de sesión exitoso");
      router.push("/admin");
      router.refresh();
    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message);
    },
  });

  const { data: profile } = useProfileQuery(loginMutation.data?.user.id || "");

  useEffect(() => {
    if (profile && loginMutation.data) {
      setAuth(loginMutation.data.user, loginMutation.data.session, profile);
    }
  }, [profile, loginMutation.data, setAuth]);

  return loginMutation;
}
