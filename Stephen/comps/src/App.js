import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { key: "132424", label: "First", value: "First value" },
    { key: "1332948", label: "Second", value: "Second value" },
    { key: "12304723", label: "Third", value: "Third value" },
    { key: "1293742", label: "Forth", value: "Forth value" },
  ];
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
