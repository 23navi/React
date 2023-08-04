import { useState } from "react";
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
    <>
      <h1>Hello SearchBar</h1>
      <form onSubmit={handleFormSubmit}>
        <input value={searchTerm} onChange={handleInputChange} />
      </form>

      {/* <button onClick={handleClick}>Search</button> */}
    </>
  );
}

export default SearchBar;
