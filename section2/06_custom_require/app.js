// const a=5;


// console.log(a);






    
    // const a=5;// local scope
   // a = 5;// global scope
  //  console.log(a);



//   function hi(){
//     a=5;
//     console.log(a);
//   }

// hi();




// "use strict";
// const a=5;
// console.log(a);

// by default isko bhi wrap kardeta hai  wrap isliye karta taki hamare  variables global scope mai na jaee local mai rhe 














// ✅ Short answer:

// Wrapper isliye aaya kyunki code global me na jaaye, local (private) rahe

// बस यही main reason hai 🔥

// 🧠 Simple logic:
// Agar wrapper na hota:
// // file1.js
// let x = 10;

// // file2.js
// console.log(x); // 😱 mil jaata


// 👉 sab files ek hi global space me hoti
// 👉 chaos hota
// 👉 bug city 😵

// 🔥 Wrapper kya karta hai:

// Node internally karta hai:

// (function(){
//    let x = 10;
// })();


// 👉 x sirf us file ke andar
// 👉 bahar koi access nahi
// 👉 safe 😎

// 🧠 Isliye wrapper aaya:
// 1️⃣ Global pollution se bachne ke liye
// 2️⃣ Har file ka alag scope banane ke liye
// 3️⃣ Variables private rakhne ke liye
// 4️⃣ Secure code ke liye
// 5️⃣ Module system banane ke liye
// 🧩 One line dimaag me baitha le:

// Global danger hota hai, local safe hota hai — isliye wrapper aaya

// 🧠 Real life line:

// Sabko ek hi room me bithana = chaos
// Har file ko alag room dena = wrapper 😎

// 🔥 Final crisp sentence:

// Node.js ne wrapper function isliye banaya taaki har file ka code global na ho, sirf local scope me rahe



















// const b=require('./math')

// // const a=5;
// // console.log(a);

// console.log(__dirname);
// console.log(__filename);









// const b=loadModule("./math.js");

const vm=require("vm");
// const {sum}=loadModule("./sum.js");

// console.log(b);

// console.log(sum(1,2,3,4,5,5));
vm.runInThisContext('var a=5');
function loadModule(path){

  const fs=require("fs")

  const fileContent=fs.readFileSync(path).toString();
  
  // console.log(fileContent);






  // (function (exports, require, module, __filename, __dirname) {
    
  // IIFE BHI KHEE SKTE HAI ISS WRAPPER FUNCTION KO
  // MODULE FOES HERE

  // eval 
  // vm hamara c++ ka use karke bana hai

 return (function(send){
  vm.runInThisContext(fileContent,{send,loadModule,console})

  
  // eval(fileContent);
  return send;
  // console.log(send);


})({});
  


}
