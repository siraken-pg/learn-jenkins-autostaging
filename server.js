const express = require("express");

const app = express();

const PORT = 18080;

app.get("/", (req, res) => {
  console.log(`Request from ${req.ip}`);
  res.send("Hello! This is from 00001 Example.");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
