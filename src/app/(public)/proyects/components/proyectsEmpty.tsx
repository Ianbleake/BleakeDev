import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { PiMaskSadLight } from "react-icons/pi";

export default function ProyectsEmpty(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-16">
      <PiMaskSadLight color={twTheme.colors.emerald[600]} size={70} />
      <p className="text-slate-400 font-semibold text-xl">
        No projects found in this category.
      </p>
    </div>
  );
}