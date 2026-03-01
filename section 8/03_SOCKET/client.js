import dgram from "node:dgram"; //UDP

const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});

// socket.remoteAddress
// socket ek communication end point yaha sai bhejo waha receive hogha

socket.send("Hi from Client.js", 4000, "192.168.0.105", () => {
  console.log("Message sent");
});

// socket nai bheja receive hua nhi no fark but tcp me connection establish hona zaruri hai, udp me connection establish nahi hota, direct bhej do receive ho jayega.
