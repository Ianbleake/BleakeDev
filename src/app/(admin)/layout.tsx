"use client";

import React from "react";
import { AppToaster } from "@/components/appToaster";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import Dashbar from "@/components/Dashbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  console.log("AdminLayout pathname:", pathname);

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
    <main className="w-full p-5">
      {children}
    </main>
  </SidebarProvider>

  );
}
