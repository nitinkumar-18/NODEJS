const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, World!\n");
});

// const a = server.listen(7700, () => {
  const a = server.listen(7900, () => {
  // console.log("Server is running on http://localhost:7700");
   console.log("Server is running on http://localhost:7900");
});


console.log(a);



// 7700 mongo.    