import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Panel from "./Panel";
function Dropdown({ children, options, value, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setIsOpen(false);
    onClick(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value}>
        <div
          className="hover:bg-sky-100 rounded cursor-pointer p-1"
          onClick={() => handleSelect(option)}
        >
          {option.label}
        </div>
      </div>
    );
  });

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-48 relative">
      <Panel
        className={twMerge("flex justify-between items-center cursor-pointer")}
        onClick={() => {
          handleClick();
        }}
      >
        {value?.label || "Select....."}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}
export default Dropdown;
