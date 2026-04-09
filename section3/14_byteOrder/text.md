china YYYY/MM/DD

US MM/DD/YYYY

INDIA DAY/MONTH/YEAR


so date likho toh uska format bhi likho ki kisme likhni hai date china india us

vaise hi data transfer karo toh batado ki human yaa computer readable format mai hai toh vo machine samaj jaegi


computer most signi bit on large index
less index least signi bit




// HUMAN wala format hai BIG ENDIAN


//Endian (Endianness) kya hota hai? 🧠

Endianness = multi-byte data ka byte order memory me kaise store hota hai

Jab data 1 byte se zyada ka ho (2, 4, 8 bytes), tab endian matter karta hai.













//Endian (Endianness) kya hota hai? 🧠

Endianness = multi-byte data ka byte order memory me kaise store hota hai

Jab data 1 byte se zyada ka ho (2, 4, 8 bytes), tab endian matter karta hai.

Example (sabse important)

Number:

0x12345678   (4 bytes)

Big Endian (BE)

Big byte first (left to right)

Address →   00   01   02   03
Bytes   →   12   34   56   78

Little Endian (LE)

Little byte first (reverse order)

Address →   00   01   02   03
Bytes   →   78   56   34   12

Yaad rakhne ka trick 🧩

Big Endian → human-readable (MSB first)

Little Endian → machine-friendly (LSB first)

Real-life analogy 🍕

Number: 1234

Big Endian → 1 2 3 4

Little Endian → 4 3 2 1



U + FEFF [BOM(Byte Order Mark)]

2 byte ko add kardegi phele hi WAHI BOM HAI header bolo usko

iisko hi dekh kar samajaega ki kisme jaega vo like vo kaha hai ayaa hai BE SAI LE sai BOM KO DEKH KAR


// max time lE USE HOTA HAU
NODE JS like LE Hi samajta hai



// hum jabh data ek machine sai dusre machine send kar rhe hote hai tabh 






// UTF-8 MAI ESSA KUCH NHI hota hai by default BE ko use karta hai


//but yeh sabh be and le utf -16 mai hoota hai