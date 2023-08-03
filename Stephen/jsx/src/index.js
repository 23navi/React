// 1 ) Import the react and react-dom libraries
import React from "react";
import ReactDOM from "react-dom";

// 2) Get a reference to the div where we want to render our app with id='root'
const el = document.getElementById("root");

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
const App = () => {
  const msg1 = "Naviiiii";
  const msg2 = "Surekaaa";
  return <input type={"number"} min={4} />;
};

// 5) Show the component on the screen
root.render(<App />);
