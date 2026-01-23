
// const sum=require("./sum.js");

// const product=require("./product.js");



const {sum,product}=require("./math");
const math=require("./math");
console.log(math);


// const {sum,product}=require("./math")

// console.log(math);

// const [sum,product]=require("./math");

// console.log(sum,product);

console.log(sum(1,2,3,4,5));

console.log(product(1,2,3,4,5));



// array and object destructuring kia hai 
// function kuch na kuch return karta hai but ek bar mai ek hi return karega

// require function is synchronous
// require function hamesha module.exports hi dhundega 




// yeh pura common js hai

//isme samjo toh module here user and exports here ek address hai samje







// const user={
//     name:"Tanish Tandon",
//     age:12,
//     address:{
//         city:"NEC",
//         state:"Uttar"
//     },
//     hobbies:["Teaching","Coding","TT"],
// };


// let address=user.address;

// console.log(user.address===address)

// address={
//     Pin:22,
//     country:"india",
// }

// // address.Pincode=2332;
// // address.country="India";


// // console.log(address);
// console.log(user.address);


// module here represent user badha object
// address ek child object  export matlab ussi ko nikal kar safe karlia alag variable mai


























// EXPORTS VS MODULE EXPORTS


// ✅ WORKING Example
// 📁 data.js
// exports.name = "Tanish";
// exports.age = 20;

// 📁 app.js
// const data = require("./data");
// console.log(data);

// 🟢 Output:
// { name: 'Tanish', age: 20 }


// 👉 Kaam kar gaya ✅

// ❌ FAIL Example
// 📁 data.js
// exports = {
//   name: "Tanish",
//   age: 20
// };

// 📁 app.js
// const data = require("./data");
// console.log(data);

// 🔴 Output:
// {}


// 👉 Empty object ❌ kuch export nahi hua

// ✅ FIX Example
// 📁 data.js
// module.exports = {
//   name: "Tanish",
//   age: 20
// };

// 📁 app.js
// const data = require("./data");
// console.log(data);

// 🟢 Output:
// { name: 'Tanish', age: 20 }

// 🧠 Bas itna yaad rakh:

// exports.name = ... → OK

// exports = {...} → ❌

// module.exports = {...} → ✅

// One-line rule:

// Export hota hai sirf module.exports
// exports sirf uska shortcut hai




























// ❌ ERROR EXAMPLE
// 📁 data.js
// exports = {
//   name: "Tanish",
//   age: 20
// };

// 📁 app.js
// const data = require("./data");
// console.log(data);

// 🔴 Output:
// {}


// 👉 Empty object aayega ❌
// Kuch export nahi hua

// 🧠 Reason (one line):

// exports ko naya object de diya → link toot gaya
// Node.js sirf module.exports export karta hai