import { createReadStream, read } from "node:fs";
import net from "node:net";

const socket = net.createConnection({ host: "192.168.1.7", port: 4000 });


const readStream=createReadStream("/Users/tanishtandon/Downloads/ALLSTARS.mp4")
    readStream.pipe(socket);
    readStream.on("end",()=>{
      console.log("File ended");
    });

socket.on("error", () => {
  console.log("Server Lost");
});

socket.on("data", (chunk) => {
  console.log(chunk.toString());
});
