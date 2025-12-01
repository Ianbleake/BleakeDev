import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { twTheme } from '@/utils/ThemeColors';
import { Info } from 'lucide-react';
import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

type DetailInfoActionsProps = {
  actions: React.ReactElement[];
};

export default function DetailInfoActions({ actions }: DetailInfoActionsProps): React.ReactElement {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-9 w-20 flex items-center justify-center cursor-pointer">
        <HiOutlineMenu size={30} color={twTheme.colors.emerald[600]} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col gap-1 p-2">

        <DropdownMenuLabel className="flex flex-row items-center justify-center gap-2">
          Actions
          <Info className="mr-2 h-4 w-4" />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {actions.map((ActionEl, idx) => (
          <div key={idx} className="px-1 py-1">
            {ActionEl}
          </div>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
