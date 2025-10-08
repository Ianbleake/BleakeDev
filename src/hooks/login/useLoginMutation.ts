import { signIn } from "@/services/login/singIn";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/storage/authStore";
import { fetchUserProfile } from "@/utils/auth-helpers";


export function useLoginMutation() {

  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
    onSuccess: async (data) => {
      
      const profile = await fetchUserProfile(data.user.id);
    
      setAuth(data.user, data.session, profile);
      
      toast.success("Inicio de sesión exitoso");
      
      router.push('/admin');
      router.refresh();
    },
    onError: (error: SupabaseAuthError) => {
      console.log(error);
      toast.error(
        error.code === "invalid_credentials" 
          ? "Credenciales inválidas" 
          : error.message || "Error al iniciar sesión"
      );
    }
  });
}