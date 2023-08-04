import { useState } from "react";
import "./css/SearchBar.css";
function SearchBar({ onSubmitCallback }) {
  //   const handleClick = () => {
  //     // onSubmitCallback() from the parent component expects a search term.
  //     console.log("Button clicked");
  //     onSubmitCallback("cars");
  //   };

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmitCallback(searchTerm);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search:</label>
        <input value={searchTerm} onChange={handleInputChange} />
      </form>

      {/* <button onClick={handleClick}>Search</button> */}
    </div>
  );
}

export default SearchBar;
