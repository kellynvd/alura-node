import authors from "../models/Author.js";

class AuthorsController {
  static getAllAuthors(req, res) {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  }

  static getAuthorById(req, res) {
    const { id } = req.params;

    authors.findById(id, (error, author) => {
      if(!error) {
        return res.status(200).json(author);
      }

      return res.status(500).send(`Author not found - ${error.message}`);
    })
  }

  static createAuthor(req, res) {
    const author = new authors(req.body);

    author.save((error) => {
      if(error) {
        return res.status(500).send(error.message);
      }

      res.status(201).send("Author created successfully");
    });
  }

  static updateAuthor(req, res) {
    const { id } = req.params;

    authors.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if(!error) {
        return res.status(200).send("Author updated successfully");
      }

      return res.status(500).send(error.message);
    });
  }

  static deleteAuthor(req, res) {
    const { id } = req.params;

    authors.findByIdAndDelete(id, (error) => {
      if(!error) {
        return res.status(200).send("Author deleted successfully");
      }

      return res.status(500).send(error.message);
    });
  }
}

export default AuthorsController;
