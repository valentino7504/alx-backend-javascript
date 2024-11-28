const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => res.send('Welcome to the payment system'));

app.get('/cart/:id', (req, res) => {
  const test = /^\d+$/.test(req.params.id);
  if (test) return res.send(`Payment methods for cart ${req.params.id}`);
  return res.status(404).end();
});

app.listen(PORT, () => console.log('API available on localhost port 7865'));
