// import fs from "fs";

// console.time();

// const buff = Buffer.allocUnsafe(10);

// Time 310ms
// Time 24ms with custom internal buffer
// const fd = fs.openSync("numbers.txt", "w");

// let totalBytesWrittenInBuffer = 0;
// let remainingStr = "";

// for (let i = 1; i <= 100000; i++) {
//   let str = `${i}, `;
//   str = remainingStr + str;
//   const bytesWritten = buff.write(str, totalBytesWrittenInBuffer);
//   remainingStr = "";

//   const writtenBytesDiff = str.length - bytesWritten;
//   if (writtenBytesDiff !== 0) {
//     remainingStr += str.slice(bytesWritten);
//   }
//   totalBytesWrittenInBuffer += bytesWritten;

//   if (totalBytesWrittenInBuffer === buff.byteLength) {
//     fs.writeSync(fd, buff);
//     totalBytesWrittenInBuffer = 0;
//   }
  // fs.writeSync(fd, `${i}, `);
// }

// fs.writeSync(fd, buff.subarray(0, totalBytesWrittenInBuffer) + remainingStr);

// fs.closeSync(fd);
// console.timeEnd();





// memory matlab RAM.  isme hum logh buffer par karege write


// RAM FAST HOTA HAI

















































// iss bar hum logh phele buffer mai likhege




// import fs from "fs";

// console.time();

// alloc mai assign karte hai but allocunsafe bhi bdia hai ek dum because fast hai bhaut

// const buff=Buffer.allocUnsafe(4);

// const bytesWritten=buff.write(`${1}, `);

// console.log(buff);
// console.log({bytesWritten});







// { bytesWritten: 3 }






//TIME 310 ms

// const fd=fs.openSync("numbers.txt","w");

// for(let i=1;i<=10;i++){

//   buff.write

  // fs.writeFileSync(fd, `${i}, `);
// }




// fs.closeSync(fd);
// console.timeEnd();














// import fs from "fs";

// const fd=fs.openSync("numbers.txt","w");
// let totalBytesWritten=0;


// for(let i=1;i<10;i++){
//   const bytesWritten=buff.write(`${i}, `);
//   totalBytesWritten+=bytesWritten;
// }


// fs.closeSync(fd);

// console.timeEnd();








// import fs from "fs";


// const buff=Buffer.allocUnsafeSlow(4);

// console.log(buff.write(`abc`));

// console.log(buff);


// console.log(buff.write(`def`,3));

// console.log(buff);












// import fs from "fs";
// console.time();

// const buff=Buffer.allocUnsafe(4);

// const fd=fs.openSync("numbers.txt","w");

// let totalBytesWrittenInBuffer=0;
// let remainingStr="";

// for(let i=1;i<=5;i++){
//   let str=`${i}, `;
//   str=remainingStr +str;
//   // console.log(str.length);
//   const bytesWritten=buff.write( str,totalBytesWrittenInBuffer);



//   remainingStr="";


//   const writtenBytesDiff=str.length - bytesWritten;




//   if(writtenBytesDiff!=0){
//     remainingStr+=str.slice(bytesWritten);
//   }

//   totalBytesWrittenInBuffer+=bytesWritten;



//   if(totalBytesWrittenInBuffer === buff.byteLength){
//     fs.writeSync(fd,buff)


//     totalBytesWrittenInBuffer=0;
//   }
// }



// fs.closeSync(fd);

// console.timeEnd();























import fs from "fs";

console.time();

const buff = Buffer.allocUnsafe(10);

// Time 310ms
// Time 24ms with custom internal buffer
const fd = fs.openSync("numbers.txt", "w");

let totalBytesWrittenInBuffer = 0;
let remainingStr = "";// 

for (let i = 1; i <= 100000; i++) {
  let str = `${i}, `;
  str = remainingStr + str;
  const bytesWritten = buff.write(str, totalBytesWrittenInBuffer);
  remainingStr = "";

  const writtenBytesDiff = str.length - bytesWritten;
  if (writtenBytesDiff !== 0) {
    remainingStr += str.slice(bytesWritten);
  }
  totalBytesWrittenInBuffer += bytesWritten;

  if (totalBytesWrittenInBuffer === buff.byteLength) {
    fs.writeSync(fd, buff);
    totalBytesWrittenInBuffer = 0;
  }
  fs.writeSync(fd, `${i}, `);
}

fs.writeSync(fd, buff.subarray(0, totalBytesWrittenInBuffer) + remainingStr);

fs.closeSync(fd);
console.timeEnd();
