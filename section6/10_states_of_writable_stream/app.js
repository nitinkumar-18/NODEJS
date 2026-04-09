import fs from "fs";

const writeStream=fs.createWriteStream("file.txt",{highWaterMark :4});

// yeh initial type hai samjo like uske baadh yaa phele hi likhdia toh true hi rhega writable hamehsa rhega
// writeStream.write('hi');
// console.log(writeStream.writable);
// writeStream.end();
// console.log(writeStream.writable);// yeh false dega








// cork means internal buffer mai rhega disk mai nhi aega 


writeStream.cork();  // agar yeh cork method laghado toh yeh cork state mai chali jaegi yeh tabh takh hum kitna bhi data write karle tabh takh disk mai write nhi karega jabh takh uncork na use karle hum
writeStream.write('hi');

writeStream.write('hi');

writeStream.write('hi');

writeStream.write('hi');


console.log(writeStream.writableCorked)

writeStream.uncork();

console.log(writeStream.writableCorked)


 // yeh corked agar 0 araha hai toh corked nhi hai 0 ke alawa 1 and2 corked hai
// writeStream.write('hi');
console.log(writeStream.writableCorked);// corked ek method hai

// yeh isliye hota hai ki humko data ko hold karna hai internal buffer mai hi





writeStream.end();// abh koi bhi data write nhi kar skte hai but pura data flush hogha yeh guarnateed nhi hai
console.log(writeStream.writableEnded);//ram sai data flush hoagaaya
console.log(writeStream.writableLength); // legth 8 hogha


// console.log(writeStream.writableFinished);// yeh abhi bhi false dega kyoki kuch time leta hai yeh data flush hone ke liye isliye set timeout lagao






setTimeout(()=>{
    console.log(writeStream.writableFinished);
    console.log(writeStream.writableLength);// length 0 hojaega
},10);