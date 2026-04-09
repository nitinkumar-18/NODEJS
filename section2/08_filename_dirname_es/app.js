// console.log(import.meta);


// import.meta ek object hota hai browser ke andar hota hai iske andar properties hoti hai




import {num} from "./math.js";
import.meta.a='tanish';
const {filename,dirname}=import.meta;
console.log(filename,dirname,a);


//phele import wala excecute hogha




