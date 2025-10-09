import { DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  CreditCard,
  Bell,
  UserCircle,
} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function MenuOptions(): React.ReactElement {

  const router = useRouter();

  return (
    <DropdownMenuGroup>

      <DropdownMenuItem onClick={()=>router.push("/admin/account")}>
        <UserCircle className="mr-2 h-4 w-4" />
        Account
      </DropdownMenuItem>
      
      <DropdownMenuItem>
        <CreditCard className="mr-2 h-4 w-4" />
        Billing
      </DropdownMenuItem>

      <DropdownMenuItem>
        <Bell className="mr-2 h-4 w-4" />
        Notifications
      </DropdownMenuItem>

    </DropdownMenuGroup>
  );
}