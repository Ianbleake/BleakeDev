import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

type EditAchievementFormProps = {
  editAchievement: (index: number, updatedData: Partial<Achievement>) => void;
  achievement: Omit<Achievement, "id" | "grade_id" | "grade_type">;
  onClose: ()=>void;
  index: number;
}

export default function EditAchievementForm({
  editAchievement,
  achievement,
  onClose,
  index,
}:EditAchievementFormProps ): React.ReactElement {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      description: achievement.description,
    }
  });

  const onSubmit = (data: Omit<Achievement, "id" | "grade_id" | "grade_type">  ) => {
    editAchievement(index, data)
    onClose();
  }

  return (
    <div className="flex flex-col gap-6 px-4">

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

        <Button variant="outline" className="shadow-emerald-500 cursor-pointer" onClick={onClose} >
          <RiArrowGoBackFill />
          Cancel
        </Button>

        <Button type="button" onClick={handleSubmit(onSubmit)} disabled={isSubmitting} className="shadow-gray-500 shadow-sm cursor-pointer">
          <RxUpdate />
          { isSubmitting ? "Saving..." : "Uptdate"}
        </Button>

      </div>

    </div>
  );
}