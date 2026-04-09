
<!-- 
TypedArray provides a simple, fixed-type view over an ArrayBuffer, while DataView offers low-level, byte-precise access with explicit endianness control.

🔹 Ekdum simple line 😎

TypedArray = easy mode

DataView = god mode -->
















<!-- 

TypedArray kya hota hai?

TypedArray = fixed type ka view

Tum bolte ho:

“Is memory ko sirf int / float ki tarah treat karo”

Example
let buffer = new ArrayBuffer(8);
let arr = new Int16Array(buffer);

arr[0] = 100;
arr[1] = 200;


✔️ Simple
✔️ Fast
❌ Endian control nahi
❌ Mixed data types nahi

🔹 Common TypedArrays
TypedArray	Size
Int8Array	1 byte
Uint8Array	1 byte
Int16Array	2 bytes
Int32Array	4 bytes
Float32Array	4 bytes -->













<!-- 
DataView kya hota hai?

DataView = sabse powerful view

Tum bolte ho:

“Is byte se ye type likho, next byte se doosra type, endian bhi main decide karunga”

Example
let buffer = new ArrayBuffer(6);
let view = new DataView(buffer);

view.setInt8(0, 10);
view.setInt16(1, 300, true);   // little endian
view.setInt8(3, -5);


✔️ Byte-level control
✔️ Endian control
✔️ Mixed data types
❌ Thoda verbose

🔹 set / get ka role
DataView me:
view.setInt16(0, 256, true);
let x = view.getInt16(0, true);

TypedArray me:
arr[0] = 256;
let x = arr[0];


👉 TypedArray me setInt / getInt nahi likhte
👉 DataView me explicit methods hote hain

🔹 Same memory, different views 🤯
let buffer = new ArrayBuffer(2);

let a = new Uint8Array(buffer);
let b = new DataView(buffer);

a[0] = 1;
a[1] = 0;

console.log(b.getInt16(0, true)); // 1


👉 Memory ek
👉 Interpretation alag -->