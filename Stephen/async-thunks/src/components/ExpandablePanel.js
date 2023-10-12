import { useState } from "react";
export default function ExpandablePanel({ children, header }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
      </div>
      {expanded && children && children.length > 0 && (
        <div className="p-2 border-t"> {children}</div>
      )}
    </div>
  );
}
