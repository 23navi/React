const express = require("express");
const React = require("react");

// Will see a better way to do this later.

const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listenting on port 3000");
});
