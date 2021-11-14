var express = require("express");
var app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Hello World");
  console.log(`server is running on port ${port}`);
});

module.exports = app;
