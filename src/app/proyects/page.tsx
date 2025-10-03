"use client";

import React from "react";
import Hero from "./components/hero";
import Page from "@/components/ui/page";
import ProyectsGrid from "./components/proyectGrid";
import CategoryFilters from "./components/categoryFilters";

export default function ProyectsPage(): React.ReactElement {

  return (
    <Page>
      <section className="pt-12 pb-16 px-6 bg-gray-900">
        <Hero />
        <CategoryFilters />
      </section>

      <ProyectsGrid />
    </Page>
  );
}





