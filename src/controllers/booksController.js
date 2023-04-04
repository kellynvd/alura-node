import books from "../models/Book.js";

class BooksController {
  static getAllBooks(req, res) {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  }
}

export default BooksController;
