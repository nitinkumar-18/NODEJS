const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello, THIS IS TANISH TANDON!"}');
});

server.listen(4500, () => {
  console.log("HTTP server is running on http://localhost:4500");
});



