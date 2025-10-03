import Button from "@/components/ui/button";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { twTheme } from "@/utils/ThemeColors";

export default function Contact(): React.ReactElement {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-6">Let`s Create Something Amazing</h2>

        <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I`m always excited to work on new projects 
          and collaborate with creative minds.
        </p>
        
        <div className="flex flex-row gap-4 justify-center mb-12">
          <Button 
            label="Get In Touch"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 shadow-lg w-fit"
            isLink
            route="/contact"
          />
        </div>
        
        <div className="flex justify-center space-x-6">

          <a href="https://github.com/Ianbleake" className="text-stone-400 hover:text-emerald-400 transition-colors">
            <VscGithub size={30} color={twTheme.colors.emerald[600]} />
          </a>

          <a href="https://www.linkedin.com/in/angel-ivan-rangel-8782601b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-stone-400 hover:text-emerald-400 transition-colors">
            <FaLinkedin size={30} color={twTheme.colors.emerald[600]} />
          </a>

          <a href="mailto:bleakedev@gmail.com" className="text-stone-400 hover:text-emerald-400 transition-colors">
            <MdEmail size={30} color={twTheme.colors.emerald[600]} />
          </a>
          
        </div>

      </div>
    </section>
  );
}