import { merge } from "@/utils/mergeStyles";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  isLink?: boolean;
  route?: string;
  variant?: "primary" | "secondary";
  className?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
};

export default function Boton({
  label,
  children,
  onClick,
  isLink = false,
  route,
  variant = "primary",
  className,
  isExternal,
  leftIcon,
  rightIcon,
  disabled = false,
}: ButtonProps): React.ReactElement {
  const baseStyle =
    "inline-flex items-center gap-2 rounded-md py-2 px-4 transition font-medium cursor-pointer";

  const variants: Record<string, string> = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 border border-emerald-500 text-white",
    secondary:
      "bg-gray-600 hover:bg-gray-700 border border-gray-500 text-white",
  };

  const disabledStyle =
    "bg-gray-400 border border-gray-300 text-gray-200 cursor-not-allowed opacity-70 hover:bg-gray-400";

  const buttonStyle = disabled
    ? merge(disabledStyle, baseStyle)
    : merge(variants[variant], baseStyle);

  const content = (
    <>
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children ?? label}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );

  if (isLink && route) {
    return (
      <Link
        href={disabled ? "#" : route}
        className={merge(buttonStyle, className)}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {content}
      </Link>
    );
  }

  if (route && isExternal) {
    return (
      <a
        href={disabled ? undefined : route}
        target="_blank"
        rel="noopener noreferrer"
        className={merge(buttonStyle, className)}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={merge(buttonStyle, className)}
    >
      {content}
    </button>
  );
}
