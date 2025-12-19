import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Cpu } from "lucide-react";
import React, { useState } from "react";
import AddTechHeader from "./components/addTechHeader";
import AddTechForm from "./components/addTechForm";


export default function AddTech(): React.ReactElement {

  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >

      <Button onClick={()=>setOpen(true)} className="ml-4 text-lg" >
        Add Technology
        <Cpu/>
      </Button>

      <SheetContent>

        <AddTechHeader/>

        <AddTechForm onClose={()=>setOpen(false)}/>

      </SheetContent>
    </Sheet>
  );
}