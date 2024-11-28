const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());
app.get('/', (req, res) => res.send('Welcome to the payment system'));

app.get('/cart/:id', (req, res) => {
  const test = /^\d+$/.test(req.params.id);
  if (test) return res.send(`Payment methods for cart ${req.params.id}`);
  return res.status(404).end();
});

app.get('/available_payments', (req, res) => {
  const response = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  return res.send(response);
});

app.post('/login', (req, res) => res.send(`Welcome ${req.body.userName}`));

app.listen(PORT, () => console.log('API available on localhost port 7865'));
