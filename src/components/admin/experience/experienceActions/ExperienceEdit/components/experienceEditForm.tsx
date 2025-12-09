import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SheetClose } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import useUpdateExperience from "@/hooks/experience/useUpdateExperience";
import { periodToString } from "@/utils/periodToString";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

type ExperienceEditFormProps = {
  experience: ExperienceInfo;
  onClose: () => void;
}

export default function ExperienceEditForm({
  experience,
  onClose,
}:ExperienceEditFormProps ): React.ReactElement {

  const { control, register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ExperienceInfo>({
    defaultValues: {
      company: experience.company,
      position: experience.position,
      location: experience.location,
      period: experience.period ?? undefined,
      description: experience.description,
      type: experience.type,
    }
  });
  
  const { mutate:updateExperience } = useUpdateExperience();

  const onSubmit = (data: ExperienceInfo) => {

    const formattedData = {
      ...data,           
      id: experience.id   
    };
  
    updateExperience(formattedData);
    onClose();

  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 px-4 overflow-auto pb-3">

      <div className="flex flex-col gap-3">
        <Label>Company</Label>
        <Input
          type="text"
          { ...register("company",{
            required: "The company is required",
          })}
        />
        {errors.company && (
          <span className="text-red-600 text-sm">
            {errors.company.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Label>Position</Label>
        <Input
          type="text"
          { ...register("position",{
            required: "The position is required",
          })}
        />
        {errors.position && (
          <span className="text-red-600 text-sm">
            {errors.position.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Label>Location</Label>
        <Input
          type="text"
          { ...register("location",{
            required: "The location is required",
          })}
        />
        {errors.location && (
          <span className="text-red-600 text-sm">
            {errors.location.message}
          </span>
        )}
      </div>     

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
                      { field.value?.from && field.value?.to
                        ? periodToString(field.value as Period)
                        : "Seleccionar fecha" }

                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent align="start" className="p-0">
                    <Calendar
                      mode="range"
                      selected={
                        field.value && field.value.from && field.value.to
                          ? {
                              from: new Date(field.value.from),
                              to: new Date(field.value.to),
                            }
                          : undefined
                      }                      
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

      <Controller
        name="type"
        control={control}
        rules={{ required: "The type is required." }}
        render={({ field }) => (
          <div className="flex flex-col gap-3">
            <Label>Type</Label>

            <Select
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a type of work" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Work Type</SelectLabel>

                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>

            {errors.type && (
              <span className="text-red-600 text-sm">{errors.type.message}</span>
            )}
          </div>
        )}
      />

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

      <div className="flex flex-row items-center justify-end gap-3">

        <SheetClose asChild>
          <Button variant={"outline"} className="shadow-emerald-500 cursor-pointer" >
            <RiArrowGoBackFill />
            Cancel
          </Button>
        </SheetClose>

        <Button type="submit" disabled={isSubmitting } className="shadow-gray-500 shadow-sm cursor-pointer">
          <RxUpdate />
          { isSubmitting ? "Saving..." : "Update"}
        </Button>
        
      </div>      

    </form>
  );
}