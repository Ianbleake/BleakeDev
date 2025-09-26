import React from "react";

export default function InformativeTexts(): React.ReactElement {
  return (
    <div className="flex flex-col items-start">

      <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Creative Developer & 
        <span className="text-emerald-400 block">Digital Craftsman</span>
      </h1>

      <p className="text-xl text-stone-300 mb-8 leading-relaxed">
        I build exceptional digital experiences that blend beautiful design with powerful functionality. 
        Specialized in modern web technologies and user-centered solutions.
      </p>

    </div>
  );
}