import books from "../models/Book.js";

class BooksController {
  static getAllBooks(req, res) {
    books.find().populate("author").exec((err, books) => {
      res.status(200).json(books);
    });
  }

  static getBookById(req, res) {
    const { id } = req.params;
    books.findById(id).populate('author', 'name').exec((error, book) => {
      if(!error) {
        return res.status(200).json(book);
      }

      return res.status(500).send(`Book not found - ${error.message}`);
    })
  }

  static createBook(req, res) {
    const book = new books(req.body);

    book.save((error) => {
      if(error) {
        return res.status(500).send(error.message);
      }

      res.status(201).send("Book created successfully");
    });
  }

  static updateBook(req, res) {
    const { id } = req.params;

    books.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if(!error) {
        return res.status(200).send("Book updated successfully");
      }

      return res.status(500).send(error.message);
    });
  }

  static deleteBook(req, res) {
    const { id } = req.params;

    books.findByIdAndDelete(id, (error) => {
      if(!error) {
        return res.status(200).send("Book deleted successfully");
      }

      return res.status(500).send(error.message);
    });
  }
}

export default BooksController;
