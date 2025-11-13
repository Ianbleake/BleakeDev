import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import { Copy } from "lucide-react";
import EditCategoryHeader from "./components/addCategoryHeader";
import EditCategoryForm from "./components/addCategoryForm";

export default function AddCategory(): React.ReactElement {

  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >

      <Button onClick={()=>setOpen(true)} className="ml-4" >
        <Copy/>
        Add Category
      </Button>

      <SheetContent>
        <EditCategoryHeader/>

        <EditCategoryForm setClose={setOpen}/>
      </SheetContent>
    </Sheet>
  );
}