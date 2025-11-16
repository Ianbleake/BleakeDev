import React from 'react';
import { Card } from '@/components/ui/card';
import { twTheme } from '@/utils/ThemeColors';
import DetailInfoGrid from './DetailInfoGrid';
import { IoChevronBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import DetailInfoActions from './DetailInfoActions';

type DetailInfoCardProps = {
  detailData: DetailInfoCardData;
};

export default function DetailInfoCard({
  detailData,
}: DetailInfoCardProps ): React.ReactElement {

  const router = useRouter();
  
  const Icon = detailData.icon || null;

  return (
    <Card className="px-4 border-b border-gray-200 pb-4 flex flex-row items-start justify-between">

      {
        Icon ? (

          <div onClick={router.back} className="flex flex-row items-center justify-start gap-2 cursor-pointer">

            <div className="cursor-pointer">
              <IoChevronBack size={30} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="border border-gray-200 p-3 rounded-md shadow-sm bg-green-50 ">
              <Icon size={30} color={twTheme.colors.emerald[700]} />
            </div>
            
          </div>
        ) : (
            <div className="cursor-pointer">
              <IoChevronBack size={30} color={twTheme.colors.emerald[600]} />
            </div>
        )
      }

      <DetailInfoGrid title={detailData.title} infoItems={detailData.infoItems}/>

      <DetailInfoActions actions={detailData.actions}/>

    </Card>
  );
}