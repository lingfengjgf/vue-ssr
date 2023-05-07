const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("hello word!");
});

server.listen(80, () => {
  console.log("server running!!");
});
