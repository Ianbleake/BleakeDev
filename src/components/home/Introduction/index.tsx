import React from "react";
import ProyectsStatus from "./components/proyectsStatus";
import Button from "@/components/ui/button";

export default function Introduction(): React.ReactElement {
  return (
    <div className="h-160 w-full bg-gray-900 flex flex-col gap-2 p-8">
      
      <ProyectsStatus />
      
      <div>

      </div>

      <div>
        <Button label="View My Work" isLink={true} route="/proyects" />
        <Button label="Contact Me" isLink={true} route="/contact" variant="secondary" className="ml-4" />
      </div>
    </div>
  );
}