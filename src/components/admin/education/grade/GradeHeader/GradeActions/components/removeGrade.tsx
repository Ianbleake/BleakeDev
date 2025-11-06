import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { twTheme } from "@/utils/ThemeColors";
import { Trash } from "lucide-react";
import React from "react";

type RemoveGradeProps = {
  action: () => void;
}

export default function RemoveGrade({
  action,
}: RemoveGradeProps ): React.ReactElement {
  return (

    <AlertDialog>

      <AlertDialogTrigger asChild>
        <DropdownMenuItem  onSelect={(e) => e.preventDefault()} >
          <Trash className="mr-2 h-4 w-4" color={twTheme.colors.red[500]} />
          <span className="text-red-500">Delete</span>
        </DropdownMenuItem>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            grade and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={action} >Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      
    </AlertDialog>

  );
}