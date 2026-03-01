// import dgram from "node:dgram"; //UDP

// const socket = dgram.createSocket("udp4");

// socket.on("message", (message, remoteAddress) => {
//   console.log(message.toString());
//   console.log(remoteAddress);

//   socket.send(
//     "Message Received Successfully on Server.",
//     remoteAddress.port,
//     remoteAddress.address
//   );
// });

// socket.bind({ port: 4000 }, () => {
//   console.log(socket.address());
//   const address = socket.address();
//   console.log(`Listening on port ${address.port}`);
// });

























// 👉 Socket = communication endpoint
// 👉 do devices/programs ke beech data bhejne ka point

// 💡 Simple:

// Socket ek door hai jahan se data andar-bahar hota hai.









// import dgram from 'node:dgram'//UDP



// const socket=dgram.createSocket("udp4");//IPv4 ke liye



// const socket=dgram.createSocket("udp46");

// const socket=dgram.createSocket("udp4");



// socket.on("message",(a,b)=>{
//   console.log(a,b);
// });










// jo a hai vo message hai aur b remote address hai jahan se message aaya hai


// const socket=dgram.createSocket("udp4");



// socket.on("message",(message,remoteAddress)=>{
//   console.log(message.toString());
//   console.log(remoteAddress);
// });





// socket.on("listening",()=>{
//   console.log(socket.address());
//   console.log("listening");

// })


// bind method call karna bhaut important hai
// udp4 ipv4. udp6 ipv6 ke liye hai



// port dena na dena tumare upar hai nahi doge toh apne app select karega


// socket.bind({port: 4000},()=>{
//   console.log(socket.address());

//   const address=socket.address();

//   console.log(`Listening on port ${address.port}`);

// });




// 10.215.70.214





// console.log(socket);// yeh event emitter hai

































// yeh hum mobile sai bhej rhe hai aur yeh humare computer pe receive ho raha hai



// import dgram from 'node:dgram'//UDP



// const socket=dgram.createSocket("udp4");



// socket.on("message",(message,remoteAddress)=>{
//   console.log(message.toString());
//   console.log(remoteAddress);
// });




// socket.bind({port: 4000},()=>{
//   console.log(socket.address());

//   const address=socket.address();

//   console.log(`Listening on port ${address.port}`);

// });



// bind sai server bann. jataa hai 





















// phone par request bhejne ke liye hum socket.send method ka use karte hai 


// import dgram from 'node:dgram'//UDP



// const socket=dgram.createSocket("udp4");



// socket.on("message",(message,remoteAddress)=>{
//   console.log(message.toString());
//   console.log(remoteAddress);
// });


// socket.send("HI FROM  TANISH TANDON",2500,"10.215.70.47");


















import dgram from 'node:dgram'//UDP



const socket=dgram.createSocket("udp4");



socket.on("message",(message,remoteAddress)=>{
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});


socket.bind({port: 4000},()=>{
  console.log(socket.address());

  const address=socket.address();

  console.log(`Listening on port ${address.port}`);

});
