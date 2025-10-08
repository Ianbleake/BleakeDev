'use client';

import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/hooks/login/useLogoutMutation";
import { LogOut } from "lucide-react";
import React from "react";

export default function LogOutButton(): React.ReactElement {

  const { mutate: handleLogout, isPending } = useLogoutMutation();

  return (
    <Button variant={"ghost"} className="cursor-pointer" onClick={() => handleLogout()} disabled={isPending} >
      <LogOut className="mr-2 h-4 w-4" />
      Log out
    </Button>
  );
}