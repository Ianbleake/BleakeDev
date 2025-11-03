import React from "react";
import { FaRegClock } from "react-icons/fa";

export default function PageContentInfo(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-muted-foreground border border-dashed rounded-2xl">
      <FaRegClock className="text-4xl mb-3 opacity-70" />
      <h2 className="text-lg font-semibold mb-2">Content coming soon</h2>
      <p className="text-sm">This section is under construction.</p>
    </div>
  );
}
