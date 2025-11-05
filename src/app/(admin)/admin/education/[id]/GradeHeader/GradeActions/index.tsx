import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import GradeEdit from "../GradeEdit";
import { HiOutlineMenu } from "react-icons/hi";
import { twTheme } from "@/utils/ThemeColors";
import { Info, Trash } from "lucide-react";
import useDeleteGrade from "@/hooks/education/useDeleteGrade";

type GradeActionsProps = {
  grade: GradeData;
}
export default function GradeActions({
  grade,
}:GradeActionsProps ): React.ReactElement {

  const { mutate } = useDeleteGrade();

  const handleDelete = () => {

    const deleteGradeData = {
      gradeId: grade.id,
      type: grade.type,
    }

    mutate(deleteGradeData)
  }

  return (
    <DropdownMenu>

      <DropdownMenuTrigger className="h-9 w-20 flex items-center justify-center cursor-pointer">
        <HiOutlineMenu size={30} color={twTheme.colors.emerald[600]} />
      </DropdownMenuTrigger>


      <DropdownMenuContent>

        <DropdownMenuLabel className="flex flex-row items-center justify-center gap-2">
          Actions
          <Info className="mr-2 h-4 w-4" />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        
        <GradeEdit grade={grade} />
        

        <DropdownMenuItem onClick={handleDelete}>
          <Trash className="mr-2 h-4 w-4" color={twTheme.colors.red[500]} />
          <span className="text-red-500">Delete</span>
        </DropdownMenuItem>


      </DropdownMenuContent>
    </DropdownMenu>
  );

}