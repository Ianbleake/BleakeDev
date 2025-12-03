import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import AchievementsGrid from "./AchievementsGrid";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";

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
      achievements: [],
    }
  });

  const onSubmit = (data:AddExperienceData)=> {

    const newDegreeData = {
      ...data,
      achievements: achievements,
    }

    console.log(newDegreeData);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

      <Card className="px-4 flex flex-col gap-8">

      </Card>

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

        <Button type="submit" disabled={isSubmitting }>
          <FiSave />
          Save
        </Button>

      </div>

    </form>
  );
}