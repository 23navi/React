import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import Panel from "./Panel";
function Dropdown({ children, options, value, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (divEl.current && !divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    // cleanup when this component is not on screen... We don't want event listeners to be added to the entire page
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
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
