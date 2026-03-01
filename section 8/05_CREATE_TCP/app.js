//  import net from "node:net";

// const server = net.createServer();

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });

// server.on("connection", (socket) => {
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//     socket.write("HTTP\n\nGot your message.");
//     socket.end();
//   });
//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.on("listening", () => {
//   console.log("Server started on port 4000");
// });



















// TCP SERVER

//3 way request

import net from "node:net";


// server create karta hai
const server=net.createServer();


server.listen(2600);

server.on("listening",()=>{

  console.log("Server started on port 2600");





})



//data receive from client
//socket is the duplex stream which is used to send and receive data from client

server.on("connection",(socket)=>{
  socket.on('data',(chunk)=>{
    console.log(chunk.toString());

  })
  console.log("Client Connected");
});




