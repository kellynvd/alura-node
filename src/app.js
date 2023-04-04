import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.use(express.json());

routes(app);

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const index = findBookById(id);
  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).send("Book created");
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = findBookById(id);
  books[index].title = req.body.title;
  res.status(200).send("Book updated");
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = findBookById(id);
  books.splice(index, 1);
  res.status(200).send("Book deleted");
});

const findBookById = (id) => {
  return books.findIndex((book) => book.id == id);
};

export default app;
