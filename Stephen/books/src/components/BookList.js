import BookShow from "./BookShow";
function BookList({ books, deleteBookByIdCallback }) {
  const renderedBooks = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      deleteBookByIdCallback={deleteBookByIdCallback}
    />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
