import { useContext } from "react";
import BookShow from "./BookShow";

import BooksContext from "../context/books";

function BookList({ books, deleteBookByIdCallback, editBookByIdCallback }) {
  // const data = useContext(BooksContext);
  // console.log("Book context data: ", data);
  const renderedBooks = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      deleteBookByIdCallback={deleteBookByIdCallback}
      editBookByIdCallback={editBookByIdCallback}
    />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
