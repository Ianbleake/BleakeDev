import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";

type AddAchievementFormProps = {
  onClose: () => void;
  addAchievement: (achievement: Omit<Achievement, "id" | "element_id" | "type" >) => void;
}

type AchievementAddFormInputs = {
  description: string;
}

export default function AddAchievementForm({
  onClose,
  addAchievement,
}: AddAchievementFormProps ): React.ReactElement {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AchievementAddFormInputs>({
    defaultValues: {
      description: '',
    },
  });


  const onSubmit = (data: AchievementAddFormInputs ) => {
    addAchievement(data)
    onClose()
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

        <Button
          variant={"outline"}
          type="button"
          onClick={onClose}
        >
          <RiArrowGoBackFill />
          Cancel
        </Button>

        <Button
          type="button"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          <FiSave />
          Save
        </Button>

      </div>

    </div>
  );
}