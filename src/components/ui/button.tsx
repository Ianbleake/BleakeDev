import { merge } from "@/utils/mergeStyles";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  isLink?: boolean;
  route?: string;
  variant?: "primary" | "secondary";
  className?: string;
  isExternal?: boolean;
}

export default function Button({
  label,
  onClick,
  isLink = false,
  route,
  variant = "primary",
  className,
  isExternal,
}: ButtonProps ): React.ReactElement {

  const baseStyle = "text-white rounded-md py-2 px-4 transition"
  const buttonStyle = variant === "primary" ? merge('bg-emerald-600 hover:bg-emerald-700 border border-emerald-500 ',baseStyle) : merge('bg-gray-600 hover:bg-gray-700 border border-gray-500',baseStyle);

  if(isLink && route) {
    return(
      <Link href={route} className={merge(buttonStyle,className)}  >
        {label}
      </Link>
    )
  }

  if( route && isExternal) {
    return(
      <a href={route} target="_blank" className={merge(buttonStyle,className)} >
        {label}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={merge(buttonStyle,className)} >
      {label}
    </button>
  );
}