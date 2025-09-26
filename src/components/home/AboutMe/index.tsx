import React from "react";
import Cards from "./components/cards";
import AboutInfo from "./components/aboutInfo";


export default function AboutMe(): React.ReactElement {
  return (
    <section id="about" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">

        <AboutInfo/>
        
        <Cards/>

      </div>
    </section>
  );
}