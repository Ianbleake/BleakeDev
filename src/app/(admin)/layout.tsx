"use client";

import React from "react";
import { AppToaster } from "@/components/appToaster";



export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {children}
      <AppToaster/>
    </div>
  );
}
