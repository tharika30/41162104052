const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("This is my home page");
  } else if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("This is About page");
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end("404 Not Found : Sorry Page Not Found");
  }
});

server.listen(2001, () => {
  console.log("SERVER RUNNING AT http://localhost:2001/home");
});