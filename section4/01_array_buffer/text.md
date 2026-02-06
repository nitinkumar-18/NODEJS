// ARRAY BUFFER IN JS
<!-- ArrayBuffer kya hota hai?

ArrayBuffer fixed-size memory hota hai

Isme directly data read / write nahi kar sakte

Sirf bytes hote hain (0s & 1s), datatype nahi hota

Socho jaise:

RAM ka ek dabba 📦 — andar data hai, par kaunsa data hai wo batane ke liye extra tool chahiye

🔹 Kab use hota hai?

ArrayBuffer mainly use hota hai jab:

Binary data handle karna ho

Files (image, video, audio)

Network data (WebSockets, fetch)

Low-level performance ka kaam

WebGL, Audio processing -->




// ARRAYBUFFER IS A CONSTRUCTOR  so use new KEYWORD


new ArrayBuffer(4);


// hexadecimal mai 2 bit ka digit use karke represent kar skte hai





// 32 bits ka memory create kia hai
// console mai memory inspector mai jaakar dekho

//arraybuffer kabhi update nhi hota
but using typed view and dataview hum kar skte hai

// unicode start always with 0





//ARRAYBUFFERS IN JS ARE GARBAGE COLLECTOR IN JS
means koi variable use nhi ho rha hai kafi dher takh apne aap delete hojaega ->garbage collector




// signed number and unsigned numbers


// unsigned numbers means all positive numbers

// signed numbers   1=>-ve,  0=>+ve;


convert unsigned to signed take 2's complement

// signed ->. -128 to 127






// ARRAYBuffer created
const a=new ArrayBuffer(4);









<!-- 🔹 Buffer kya hota hai? -->
<!-- 
Buffer = temporary memory space
jahan data thodi der ke liye store hota hai
taaki producer aur consumer smoothly kaam kar sake.

👉 Simple line:

Buffer ek waiting room hai data ke liye

🔹 Buffer kyon chahiye?

Socho:

Data bahut fast aa raha hai

Par process slow hai

👉 Direct denge → data loss ❌
👉 Buffer me rakhenge → baad me process ✔️ -->








<!-- 
🔹 ArrayBuffer kya hota hai?

ArrayBuffer ek raw binary memory block hota hai.
Socho jaise RAM ka ek tukda mil gaya ho — usme sirf bytes (0/1) hote hain.

👉 Important baat:
ArrayBuffer khud data read / write nahi kar sakta
Ye bas memory allocate karta hai.

let buffer = new ArrayBuffer(8); // 8 bytes ki memory

🔹 “Raw binary” ka matlab?

Binary data =

images

audio

video

network packets

file data

Jaise C/C++ me char arr[8] hota hai — wahi concept JS me ArrayBuffer.

🔹 ArrayBuffer akela useless kyon hai?

Kyuki:

Na buffer[0] kaam karega

Na direct value read/write

Isliye TypedArray chahiye 🔽

🔹 TypedArray kya karta hai?

TypedArray ArrayBuffer ke upar lens lagata hai
taaki hum bolein:

is byte ko int samjho

isko float samjho

isko char samjho

Examples:
let buffer = new ArrayBuffer(8);

let view1 = new Int32Array(buffer);
let view2 = new Uint8Array(buffer);


Same memory, different view 😎

🔹 Example (bahut important 🔥)
let buffer = new ArrayBuffer(4);
let bytes = new Uint8Array(buffer);
let ints  = new Int32Array(buffer);

bytes[0] = 255;

console.log(bytes); // [255, 0, 0, 0]
console.log(ints);  // [255]  (depends on endian)


👉 SAME memory
👉 Different interpretation

🔹 DataView kya hota hai?

Agar tum chahte ho:

exact byte control

endian choose karna (Big / Little)

let buffer = new ArrayBuffer(4);
let view = new DataView(buffer);

view.setInt16(0, 256, true); // little endian
console.log(view.getInt16(0, true)); // 256


👉 DataView = most powerful but thoda verbose

🔹 Endian ka chhota sa idea

Memory:

Address →  00  01
Bytes   →  00  01


Little Endian → chhota byte pehle

Big Endian → bada byte pehle

JS usually little-endian use karta hai.

🔹 ArrayBuffer kahaan use hota hai? (REAL USE 🔥)
1️⃣ Files
file.arrayBuffer()

2️⃣ WebSockets / Network
socket.send(buffer);

3️⃣ Images / Audio / Video

Canvas

Web Audio API

WebGL

4️⃣ Performance-heavy apps

Games

Editors

Streaming -->



view.setInt8(1,0b1010000)// yeh sabh binary mai hojaega 50 agaya

view.setInt(0,80) // binary 50 iss 80 ka














