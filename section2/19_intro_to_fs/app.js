// import fs from "node:fs"
// import { data } from "react-router-dom"

import fs from "node:fs/promises";


// below esse hoti hai file read phele ham file ka name dege
//dusra arguement vo kis format mai likha hai 
// ex.  ("./index.html",'utf-8'). dono arguements string hai
// const content=fs.readFileSync("./npx-searching-steps.txt",'utf-8')



// character encoding karne ke 11 line ki jarurat nhi hai kyoki vo by default string hi hota hai contentBuffer abh yeh string hai agar vo lagha dia apne character encoding
// const content=contentBuffer.toString();



// console.log(a);

// console.dir(a.toString());


// console.log(content);





// yeh above readfilesync thaa aur yeh synchronously kaam karta hai strictly prohibited hai bhaut usecase ho toh use hota hai kyoki synchronous hai naa aur suno toh isliye readfile use hogha vaise vo bhi nhi karte kisi third person ko use karte hai



// callback system kuch return nhi karta hai 






// utf-8 bhi thik hai aur yeh agruement function dena bhi thik hai err,data 




// toh below readFile mai kya hogha sirf ek kaam ki ki jabh takh file aarahi hai vo alag thread mai run hoghi baki kaa code alag file mai toh jaise hi file aati hai vo attach hojaegi piche reafilesync ki tarah nhi ki aataak gae ek jagah par aur suno toh phele End print hogha phir file pichla reafilesync bhi nhi karege yeh bhi readfile bhi nhi uae kaarege toh use karege promises

// fs.readFile("./npx-searching-steps.txt",(err,data)=>{
//     const content=data.toString()
//     console.log(content);
// });

// console.log('End')


// import fs from "node:fs" isme do method hote hai readfile and readfilesync





// promises wale mai sirf reafile ka hota hai  method ek hi option bss




// dekho yaha await use hua hai isme bhi kar skte hai sirf await agar type:module hai toh



// abh yeh doubt hogha ki reafilesync mai bhi phele end print ho rha thaa isme bhi lekin ek diffence hai usme main thread block ho rhaa thaa isme nhi hogha 

// toh below code maui phele file read hoghi phir phir End print phir set interval chalega



// let i=0;
// setInterval(()=>{
//     console.log(i++);
// },600);
// const a=await fs.readFile("./npx-searching-steps.txt")
// console.log(a.toString());
// console.log('End');



// agar vo badi file ho above jo time lee bhaut toh kya hogha phele interval chalega side mai file chalti rhegi jaise hi vo hojaega file done toh ussi samay vo file bhi aaajaegi 











// yeh code chalega readfile sync sai chalega large file then take more time but via promises it took less time console.time();    console.timeEnd();  tell the duration of time

// console.time();
// let i=0;
// const timerId=setInterval(()=>{
//     console.log(i++);

//     if(i==15){
//         clearInterval(timerId);
//         console.timeEnd();
//     }
// },5);


// const a= fs.readFileSync("./npx-searching-steps.txt")
// console.log("reading done");
// console.log('End');









// isme promises sai use hua large files toh kam time laggega
//kyoki jabh takh file read ho rhi hai thii tabh takh side mai yeh runn kar rha thaa

console.time();
let i=0;
const timerId=setInterval(()=>{
    console.log(i++);

    if(i==15){
        clearInterval(timerId);
        console.timeEnd();
    }
},5);



//utf-8 lagha do toh alag sai string mai convert karne ki koi jarurat nhi padegi automatically string mai kardega convert 
const a= await fs.readFile("./npx-searching-steps.txt")
console.log("reading done");
console.log('End');




//hamesha promises use karo async await ke sath but callback bhi use kar skte hai lekin dikkat yeh hai vo callbackhell bana deta hai vo sahi nhi hai thodha