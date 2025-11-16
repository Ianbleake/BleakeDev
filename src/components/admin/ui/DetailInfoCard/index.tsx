import React from 'react';
import { IconType } from 'react-icons';
import { Card } from '@/components/ui/card';
import { twTheme } from '@/utils/ThemeColors';

type DetailInfoCardData = {
  icon: IconType;
}

type DetailInfoCardProps = {
  detailData: DetailInfoCardData;
};

export default function DetailInfoCard({
  detailData,
}: DetailInfoCardProps ): React.ReactElement {
  
  const Icon = detailData.icon;

  return (
    <Card className="px-4 border-b border-gray-200 pb-4 flex flex-row items-center justify-between">

      <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
        <Icon size={30} color={twTheme.colors.emerald[700]} />
      </div>

    </Card>
  );
}