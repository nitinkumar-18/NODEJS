import fs from "fs";


// writable ke sath yeh hota hai ki humko closed karna padhta hai apne aap close nhi hota.  readable mai hojata hai



const writeStream=fs.createWriteStream("file.txt",{highWaterMark:4});

writeStream.write('a');
writeStream.write('a');
writeStream.write('a');
writeStream.write('a');



// issai humko fd milega jo file open hoti hai usko ek fd assign hota hai os ke through so fd is 16.  aur fd if its a first file then fd generally is 3 and fd always a number .jabh takh close na ho tabh takh os mai rheta hai fd but writeable stream jabh bhi karo ussai close jarur karo
// writeStream.on("open",(fd)=>{
//     console.log("fd",fd);
// })






//end method call karne sai finished chal jaega aur end method call karne sai internal buffer clear hojata hai yeh end trigger kar deta hai ki kaam hogaya uska baadh kuch write na kare if karoge toh error aega. yeh end mai kuch argement bhi dee skte ho your wish optionally hai
// writeStream.end();
// writeStream.end('bb');

// writeStream.close();  close bhi use kar skte hai hum


// for short data ke liye
writeStream.end('HI THIS IS TANISH'); // start karte hi end
// end ke phir end nhi karskte

// yeh finish tabh hi run hogha jabh hum uss write ko close kardege tabh hi hogha
writeStream.on('finish',()=>{
    console.log("finished");
});



writeStream.on("close",()=>{
    console.log("closed");
});




/// stream ko close karne ke liye end use hogha issai do event fire hote hai finished, closed event; phele finish then close

// phele end then close in readable
// open fire when hamara vo writeable stream jabh open kar rha hota hai





