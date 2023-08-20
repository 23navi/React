import Route from "./components/Route";
import Link from "./components/Link";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
      </div>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
