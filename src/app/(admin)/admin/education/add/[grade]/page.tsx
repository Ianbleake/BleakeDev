'use client'

import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import React from "react";
import AddGradeHeader from "./components/addGradeHeader";

export default function AddGradePage(): React.ReactElement {

  const params = useParams();
  const path = params.grade as string;

  const isDegree = path === 'degree';

  return (
    <Card className="px-4">
      <AddGradeHeader isDeegree={isDegree} />
    </Card>
  );
}