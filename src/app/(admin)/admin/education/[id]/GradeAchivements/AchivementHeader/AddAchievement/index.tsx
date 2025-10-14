import { Button } from "@/components/ui/button";
import React from "react";
import { GoTrophy } from "react-icons/go";

export default function AddAchivement(): React.ReactElement {
  return (
    <>
        <Button>
          <GoTrophy />
          Add Achievement
        </Button>
    </>
  );
}