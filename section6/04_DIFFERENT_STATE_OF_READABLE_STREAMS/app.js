import fs, { read } from "fs";

const readStream=fs.createReadStream("chars.txt",{highWaterMark:4});



// yeh below statement lagate hi flowing start hojata hai toh true false false aega
// readStream.on("data",(chunk)=>{
    

// })

// console.log(readStream.readableFlowing); //null
// readable flowing value null means initial state mai hai create hogaya kaam nhi kia abhi


// console.log(readStream.readableEnded);//false
// iska toh pata hi hai ki jabh true dega jabh kaam pura hojaega


// readStream.pause();// yeh lagha do toh true dedega
//isPaused method hai yeh pause nhi hoghi false dega
// console.log(readStream.isPaused());






// READALE NAAM KI PROPERTY HOTI HAI










// PAUSED WALA STATE

//false
// false
// true
// readStream.on("data",(chunk)=>{
//     readStream.pause();
//     console.log(readStream.readableFlowing);
//     console.log(readStream.readableEnded);
//     console.log(readStream.isPaused());
// })








// yeh below readable flowing bhi true de rha hai jabki end hogaya hai toh yeh ek bug hai bhaut badha node walo ko farak nhi padha bilkul bhi
//true
// true
// false

// readStream.on("data",(chunk)=>{

// });


// readStream.on("end",()=>{
  
//     console.log(readStream.readableFlowing);
//     console.log(readStream.readableEnded);
//     console.log(readStream.isPaused());


// });






















//below wala 4 - 4 characters read karega
// readStream.on("data",(chunk)=>{
//     console.log(chunk.toString());
// })


















// below code run karane par mujhe sirf overwrite milega abc.txt mai 
// readStream.on("data",(chunk)=>{
//     console.log(chunk);
//     fs.writeFileSync("abc.txt",chunk);
// });









//yeh bss 4 character likega aur pause kardega



// readStream.on("data",(chunk)=>{
//     console.log(chunk);
//     fs.writeFileSync("abc.txt",chunk);
//     readStream.pause();

// })














// yeh pura appendfileSync kya hogah jo bhi chars.txt mai vo sabh likhdega abc.txt mai bhaut jaldi sai
// readStream.on("data",(chunk)=>{
//     console.log(chunk);
//     fs.appendFileSync("abc.txt",chunk);
// });















// yeh wale below mai 4 sai 4 characters add hote jaa rhe hai lekin aaram aaram sai hogha add aur end hote hi apne aap bandh hojaega. aur dubara sai run karo toh phir add karte chala jaega
// readStream.on("data",(chunk)=>{
//     console.log(chunk);
//     fs.appendFileSync("abc.txt",chunk);
//     readStream.pause();
//     setTimeout(()=>{
//         readStream.resume();

//     },100);

// });














//below code mai kya kare hum ki agar add hoagya toh phir sai chale toh pura clear hojaae aur sabh naya add ho like pichle wale mai uske aage hi add ho rha thaa vo na ho
/// yeh below code kuch bhi likha hogjha usko remove karke ki write karega

// let readCount=0;

// readStream.on("data",(chunk)=>{
//     readCount++;

//     if(readCount === 1){
//         fs.writeFileSync("abc.txt",chunk);
//     } 



//     else{
//         fs.appendFileSync("abc.txt",chunk);
//     }


//     readStream.pause();

//     setTimeout(()=>{
//         readStream.resume();
//     },100);
// });
























//without readcount sai bhi hojaega below code
//
    // if(readStream.readableHighWaterMark === readStream.bytesRead).  yeh watermark wala 4 legha aur byte read bhi 4 hoghha hamesha badhta rhega 4 8 ....



// readStream.on("data",(chunk)=>{
 

//     if(readStream.readableHighWaterMark === readStream.bytesRead){
//         fs.writeFileSync("abc.txt",chunk);
//     } 



//     else{
//         fs.appendFileSync("abc.txt",chunk);
//     }


//     readStream.pause();

//     setTimeout(()=>{
//         readStream.resume();
//     },100);
// });









//OR




readStream.on("data",(chunk)=>{
    const {readableHighWaterMark,bytesRead}=readStream;
 

    if(readableHighWaterMark === bytesRead){
        fs.writeFileSync("abc.txt",chunk);
    } 



    else{
        fs.appendFileSync("abc.txt",chunk);
    }


    readStream.pause();

    setTimeout(()=>{
        readStream.resume();
    },200);
});




readStream.on('resume',()=>{
    console.log("Stream Resume");
});

readStream.on("pause",()=>{
    console.log("Stream Pause");
})

readStream.on()


// by default on dataevent lagaoge resume hotahi hai
