import React from "react";
import { IconType } from "react-icons";
import { twTheme } from "@/utils/ThemeColors";
import { merge } from "@/utils/mergeStyles";

type InfoCardProps = {
  text: string;
  icon: IconType;
  className?: string;
  iconSize?: number;
}

export default function InfoCard({
  text,
  icon,
  className,
  iconSize = 25,
}:InfoCardProps ): React.ReactElement {

  const Icon = icon;

  return (
    <div className={merge("flex flex-row gap-2 items-center",className)}>
      <Icon size={iconSize} color={twTheme.colors.emerald[600]} />
      <p className="text-gray-400 text-sm font-normal">
        { text }
      </p>
    </div>
  );
}