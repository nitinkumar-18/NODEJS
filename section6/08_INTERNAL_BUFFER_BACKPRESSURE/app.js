// jo read operation hota hai vo jaydaa fast hota hai disk mai
// but write take some more time



import fs from "fs";

const writeStream=fs.createWriteStream("file.txt",{highWaterMark :4});// yeh lagate hi writable ka output 4 aega

// console.log(writeStream.writableHighWaterMark);

// internal buffer iska highwatermark value hoti hai


// uska size 4 hai lekin vo leta hi jaega kaam  jabh takh kaam  leta jaega jabh takh ek dum katam na hojae

// RAM SAI DISK MAI KHALI KARDEGA
// console.log(writeStream.writableLength);


//    writeStream.writableLength. yeh property hai matlab yhe 4 byte leta jaega aur true show hogha aur jaise hi fill hogaya toh legha jaru but false aane laagega issai pata chalege ki overload hoagya hai

// agar yeh fill ho rha hai agar usko thoda 1 minute bhi time mila toh khalli karega samaan ko aaur aega means jitna RAM MAI LOAD KIA UTNA DISK MAI KARDEGA

// let isEmpty=writeStream.write('a');
// console.log(isEmpty);

// console.log(writeStream.writableLength);


// isEmpty=writeStream.write('a');
// console.log(isEmpty);

// console.log(writeStream.writableLength);


// isEmpty=writeStream.write('a');
// console.log(isEmpty);

// console.log(writeStream.writableLength);

// isEmpty=writeStream.write('a');
// console.log(isEmpty);

// console.log(writeStream.writableLength);



// isEmpty=writeStream.write('a');
// console.log(isEmpty);

// console.log(writeStream.writableLength);

// above code kaa output hai yeh niche wala 
// 0
// true
// 1
// true
// 2
// true
// 3
// false
// 4
// false
// 5



// writable thoda sharmata hai saamaan leeta hi jaega bichara
// readable beshram hota hai
//writable seedha hota hai
// toh writable ko bolna sikhana hai toh vo backpressure apply karta hai par backpressure behsram hai nhi leta hai usko sikhao




// ✅ Pehle samjho: writableHighWaterMark kya hai?

// 👉 ye writable stream ke internal buffer ka maximum size hota hai.

// Matlab:

// ➡ itna data buffer me store ho sakta hai
// ➡ uske baad backpressure start hoga

// Unit = bytes
















// dekhlo bhai jagah 4 ki hai aur yeh 100 le rha hai kya batt hai itna pressure hai bhai par

// for(let i=1;i<=100;i++){
//     console.log(writeStream.writableLength);// kitna data load hua yeh writablelength batata hai

//     let isEmpty=writeStream.write("a");

//     if(!isEmpty){
//         break;
//     }

//     console.log(isEmpty);
// }

// yeh setTimeout loop ko stop kare kaaathoda time miljaega so  itne mai 0 karke write kardega
// setTimeout(()=>{
//     console.log(writeStream.writableLength);

// },10)













let i=1;
// while(i<=1000){
    console.log(writeStream.writableLength);// kitna data load hua yeh writablelength batata hai

    // let isEmpty=writeStream.write("a");
    // i++;


    // if(!isEmpty){
    //     break;
    // }

    // console.log(isEmpty);

// }

// dubara start karna hai kahli karne ke baadh
//so use drain event batata hai mai apna data khali karke aachuka hu drain tabhi hi fire hogha jabh vo kahli hojaega

writeStream.on("drain",()=>{
    console.log(writeStream.writableLength);




//     while(i<=1000){
//     console.log(writeStream.writableLength);// kitna data load hua yeh writablelength batata hai

//     let isEmpty=writeStream.write("a");
//     i++;

//     if(!isEmpty){
//         break;
//     }

//     console.log(isEmpty);
   
// }




write100A();

});






write100A();



function write100A(){




    while(i<=1000){
    console.log(writeStream.writableLength);// kitna data load hua yeh writablelength batata hai

    let isEmpty=writeStream.write("a");
    i++;

    if(!isEmpty){
        break;
    }

    console.log(isEmpty);
   
}


}



// when we handle backpressure then it handle it with less memory but time slight increase. backpressure is very serious
//toh usko pause kardo agar jyada hojae internal buffer mai kyoki vo uss data ko khali kar sake





//createWriteStream backpressure apply karti hai
//writable length property hoti hai
//writestream boolean value return karta hai




