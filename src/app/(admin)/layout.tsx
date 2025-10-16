"use client";

import React from "react";
import { AppToaster } from "@/components/admin/appToaster";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import Dashbar from "@/components/admin/Dashbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  if(pathname === "/login"){
    return(
      <div className="flex min-h-screen bg-gray-50">
        {children}
        <AppToaster/>
      </div>
    )
  }

  return (

  <SidebarProvider>
    <AppToaster/>
    <Dashbar/>
    <main className="w-full p-5 bg-gray-50">
      {children}
    </main>
  </SidebarProvider>

  );
}
