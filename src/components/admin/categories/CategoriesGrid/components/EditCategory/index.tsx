import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import React, { useState } from "react";
import EditCategoryTrigger from "./components/editCategoryTrigger";
import EditCategoryHeader from "./components/editCategoryHeader";
import EditCategoryForm from "./components/editCategoryForm";

type EditCategoryProps = {
  category: Category;
}

export default function EditCategory({
  category,
}:EditCategoryProps): React.ReactElement {

  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <EditCategoryTrigger category={category} />

      <SheetContent>

        <EditCategoryHeader/>

        <EditCategoryForm category={category} setClose={()=>setOpen(false)} />

      </SheetContent>
      
    </Sheet>
  );
}