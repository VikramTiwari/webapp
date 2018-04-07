const express = require('express');
const path = require('path')
const app = express();
const api = require('./backend/api')

const PORT = 3000;

app.use('/api', api)
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log('Ready Player One!');
});
