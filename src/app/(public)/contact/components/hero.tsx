import React from "react";

export default function Hero(): React.ReactElement {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center bg-emerald-900/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-emerald-800">
        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
        Ready to collaborate
      </div>
      <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Let`s Work
        <span className="text-emerald-400 block">Together</span>
      </h1>
      <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Have a project in mind? I`d love to hear about it. Send me a message and 
        let`s discuss how we can bring your ideas to life.
      </p>
    </div>
  );
}