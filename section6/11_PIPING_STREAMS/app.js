// import fs, { WriteStream } from "fs";



// console.time();

// // const readStream=fs.createReadStream("/Users/tanishtandon/Desktop/The Prestige 2005 720p 10Bit BluRay Hindi VCD English ESubs - MoviesMod.Lol.mkv",{highWaterMark:1 * 1024 * 1024});



// // const writeStream=fs.createWriteStream("The Prestige 2005 720p 10Bit BluRay Hindi VCD English ESubs - MoviesMod.Lol.mkv")

// // jo humne isEmpty vagera check kia vo humm pipe sai kara skte hai   // pipe method use on readstream uske andar write stream lagao  hamara backpressure pause hona sabh hojaega via pipe
// readStream.pipe(writeStream);// read par pipe hota hai
// // pipe sai data transfer hona shuru hojata hai and unpipe sai data transfer hota hua rukh jata hai




// // 1 second takh jitna hogha utna hogha uske badh nhi hogha transfer
// setTimeout(() => {
//     readStream.unpipe(writeStream);// unpipe method hai writestream event hai
    
// }, 1000);

// writeStream.on('unpipe');// write par unpipe hota hai







// // readStream.unpipe(writeStream);

// // const writeStream=fs.createWriteStream("The Prestige 2005 720p 10Bit BluRay Hindi VCD English ESubs - MoviesMod.Lol.mkv")


// // readStream.on('data',(chunk)=>{
// //    const isEmpty= writeStream.write(chunk);

// //    if(!isEmpty){
// //     readStream.pause();
// //    }



// // });

// // writeStream.on("drain",()=>{
// //     readStream.resume();

// // })


// readStream.on("end",()=>{
//     console.timeEnd();
// });




// // pipe method mainly readable ke liye use hota hai 