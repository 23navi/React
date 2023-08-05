import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, useBooks] = useState([]);

  const createBookCallback = (title) => {
    console.log("BookCreate returned: " + title);
    // update the books array with the new title received.
  };

  const deleteBookCallback = (id) => {
    // update the books array with the new title received.
  };

  const editBookCallback = (id, title) => {
    // update the books array with the new title received.
  };

  return (
    <div>
      <BookCreate createBookCallback={createBookCallback} />
    </div>
  );
}

export default App;
