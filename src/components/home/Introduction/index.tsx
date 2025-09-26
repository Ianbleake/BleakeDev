import React from "react";
import ProyectsStatus from "./components/proyectsStatus";
import InformativeTexts from "./components/informativeTexts";
import ActionButtons from "./components/actionButtons";
import Hero from "./components/hero";

export default function Introduction(): React.ReactElement {
  return (
    <div className="w-full bg-gray-900 flex flex-col md:flex-row gap-2 p-8">

      <div className="w-1/2">
        <ProyectsStatus />
        <InformativeTexts />
        <ActionButtons />
      </div>

      <div className="w-1/2 flex items-center">
        <Hero/>
      </div>

    </div>
  );
}