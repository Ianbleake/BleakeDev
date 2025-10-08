import { SidebarGroup, SidebarHeader, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import React from "react";

export default function SideHeader(): React.ReactElement {

  const { open } = useSidebar();
  
  return (
    <SidebarHeader>
      <SidebarGroup className="flex flex-row  items-center gap-2 border-b border-gray-200">
        
          <SidebarTrigger size={"icon-lg"}/>
          { open && (
            <h1 className="text-2xl font-semibold text-gray-900">Bleake<span className="text-emerald-600">Dev</span></h1>
          )}
        
      </SidebarGroup>
    </SidebarHeader>
  );
}