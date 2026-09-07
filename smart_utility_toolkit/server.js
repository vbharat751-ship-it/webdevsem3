// Basic HTTP server using Node.js core http module
const http = require("http");
const { log } = require("./logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end(`
      <h1>Smart Utility Toolkit</h1>
      <p>Node.js Unit-1 Lab Server is running.</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/status">Status</a></li>
        <li><a href="/dice">Dice</a></li>
      </ul>
    `);
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200);
    res.end("<h1>About</h1><p>A basic HTTP server created using Node.js core modules.</p>");
  } else if (req.url === "/status" && req.method === "GET") {
    res.writeHead(200);
    res.end("<h1>Status</h1><p>Server is running successfully.</p>");
  } else if (req.url === "/dice" && req.method === "GET") {
    const value = require("crypto").randomInt(1, 7);
    res.writeHead(200);
    res.end(`<h1>Dice Roll</h1><p>You rolled: ${value}</p>`);
  } else {
    res.writeHead(404);
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}`);
});
