
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import React from "react";
import LogOutButton from "./components/logOutButton";
import ProfileInfo from "./components/profileInfo";
import MenuLabel from "./components/menuLabel";
import MenuOptions from "./components/menuOptions";

export default function ProfileManager(): React.ReactElement {
  
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu >
      <SidebarMenuItem className="cursor-pointer">
        <DropdownMenu>

          <ProfileInfo/>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            
            <MenuLabel/>

            <DropdownMenuSeparator />

            <MenuOptions/>

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