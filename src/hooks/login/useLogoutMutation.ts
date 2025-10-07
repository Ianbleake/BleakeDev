import { logout } from "@/services/login/logout";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useLogoutMutation() {
  const router = useRouter();
  
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Sesión cerrada");
      router.push("/login");
      router.refresh();
    },
    onError: (error: SupabaseAuthError) => {
      console.error(error);
      toast.error(error.message || "Error al cerrar sesión");
    }
  });
}