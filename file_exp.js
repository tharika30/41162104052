// file-explorer.js
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const url = require('url');

// Root directory to serve
const ROOT_DIR = path.join(__dirname, 'public');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Default route → show directory listing
  if (pathname === '/') {
    fs.readdir(ROOT_DIR, (err, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Error reading directory');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>File Explorer</h1>');
      res.write('<h3>System Info:</h3>');
      res.write(`<p>Hostname: ${os.hostname()}</p>`);
      res.write(`<p>Platform: ${os.platform()}</p>`);
      res.write(`<p>Total Memory: ${os.totalmem()}</p>`);

      res.write('<h3>Files:</h3><ul>');
      files.forEach(file => {
        const fileUrl = `/file?name=${encodeURIComponent(file)}`;
        res.write(`<li><a href="${fileUrl}">${file}</a></li>`);
      });
      res.write('</ul>');
      res.end();
    });
  }

  // File route → show file contents
  else if (pathname === '/file') {
    const filename = parsedUrl.query.name;
    const filePath = path.join(ROOT_DIR, filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('File not found');
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  }

  // Fallback route
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});