import fs from 'fs/promises';
const contentBuffer=await fs.readFile("text.txt");


// decimal ke andar number milege issai just niche wale mai 
// contentBuffer.forEach((el)=>{
//     console.log(el);
// });
// console.log(await fs.readFile('text.txt'));




//decimal to binary
// let binaryString="";
// contentBuffer.forEach((el)=>{
//     binaryString+=el.toString(2)+ " ";
// });
// console.log(binaryString);


console.dir(contentBuffer);
console.log(contentBuffer);