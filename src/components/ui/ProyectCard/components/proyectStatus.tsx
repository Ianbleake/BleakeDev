import React from "react";

type ProyectStatusProps = {
  status: "Completed" | "In Progress" | "Planned";
}

export default function ProyectStatus({
  status,
}:ProyectStatusProps): React.ReactElement {

  if(status === "In Progress") {
    return (
      <div className="absolute bottom-1 right-1 z-20">
        <span className="bg-yellow-400/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
          {status}
        </span>
      </div>
    );
  }

  if(status === "Planned") {
    return (
      <div className="absolute bottom-1 right-1 z-20">
        <span className="bg-blue-400/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
          {status}
        </span>
      </div>
    );
  }

  return (
    <div className="absolute bottom-1 right-1 z-20">
      <span className="bg-emerald-400/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
        {status}
      </span>
    </div>
  );
}