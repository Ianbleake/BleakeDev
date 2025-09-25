import React from "react";

export default function ProyectsStatus(): React.ReactElement {
  return (
    <div className="w-1/4 inline-flex items-center bg-emerald-900/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-emerald-800">
      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
      Available for new projects
    </div>
  );
}