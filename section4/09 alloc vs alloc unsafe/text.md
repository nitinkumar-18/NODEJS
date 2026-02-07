// Buffer.alloc() memory assign kardega aur usme value zero ho hamesha


//Buffer.allocUnsafe() ->yeh sirf memory kardega value phleee sai ho skti hai nhi bhi ho skti
// unsafe lekin fast hai but yeh koi bhi information reveal kar skta hai agar memory jyada hojae tabh isliye unsafe












<!-- 

🧠 Big Picture
alloc        → clean, zero-filled memory
allocUnsafe  → fast, dirty (uninitialized) memory

🔹 Buffer.alloc(size)

👉 Nayi memory allocate karta hai
👉 Har byte = 0 (safe)

const buf = Buffer.alloc(5);
console.log(buf);
// <Buffer 00 00 00 00 00>


✔️ Secure
✔️ Predictable
❌ Thoda slow (zero-fill)

🔹 Buffer.allocUnsafe(size)

👉 Memory allocate karta hai, par clear nahi karta
👉 Old / random data ho sakta hai 😬

const buf = Buffer.allocUnsafe(5);
console.log(buf);
// <Buffer e3 7a 1f 00 9c> (random)


⚠️ Security risk
⚠️ Garbage data

🔥 Performance difference

allocUnsafe ≈ 2x faster

Kyunki zero-fill skip karta hai

Isliye Node ke internals me use hota hai

🔹 Safe way to use allocUnsafe

Agar tum har byte overwrite kar rahe ho 👇

const buf = Buffer.allocUnsafe(4);
buf.writeUInt32BE(100); // overwrite all bytes


👉 Ab safe 👍

🔹 ❌ Galat use (DANGER)
const buf = Buffer.allocUnsafe(100);
res.end(buf); // ❌ MEMORY LEAK


Client ko random memory mil sakti hai

🔹 alloc vs allocUnsafe (table 🔥)
Feature	alloc	allocUnsafe
Zero-filled	✅	❌
Secure	✅	❌
Fast	❌	✅
Garbage data	❌	✅
Use case	user data	internals
🔹 Mental model 😄

alloc → “naya, dhoya hua dabba”

allocUnsafe → “garam plate, pehle saaf karo!”

🔹 Interview one-liners 💡

Buffer.alloc allocates a zero-filled buffer.

Buffer.allocUnsafe allocates memory without initialization and must be fully overwritten before use.

🔹 Golden rule (yaad rakhna 🔐)

User ko bhejne se pehle allocUnsafe buffer ka har byte overwrite hona chahiye. -->