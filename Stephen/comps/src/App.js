import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const options = [
    { label: "First", value: "First value" },
    { label: "Second", value: "Second value" },
    { label: "Third", value: "Third value" },
    { label: "Forth", value: "Forth value" },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };
  return (
    <div className="App">
      <Dropdown options={options} onClick={handleSelect} value={selected} />
    </div>
  );
}

export default App;
