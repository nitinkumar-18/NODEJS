import { createWriteStream } from "node:fs";
import net from "node:net";

process.stdin.on("data", (input) => {
  const inputStr = input.toString();
  const [clientIndex] = inputStr.split(" ");
  console.log(clientIndex);
  if (typeof parseInt(clientIndex) === "number") {
    clientsList[parseInt(clientIndex)].write(inputStr.substring(1));
  } else {
    clientsList.forEach((socket) => {
      socket.write(input);
    });
  }
});

const clientsList = [];

const server = net.createServer((socket) => {
  clientsList.push(socket);
  console.log(clientsList.length);
  const writeStream=createWriteStream("STARRS.mp4");

  // socket.pipe(writeStream);


  socket.on("data", (chunk) => {
    // console.log(chunk.toString());
    writeStream.write(chunk);
    clientsList.forEach((socket) => {
      socket.write(chunk);
    });
  });
  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected");
  });

  socket.on("error", () => {
    console.log("Client Lost");
  });
  console.log("Client Connected", socket.remoteAddress);
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
