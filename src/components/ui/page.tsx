import { merge } from "@/utils/mergeStyles";
import React from "react";

type PageProps = {
  className?: string;
  children?: React.ReactElement | React.ReactNode;
}

export default function Page({
  className,
  children,
}:PageProps ): React.ReactElement {
  return (

    <div className={merge('pt-16',className)}>
      {children}
    </div>
  );
}