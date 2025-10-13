'use client'

import React from "react";
import Degrees from "./Degrees";
import Certifications from "./Certifications";

export default function EducationPage(): React.ReactElement {


  return (
    <div className="flex flex-1 flex-col gap-6">

      <Degrees/>

      <Certifications/>

    </div>
  );
}