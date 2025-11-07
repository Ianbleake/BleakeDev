'use client';

import PageCard from "@/components/admin/PageCard";
import { AppWindow } from "lucide-react";
import React from "react";

export default function AdminPage(): React.ReactElement {

  const pagesData = {
    icon: AppWindow,
    title: "Pages content",
    description: "Here can you handle the content of the pages.",
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PageCard data={pagesData}>
        <div>

        </div>
      </PageCard>  
    </div>
  );
}