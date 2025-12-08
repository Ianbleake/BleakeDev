import { Card } from "@/components/ui/card";
import React from "react";
import TechHeader from "./components/techHeader";
import TechGrid from "./components/TechGrid";
import Empty from "../empty";
import { TbDeviceDesktopCancel } from "react-icons/tb";
import AddTech from "./components/AddTech";

type TechnologiesProps = {
  ownerId: string;
  technologies: Technology[];
}

export default function Technologies({
  ownerId,
  technologies,
}: TechnologiesProps ): React.ReactElement {
  return (
    <Card className="px-4">
      
      <TechHeader>
        <AddTech ownerId={ownerId}/>
      </TechHeader>

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