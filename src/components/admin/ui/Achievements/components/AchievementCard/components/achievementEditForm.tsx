import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaRegTrashAlt } from "react-icons/fa";
import React from "react";
import { useForm } from "react-hook-form";
import { RxUpdate } from "react-icons/rx";
import useDeleteAchievement from "@/hooks/achievements/useDeleteAchievement";
import useUpdateAchievement from "@/hooks/achievements/useUpdateAchievement";

type AchievementEditFormProps = {
  achievement: Achievement;
  onClose: () => void;
};

type EditAchievementInput = {
  description: string;
}

export default function AchievementEditForm({
  achievement,
  onClose,
}:AchievementEditFormProps ): React.ReactElement {

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<EditAchievementInput>({defaultValues: {
    description: achievement.description,
  }});

  const { mutate:deleteMutation } = useDeleteAchievement();
  const { mutate:updateMutation } = useUpdateAchievement();

  const onSubmit = ( data: EditAchievementInput ) => {
    
    const updatedAchievement = {
      ...achievement,
      description: data.description,
    }
    updateMutation(updatedAchievement);

    onClose();
  }

  return (
    <div className="px-4" >
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

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

          <Button variant={"destructive"} className="shadow-red-500 cursor-pointer" onClick={()=>deleteMutation(achievement.id)} >
            <FaRegTrashAlt />
            Delete
          </Button>

          <Button type="submit" disabled={isSubmitting} className="shadow-gray-500 shadow-sm cursor-pointer">
            <RxUpdate />
            { isSubmitting ? "Saving..." : "Update"}
          </Button>

        </div>

      </form>
    </div>
  );
}