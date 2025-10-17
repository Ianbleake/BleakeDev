'use client'

import { useParams } from "next/navigation";
import React from "react";

export default function AddGradePage(): React.ReactElement {

  const params = useParams();
  const path = params.grade as string;
  return (
    <div>Add{path}Page</div>
  );
}