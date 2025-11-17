import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items } from "@/content/dashMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideMenu(): React.ReactElement {

  const pathname = usePathname();

  const featureSlug = pathname.split("/")[2];

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {

            const itemSlug = item.url.split("/")[2];
            const isActive = featureSlug === itemSlug;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={isActive ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-200" : ""}
                >
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
