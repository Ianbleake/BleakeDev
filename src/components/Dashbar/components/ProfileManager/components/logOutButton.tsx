'use client';

import { Spinner } from "@/components/ui/spinner";
import { useLogoutMutation } from "@/hooks/login/useLogoutMutation";
import { LogOut } from "lucide-react";
import React from "react";

export default function LogOutButton(): React.ReactElement {

  const { mutate: handleLogout, isPending } = useLogoutMutation();

  return (
    <div className="cursor-pointer flex flex-row items-center  " onClick={() => handleLogout()} >
      {
        isPending ? (<Spinner/>) : (
        <>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </>
      )
      }
    </div>
  );
}