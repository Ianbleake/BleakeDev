import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { RiPagesLine } from "react-icons/ri";
import { MdAutoFixHigh } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";

export default function PageContentHeader(): React.ReactElement {

  const params = useParams();
  const id = params.id as string;

  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-between gap-6 border-b border-gray-200 pb-4">

      <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
        <RiPagesLine size={30} color={twTheme.colors.emerald[700]} />
      </div>

      <div className="flex flex-col flex-1 items-start gap-2">
        <h2 className="text-gray-900 font-semibold text-xl">Page Content</h2>
        <Separator />
        <p className="text-gray-400 text-sm font-normal">Coming soon...</p>
      </div>

      
      <Button className="cursor-pointer" onClick={()=>router.push(`/admin/education/${id}/editPageContent`)} >
        <MdAutoFixHigh />
        Manage Content
      </Button>
    </div>
  );
}