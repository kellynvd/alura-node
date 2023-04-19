import express from "express";
import BooksController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BooksController.getAllBooks)
  .get("/books/search", BooksController.getBooksBySubject)
  .get("/books/:id", BooksController.getBookById)
  .post("/books", BooksController.createBook)
  .put("/books/:id", BooksController.updateBook)
  .delete("/books/:id", BooksController.deleteBook)

export default router;
