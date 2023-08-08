import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import BookContext from "./context/books";

function App() {

  

  useEffect(() => {
    // fetchBooks();
  }, []);


  return (
    <div className="app">
      <BookList
      // books={books}
      // deleteBookByIdCallback={deleteBookByIdCallback}
      // editBookByIdCallback={editBookByIdCallback}
      />
      <BookCreate />
    </div>
  );
}

export default App;
