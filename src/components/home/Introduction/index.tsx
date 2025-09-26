import React from "react";
import ProyectsStatus from "./components/proyectsStatus";
import InformativeTexts from "./components/informativeTexts";
import ActionButtons from "./components/actionButtons";

export default function Introduction(): React.ReactElement {
  return (
    <div className="h-120 w-full bg-gray-900 flex flex-col gap-2 p-8">
      
      <ProyectsStatus />
      
      <InformativeTexts />

      <ActionButtons />

    </div>
  );
}