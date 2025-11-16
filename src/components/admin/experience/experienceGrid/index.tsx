import React from "react";
import PageItem from "../../ui/pageItem";
import { BriefcaseBusiness } from "lucide-react";
import { useRouter } from "next/navigation";

type ExperienceGridProps = {
  experiences: Experience[];
}

export default function ExperienceGrid({
  experiences,
}:ExperienceGridProps ): React.ReactElement {

  const router = useRouter();

  const experiencesItems = experiences.map((experience) => {
    return(
      {
        icon: BriefcaseBusiness,
        name: experience.company,
        valueOne: experience.position,
        action: () => router.push(`/admin/experience/${experience.id}`),
      }
    )
  })

  return (
    <div className="grid grid-cols-2 gap-4">
      {
        experiencesItems.map((experience)=>{
          return(
            <PageItem item={experience} key={experience.name} />
          )
        })
      }
    </div>
  );
}