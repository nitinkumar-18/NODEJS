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


    else {

    // favicon ignore
    if (req.url === "/favicon.ico") {
        res.statusCode = 204;
        return res.end();
    }

    try {
        const filePath = `./storage${decodeURIComponent(req.url)}`;
        const fileHandle = await open(filePath);

        const stats = await fileHandle.stat();

        // agar directory hai to open mat karo
        if (stats.isDirectory()) {
            res.statusCode = 403;
            return res.end("Cannot open directory");
        }

        const readStream = fileHandle.createReadStream();

        // stream error handle karo (important)
        readStream.on("error", () => {
            res.statusCode = 500;
            res.end("Stream Error");
        });

        readStream.pipe(res);

    } catch (err) {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }
});








server.listen(2200,"0.0.0.0",()=>{
    console.log("SERVER STARTED");
});