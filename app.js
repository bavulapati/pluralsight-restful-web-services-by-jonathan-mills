const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const dbUrl = "mongodb://localhost:27017/bookAPI";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Connected to mongodb');
}); 

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: 'This is my book router' };
    res.json(response);
  });
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
