'use client';

import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/hooks/login/useLogoutMutation";


export function LogoutButton() {
  const { mutate: handleLogout, isPending } = useLogoutMutation();

  return (
    <Button 
      onClick={() => handleLogout()} 
      variant="destructive"
      disabled={isPending}
    >
      {isPending ? "Cerrando sesión..." : "Cerrar sesión"}
    </Button>
  );
}