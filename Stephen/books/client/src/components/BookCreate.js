import { useState, useContext } from "react";

import BookContext from "../context/books";

function BookCreate() {
  const { createBookCallback } = useContext(BookContext);

  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createBookCallback(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a new Book</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title: </label>
        <input className="input" onChange={handleInputChange} value={title} />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
