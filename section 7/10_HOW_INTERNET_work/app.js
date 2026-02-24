const http=require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain'});

    res.end('HELLO THIS IS A BASIC HTTP SERVER ON 127.0.0.2\n');



});







server.listen(1200,'127.0.0.1',()=>{
    console.log('Server is listening on http://127.0.0.2:3000');
})