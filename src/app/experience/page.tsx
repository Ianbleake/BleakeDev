'use client'

import Page from "@/components/ui/page";
import React from "react";
import Hero from "./components/hero";
import Timeline from "./components/Timeline";

export default function Experience(): React.ReactElement {

  return (
    <Page>
      <Hero/>
      <Timeline/>
    </Page>
  );
}