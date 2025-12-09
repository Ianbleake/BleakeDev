import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import useTechnologies from "@/hooks/technologies/useTechnologies";
import React, { useState } from "react";
import { TbDeviceDesktopPlus } from "react-icons/tb";

type AddTechProps = {
  ownerId: string;
}

export default function AddTech({
  ownerId,
}:AddTechProps ): React.ReactElement {

  const { isLoading, technologies } = useTechnologies();

  const [ open, setOpen ] = useState<boolean>(false);


  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <SheetTrigger>
      <Button>
        <TbDeviceDesktopPlus />
        Add Technology
      </Button>
      </SheetTrigger>
    </Sheet>
  );
}