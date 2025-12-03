import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { twTheme } from "@/utils/ThemeColors";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BsCalendarDate } from "react-icons/bs";
import { GrTextAlignFull } from "react-icons/gr";
import { Textarea } from "@/components/ui/textarea";
import { TbLicense } from "react-icons/tb";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import moment from "moment";
import { PiCertificate } from "react-icons/pi";
import useCreateGrade from "@/hooks/education/useCreateGrade";
import AchievementsGrid from "./AchievementsGrid";
import AddInfoCard from "./addInfoCard";


type AddCertificationData = NewCertification;

export default function AddCertificationForm(): React.ReactElement {

  const [ achievements, setAchievements ] = useState<NewAchievement[]>([])

  const router = useRouter();

  const { control ,register, handleSubmit, formState: { errors, isSubmitting} } = useForm<AddCertificationData>({
    defaultValues: {
      title: '',
      issuer: '',
      date: '',
      credential: '',
      description: '',
    }
  });

  const { mutate: createGrade, isPending } = useCreateGrade("certification");

  const onSubmit = (data:AddCertificationData)=> {

    const newCertificationData = {
      ...data,
      achievements: achievements,
    }

    createGrade(newCertificationData);
  
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

      <AddInfoCard title="Certification Info">
        <div className="grid grid-cols-2 gap-8">

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <HiOutlineBuildingLibrary size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Issuer</Label>
              <Input
                type="text"
                { ...register("issuer",{
                  required: "The issuer is required.",
                  maxLength: { value: 100, message: "El titulo es muy largo" },
                })}
              />
              {errors.issuer && (
                <span className="text-red-600 text-sm">
                  {errors.issuer.message}
                </span>
              )}
            </div>

          </div>

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <PiCertificate size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Title</Label>
              <Input
                type="text"
                {
                  ...register("title",{
                    required: "The title name is required."
                  })
                }
              />
              {errors.title && (
                <span className="text-red-600 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>

          </div>

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <BsCalendarDate size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Controller
                name="date"
                control={control}
                rules={{ required: "La fecha es obligatoria" }}
                render={({ field }) => (
                  <div className="flex flex-col gap-3">
                    <Label>Date:</Label>
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
            </div>

          </div>

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <TbLicense size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Credential</Label>
              <Input
                type="text"
                {
                  ...register('credential',{
                  })
                }
              />
              {errors.credential && (
                <span className="text-red-600 text-sm">
                  {errors.credential.message}
                </span>
              )}
            </div>

          </div>

          <div className="flex flex-row items-center gap-3 col-span-2">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <GrTextAlignFull size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Description</Label>
              <Textarea
                rows={4}
                {
                  ...register('description',{
                    required: "The description are required."
                  })
                }
              />
              {errors.description && (
                <span className="text-red-600 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>

          </div>

        </div>
      </AddInfoCard>

      <AchievementsGrid achievements={achievements} setAchievements={setAchievements} />      

      <div className="flex flex-raw items-center justify-end gap-4">

        <Button
          type="button"
          variant="outline"
          onClick={()=>router.replace('/admin/education')} 
        >
          <RiArrowGoBackFill />
          Cancel
        </Button>

        <Button type="submit" disabled={ isSubmitting || isPending }>
          <FiSave />
          Save
        </Button>

      </div>

    </form>
  );
}