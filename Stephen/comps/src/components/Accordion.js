import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleItemClick = (index) => {
    setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <AiFillCaretLeft /> : <AiFillCaretDown />}
      </span>
    );
    return (
      <div key={item.key}>
        <div
          className={twMerge(
            "flex justify-between p-3 bg-gray-50 items-center border-b cursor-pointer"
          )}
          onClick={() => handleItemClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="p-5 border-b">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-t border-x rounded">{renderedItems}</div>;
}

export default Accordion;
