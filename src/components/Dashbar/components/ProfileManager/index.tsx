
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  CreditCard,
  Bell,
  UserCircle,
} from "lucide-react";
import React from "react";
import LogOutButton from "./components/logOutButton";

import UserImage from "@/components/ui/UserImage";
import { useAuth } from "@/hooks/auth/useAuth";
import Link from "next/link";
import ProfileInfo from "./components/profileInfo";

export default function ProfileManager(): React.ReactElement {

  const { profile } = useAuth();
  
  const { isMobile } = useSidebar();

  //TODO: componetize and use useRouter on menu

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <ProfileInfo/>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">

              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">

                <UserImage/>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {profile?.first_name} {profile?.last_name}
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    {profile?.email}
                  </span>
                </div>

              </div>

            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>

              <DropdownMenuItem>
                <Link href={"/admin/account"} className="flex flex-row gap-2 items-center">
                  <UserCircle className="mr-2 h-4 w-4" />
                  Account
                </Link>
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

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOutButton/>
            </DropdownMenuItem>

          </DropdownMenuContent>

        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}