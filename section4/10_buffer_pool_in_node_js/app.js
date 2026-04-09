
import {Buffer,constants} from 'buffer';



// const a=Buffer.alloc(4); //node js ka buffer
// const b=Buffer.allocUnsafe(4095);// fast hota hai but data leak ka risk hota hai

// const c=Buffer.allocUnsafe(4095 - 6 );// yeh bts mai bufferpool ko use karega



// const d=Buffer.from('abc').  //yeh  behind the scene allocUnsafe ko use karta hai, kyuki yeh string ko buffer me convert karta hai, aur string ka size 3 bytes hota hai, isliye yeh 3 bytes ke liye memory allocate karta hai, aur usme string ka data store karta hai.

// b[2]=97;
// c[0]=101;
// console.log(a.byteLength);// node js buffer ka length in bytes
// console.log(b.byteLength);

// console.log('***********');


// console.log(a.buffer.byteLength);// arraybuffer->size 8kb in bytes


// console.log(b.buffer.byteLength);








// console.log(Buffer.poolSize)// default 8kb hota hai aur dusra  benefit hai allocunsafe ka ki wo fast hota hai kyuki wo memory ko zero nahi karta hai, isliye usme data leak ka risk hota hai.








// node js ka program jabh start hota hai tabh hamara yeh buffer poolsize create hota hai, aur jab ham buffer create karte hai to wo is pool se memory allocate karta hai, aur jab ham buffer destroy karte hai to wo memory pool me wapas chala jata hai, isliye hamara buffer pool size 8kb hota hai, aur hamara buffer bhi 8kb hota hai, isliye hamara buffer pool size 8kb hota hai.


//buuferpoolsize right shift operator use karke ham buffer pool size ko 2 se divide kar sakte hai, aur left shift operator use karke ham buffer pool size ko 2 se multiply kar sakte hai.

// console.log(Buffer.poolSize >> 1);// 8kb/2=4kb
// console.log(Buffer.poolSize << 1);// 8kb*2=16kb


//console.log(Buffer.poolSize/2);// 8kb/2=4kb
// console.log(Buffer.poolSize*2);// 8kb*2=16kb
// buffer.poolSize=16*1024;// 16kb
// console.log(Buffer.poolSize);// 16kb


// buffer pool kya hai ek array buffer node js create karke rakhta hai jisme hamara buffer create hota hai, aur jab ham buffer create karte hai to wo is pool se memory allocate karta hai, aur jab ham buffer destroy karte hai to wo memory pool me wapas chala jata hai, isliye hamara buffer pool size 8kb hota hai, aur hamara buffer bhi 8kb hota hai, isliye hamara buffer pool size 8kb hota hai.

//isme memory allocation bhaut fast hota hai allocunsafe  me kyuki wo memory ko zero nahi karta hai, isliye usme data leak ka risk hota hai, aur alloc me memory ko zero karta hai, isliye usme data leak ka risk nahi hota hai, isliye allocunsafe fast hota hai alloc se.





// const joinBuffer=Buffer.concat([a,z]);// yeh 2 buffer ko join karta hai, aur ek naya buffer return karta hai, jisme dono buffer ka data hota hai, aur uska size dono buffer ke size ka sum hota hai.

// console.log(joinBuffer.byteLength);// 7 bytes hota hai, kyuki a ka size 4 bytes hota hai, aur z ka size 3 bytes hota hai, isliye joinBuffer ka size 7 bytes hota hai.





















// const d=Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH));
// const string=d.toString();




//bhaut badha buffer toh ram full isliye streams ka use hota hai
//file bina apne computer ko crash kiye read karne ke liye streams ka use hota hai, kyuki streams data ko chhote chhote parts me read karta hai, aur usme memory ka use kam hota hai, isliye streams ka use hota hai.









































