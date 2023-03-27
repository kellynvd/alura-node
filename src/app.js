import express from "express";

const app = express();

const livros = [
  { id: 1, titulo: "DDD" },
  { id: 2, titulo: "Desing Patterns" },
]

app.get("/", (req, res) => {
  res.status(200).send("Curso de nodejs");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;
