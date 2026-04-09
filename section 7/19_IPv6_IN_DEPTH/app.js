const http=require("http");


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json" });
    res.end('{"message" : "TANISH TANDON"}');
});




server.listen(2345,()=>{
    console.log("HTTP server is running on http://localhost:2345");
});






// 0.0.0.0 kab use karte hain?
// ✅ Development

// phone testing

// ✅ APIs testing

// network devices access

// ✅ IoT projects

// devices connect karne ke liye

// ✅ Docker / cloud apps



// yeh 0.0.0.0 iss par sabh access hai saare server
// server.listen(2345,'0.0.0.0',()=>{
//     console.log("HTTP server is running on http://localhost:2345");
// });



