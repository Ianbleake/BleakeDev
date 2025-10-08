import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { items } from "@/content/dashMenu";
import Link from "next/link";


export default function Dashbar(): React.ReactElement {

  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">

      <SidebarHeader>
        <SidebarGroup className="flex flex-row  items-center gap-2 border-b border-gray-200">
          
            <SidebarTrigger size={"icon-lg"}/>
            { open && (
              <h1 className="text-2xl font-semibold text-gray-900">Bleake<span className="text-emerald-600">Dev</span></h1>
            )}
          
        </SidebarGroup>
      </SidebarHeader>

      <SidebarContent>

        <SidebarGroup>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200">
      </SidebarFooter>
      
    </Sidebar>
  )
}