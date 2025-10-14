import { Button } from "@/components/ui/button";
import React from "react";
import { MdModeEdit } from "react-icons/md";

export default function GradeEdit(): React.ReactElement {
  return (
    <>
      <Button className="text-lg font-normal cursor-pointer select-none">
        <MdModeEdit />
        Edit
      </Button>
    </>
  );
}