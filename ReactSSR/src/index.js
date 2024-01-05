const express = require("express");

// Will see a better way to do this later.

const RenderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Listenting on port 3000");
});
