import Route from "./components/Route";
import Link from "./components/Link";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <Link to="/accordion">
          <a>Accordion</a>
        </Link>
        <Link to="/dropdown">
          <a>Dropdown</a>
        </Link>
      </div>
      <div>
        <Route path="/accordion" component={AccordionPage} />
        <Route path="/dropdown" component={DropdownPage} />
      </div>
    </div>
  );
}

export default App;
