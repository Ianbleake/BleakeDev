import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

type EditTechFormProps = {
  tech: Technology;
  onClose: ()=>void;
}

type EditTechFormData = {
  name: string;
}

export default function EditTechForm({
  tech,
  onClose,
}: EditTechFormProps ): React.ReactElement {

  const { handleSubmit, register, formState: { errors, isSubmitting }  } = useForm<EditTechFormData>({
    defaultValues: {
      name: tech.name,
    }
  })

  const onSubmit = (data: EditTechFormData ) => {

    const updatedTech = {
      ...tech,
      name: data.name,
    }

    console.log(updatedTech);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 flex flex-col gap-4">

      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Category Name"
          {...register("name", { required: "Category name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-row items-center justify-end gap-4 mt-4">
        <Button
          type="button"
          variant={"outline"}
          disabled={isSubmitting}
          onClick={onClose}
        >
          <RiArrowGoBackFill />
          Cancel
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          <RxUpdate />
          {isSubmitting ? "Updating..." : "Update Technology"}
        </Button>
      </div>

    </form>
  );
}