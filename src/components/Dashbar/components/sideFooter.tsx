import { SidebarFooter } from "@/components/ui/sidebar";
import React from "react";
import ProfileManager from "./ProfileManager";

export default function SideFooter(): React.ReactElement {
  return (
    <SidebarFooter className="border-t border-gray-200">
      <ProfileManager/>
    </SidebarFooter>
  );
}