import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import AddTechTrigger from "./components/addTechTrigger";
import AddTechHeader from "./components/addTechHeader";
import AddTechForm from "./components/addTechForm";

type AddTechProps = {
  ownerId: string;
}

export default function AddTech({
  ownerId,
}:AddTechProps ): React.ReactElement {

  const [ open, setOpen ] = useState<boolean>(false);


  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <AddTechTrigger action={()=>setOpen(true)}/>

      <SheetContent>

        <AddTechHeader/>

        <AddTechForm ownerId={ownerId} />

      </SheetContent>
    </Sheet>
  );
}