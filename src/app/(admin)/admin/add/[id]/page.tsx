'use client';

import AddCertificationForm from '@/components/admin/add/addCertificationForm';
import AddDegreeForm from '@/components/admin/add/addDegreeForm';
import AddExperienceForm from '@/components/admin/add/addExperienceForm';
import AddHeader from '@/components/admin/add/addHeader';
import { Card } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';
import { useParams } from 'next/navigation';
import React from 'react';
import { IoSchoolOutline } from 'react-icons/io5';
import { PiCertificate } from 'react-icons/pi';
import { TbCancel } from "react-icons/tb";

export default function AddPage(): React.ReactElement {

    const params = useParams();
    const { id } = params;

    const headerData = 
    id === 'degree' ? {
        icon: IoSchoolOutline,
        title: "Add New Degree",
        description: "Use the form below to add a new degree to the system. Ensure all details are accurate before submitting."
    } :
    id === 'certification' ? {
        icon: PiCertificate,
        title: "Add New Certification",
        description: "Fill out the form to add a new certification. Double-check the information for correctness."
    } :
    id === 'experience' ? {
        icon: BriefcaseBusiness,
        title: "Add New Experience",
        description: "Provide the necessary details to log a new experience. Make sure all fields are completed."
    } :
    {
      icon: TbCancel,
      title: "No Id provided",
      description: "Please provide a valid id to load the form."
    }

  return (
    <Card className="px-4">
      <AddHeader config={headerData}/>
      {
        id === 'degree' ? (
          <AddDegreeForm/>
        ):
        id === 'certification' ? (
          <AddCertificationForm/>
        ):
        id === 'experience' ? (
          <AddExperienceForm/>
        ) : <></>
      }
    </Card>
  );
}