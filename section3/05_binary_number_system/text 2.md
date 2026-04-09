Decimal base 10 {0 to 9} max 9
octal base 8 {0 to 7} max 7
hexadecimal base 16 {0 to 9 ,a,b,c,d,e,f}
binary base 2



represent hexadecimal 0x843 this 0x is a symbol



0x843 convert hexadecimal this into decimal   3*16^0 + 4*16^1 + 8*16^2=2115



use parseInt to convert any number to its base number like convert 843 into hexadecimal
parseInt('843',16)=2115.  take any base in place of 16 or take any number 



decimal to hexadecimal store in variable first

ex- const a=2115
undefined
a.toString(16)
//'843'









Binary=base 2 {0,1} ex 1
ex convert number to binary 10 ->so 0*2^0 + 1*2^1=2





// data stored in bit ex- 1011010110 here 10 bits available



// 8 bits = 1byte 
ex 10110101 this 8 bits = 1byte


//4 bits = 1 nibble[1010]
1 nib=0.5 byte



// 2 nib=1 byte



two units SI and IEC




<!-- 
🔹 SI (International System of Units)

SI = Système International d’Unités
(International System of Units)

➡️ Ye metric system ka official naam hai
➡️ Base 10 (1000) use karta hai

🔹 IEC (International Electrotechnical Commission)

IEC = International Electrotechnical Commission

➡️ Ye organization electrical & electronic standards banati hai
➡️ Data storage ke binary units (KiB, MiB, GiB) yahin se aaye -->



SI->

🔹 SI Units (Decimal system)

Base = 10

Unit	Value
1 KB	1000 bytes
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB








🔹 IEC Units (Binary system)

Base = 2

Unit	Value
1 KiB	1024 bytes
1 MiB	1024 KiB
1 GiB	1024 MiB
1 TiB	1024 GiB










// data store im two types at physical level knows a s bits or binary digits->
// data storage and data transfer


DATA STORAGE [hdd and ssd]


data transfer[3g,4g,5g, radio waves] electromagnetic waves
// fibre optic cables.  [yaha light jalao waha dikhjae]

// copper ke cable mai hota hai generally but isme electricity bhej skte hai light nhi

high voltage =1
low voltage=0



// physical level par 0 and 1 hi store hote hai basically but usko interpret kia jata hai






// sexagesimal system is a numeral system based on 60 which is use to measure time

// why we use decimal number system always?
// places values introduced by indian mathematician

// phele european roman number system used karte thee uske baadh apna decimal number system popular hua aur phir sabh wahi karne laghe




// binary to octal karna convinient hota hai

// computer convinient in 2 ki power [binary number system]
// but human convinient in 10 ki power[decimal number system]
// koi badha number compact form ke liye octal and hexa mai likhte hai






















// character sets and character encodings





//character sets

a,b,c,d,e,f,1,2,3,koi bhi symbol like
koi ek number assign karte hai like unhe assign karne ke process ko character sets khete hai

// 1->a
//2->b
basically ASCII[American standard code for information interchange] characters they assign number to the value

//unicode

// sbko number assign hai ascii ke andar 









ascii code->128 characters 2^7=128





// unicode have 1.1 million characters

// jitne possible ho skte hai unicode mai vo lakar rakhe hai usme yehi hai aaj kal popular hai bhaut jyada












// koi bhi character ko number assign karna characters set







// character encodings
-> isme  character sets ko binary mai kaise represent kaise kare bss yehi isme ataa hai



//UTF-8[8 bits hoti hai]
// ASCII CODE[7 bits hoti hai]
















UTF-8 is the rulebook that tells computers how to turn human-readable characters into binary (0s and 1s), and back.

Why UTF-8 exists

Early computers used ASCII, which could store only 128 characters (English letters, digits, symbols).
That was a problem for:

Hindi, Chinese, Arabic, etc.

Emojis 😎🔥

Accents (é, ñ)

UTF-8 solved this globally 🌍.

Key properties of UTF-8
1️⃣ Variable-length encoding

Each character uses 1 to 4 bytes:

Character	Bytes	Example
A	1 byte	ASCII compatible
é	2 bytes	European chars
अ	3 bytes	Hindi
😀	4 bytes	Emoji

So English text stays small, but all languages are supported.

2️⃣ Backward compatible with ASCII

This is huge 👇

ASCII characters (A–Z, a–z, 0–9) use exactly the same byte values

Old systems don’t break

Example:

A  → 01000001


Same in ASCII and UTF-8.

3️⃣ Can represent ALL Unicode characters

Unicode assigns a code point to every character:

A → U+0041

अ → U+0905

😀 → U+1F600

UTF-8 is just one way to store these code points in bytes.

Why UTF-8 is everywhere 🚀

🌐 Web standard (HTML, CSS, JS)

🐍 Python default encoding

🗄️ Databases (MySQL, PostgreSQL)

🧠 Linux / macOS systems

That’s why you often see:

<meta charset="UTF-8">

UTF-8 vs Unicode (common confusion)

Unicode → character set (what characters exist)

UTF-8 → encoding (how characters are stored)

👉 Unicode = dictionary
👉 UTF-8 = storage format

Quick real-world example

Word: Hi 😀

Character	UTF-8 bytes
H	48
i	69
😀	F0 9F 98 80
In one line 🧠

UTF-8 is a universal, space-efficient encoding that lets computers store and display text from every language correctly.




