import { useState } from "react";
function BookShow({ book, deleteBookByIdCallback }) {
  const [bookShow, setBookShow] = useState(false);

  const handleDeleteBook = () => {
    deleteBookByIdCallback(book.id);
  };
  return (
    <div className="book-show">
      {book.title}
      <div className="action">
        <button className="delete" onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
