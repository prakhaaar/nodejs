const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send(`hello ${req.query.name}`);
});

const port = 8000;

app.listen(port, () => {
  console.log("express is working");
});
