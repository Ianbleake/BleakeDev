import { signIn } from "@/services/auth/singIn";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/storage/authStore";
import { AppErrorShape } from "@/utils/errorHandler";


export function useLoginMutation() {

  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
    onSuccess: async (data) => {
    
      setAuth(data.user, data.session, data.profile || null );
      
      toast.success(`Inicio de sesion exitoso, Bienvenido ${data.profile?.username || ''}.`);
      
      router.push('/admin');
      router.refresh();

    },
    onError: (error: AppErrorShape) => {
      toast.error(error.message);
    }
  });
}