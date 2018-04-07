const express = require('express');
const api = express.Router();

api.get('/', (req, res, next) => {
  res.status(200).send('Ready player one!');
});

module.exports = api;
