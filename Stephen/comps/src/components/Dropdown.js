import { useState } from "react";
function Dropdown({ children, options, value, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setIsOpen(false);
    onClick(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value}>
        <div onClick={() => handleSelect(option)}>{option.label}</div>
      </div>
    );
  });

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
      >
        {value?.label || "Select....."}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </>
  );
}
export default Dropdown;
