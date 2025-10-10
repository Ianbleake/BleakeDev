import { DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  UserCircle,
} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function MenuOptions(): React.ReactElement {

  const router = useRouter();

  return (
    <DropdownMenuGroup>

      <DropdownMenuItem className="cursor-pointer" onClick={()=>router.push("/admin/account")}>
        <UserCircle className="mr-2 h-4 w-4" />
        Account
      </DropdownMenuItem>

    </DropdownMenuGroup>
  );
}