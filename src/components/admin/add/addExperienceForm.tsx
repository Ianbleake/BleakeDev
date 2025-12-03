import React, { useState } from "react";
import AchievementsGrid from "./AchievementsGrid";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import AddInfoCard from "./addInfoCard";
import { FaRegBuilding } from "react-icons/fa";
import { twTheme } from "@/utils/ThemeColors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MdOutlineComputer, MdOutlineLocationOn } from "react-icons/md";
import { BsBriefcase, BsCalendarDate } from "react-icons/bs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { periodToString } from "@/utils/periodToString";
import { Calendar } from "@/components/ui/calendar";
import { GrTextAlignFull } from "react-icons/gr";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import useCreateExperience from "@/hooks/experience/useCreateExperience";

type AddExperienceData = NewExperience;

export default function AddExperienceForm(): React.ReactElement {

  const [ achievements, setAchievements ] = useState<NewAchievement[]>([])

  const router = useRouter();

  const { control ,register, handleSubmit, formState: { errors, isSubmitting} } = useForm<AddExperienceData>({
    defaultValues: {
      company: '',
      position: '',
      location: '',
      period: undefined,
      description: '',
      type: '',
      achievements: [],
    }
  });

  const { mutate:createExperience, isPending } = useCreateExperience();

  const onSubmit = (data:AddExperienceData)=> {

    const newDegreeData = {
      ...data,
      achievements: achievements,
    }

    createExperience(newDegreeData);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

      <AddInfoCard title="Experience Info" >
        <div className="grid grid-cols-2 gap-8">

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <FaRegBuilding size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Company</Label>
              <Input
                type="text"
                { ...register("company",{
                  required: "The institution is required.",
                  maxLength: { value: 100, message: "El titulo es muy largo" },
                })}
              />
              {errors.company && (
                <span className="text-red-600 text-sm">
                  {errors.company.message}
                </span>
              )}
            </div>

          </div>

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <MdOutlineComputer size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <Label>Position</Label>
              <Input
                type="text"
                {
                  ...register("position",{
                    required: "The degree name is required."
                  })
                }
              />
              {errors.position && (
                <span className="text-red-600 text-sm">
                  {errors.position.message}
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
                    <Label>Period</Label>
                    <Popover>

                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className={ field.value ? "justify-between font-normal text-gray-900" : "justify-between font-normal text-gray-500"}
                        >
                          {field.value
                            ? periodToString(field.value as Period)
                            : "Seleccionar fecha"}
                          <ChevronDownIcon color={twTheme.colors.stone[400]} />
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

          <div className="flex flex-row items-center gap-3">

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

          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-md">
              <BsBriefcase size={40} color={twTheme.colors.emerald[600]} />
            </div>

            <div className="flex flex-col gap-3 flex-1">
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
            </div>

          </div>

        </div>
      </AddInfoCard>

      <AchievementsGrid achievements={achievements} setAchievements={setAchievements} />

      <div className="flex flex-raw items-center justify-end gap-4">

        <Button
          type="button"
          variant="outline"
          onClick={()=>router.replace('/admin/experience')} 
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