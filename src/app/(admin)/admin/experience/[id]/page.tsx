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

export default function ExperienceDetailPage(): React.ReactElement {

  const params = useParams();
  const experienceId = params.id as string;

  const { isLoading } = useExperienceDetail(experienceId);
  const { detailInfo, achievements, technologies } = useDetailExperienceStorage();

  const hasNoData = detailInfo === null;

  if(isLoading){
    return <DetailPageSkeleton />;
  }

  if(hasNoData){
    return <NoData/>
  }

  const experienceInfo = {
    icon: BsBriefcase,
    title: detailInfo.company,
    infoItems: [
      { icon: FaRegBuilding, info: detailInfo.company },
      { icon: MdOutlineComputer, info: detailInfo.position },
      { icon: BsCalendarDate, info: periodToString(detailInfo.period)},
      { icon: MdOutlineLocationOn, info: detailInfo.location },
      { icon: BsBriefcase, info: detailInfo.type },
      { icon: GrTextAlignFull, info: detailInfo.description, className: "col-span-3" },
    ],
    actions: [
      <></>,
      <></>,
    ]
  }

  return (
    <div className="flex flex-col gap-4">

      <DetailInfoCard detailData={experienceInfo}/>

      <Technologies technologies={technologies}/>

      <Achievements type='experience' achievements={achievements}/> 
      
      <PageContent/>

    </div>
  );
}