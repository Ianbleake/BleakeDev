import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import { Calendar } from "@/components/ui/calendar";
import { periodToString } from "@/utils/periodToString";
import { SheetClose } from "@/components/ui/sheet";


type GradeEditFormProps = {
  grade: GradeData;
}

type GradeEditFormInputs = {
  title: string;
  description: string;
  institution: string;
  date: Date | string;
  period?: Period | string; 
  location?: string;
  credential?: string;
}

export default function GradeEditForm({
grade,
}:GradeEditFormProps ): React.ReactElement {

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GradeEditFormInputs>({
    defaultValues: {
      title: grade.name,
      description: grade.description,
      institution: grade.institution,
      date: grade.date,
      period: 'period' in grade ? grade.period : undefined,
      location: 'location' in grade ? grade.location : undefined,
      credential: 'credential' in grade ? grade.credential : undefined,
    },
  });

  const onSubmit = (data: GradeEditFormInputs) => {

    console.log("Form data submitted:", data);

    const formattedData = grade.type === "degree" ? {
      id: grade.id,
      institution: data.institution,
      degree: data.title,
      location: data.location,
      period: data.period,
      description: data.description,
    } : {
      id: grade.id,
      title: data.title,
      issuer: data.institution,
      date: data.date,
      credential: data.credential,
      description: data.description,
    }
    
    console.log("Formatted data for submission:", formattedData);

    // TODO: Create the Service and tbe Hook to update the grade
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

        <div className="flex flex-col gap-3">
          <Label>Descripcion:</Label>
          <Textarea
            rows={4}
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
          grade.type === "degree" ? (
          
          <Controller
            name="period"
            control={control}
            rules={{ required: "El periodo es obligatorio" }}
            render={({ field }) => (
              <div className="flex flex-col gap-3">
                <Label>Periodo:</Label>
                <Popover>

                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className="justify-between font-normal"
                    >
                      {field.value
                        ? periodToString(field.value as Period)
                        : "Seleccionar fecha"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent align="start" className="p-0">
                    <Calendar
                      mode="range"
                      selected={field.value ? {
                        from: new Date(String((field.value as Period).from)),
                        to: new Date(String((field.value as Period).to)),
                      } : undefined}
                      onSelect={(date) => field.onChange(date ? {
                        from: date.from?.toISOString() ?? "",
                        to: date.to?.toISOString() ?? "",
                      } : undefined)}
                      captionLayout="dropdown"
                    />
                  </PopoverContent>

                </Popover>
                
                {errors.period && (
                  <span className="text-red-600 text-sm">{errors.period.message}</span>
                )}
              </div>
            )}
          />

          ) : (
    
              <Controller
                name="date"
                control={control}
                rules={{ required: "La fecha es obligatoria" }}
                render={({ field }) => (
                  <div className="flex flex-col gap-3">
                    <Label>Fecha de término:</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className="justify-between font-normal"
                        >
                          {field.value
                            ? moment(String(field.value)).format("MMM Do YY")
                            : "Seleccionar fecha"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="p-0">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(String(field.value)) : undefined}
                          onSelect={(date) => field.onChange(date?.toISOString() ?? "")}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.date && (
                      <span className="text-red-600 text-sm">{errors.date.message}</span>
                    )}
                  </div>
                )}
              />
            
          )
        }

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

          <SheetClose asChild>
            <Button variant={"outline"} className="shadow-emerald-500 cursor-pointer" >
              Cancel
            </Button>
          </SheetClose>
          
          <Button type="submit" disabled={isSubmitting} className="shadow-gray-500 shadow-sm cursor-pointer">
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>

      </form>
    </div>
  );
}