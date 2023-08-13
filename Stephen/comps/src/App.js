import Accordion from "./components/Accordion";

function App() {
  const items = [
    { key: "132424", label: "First", content: "First Content" },
    { key: "1332948", label: "Second", content: "Second Content" },
    { key: "12304723", label: "Third", content: "Third Content" },
    { key: "1293742", label: "Forth", content: "Forth Content" },
  ];
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
