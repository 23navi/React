import React from "react";
import SearchBar from "./components/SearchBar";
function App() {
  // Creating a handleSubmit function that will be passed to the SearchBar component to communicate back to parent
  const handleSubmit = (term) => {
    console.log(`Searching for term: ${term}`);
  };
  return (
    <div>
      <SearchBar onSubmitCallback={handleSubmit} />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
