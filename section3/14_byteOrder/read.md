









Node.js is a powerful, open-source runtime environment that allows developers to run JavaScript code outside of a web browser, primarily on the server side. Built on Google Chrome’s V8 JavaScript engine, Node.js is designed to build scalable network applications. It employs an event-driven, non-blocking I/O model, making it lightweight and efficient for data-intensive real-time applications that run across distributed devices.



 xxd -g 1 text.txt


xxd is a Linux/Unix command

It converts binary data into hexadecimal (hex) format

Useful to see the raw bytes of a file in a human-readable way

Example
xxd file.txt


Output looks like:

00000000: 4865 6c6c 6f20 576f 726c 64         Hello World

What’s happening here?

48 65 6c 6c 6f → ASCII for Hello

Left side → byte offset

Middle → hex values

Right side → ASCII interpretation (if printable)

Reverse hex dump → original file
xxd -r hexfile.txt original.bin

Common uses

Debugging binaries

Viewing file headers (PDF, PNG, EXE, etc.)

Malware analysis

Low-level systems / OS / networking work

👉 One-liner:

xxd = binary → hexadecimal viewer














xxd -b text.txt this command convert to binary


xxd -b text.txt
00000000: 01100001[a] 01100010[b] 01100011[c]                             abc
// yeh byte hai unki information hai






// single binary single byte ke liye zero lagaega aur 7 byte ke andar usko save karega











utf->unicode transformation format

utf-8,utf-16,utf-32 means like 8 bit ka memory and 16 bit like

utf saara kuch unicode ke character par based hai





// utf-16 be and utf-16 le two utf-16 exist fffe and defff\\


//👉 Jab sirf UTF-16 likha ho, to usually BOM ke through decide hota hai.

2️⃣ Endianness kya hota hai? (base concept) 🧠

Endianness = byte order

Big-Endian (BE) → big byte first

Little-Endian (LE) → little byte first

0x0041  (A)



Type	Bytes order
BE	00 41
LE	41 00




5️⃣ BOM (Byte Order Mark) 🔥

BOM = file ke starting bytes jo batate hain:

Encoding

Endianness

Encoding	BOM
UTF-8	EF BB BF
UTF-16 LE	FF FE
UTF-16 BE	FE FF

Editors BOM dekh ke samajh jaate hain kaunsa use karna hai.


// utf binary mai transform karne kaa format hai

// uska minimum 8 bit takh represent kar skte hai ek character ke liye

// utf -16 mai 16 bit ek character ke liye thoda size jyda legha compare to utf -8



utf-8 efficient hai memory mai 
utf-16 thoda fast hota hai lekin 32 bit or 4 byte leta hai



utf-32 basically vo thoda aur size legha 

speed slow if large data
but utf-8 vs utf-16 [means utf-8 thoda acha hai jyda efficients hai]

<!-- // standard hi bangyaa hai ki utf-8 hi use karna hai




| Feature          | UTF-8   | UTF-16  | UTF-32  |
| ---------------- | ------- | ------- | ------- |
| Bytes/char       | 1–4     | 2–4     | 4       |
| ASCII compatible | ✅       | ❌       | ❌       |
| Emojis           | 4 bytes | 4 bytes | 4 bytes |
| Endianness       | ❌       | ✅       | ✅       |
| Space efficiency | ⭐⭐⭐⭐    | ⭐⭐⭐     | ⭐       |
| Popularity       | ⭐⭐⭐⭐⭐   | ⭐⭐⭐     | ⭐       | -->
