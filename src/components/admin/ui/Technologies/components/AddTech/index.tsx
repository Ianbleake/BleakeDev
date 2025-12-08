import { Button } from "@/components/ui/button";
import React from "react";
import { TbDeviceDesktopPlus } from "react-icons/tb";

type AddTechProps = {
  ownerId: string;
}

export default function AddTech({
  ownerId,
}:AddTechProps ): React.ReactElement {
  return (
    <Button>
      <TbDeviceDesktopPlus />
      Add Technology
    </Button>
  );
}