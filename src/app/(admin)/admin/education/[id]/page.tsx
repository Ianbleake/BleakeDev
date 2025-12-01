'use client'

import React from "react";
import { useParams } from "next/navigation";
import NoData from "@/components/admin/ui/NoData";
import { PiCertificate } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import useGrade from "@/hooks/education/useGrade";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import DetailPageSkeleton from "@/components/skeletons/detailPageSkeleton";
import Achievements from "@/components/admin/ui/Achievements";
import PageContent from "@/components/admin/ui/PageContent";
import DetailInfoCard from "@/components/admin/ui/DetailInfoCard";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { BsCalendarDate } from "react-icons/bs";
import moment from "moment";
import { GrTextAlignFull } from "react-icons/gr";
import GradeEdit from "@/components/admin/education/GradeActions/GradeEdit";
import RemoveGrade from "@/components/admin/education/GradeActions/removeGrade";
import useDeleteGrade from "@/hooks/education/useDeleteGrade";

export default function GradePage(): React.ReactElement {

  const params = useParams();
  const path = params.id as string;

  const { isLoading } = useGrade(path);

  const { type, gradeInfo, achievements } = useGradeStorage();

  const { mutate } = useDeleteGrade();

    const achievementsIds = achievements.map((achievement)=>{
    return(
      {
        id: achievement.id
      }
    )
  })

  const handleDelete = () => {

    const deleteGradeData = {
      gradeId: gradeInfo.id,
      type: gradeInfo.type,
      achievements: achievementsIds,
    }

    mutate(deleteGradeData)
  }

  const hasNoData = gradeInfo === null;

  const degreeInfoItems = [
    { icon: HiOutlineBuildingLibrary, info: gradeInfo?.institution || "" },
    { icon: MdOutlineLocationOn, info: gradeInfo?.location || "" },
    { icon: BsCalendarDate, info: gradeInfo?.date || "" },
    { icon: GrTextAlignFull, info: gradeInfo?.description || "", className: "col-span-3" },
  ]

  const certificateInfoItems = [
    { icon: HiOutlineBuildingLibrary, info: gradeInfo?.institution || "" },
    { icon: TbLicense, info: gradeInfo?.credential || "" },
    { icon: BsCalendarDate, info: moment(gradeInfo?.date || "").format("MMM Do YY") },
    { icon: GrTextAlignFull, info: gradeInfo?.description || "",  className: "col-span-3" },
  ]

  const gradeData = {
    icon: type === "degree" ? IoSchoolOutline : PiCertificate,
    title: gradeInfo?.name || "",
    infoItems: type === "degree" ? degreeInfoItems : certificateInfoItems,
    actions: [
      <GradeEdit grade={gradeInfo} key="editGrade" />,
      <RemoveGrade action={handleDelete} key="removeGrade" />,
    ]
  }

  if (isLoading) {
    return <DetailPageSkeleton />;
  }

  if (hasNoData) {
    return <NoData />;
  }

  return (

    <div className="flex flex-col gap-4">

      <DetailInfoCard detailData={gradeData} />

      <Achievements type={type} achievements={achievements} />

      <PageContent/>

    </div>
  );
}
