import Link from "next/link";
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  isLink?: boolean;
  route?: string;
}

export default function Button({
  label,
  onClick,
  isLink = false,
  route,
}: ButtonProps ): React.ReactElement {

  if(isLink && route) {
    return(
      <Link href={route} className="bg-emerald-600 text-white rounded-md p-2 transition hover:bg-emerald-700"  >
        {label}
      </Link>
    )
  }
  return (
    <button onClick={onClick} className="bg-emerald-600 h-full w-fit text-white" >
      {label}
    </button>
  );
}