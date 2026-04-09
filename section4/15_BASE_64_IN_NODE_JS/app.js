import fs from "fs/promises";


// const a=await fs.readFile("file.txt","utf-8");

//btoa()
// const a=await fs.readFile("file.txt","base64");  // this convert binary to ascii string and we can decode it back to binary using Buffer.from(a,"base64") is equal to btoa()// and atob() in browser


// console.log(a);




// btoa() ek JavaScript function hai jo normal (binary-safe ASCII) string ko Base64 me convert karta hai.












// this process is equal to atob()
// fs.writeFile("new-file2.txt", "YWJj","base64");



// read kar rhe hote hai toh data binary hota hai





// const bufferContent=await fs.readFile("file.txt");

// const a=bufferContent.toString("base64");

// console.log(a);
//atob
// fs.writeFile("new-file3.txt",a);
























// const bufferContent=await fs.readFile("favicon/favicon-16x16.png")

// const a =bufferContent.toString("base64");

// console.log(a);

// fs.writeFile("new-file4.txt",a);








// fs.writeFile("a.png","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAktJREFUOE+Nk01oE0EUx/9vN58tIoKKKKKgBETQ0g9KEquQioKIJ4XeRGtsL1bwWkREevPSXjQlQfAggh48iGgpEQ00SIjUgkhalYoookJJTJr9mNknO2ta09biwA7Mf9777bwvworFs7E2gAbASAC827umeRCyAKcoMjX9tws1Dvw5GsYijQJ0wfVYCf5zZoDTaOHLtDNfV2h3U851egqmw/9wbJKl7eT0Co5TLF/3AKXYOEDJ/3FWNgwYZSsd7i4kScXM9HqdZ6/JtWqChSk6iWfjt8AYbFh9+qZh4pUPpxM2Nm1gJS/8IjzM+nGsW2DXNkdpwnRgVe0UcSleAhBpAK6MhjHzMYRThxYxdMZU8tiDIB69DKE9InDzUk1p0nZgVKw54lLMBCjQAFzPBJEt+nH+pIWzJywl330SQOZxAIkOG9f6PagLMMu23QSomwAzMPNeR9c+CV33sFIChXc6DuyVIALCQcA2JOyqcAHLIQynQhgZMNYtxvDtEEYGDRgVG9KWc01JvDfhx46tjCNtYk3Ii2kfvnwn9PVaqC9YbjXHm8roPvXGnSB6uwR6DsomSO6NjsmCD1fPmRBV9+8Ok8adqxpJSOD+pB9vP+jYvsUr49cfhP17JPqO2pB1AWFIEDjdGi8ml1pZlvFM92k9jSlwk/mz7I3E5o0MdhhWVajsA5xrpcByK6vunIqGDV2MaX6tX/NpRJoXgSMZ0nLU55oRONNCgSF3Dlxh1dTV8h3tYLrI4AQxqXFm4nlmeq5pnGqNFt22X1q/AdOtFcyAcp0ZAAAAAElFTkSuQmCC","base64")







// const bufferContent=await fs.readFile("new-file4.txt","utf-8");

// const a=bufferContent.toString();


// fs.writeFile("a.png",a,"base64");



// base64 vo ek normal utf string hi banata hai jo binary data ko represent karta hai. Jab aap base64 string ko decode karte hain, toh aapko original binary data milta hai. Isliye, jab aap base64 string ko file me likhte hain, toh aapko usse "base64" encoding ke saath likhna hota hai, taki jab aap us file ko read karein, toh aapko original binary data mil sake.






// const bufferContent=await fs.readFile("script.js");

// const a=bufferContent.toString("base64");

// fs.writeFile("script.txt",a);




// base64 mai karoge toh size badh jayega, kyunki base64 encoding me har 3 bytes ke liye 4 characters use hote hain. Isliye, jab aap binary data ko base64 me convert karte hain, toh aapko original data se zyada space ki zarurat hoti hai.



// humko base64 ki requirement isliye hoti hai kyoki kuch communcication sirf text ke through hoti hai, jaise ki email, ya phir jab hum binary data ko URL me bhejna chahte hain. Base64 encoding se hum binary data ko text me convert kar sakte hain, jisse ki wo easily transmit ho sake.

























// base64url mai padding ke liye "=" use nahi hota hai, aur "+" aur "/" ki jagah "-" aur "_" use hota hai. Iska use URL me binary data ko safely encode karne ke liye hota hai, taki URL me special characters ka issue na ho.

const bufferContent=await fs.readFile("new-file2.txt");

const a=bufferContent.toString("base64url");

// base64url yeh + and / ki jagah - and _ use karta hai, aur padding ke liye = use nahi hota hai. Iska use URL me binary data ko safely encode karne ke liye hota hai, taki URL me special characters ka issue na ho.
//bole toh jo query params me data bhejna hota hai, uske liye base64url use karte hain taki URL me special characters ka issue na ho. kyoki waha special meansing hote hain, jaise ki & aur =, toh unka use nahi kar sakte hain. Isliye, base64url use karte hain taki URL me special characters ka issue na ho.

fs.writeFile("tanish.txt",a);
















































// create a custom module name math.js and export a function for addition subtraction multiplication and division and import and use this module in another file named app.js

// math.js
// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }

// export function multiply(a, b) {
//     return a * b;
// }

// export function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// }

// // app.js
// import { add, subtract, multiply, divide } from './math.js';

// console.log(add(5, 3)); // 8
// console.log(subtract(5, 3)); // 2
// console.log(multiply(5, 3)); // 15
// console.log(divide(5, 3)); // 1.6666666666666667































