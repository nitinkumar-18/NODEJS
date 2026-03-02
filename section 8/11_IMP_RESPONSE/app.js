// import { createReadStream } from "node:fs";
// import { open } from "node:fs/promises";
// import net from "node:net";

// const server = net.createServer(async (socket) => {
  // const fileHandle = await open(
  //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
  // );
//   const fileHandle = await open("story.mp4");
//   const { size } = await fileHandle.stat();
//   const readStream = fileHandle.createReadStream();
//   socket.write("HTTP/1.1 200 OKAY\n");
//   socket.write("Content-Type: video/mp4\n");
  // socket.write("Content-Type: text/txt; charset=utf-8\n");
//   socket.write(`Content-Length: ${size}\n`);
//   socket.write("Content-Disposition: attachment; filename=story.mp4");
//   socket.write("\n\n");

  // socket.end();
  // const readStream = createReadStream("story.mp4");
  // const readStream = createReadStream("river.webp");
  // const readStream = createReadStream("numbers.txt");
  // const readStream = createReadStream(
  //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
  // );
//   readStream.pipe(socket);
  // socket.end('{"name": "Anurag"}')
//   readStream.on("end", () => {
//     console.log("File ended");
//   });

//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });

//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });

//   socket.on("error", () => {
//     console.log("Client Lost");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });





























import {open} from "node:fs/promises";
import { createReadStream } from "node:fs";
import net from "node:net";

const server = net.createServer(async(socket) => {
  // socket.write("HTTP/1.1 200 OKAY \nAccess-Control-Allow-Origin:*\n\n");
  // socket.end();


  const fileHandle=await open("test.pdf");
  
// const fileHandle=await open('/Users/tanishtandon/Desktop/NODE./NODEJS/section 8/09_CREATE_HTTP_SERVER/ALLSTARS.mp4');
  



// const fileHandle=await open("ALLSTARS.mp4");

  const {size}=await fileHandle.stat();


  const readStream=fileHandle.createReadStream();


// yeh niche sabh header hai jo client ko bheja ja raha hai
  socket.write("HTTP/1.1 200 OKAY\n");
    // socket.write("Access-Control-Allow-Origin:*\n");
    // socket.write("Content-Type:text/txt; charset=utf-8\n");  



    

    //  socket.write("Content-Type:video/mp4\n");
    
      socket.write("Content-Type:application/pdf\n"); 
      // socket.write("Access-Control-Expose-Header:Hello,name*\n");
    // socket.write("hello world\n");
    socket.write(`Content-Length: ${size}\n`);
   

    socket.write("\n\n");

  
  // const readStream = createReadStream("river.webp");
  // const readStream = createReadStream("numbers.txt");
  
  // socket.write('{"name": "THE TANISH TANDON"}');
  readStream.pipe(socket);
  // socket.write("abcdefgh");
  // socket.end();
  readStream.on("end", () => {
    console.log("File ended");
  });


  socket.on("data", (chunk) => {
    console.log(chunk.toString());
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





// via content-length header client ko pata chal jata hai ki kitna data receive karna hai aur uss data ke end tak pahuchne ke baad connection close kar diya jata hai
 //aur download bhi start ho jata hai



 //content-length bhaut important header hai jab hum file bhej rahe hote hai client ko kyuki usse client ko pata chal jata hai ki kitna data receive karna hai aur uss data ke end tak pahuchne ke baad connection close kar diya jata hai






// jo hi hii hai vo responsse ka  header hai


// HTTP/1.1\n\nhii