const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, () => { });
