import fs from "fs";
// read stream have internal buffer so use read method
const readStream=fs.createReadStream("chars.txt",{highWaterMark :4});

// jitna highwatermark utna internal buffer ka size ho skta hai
// console.log(readStream.read());// method hai readStream.read
//readStream.read() tabh use hota hai jabh internal buffer par data load hojae




// readStream.on("data",(chunk)=>{
//     console.log(chunk);
// });



// above code ka yeh internal buffer hai 4 sai 4 bytes karke data load hota hai 
// Buffer 41 42 43 44>
// <Buffer 45 46 47 48>
// <Buffer 49 4a 4b 4c>
// <Buffer 4d 4e 4f 50>
// <Buffer 51 52 53 54>
// <Buffer 55 56 57 58>
// <Buffer 59 5a>
// har barr ek naya internal buffer create hogha bss track rakhega ki size 4 ho

// ek time par ek hi internal buffer hogha bss phir fill hogha phir khali hogha. harr barr ekj naya internal buffer create hogha. new buffer create then consume same cycle work
// one internal buffer at a time









// Streams use an internal buffer to temporarily store chunks of data before delivering them to the application, ensuring efficient and smooth data flow.


// readable event tabh fire hogha jabh hamra internal buffer data ko load karlega jabh ready hogha
// console.log(readStream.read(2));

// readStream.on('readable',()=>{
//     console.log(readStream.read());

// })

// above code ka output hai
//<Buffer 41 42 43 44>
//<Buffer 45 46 47 48>;
//<Buffer 49 4a 4b 4c>
//<Buffer 4d 4e 4f 50>
//<Buffer 51 52 53 54>
//<Buffer 55 56 57 58>
//<Buffer 59 5a>
//null;





















// yeh pura internal buffer read karta hai pura end takh
// readStream.on('readable',()=>{
//     console.log(readStream.readableLength);
//     console.log(readStream.read());

// })














// dekho below code esse chalega ki 4 aagea hi aur 2 coonsume karlega phir 2 bacha toh next 4 hi aega esse aur esse chalta rhega
// platform build hai data aataa rhega consume karte rhege


readStream.on('readable',()=>{
    console.log(readStream.readableLength);
    console.log(readStream.read(3));
    console.log(readStream.readableLength);

})