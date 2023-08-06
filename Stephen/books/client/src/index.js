import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

// import BooksContext from "./context/books";

import { Provider } from "./context/books";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);

// root.render(<App />);
