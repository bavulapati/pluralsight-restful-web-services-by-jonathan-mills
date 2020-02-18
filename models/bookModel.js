const { MongoClient } = require('mongodb');

const { Schema } = MongoClient;

const bookModel = new Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false }
});

module.exports = MongoClient.model('Book', bookModel);
