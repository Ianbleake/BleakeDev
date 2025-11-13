import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { twTheme } from "@/utils/ThemeColors";
import { Copy } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

type AddCategoryFormProps = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

type addCategoryFormData = {
  name: string;
  icon?: File;
};

export default function AddCategoryForm({
  setClose,
}: AddCategoryFormProps): React.ReactElement {
  const [icon, setIcon] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<addCategoryFormData>({
    defaultValues: {
      icon: undefined,
      name: "",
    },
  });

  const onSubmit = (data: addCategoryFormData) => {
    console.log({ ...data, icon });
    // Aquí iría la lógica para subir el SVG al storage y crear la categoría
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo
    if (file.type !== "image/svg+xml") {
      alert("Solo se permiten archivos SVG.");
      e.target.value = ""; // limpia el input
      setIcon(undefined);
      setPreview(null);
      return;
    }

    // Crear vista previa del contenido SVG
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setPreview(event.target.result);
      }
    };
    reader.readAsText(file);
    setIcon(file);
  };

  return (
    <form className="px-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row items-center gap-4">
        <div className="h-10 w-10 p-1 flex items-center justify-center rounded-md border border-gray-200 shadow-md bg-green-50 overflow-hidden">
          {preview ? (
            <div
              className="w-full h-full flex items-center justify-center bg-transparent text-emerald-600"
              dangerouslySetInnerHTML={{ __html: preview }}
            />
          ) : (
            <Copy size={20} color={twTheme.colors.emerald[600]} />
          )}
        </div>

        <label className="flex-1">
          <Input
            type="file"
            accept=".svg,image/svg+xml"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="cursor-pointer p-3 border-2 border-dashed border-gray-200 flex flex-row items-center gap-4 rounded-md">
            <MdOutlineCloudUpload size={25} color={twTheme.colors.gray[400]} />
            <p className="text-sm font-semibold text-gray-400">
              Upload SVG Icon
            </p>
          </div>

        </label>
      </div>

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
