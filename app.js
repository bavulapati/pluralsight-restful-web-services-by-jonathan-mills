const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const dbUrl = 'mongodb://localhost:27017/bookAPI';
const Book = require('./models/bookModel');

MongoClient.connect(dbUrl, (err, db) => {
  if (err) throw err;
  console.log('Connected to mongodb');
});

bookRouter.route('/books')
  .get((req, res) => {
    Book.find((err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
