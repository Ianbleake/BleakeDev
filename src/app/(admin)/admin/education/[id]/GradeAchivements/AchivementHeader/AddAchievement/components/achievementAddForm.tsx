import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SheetClose } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import useCreateAchievement from "@/hooks/education/useCreateAchievement";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";

type AchievementAddFormProps = {
  onClose: () => void;
}

type AchievementAddFormInputs = {
  description: string;
}

export default function AchievementAddForm({
  onClose,
}: AchievementAddFormProps ): React.ReactElement {

  const { gradeInfo } = useGradeStorage();
  const { mutate, isPending } = useCreateAchievement();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AchievementAddFormInputs>({
    defaultValues: {
      description: '',
    },
  });

  const onSubmit = (data: AchievementAddFormInputs) => {
    
    const newAchievement = {
      grade_id: gradeInfo.id,
      grade_type: gradeInfo.type,
      description: data.description,
    }

    mutate(newAchievement);

    onClose();
  }

  return (
    <div className="px-4">
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        <div className="flex flex-col gap-3">

          <Label>Description</Label>
          <Textarea
            rows={4}
            { ...register("description",{
              required: "La descripcion es obligatoria",
              maxLength: { value: 500, message: "La descripcion es muy larga" },
            })}
          />

          { errors.description && (
            <span className="text-red-600 text-sm">
              {errors.description.message}
            </span>
          )}

        </div>

        <div className="flex flex-row items-center justify-end gap-3">

          <SheetClose asChild>
            <Button variant={"outline"} className="shadow-emerald-500 cursor-pointer" >
              <RiArrowGoBackFill />
              Cancel
            </Button>
          </SheetClose>
          
          <Button type="submit" disabled={isSubmitting ||  isPending} className="shadow-gray-500 shadow-sm cursor-pointer">
            <FiSave />
            {isSubmitting ||  isPending ? "Saving..." : "Save"}
          </Button>
        </div>

      </form>
    </div>
  );
}