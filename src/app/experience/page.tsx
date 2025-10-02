'use client'

import Page from "@/components/ui/page";
import React from "react";
import Hero from "./components/hero";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/contact";

export default function Experience(): React.ReactElement {

  return (
    <Page>
      <Hero/>
      <Timeline/>
      <Education/>
      <Certifications/>
      <Contact/>
    </Page>
  );
}