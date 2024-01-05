const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  // res.send('Hello! This is from 00001 Example.');
  res.render('Hello! This is from 00001 Example.');
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});
