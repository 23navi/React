import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import searchImage from "./api";

searchImage();

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
