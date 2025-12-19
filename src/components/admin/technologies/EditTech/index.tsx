import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import EditTechTrigger from "./components/editTechTrigger";
import EditTechHeader from "./components/editTechHeader";
import EditTechForm from "./components/editTechForm";

type EditTechProps = {
  tech: Technology;
};

export default function EditTech({
  tech,
}:EditTechProps ): React.ReactElement {

  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <EditTechTrigger/>

      <SheetContent>

        <EditTechHeader/>

        <EditTechForm tech={tech} onClose={()=>setOpen(false)}/>

      </SheetContent>

    </Sheet>
  );
}