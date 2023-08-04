import React from "react";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = React.useState([]);
  // const images = [];
  // Creating a handleSubmit function that will be passed to the SearchBar component to communicate back to parent
  const handleSubmit = async (term) => {
    console.log(`Searching for term: ${term}`);
    const result = await searchImage(term);
    setImages(result.data.results);
  };
  return (
    <div>
      <h1>Search Images</h1>
      <SearchBar onSubmitCallback={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
