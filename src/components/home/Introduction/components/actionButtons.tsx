import React from "react";
import Button from "@/components/ui/button";

export default function ActionButtons(): React.ReactElement {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
      <Button label="Explore My Projects" isLink={true} route="/proyects" />
      <Button label="Let’s Work Together" isLink={true} route="/contact" variant="secondary" />
    </div>
  );
}