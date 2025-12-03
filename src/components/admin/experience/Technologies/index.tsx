import { Card } from "@/components/ui/card";
import React from "react";
import TechHeader from "./components/techHeader";
import TechGrid from "./components/techGrid";
import Empty from "../../ui/empty";
import { TbDeviceDesktopCancel } from "react-icons/tb";

type TechnologiesProps = {
  technologies: Technology[];
}

export default function Technologies({
  technologies,
}: TechnologiesProps ): React.ReactElement {
  return (
    <Card className="px-4">
      
      <TechHeader/>

      {
        technologies.length > 0 ? (
          <TechGrid technologies={technologies}/>
        ) : (
          <Empty icon={TbDeviceDesktopCancel} title="No technologies" description="Add new technologies with the button on the header of this card" />
        )
      }

    </Card>
  );
}