import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "First", value: "First value" },
    { label: "Second", value: "Second value" },
    { label: "Third", value: "Third value" },
    { label: "Forth", value: "Forth value" },
  ];
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
