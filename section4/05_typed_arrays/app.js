// const a=new ArrayBuffer(3);
// const view=new DataView(a);
//const a=new ArrayBuffer(3);// isme yeh 3 not allow because kyoki hamesha 4 ke multiples legha


// const uint8Array=new Uint8Array(4) // create array buffer

// const uint16Array=new Uint16Array(a)
// const uint32Array=new Uint32Array(a)

// isme endianess ka kuch issue nhi hota because single byte data hai


//buffer saio buffer attach hota hai


// uint8Array[0]=0xfe; // fill array buffer
// uint8Array[1]=0xee;
// uint8Array[2]=0x3a;
// uint8Array[3]=0x8a;

// console.log(uint8Array.buffer);




//uint8Array[2]=0xff;  // eesse modify karskte hai bhuat aassan hota hai ek dum array kai jaisa








// const uint8Array=new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff);






// console.log(uint8Array.buffer)



// setInterval(()=>{
//     const a=[
//         new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff),

//          new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff),
//     ];
// },1000);



// actual data array buffer ke andar hota hai
// iss typedArray ke andar uss memory ko modify and edit ka tarika deta hai








//resize method,transfer method
const a =new ArrayBuffer(4,{maxByteLength : 16});

const uint8Array=new Uint8Array(a);

// resize and detach wali property abhi node mai yaha nhi aaehai js console mai waha karke dekh skte hai because new method not implement in all

// browse mai support hai inn sabka node mai aaajega
