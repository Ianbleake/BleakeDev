import { merge } from '@/utils/mergeStyles';
import { twTheme } from '@/utils/ThemeColors';
import React from 'react';

type DetailInfoItemProps = {
  className?: string;
  item: InfoItem;
};

export default function DetailInfoItem({
  item,
}:DetailInfoItemProps ): React.ReactElement {

  const Icon = item.icon;

  const customStyle = item.className || "";

  return (
    <div className={merge("flex flex-row gap-2 items-center",customStyle)}>
      <div className="h-7 w-7">
        <Icon size={25} color={twTheme.colors.emerald[600]} />
      </div>

      <p className="text-gray-400 text-sm font-normal">
        { item.info }
      </p>
    </div>
  );
}