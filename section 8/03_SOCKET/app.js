import dgram from "node:dgram"; //UDP

const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);

  socket.send(
    "Message Received Successfully on Server.",
    remoteAddress.port,
    remoteAddress.address
  );
});

socket.bind({ port: 4000 }, () => {
  console.log(socket.address());
  const address = socket.address();
  console.log(`Listening on port ${address.port}`);
});



// bind likho toh server ki tarah chalega, bina bind ke client ki tarah chalega. send likho toh client ki tarah chalega, bina send ke server ki tarah chalega. bind aur send dono likho toh dono kaam karega.



