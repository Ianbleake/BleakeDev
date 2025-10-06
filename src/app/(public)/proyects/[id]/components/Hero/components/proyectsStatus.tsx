import React from "react";
import { Badge } from "@/components/ui/badge";

type ProyectStatusProps = {
  status: "Completed" | "In Progress" | "Planned";
}

export default function ProyectStatus({
  status,
}:ProyectStatusProps ): React.ReactElement {

  if(status === "In Progress") {
    return (
      <Badge className="bg-yellow-600/50 text-white border-white/20 mb-6">
        {status}
      </Badge>
    );
  }

  if(status === "Planned") {
    return (
      <Badge className="bg-blue-600/50 text-white border-white/20 mb-6">
        {status}
      </Badge>
    );
  }

  return (
    <Badge className="bg-emerald-600/50 text-white border-white/20 mb-6">
      {status}
    </Badge>
  );
}