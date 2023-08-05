import { useState } from "react";

import BookEdit from "./BookEdit";

function BookShow({ book, deleteBookByIdCallback, editBookByIdCallback }) {
  const [bookShow, setBookShow] = useState(false);

  const handleEditBook = () => {
    setBookShow(!bookShow);
    //     editBookByIdCallback(book.id, "newTitle");
  };

  const handleDeleteBook = () => {
    deleteBookByIdCallback(book.id);
  };

  let bookShowContent = <h3>{book.title}</h3>;
  if (bookShow) {
    bookShowContent = (
      <BookEdit
        editBookByIdCallback={editBookByIdCallback}
        book={book}
        setBookShow={setBookShow}
      />
    );
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt={book.title}
      />
      {bookShowContent}
      <div className="action">
        <button className="edit" onClick={handleEditBook}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
