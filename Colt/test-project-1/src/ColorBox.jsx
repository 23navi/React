import { useState } from "react";
export default function ColorBox({ index, color }) {
  const [col, setCol] = useState(color);
  const changeColor = () => {
    setCol("red");
  };
  return (
    <h1
      key={index}
      className="color-box"
      style={{ backgroundColor: col, color: col }}
      onClick={changeColor}
    >
      Hello
    </h1>
  );
}
