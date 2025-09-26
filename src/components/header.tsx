import React from "react";
import Button from "./ui/button";

export default function Header(): React.ReactElement {
  return (
    <header className="fixed h-16 w-full bg-gray-800 flex items-center justify-between px-8">
      <h1 className="text-2xl font-semibold text-white">Bleake<span className="text-emerald-600">Dev</span></h1>
      <nav className="none md:flex items-center gap-4">
        <a href="#about" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">Sobre mi</a>
        <a href="#work" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">Proyectos</a>
        <a href="#skills" className="text-lg text-stone-300 hover:text-emerald-400 transition-colors font-medium">Habilidades</a>
        <Button label="Contacto" isLink={true} route="/contact"/>
      </nav>
    </header>
  );
}