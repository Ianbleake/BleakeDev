import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { twTheme } from "@/utils/ThemeColors";
import { IoDocumentTextOutline, IoSchoolOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrTextAlignFull } from "react-icons/gr";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { periodToString } from "@/utils/periodToString";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import AchievementsGrid from "../AchievementsGrid";

type AddDegreeData = NewDegree;

export default function AddDegreeForm(): React.ReactElement {

  const [ achievements, setAchievements ] = useState<Omit<Achievement, "id" | "grade_id" | "grade_type" >[]>([])

  const router = useRouter();

  const { control ,register, handleSubmit, formState: { errors, isSubmitting} } = useForm<AddDegreeData>({
    defaultValues: {
      institution: '',
      degree: '',
      location: '',
      period: undefined,
      description: '',
      achievements: [],
    }
  });

  const addAchievement = (achievement: Omit<Achievement, "id" | "grade_id" | "grade_type" >) => {
    setAchievements(prev => [...prev, achievement]);
  };

  const deleteAchievement = (index: number) => {
    setAchievements((prev) => prev.filter((_, i) => i !== index));
  };

  const editAchievement = (index: number, updatedData: Partial<Achievement>) => {
    setAchievements((prev) =>
      prev.map((a, i) => (i === index ? { ...a, ...updatedData } : a))
    );
  };

  const onSubmit = (data:AddDegreeData)=> {

    const newDegreeData = {
      ...data,
      achievements: achievements,
      type: 'education'
    }

    console.log('FormData:',newDegreeData)
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
              <p className="text-gray-400 text-sm font-normal" >The page content will be configurated after the degree were created.</p>
            </div>

        </div>

        <div className="grid grid-cols-2 gap-8">

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <HiOutlineBuildingLibrary size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Institution</Label>
              <Input
                type="text"
                { ...register("institution",{
                  required: "The institution is required.",
                  maxLength: { value: 100, message: "El titulo es muy largo" },
                })}
              />
              {errors.institution && (
                <span className="text-red-600 text-sm">
                  {errors.institution.message}
                </span>
              )}
            </div>

          </div>

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <IoSchoolOutline size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Degree</Label>
              <Input
                type="text"
                {
                  ...register("degree",{
                    required: "The degree name is required."
                  })
                }
              />
              {errors.degree && (
                <span className="text-red-600 text-sm">
                  {errors.degree.message}
                </span>
              )}
            </div>

          </div>

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <MdOutlineLocationOn size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Location</Label>
              <Input
                type="text"
                {
                  ...register("location",{
                    required: "The location is required."
                  })
                }
              />
              {errors.location && (
                <span className="text-red-600 text-sm">
                  {errors.location.message}
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

      <AchievementsGrid achievements={achievements} removeAchievement={deleteAchievement} editAchievement={editAchievement} addAchievement={addAchievement}  />      

      <div className="flex flex-raw items-center justify-end gap-4">

        <Button
          type="button"
          variant="outline"
          onClick={()=>router.replace('/admin/education')} 
        >
          <RiArrowGoBackFill />
          Cancel
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          <FiSave />
          Save
        </Button>

      </div>

    </form>
  );
}