'use client'

import React from "react";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import AddDegreeForm from "@/components/admin/education/addGrade/AddDegreeForm";
import AddGradeHeader from "@/components/admin/education/addGrade/addGradeHeader";
import AddCertificationForm from "@/components/admin/education/addGrade/AddCertificationForm";


export default function AddGradePage(): React.ReactElement {

  const params = useParams();
  const path = params.grade as string;

  const isDegree = path === 'degree';

  return (
    <Card className="px-4">
      <AddGradeHeader isDeegree={isDegree} />

      {
        isDegree ? (
          <AddDegreeForm/>
        ) : (
          <AddCertificationForm/>
        )
      }
    </Card>
  );
}