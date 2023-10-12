import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
export default function ExpandablePanel({ children, header }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => {
            handleToggleClick();
          }}
        >
          {expanded ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </div>

      {expanded && children && <div className="p-2 border-t"> {children}</div>}
    </div>
  );
}
