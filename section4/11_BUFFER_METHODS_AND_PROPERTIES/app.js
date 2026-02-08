// import { Buffer, constants } from "buffer";
// import fs from "fs/promises";

// const nodeBuffer = Buffer.from("Hello World!", 'utf-8');
// const nodeBuffer = Buffer.alloc(8);

// Methods //
// nodeBuffer.write("abcdef");
// console.log(nodeBuffer.toString());
// console.log(nodeBuffer.toJSON());
// console.log(nodeBuffer.slice(5, 8).toString()); // Deprecated
// console.log(nodeBuffer);
// console.log(nodeBuffer.subarray(2));
// console.log(nodeBuffer.subarray(2).toString());
// nodeBuffer.copy(nodeBuffer2, 0, 0, 5);
// console.log(nodeBuffer.includes("He", 5, 'utf-16le'));
// nodeBuffer.fill(98)
// console.log(nodeBuffer.readInt8(1));
// console.log(nodeBuffer.readInt16BE(1));
// console.log(nodeBuffer.writeInt8(0x65));
// console.log(nodeBuffer.writeInt16LE(0x65, 0));
// console.log(nodeBuffer.writeInt16LE(0x67, 2));
// console.log(nodeBuffer.writeInt16BE(0x65, 0));
// console.log(nodeBuffer.writeInt16BE(0x67, 2));
// console.log(nodeBuffer.at(2));
// console.log(nodeBuffer.swap16());

// Properties //
// console.log(nodeBuffer.buffer);
// console.log(nodeBuffer.byteLength);
// console.log(nodeBuffer.byteOffset);
// console.log(nodeBuffer.length);












































// import {Buffer,constants} from "buffer";
// import fs from "fs/promises";

// const nodeBuffer=Buffer.from("Hello World","utf-16le")
// from means vo utf-8 hi read karega by default but we can specify the encoding as well
// METHODS
// const nodeBuffer2=Buffer.alloc(8);

// nodeBuffer2[0]=98;
// nodeBuffer2[1]=0;
// nodeBuffer2[7]=104;

// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString());

// const decoder=new TextDecoder("utf-8");
// console.log(decoder.decode())


// console.log(nodeBuffer);
// console.log(nodeBuffer.toString("utf-8"));

// console.log(nodeBuffer.toString('utf-16le'));


// console.log(nodeBuffer2);

// console.log(nodeBuffer2.toString());
// jabh read karege  to sirf yeh bh print hpogha zero ignore hojaega but jabh write hogha toh zero bhi showw hogha NULL ke roop mein


// fs.writeFile("filee.txt",nodeBuffer2)






// console.log(nodeBuffer);

// fs.writeFile("filee.txt",nodeBuffer)
// console.log(nodeBuffer.toString("utf-8"))





/// ,main difference yeh hai ki jab hum utf-16le encoding se buffer banayenge toh jab hum usko utf-8 me read karenge toh humein NULL character bhi show hoga kyunki utf-16le me har character ke baad ek NULL character hota hai. Isliye jab hum usko utf-8 me read karenge toh NULL character bhi show hoga.




// main ek aur difference hai ki kisi bhi encoding mai write kar skte hai but jab hum read karenge toh humein ussi encoding mai read karna hoga jisme humne write kiya hai. Agar humne utf-16le me write kiya hai toh humein utf-16le me hi read karna hoga, agar humne utf-8 me write kiya hai toh humein utf-8 me hi read karna hoga. Agar humne utf-16le me write kiya hai aur utf-8 me read karenge toh humein NULL character bhi show hoga. Agar humne utf-8 me write kiya hai aur utf-16le me read karenge toh humein NULL character bhi show hoga. Isliye jab hum buffer banate hain toh humein uski encoding specify karni chahiye taki jab hum usko read karein toh humein sahi output mile.





// koi encoding ni hai toh by default utf-8 hi use hoga. Agar humne utf-16le me write kiya hai toh humein utf-16le me hi read karna hoga, agar humne utf-8 me write kiya hai toh humein utf-8 me hi read karna hoga. Agar humne utf-16le me write kiya hai aur utf-8 me read karenge toh humein NULL character bhi show hoga. Agar humne utf-8 me write kiya hai aur utf-16le me read karenge toh humein NULL character bhi show hoga. Isliye jab hum buffer banate hain toh humein uski encoding specify karni chahiye taki jab hum usko read karein toh humein sahi output mile.















