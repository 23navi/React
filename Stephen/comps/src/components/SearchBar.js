import { useState } from "react";
import Button from "../components/Button";

function SearchBar({ onSubmitCallback }) {
  const [searchTerm, setSearchTerm] = useState(0);
  console.log(searchTerm);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmitCallback(searchTerm);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col items-center justify-center space-y-2 my-4 ">
          <label className="text-gray-700 font-medium fill-orange-300">
            Enter Value:
          </label>
          <input
            className="bg-gray-200 rounded-lg p-2 m-2 bor"
            min="0"
            max="100"
            step="1"
            type={"number"}
            placeholder="0"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Button type="submit">Add Value</Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
