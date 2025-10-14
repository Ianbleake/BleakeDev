import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";

type GradeEditFormProps = {
  grade: GradeData;
}

type GradeEditFormInputs = {
  title: string;
  description: string;
  institution: string;
  date: string;
  location?: string;
  credential?: string;
}

export default function GradeEditForm({
grade,
}:GradeEditFormProps ): React.ReactElement {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GradeEditFormInputs>({
    defaultValues: {
      title: grade.name,
      description: grade.description,
      institution: grade.institution,
      date: grade.date,
      location: 'location' in grade ? grade.location : undefined,
      credential: 'credential' in grade ? grade.credential : undefined,
    },
  });

  const onSubmit = (data: GradeEditFormInputs) => {
    console.log("Form data submitted:", data);
    // TODO: Handle form submission logic here
  }

  return (
    <div className="px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" >

        <div className="flex flex-col gap-3">
          <Label>Nombre del grado:</Label>
          <Input
            type="text"
            { ...register("title",{
              required: "El titulo es obligatorio",
              maxLength: { value: 100, message: "El titulo es muy largo" },
            })}
          />
          {errors.title && (
            <span className="text-red-600 text-sm">
              {errors.title.message}
            </span>
          )}
        </div>
        {
          // TODO: Change inpiut to textarea
        }
        <div className="flex flex-col gap-3">
          <Label>Descripcion:</Label>
          <Input
            type="text"
            { ...register("description",{
              required: "La descripcion es obligatoria",
              maxLength: { value: 500, message: "La descripcion es muy larga" },
            })}
          />
          {errors.description && (
            <span className="text-red-600 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Label>Institucion:</Label>
          <Input
            type="text"
            { ...register("institution",{
              required: "La institucion es obligatoria",
            })}
          />
          {
            errors.institution && (
              <span className="text-red-600 text-sm">
                {errors.institution.message}
              </span>
            )
          }
        </div>

        {
          // TODO: Change inpiut to date picker and conditionally render if type is degree or certification
        }

        <div className="flex flex-col gap-3">
          <Label>Fecha:</Label>
          <Input
            type="text"
            { ...register("date",{
              required: "La fecha es obligatoria",
            })}
          />
        </div>

        {
          grade.type === "degree" && (
            <div className="flex flex-col gap-3">
              <Label>Ubicacion:</Label>
              <Input
                type="text"
                { ...register("location",{
                  required: "La ubicacion es obligatoria",
                })}
              />
              {
                errors.location && (
                  <span className="text-red-600 text-sm">
                    {errors.location.message}
                  </span>
                )
              }
            </div>
          )
        }

        {
          grade.type === "certification" && (
            <div className="flex flex-col gap-3">
              <Label>Credencial:</Label>
              <Input
                type="text"
                { ...register("credential",{
                  required: "La credencial es obligatoria"
                })}
              />
              {
                errors.credential && (
                  <span className="text-red-600 text-sm">
                    {errors.credential.message}
                  </span>
                )
              }
            </div>
          )
        }

        <div className="flex flex-row items-center justify-end gap-3">
          {
            // TODO: Check how to handle cancel button to close modal
          }
          <Button variant={"outline"} className="shadow-emerald-500 cursor-pointer" >
            Cancel
          </Button>
          
          <Button type="submit" disabled={isSubmitting} className="shadow-gray-500 shadow-sm cursor-pointer">
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>

      </form>
    </div>
  );
}