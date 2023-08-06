import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBookCallback = async (title) => {
    // Axios

    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    if (response.status > 300) {
      console.log("Error: " + response.status);
      return;
    }
    setBooks([...books, response.data]);

    // console.log("BookCreate returned: " + title);
    // // update the books array with the new title received.
    // setBooks([
    //   ...books, // adding new book to the end of array
    //   { id: Math.round(Math.random() * 10000), title: title },
    // ]);
  };

  const deleteBookByIdCallback = (id) => {
    // update the books array with the new title received.
    console.log("Delete book request for book id: " + id);
    const updatedBooks = books.filter((book) => book.id !== id);
    // this update change will trigger a re-render of BookList and BookShow.. removing the book from display
    setBooks(updatedBooks);
  };

  const editBookByIdCallback = (id, title) => {
    // update the books array with the new title received.
    console.log(
      "Edit book request for book id: " + id + " and title: " + title
    );
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList
        books={books}
        deleteBookByIdCallback={deleteBookByIdCallback}
        editBookByIdCallback={editBookByIdCallback}
      />
      <BookCreate createBookCallback={createBookCallback} />
    </div>
  );
}

export default App;
