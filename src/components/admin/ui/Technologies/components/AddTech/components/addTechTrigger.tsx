import { Button } from "@/components/ui/button";
import React from "react";
import { TbDeviceDesktopPlus } from "react-icons/tb";

type AddTechTriggerProps = {
  action: () => void;
}

export default function AddTechTrigger({
  action,
}: AddTechTriggerProps ): React.ReactElement {
  return (
    
    <Button onClick={action} >
      <TbDeviceDesktopPlus />
      Add Technology
    </Button>
    
  );
}