import React from "react";
import { IconType } from "react-icons";
import { twTheme } from "@/utils/ThemeColors";

type InfoCardProps = {
  text: string;
  icon: IconType;
}

export default function InfoCard({
  text,
  icon,
}:InfoCardProps ): React.ReactElement {

  const Icon = icon;

  return (
    <div className="flex flex-row gap-2 items-center">
      <Icon size={25} color={twTheme.colors.emerald[600]} />
      <p className="text-gray-400 text-sm font-normal">
        { text }
      </p>
    </div>
  );
}