import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import EditCategoryHeader from "./components/addCategoryHeader";
import EditCategoryForm from "./components/addCategoryForm";
import { IoCopy } from "react-icons/io5";

export default function AddCategory(): React.ReactElement {

  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >

      <Button onClick={()=>setOpen(true)} className="ml-4 text-lg" >
        Add Category
        <IoCopy/>
      </Button>

      <SheetContent>
        <EditCategoryHeader/>

        <EditCategoryForm setClose={setOpen}/>
      </SheetContent>
    </Sheet>
  );
}