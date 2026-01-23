const http=require('http')

const server=http.createServer((req,res)=>{
    res.end("hello from node.js server")
});

server.listen(9000);

