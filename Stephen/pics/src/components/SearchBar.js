function SearchBar({ onSubmitCallback }) {
  //   const handleClick = () => {
  //     // onSubmitCallback() from the parent component expects a search term.
  //     console.log("Button clicked");
  //     onSubmitCallback("cars");
  //   };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form is submited");
  };
  return (
    <>
      <h1>Hello SearchBar</h1>
      <form onSubmit={handleFormSubmit}>
        <input />
        {/* <input /> */}
      </form>

      {/* <button onClick={handleClick}>Search</button> */}
    </>
  );
}

export default SearchBar;
