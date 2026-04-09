const http=require("http");


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "application/json"});

    res.end('{"message" : "HELLO THIS IS TANISH"}');

});






server.listen(6700,()=>{
    console.log("HTTP SERVER IS RUNNING ON http://localhost:6700");
})