import BookShow from "./BookShow";
function BookList({ books, deleteBookByIdCallback, editBookByIdCallback }) {
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
