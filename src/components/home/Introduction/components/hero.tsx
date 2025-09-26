import React from "react";

export default function Hero(): React.ReactElement {
  return (
    <div className="relative w-full">
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl p-8 shadow-2xl border border-emerald-500/20">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1 text-emerald-100">150+</div>
              <div className="text-emerald-200 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1 text-emerald-100">5+</div>
              <div className="text-emerald-200 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1 text-emerald-100">50+</div>
              <div className="text-emerald-200 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1 text-emerald-100">24/7</div>
              <div className="text-emerald-200 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400/30 rounded-full opacity-60 animate-float"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-300/20 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
    </div>
  );
}