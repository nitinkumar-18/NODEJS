import { open } from "node:fs/promises";
import net from "node:net";

const server = net.createServer(async (socket) => {
  // const fileHandle = await open(
  //   '/Users/tanishtandon/Downloads/ALLSTARS (1).mp4'
  // );




  const fileHandle = await open(
    'numbers.txt'
  );




  const { size } = await fileHandle.stat();
  const readStream = fileHandle.createReadStream({ highWaterMark: 10 });
  socket.write("HTTP/1.1 200 OKAY\n");
  // socket.write("Content-Type: video/mp4\n");
  socket.write("Content-Type: text/txt; charset=utf-8\n");
  socket.write(`Content-Length: ${size}\n`);
  // socket.write("Content-Disposition: attachment; filename=story.mp4");
  socket.write("\n\n");

  // socket.end();
  // const readStream = createReadStream("story.mp4");
  // const readStream = createReadStream("river.webp");
  // const readStream = createReadStream("numbers.txt");
  // const readStream = createReadStream(
  //   "C:\\Users\\anura\\OneDrive\\Desktop\\4k-video.MP4"
  // );



  readStream.pipe(socket);

  readStream.on("pause", () => {
    console.log("stream paused by browser");
  });

  readStream.on("resume", () => {
    console.log("stream resumed by browser");
  });

  // readStream.on("data", (chunk) => {
  //   socket.write(chunk);
  //   readStream.pause();
  //   setTimeout(() => {
  //     readStream.resume()
  //   }, 0)
  // });

  // socket.on("drain", () => {
  //   readStream.resume();
  // });

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





// yeh socket.write sai jitna bhej rhe hai sabh ek ek karke jata hai but browser par ek hi baar me jitna bhej rhe hai sabh ek sath jata hai. isiliye browser me file jaldi se load ho jati hai. agar hum socket.write ke badh socket.end kar dete to bhi file browser me load ho jati hai but is case me file load hone ke badh connection close ho jata hai. lekin agar hum socket.end nahi karte to file load hone ke badh connection open rehta hai aur browser se data bhejne par server us data ko receive kar leta hai.









// 👉 HTTP = request-response communication
// 👉 Sockets = real-time continuous communication










// HTTP kya karta hai?

// 👉 Client → Request
// 👉 Server → Response

// Ek request = ek response.

// Use hota hai:

// ✅ websites load karne me
// ✅ REST APIs
// ✅ form submit
// ✅ login/signup
// ✅ payment request

// Example:

// Browser Google open karta hai

// HTTP request server ko jati hai

// server HTML bhejta hai

// 👉 page load ho jata hai

// 🔹 Socket kya hota hai?

// Socket = continuous connection between client & server.

// 👉 data dono taraf real-time ja sakta hai.

// Use hota hai:

// ✅ WhatsApp messaging
// ✅ online gaming
// ✅ live chat
// ✅ stock market apps
// ✅ live notifications
// ✅ YouTube live comments

// 🔥 Real Apps me Use
// 🌍 WhatsApp

// HTTP → login & media download

// Socket → real-time messaging

// 🎥 YouTube

// HTTP → video load

// Socket → live chat & live stats

// 🛒 Amazon

// HTTP → product load

// Socket → live order tracking updates

// 🎮 PUBG / BGMI

// Socket → real-time player movement






















