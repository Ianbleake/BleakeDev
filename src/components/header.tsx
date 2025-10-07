'use client'

import React from "react";
import Boton from "./ui/Boton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { twTheme } from "@/utils/ThemeColors";
import { SiGithub } from "react-icons/si";
import { useRouter } from "next/navigation";

export default function Header(): React.ReactElement {

  const router = useRouter();

  const pathname = usePathname();

  if (pathname !== "/") return (
    <header className="fixed h-16 w-full bg-gray-800 flex items-center justify-between px-8 z-50 shadow-md shadow-emerald-900">

      <div onClick={() => router.back()} className="cursor-pointer">
        <IoMdArrowRoundBack size={30} color={twTheme.colors.emerald[600]} />
      </div>
 
      <Link href={"/"} >
        <h1 className="text-2xl font-semibold text-white">Bleake<span className="text-emerald-600">Dev</span></h1>
      </Link>

      <a href="https://github.com/Ianbleake" target="_blank">
        <SiGithub size={30} color={twTheme.colors.emerald[600]} />
      </a>

    </header>
  );

  return (
    <header className="fixed h-16 w-full bg-gray-800 flex items-center justify-between px-8 z-50 border-b border-gray-800 shadow-md shadow-emerald-900">
      <Link href={"/"} >
        <h1 className="text-2xl font-semibold text-white">Bleake<span className="text-emerald-600">Dev</span></h1>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <a href="#about" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">About Me</a>
        <a href="#work" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">My Work</a>
        <a href="#skills" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">Skills</a>
        <Boton label="Get it touch" isLink={true} route="/contact"/>
      </nav>

      <Boton label="Get it touch" isLink={true} route="/contact" className="block md:hidden"/>
    </header>
  );
}