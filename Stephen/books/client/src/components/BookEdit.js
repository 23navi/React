import { useState, useContext } from "react";
import BookContext from "../context/books";

function BookEdit({ setBookShow }) {
  const { book, editBookByIdCallback } = useContext(BookContext);
  const [title, setTitle] = useState(book.title);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    editBookByIdCallback(book.id, title);
    setBookShow(false);
    setTitle("");
  };

  return (
    <form className="book-edit" onSubmit={handleFormSubmit}>
      <label>Title: </label>
      <input className="input" value={title} onChange={handleInputChange} />
      <button className="button is-primary">Edit</button>
    </form>
  );
}

export default BookEdit;
