import { Card, CardContent } from "@/components/ui/card";
import { twTheme } from "@/utils/ThemeColors";
import React from "react";
import { IconType } from "react-icons";

type InfoCardProps = {
  icon: IconType;
  title: string;
  description: string; 
}

export default function InfoCard({
  icon,
  title,
  description,
}:InfoCardProps ): React.ReactElement {

  const Icon = icon;
  
  return (
    <Card className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-emerald-600 to-emerald-700">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
          <Icon color={twTheme.colors.emerald[100]} size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-emerald-100">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}