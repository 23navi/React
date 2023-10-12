import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
export default function ExpandablePanel({ children, header }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        {expanded ? (
          <div>
            <GoChevronUp />
          </div>
        ) : (
          <div>
            <GoChevronDown />
          </div>
        )}
      </div>
      {expanded && children && children.length > 0 && (
        <div className="p-2 border-t"> {children}</div>
      )}
    </div>
  );
}
