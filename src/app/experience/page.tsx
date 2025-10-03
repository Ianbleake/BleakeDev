'use client'

import React from "react";
import Hero from "./components/hero";
import Page from "@/components/ui/page";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ExperienceContact from "./components/experienceContact";


export default function ExperiencePage(): React.ReactElement {

  return (
    <Page>
      <Hero/>
      <Timeline/>
      <Education/>
      <Certifications/>
      <ExperienceContact/>
    </Page>
  );
}