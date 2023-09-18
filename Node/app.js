const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/about', (req, res) => {
  res.status(200).send('Welcome to the About Page');
});

module.exports = app;