// const nodeBuffer=Buffer.from("Hello World")

// console.log(nodeBuffer);

// console.log(nodeBuffer.toString(""));// unknown encoding aega isme 










//ASCII CONTAINS 128 CHARACTERS

// const nodeBuffer=Buffer.from("abc")
// console.log(nodeBuffer);
// console.log(nodeBuffer.toString("hex"));
// console.log(nodeBuffer.toString("binary"));
//latin1 is same as binary encoding contains 256 characters binary alias latin1
// console.log(nodeBuffer.toString("latin1"));

// but best pratice is utf-8 or utf8 both same









// const nodeBuffer=Buffer.alloc(8);
// nodeBuffer.write("abc","hex");
// nodeBuffer.write("abc");
// console.log(nodeBuffer.toString("hex"));


// const nodeBuffer=Buffer.from("Hello World");
// nodeBuffer.write("abc");

// console.log(nodeBuffer.toString());// issai haamko normal string ke roop mein output milega


// console.log(nodeBuffer.toJSON());// issai haamko json ke roop mein output milega agar binary data dega array ke format mai






// console.log(nodeBuffer.slice(5,4).toString());//purana hai yeh bhaut hi purana hai yeh bhau


// console.log(nodeBuffer.subarray(5,8).toString());// same as slice work karega









// const nodeBuffer=Buffer.from("Hello World");
// const nodeBuffer2=Buffer.alloc(8);
// nodeBuffer.write("abc");


// nodeBuffer.copy(nodeBuffer2,0,0,5);// target buffer, target start index, source start index, source end index
// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString());




// console.log(nodeBuffer.includes("he"));//false

// console.log(nodeBuffer.includes("He"));//true



// console.log(nodeBuffer.includes("He",5,"utf-16le"));//false. if we use encoding before so also add in this too because if we use encoding before so also add in this too otherwise it will not work because it will look for the string in the buffer according to the encoding we have used before. if we have used utf-16le before so it will look for the string in the buffer according to utf-16le encoding and if we have used utf-8 before so it will look for the string in the buffer according to utf-8 encoding. if we have used utf-16le before and we are looking for the string in the buffer according to utf-8 encoding then it will not find the string because it will look for the string in the buffer according to utf-16le encoding and it will not find the string because it is looking for the string in the buffer according to utf-8 encoding. if we have used utf-8 before and we are looking for the string in the buffer according to utf-16le encoding then it will not find the string because it will look for the string in the buffer according to utf-8 encoding and it will not find the string because it is looking for the string in the buffer according to utf-16le encoding. so always use the same encoding while writing and reading from a buffer.


// console.log(nodeBuffer.includes("He",5,"utf-8"));//false  

//nodeBuffer.fill(98); //buffer ussi number sai 98 fill hojaega











// const nodeBuffer=Buffer.from("Hello World");

// console.log(nodeBuffer);
// console.log(nodeBuffer.readBigInt16BE(0));
// console.log(nodeBuffer.readBigInt16LE(0));
// console.log(nodeBuffer.writeBigInt16BE(0x6565,0));


// particular index par character ko read karne ke liye at method use karte hain
// console.log(nodeBuffer.at(2)); // 108 yani l ka ascii value hai






// const nodeBuffer=Buffer.alloc(8);

// console.log(nodeBuffer);
// console.log(nodeBuffer.writeInt8(0x65,0));// index bhi bata skte hai konsi index par write karna hai
// console.log(nodeBuffer);

















// console.log(nodeBuffer.at(2));// jo usspar character hai uska ascii value dega
// console.log(nodeBuffer.swap16());

// Properties //
// console.log(nodeBuffer.buffer);
// console.log(nodeBuffer.byteLength);
// console.log(nodeBuffer.byteOffset); // jis array buffer par based hai waha par konse index se start ho raha hai
// console.log(nodeBuffer.length);




// bhaut methods hote hai toh aap documentation sai go through kar skte hai
