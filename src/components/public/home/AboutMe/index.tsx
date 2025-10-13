import React from "react";
import AboutInfo from "./components/aboutInfo";
import InfoCard from "./components/infoCard";
import { FaCode } from "react-icons/fa6";
import { AiOutlineMobile } from "react-icons/ai";
import { GoZap } from "react-icons/go";


export default function AboutMe(): React.ReactElement {
  return (
    <section id="about" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">

        <AboutInfo/>
        
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard
            icon={FaCode}
            title="Clean Code"
            description="Writing maintainable, scalable code that follows best practices and industry standards."
          />
          <InfoCard
            icon={AiOutlineMobile}
            title="Web & Mobile Development"
            description="Creating modern applications with React, Next.js, and React Native, optimized for performance and user experience."
          />
          <InfoCard
            icon={GoZap}
            title="Performance"
            description="Optimizing applications for speed, efficiency, and seamless user interactions."
          />
        </div>
        

      </div>
    </section>
  );
}