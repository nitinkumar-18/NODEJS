import http from 'http';
import {open,readdir,readFile} from "fs/promises";

const server=http.createServer(async(req,res)=>{

    if(req.url === "/"){

const itemList=await readdir('./storage');


// console.log(itemList);


let dynamicHTML="";

itemList.forEach((item)=>{
  dynamicHTML += `<a href="/${item}">${item}</a><br>`;
});




console.log(dynamicHTML);

    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>My files</h1>

    <div>

    ${dynamicHTML}
    </div>
    
</body>


</html>`)

    }


    else{

        try{
       const fileHandle = await open(`./storage${decodeURIComponent(req.url)}`);
        const readStream=fileHandle.createReadStream();

        readStream.pipe(res);
        }
        catch(err){
            console.log(err.message);
            res.end("NOT FOUND");
        }

    }
})










server.listen(80,"0.0.0.0",()=>{
    console.log("SERVER STARTED");
})