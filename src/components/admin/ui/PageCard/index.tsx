import { Card } from "@/components/ui/card";
import React from "react";
import PageCardHeader from "./components/pageCardHeader";

type PageCardProps = {
  children: React.ReactElement;
  data: PageCardHeaderData; 
}

export default function PageCard({
  children,
  data,
}:PageCardProps ): React.ReactElement {
  return (
    <Card className="px-4">

      <PageCardHeader headerData={data}/>

      { children }
      
    </Card>
  );
}