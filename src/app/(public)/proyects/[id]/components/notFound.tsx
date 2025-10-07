import React from "react";
import Page from "@/components/ui/page";
import { FaRegSadTear } from "react-icons/fa";
import { twTheme } from "@/utils/ThemeColors";

export default function NotFound(): React.ReactElement {
  return (
    <Page className="h-full">
      <div className="h-full bg-gray-900 flex flex-col items-center justify-center gap-8">
        <FaRegSadTear size={120} color={twTheme.colors.emerald[600]} />
        <h2 className="text-3xl text-emerald-600">Yo habia ponido un proyecto aqui...</h2>
      </div>
    </Page>
  );
}