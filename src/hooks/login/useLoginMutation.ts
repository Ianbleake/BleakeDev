// src/features/auth/useLoginMutation.ts
import { signIn } from "@/services/login/singIn";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useLoginMutation() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
    onSuccess: () => {
      toast.success("Inicio de sesión exitoso");
    },
    onError: (error: SupabaseAuthError) => {
      console.log(error)
      toast.error(
        error.code === "invalid_credentials" ? "Credenciales inválidas" : error.message || "Error al iniciar sesión"
      );
    }
  });
}
