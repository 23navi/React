import { useState } from "react";
function Dropdown({ children, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value}>
        <div>{option.label}</div>
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
        Dropdown
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </>
  );
}
export default Dropdown;
