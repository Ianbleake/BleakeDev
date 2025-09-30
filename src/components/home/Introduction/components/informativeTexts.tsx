import React from "react";

export default function InformativeTexts(): React.ReactElement {
  return (
    <div className="flex flex-col items-start">

      <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Turning Ideas Into 
        <span className="text-emerald-400 block">Digital Products</span>
      </h1>

      <p className="text-xl text-stone-300 mb-8 leading-relaxed">
        From websites to mobile apps, I create digital solutions tailored to your needs.
        Combining design, functionality, and technology for impactful results.
      </p>


    </div>
  );
}