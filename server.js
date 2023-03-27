const http = require('http');
const port = 3000;

const routes = {
  '/': "Curso de node",
  '/livros': "Listagem de livros",
  '/autores': "Listagem de autores",
  '/editoras': "Listagem de editoras",
  '/sobre': "Sobre o curso"
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
