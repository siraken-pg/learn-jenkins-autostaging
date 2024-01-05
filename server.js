const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello! This is from 00001 Example.');
});

app.listen(8080, () => {
  console.log('Listening')
});
