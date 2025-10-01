import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { IconType } from "react-icons";

type FeatureCardProps = {
  feature: {
    name: string;
    description: string;
    icon: IconType;
  };
};

export default function FeatureCard({ feature }: FeatureCardProps): React.ReactElement {
  const Icon = feature.icon;

  return (
    <div className="border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-3 flex items-center justify-start">
      <div className="w-18 h-16 bg-emerald-100/20 rounded-lg flex items-center justify-center mr-4">
        <Icon size={35} color={twTheme.colors.white}/>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{feature.name}</h3>
        <p className="text-emerald-100 font-medium mb-1">{feature.description}</p>
      </div>
    </div>
  );
}
