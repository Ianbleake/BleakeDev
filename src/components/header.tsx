'use client'

import React from "react";
import Button from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { twTheme } from "@/utils/ThemeColors";
import { SiGithub } from "react-icons/si";

export default function Header(): React.ReactElement {

  const pathname = usePathname();

  if (pathname === "/contact") return (
    <header className="fixed h-16 w-full bg-gray-800 flex items-center justify-between px-8 z-10 shadow-md shadow-emerald-900">

      <Link href={"/"} className="cursor-pointer">
        <IoMdArrowRoundBack size={30} color={twTheme.colors.emerald[600]} />
      </Link>

      <Link href={"/"} >
        <h1 className="text-2xl font-semibold text-white">Bleake<span className="text-emerald-600">Dev</span></h1>
      </Link>

      <a href="https://github.com/Ianbleake" target="_blank">
        <SiGithub size={30} color={twTheme.colors.emerald[600]} />
      </a>

    </header>
  );

  return (
    <header className="fixed h-16 w-full bg-gray-800 flex items-center justify-between px-8 z-10 border-b border-gray-800 shadow-md shadow-emerald-900">
      <Link href={"/"} >
        <h1 className="text-2xl font-semibold text-white">Bleake<span className="text-emerald-600">Dev</span></h1>
      </Link>
      <nav className="none md:flex items-center gap-4">
        <a href="#about" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">About Me</a>
        <a href="#work" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">My Work</a>
        <a href="#skills" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">Skills</a>
        <Button label="Get it touch" isLink={true} route="/contact"/>
      </nav>
    </header>
  );
}