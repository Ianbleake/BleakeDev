'use client'

import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import React from "react";
import AddGradeHeader from "./components/addGradeHeader";
import AddDegreeForm from "./components/AddDegreeForm";
import AddCertificationForm from "./components/AddCertificationForm";

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