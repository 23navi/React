// import { createContext } from "react";

// const BooksContext = createContext();

// export default BooksContext;

import { createContext } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const valuesToShare = {};
  return <BooksContext value={valuesToShare}>{children}</BooksContext>;
}

export { Provider };
export default BooksContext;
