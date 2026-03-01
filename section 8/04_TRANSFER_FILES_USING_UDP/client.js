// import dgram from "node:dgram"; //UDP
// import { createReadStream } from "node:fs";
// import { readFile } from "node:fs/promises";

// const socket = dgram.createSocket("udp4");

// socket.on("message", (message, remoteAddress) => {
//   console.log(message.toString());
//   console.log(remoteAddress);
//   socket.close();
// });

// const readStream = createReadStream(
//   "C:\\Users\\anura\\OneDrive\\Desktop\\Story of Internet.mp4",
//   { highWaterMark: 1000 }
// );

// readStream.on("data", (chunk) => {
//   socket.send(chunk, 4000, "192.168.0.105");
// });

// readStream.on("end", () => {
//   socket.send("EOF", 4000, "192.168.0.105", () => {
//     console.log("Message sent");
//   });
// });































import dgram from "node:dgram";
import { readFile } from "node:fs/promises";

const socket=dgram.createSocket("udp4");


socket.on("message",(message,remoteAddress)=>{
  console.log(message.toString());

  console.log(remoteAddress);

  socket.close();
});



// const content=await readFile("/Users/tanishtandon/Documents/num.txt", "utf-8");

const content=await readFile("/Users/tanishtandon/Documents/numbers.txt", "utf-8");
// large file now numbers.txt send via chunks 







socket.send(content,4000,"192.168.1.5",()=>{

  console.log("message sent");
})
// numbers.txt badhi hai file toh nhi aaapae udp drop kardeta hai]]
// num.txt chhoti file hai toh aaapae udp se send kar sakte hai]]



// badhi file ko chote chote hisso mai break karo