const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./models/bookModel');

const app = express();
const bookRouter = require('./routes/bookRouter')(Book);
const port = process.env.PORT || 3000;
const dbUrl = 'mongodb://localhost:27017/bookAPI';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect(dbUrl);

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
