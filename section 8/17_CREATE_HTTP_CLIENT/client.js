// import http from "http";

// const clientRequest = http.request({
//   method: "POST",
//   hostname: "192.168.0.105",
//   port: 4000,
//   path: "/file.txt",
// });

// clientRequest.end("Hii I am client");

// clientRequest.on("response", (response) => {
//   response.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
// });









// http ke upar client create karege request 






import http from "http";

const clientRequest=http.request({
  method:"POST",
  hostname:"192.168.1.7",
  port:4000,
  path:"/file.txt"

});

clientRequest.write("HI I AM CLIENT");
clientRequest.on("response",(response)=>{
  response.on("data",(chunk)=>{
    console.log(chunk.toString());
  }); 
});