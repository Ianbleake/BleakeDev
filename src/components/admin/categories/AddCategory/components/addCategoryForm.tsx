import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCreateCategory from "@/hooks/categories/useCreateCategory";
import React from "react";
import { useForm } from "react-hook-form";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

type AddCategoryFormProps = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

type addCategoryFormData = {
  name: string;
};

export default function AddCategoryForm({
  setClose,
}: AddCategoryFormProps): React.ReactElement {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<addCategoryFormData>({
    defaultValues: {
      name: "",
    },
  });

  const { mutate } = useCreateCategory();

  const onSubmit = (data: addCategoryFormData) => {
   mutate(data);
  };


  return (
    <form className="px-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

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
          onClick={() => setClose(false)}
        >
          <RiArrowGoBackFill />
          Cancel
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          <RxUpdate />
          {isSubmitting ? "Adding..." : "Add Category"}
        </Button>
      </div>
    </form>
  );
}
