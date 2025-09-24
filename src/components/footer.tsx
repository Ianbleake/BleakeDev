import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { twTheme } from "@/utils/ThemeColors";

export default function Footer(): React.ReactElement {
  return (
    <footer className="py-8 px-6 bg-gray-800 border-t border-stone-800 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
          <a href="#" target="_blank">
            <VscGithub size={30} color={twTheme.colors.emerald[600]} />
          </a>

          <a href="#" target="_blank">
            <FaLinkedin size={30} color={twTheme.colors.emerald[600]} />
          </a>

          <a href="#" target="_blank">
            <MdEmail size={30} color={twTheme.colors.emerald[600]} />
          </a>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-stone-200">
          © 2025 <a href="" target="_blank" className="hover:text-emerald-500 hover:underline">BleakeDev</a>. Crafted with passion and emerald precision.
        </p> 
      </div>
    </footer>
  );
}