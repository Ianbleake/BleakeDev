import { Card } from "@/components/ui/card";
import React from "react";
import PageContentHeader from "./components/pageContentHeader";
import PageContentInfo from "./components/pageContentInfo";

export default function GradePageContent(): React.ReactElement {
  return (
    <Card className="px-4">

      <PageContentHeader/>

      <PageContentInfo/>

    </Card>
  );
}