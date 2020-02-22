function booksController(Book) {
  function post(req, res) {
    if (!req.body.title) {
      res.status(400);
      return res.send('Title is required');
    }
    const book = new Book(req.body);
    book.save();
    res.status(201);
    return res.json(book);
  }
  function get(req, res) {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      const returnBooks = books.map((book) => {
        const newBook = book.toJSON();
        newBook.links = {};
        // eslint-disable-next-line no-underscore-dangle
        newBook.links.self = `http://${req.headers.host}/api/book/${book._id}`;
        return newBook;
      });
      return res.json(returnBooks);
    });
  }
  return { post, get };
}

module.exports = booksController;
