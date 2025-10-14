import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { TbTrophyOff } from "react-icons/tb";

export default function EmptyAchievements(): React.ReactElement {
  return (
    <div className="flex flex-col gap-3 items-center justify-center col-span-2">
      <TbTrophyOff size={70} color={twTheme.colors.gray[300]} />
      <h2 className="text-gray-400 font-semibold text-xl">No achievements found</h2>
      <p className="text-gray-300 text-sm">This grade doesn’t have achievements or something went wrong.</p>
    </div>
  );
}