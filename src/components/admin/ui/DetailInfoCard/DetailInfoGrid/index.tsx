import { Separator } from '@/components/ui/separator';
import React from 'react';
import DetailInfoItem from './components/detailInfoItem';

type DetailInfoGridProps = {
  title: string;
  infoItems: InfoItem[];
}

export default function DetailInfoGrid({
  title,
  infoItems,
}:DetailInfoGridProps ): React.ReactElement {
    
  return (
    <div className="flex flex-1 flex-col gap-2">

      <h2 className="text-gray-900 font-semibold text-xl">
        { title }
      </h2>

      <Separator />

      <div className="grid grid-cols-3 gap-4 my-2">

        {
          infoItems.map((item,index) => {
            return (
              <DetailInfoItem item={item} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
}