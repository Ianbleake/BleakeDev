'use client';

import Achievements from '@/components/admin/ui/Achievements';
import DetailInfoCard from '@/components/admin/ui/DetailInfoCard';
import NoData from '@/components/admin/ui/NoData';
import DetailPageSkeleton from '@/components/skeletons/detailPageSkeleton';
import useExperienceDetail from '@/hooks/experience/useExperienceDetail';
import { useDetailExperienceStorage } from '@/storage/Admin/detailExperienceStorage';
import { BsBriefcase } from "react-icons/bs";
import { useParams } from 'next/navigation';
import React from 'react';
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrTextAlignFull } from "react-icons/gr";
import PageContent from '@/components/admin/ui/PageContent';
import { periodToString } from '@/utils/periodToString';
import Technologies from '@/components/admin/ui/Technologies';
import RemoveExperience from '@/components/admin/experience/experienceActions/removeExperience';
import useRemoveExperience from '@/hooks/experience/useRemoveExperience';
import ExperienceEdit from '@/components/admin/experience/experienceActions/ExperienceEdit';

export default function ExperienceDetailPage(): React.ReactElement {

  const params = useParams();
  const experienceId = params.id as string;

  const { isLoading, error } = useExperienceDetail(experienceId);
  const { detailInfo, achievements, technologies } = useDetailExperienceStorage();
  const { mutate:deleteExperience } = useRemoveExperience();

  const hasNoData = detailInfo === null;

  if(isLoading){
    return <DetailPageSkeleton />;
  }

  if( hasNoData || error ){
    return <NoData/>
  }

  const achievementsIds = achievements.map((achievement)=>{
    return(
      {
        id: achievement.id
      }
    )
  })

  const handleDelete = () => {

    const deletedExperienceData = {
      experienceId: detailInfo.id,
      achievements: achievementsIds,
    }

    deleteExperience(deletedExperienceData);
    
  }

  const experienceInfo = {
    icon: BsBriefcase,
    title: detailInfo.company,
    infoItems: [
      { icon: MdOutlineComputer, info: detailInfo.position },
      { icon: BsCalendarDate, info: periodToString(detailInfo.period)},
      { icon: MdOutlineLocationOn, info: detailInfo.location },
      { icon: BsBriefcase, info: detailInfo.type },
      { icon: GrTextAlignFull, info: detailInfo.description, className: "col-span-2" },
    ],
    actions: [
      <ExperienceEdit experience={detailInfo} key={"editExperience"}/>,
      <RemoveExperience action={handleDelete} key={"removeExperience"}/>,
    ]
  }

  return (
    <div className="flex flex-col gap-4">

      <DetailInfoCard detailData={experienceInfo}/>

      <Technologies ownerId={detailInfo.id} technologies={technologies}/>

      <Achievements type='experience' achievements={achievements}/> 
      
      <PageContent/>

    </div>
  );
}