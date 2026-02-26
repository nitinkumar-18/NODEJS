const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "HELLO WORLD !!!!!" }));
});

server.listen(4000, () => {
    console.log("HTTP SERVER IS RUNNING on http://localhost:4000");
});