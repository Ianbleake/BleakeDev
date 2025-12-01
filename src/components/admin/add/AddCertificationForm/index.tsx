import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
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
import AchievementsGrid from "../AchievementsGrid";

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

      <Card className="px-4 flex flex-col gap-8">

        <div className="flex flex-row items-center gap-6 flex-1 justify-between border-b border-gray-200 pb-4">

            <div className="border border-gray-200 p-3 justify-center items-center rounded-md shadow-sm bg-green-50 ">
              <IoDocumentTextOutline size={30} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <h2 className="text-gray-900 font-semibold text-xl" >Degree Info</h2>
              <Separator/>
              <p className="text-gray-400 text-sm font-normal" >The page content will be configurated after the certification were created.</p>
            </div>

        </div>

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

      </Card>

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