import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCreateTech from "@/hooks/technologies/useCreateTech";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";

type AddTechFormProps = {
  onClose: () => void;
};

type addTechFormData = {
  name: string;
};

export default function AddTechForm({
  onClose,
}:AddTechFormProps ): React.ReactElement {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<addTechFormData>({
    defaultValues: {
      name: "",
    },
  });

  const { mutate:createTech } = useCreateTech();

  const onSubmit = (data: addTechFormData) => {
    createTech(data, {
      onSuccess: () => {
        onClose();
      }
    })
  };

  return (
    <form className="px-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Technology Name"
          {...register("name", { required: "Technology name is required" })}
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
          <FiSave />
          {isSubmitting ? "Adding..." : "Add Technology"}
        </Button>
      </div>
    </form>
  );
}