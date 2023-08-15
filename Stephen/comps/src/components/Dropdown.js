import { useState } from "react";
import { twMerge } from "tailwind-merge";
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
      <div
        className={twMerge(
          "flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        )}
        onClick={() => {
          handleClick();
        }}
      >
        {value?.label || "Select....."}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
