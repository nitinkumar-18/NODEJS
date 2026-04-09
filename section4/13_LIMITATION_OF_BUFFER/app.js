import fs from 'fs/promises';

const a=await fs.readFile()
console.log(a.byteLength);

console.log("End");


// yeh dikkat hoti hai jabh hum badhe buffer ke sath karte hai toh hamara memory leak ho sakta hai toh isliye hum stream ka use karte hai jisse hamara memory efficient hota hai aur hamare application ki performance bhi badh jati hai.


// issi problem ko solve karne ke liye hum stream ka use karte hai jisse hamara memory efficient hota hai aur hamare application ki performance bhi badh jati hai. stream ke through hum data ko chhote chhote parts me read kar sakte hai aur process kar sakte hai bina pura data ko memory me load kiye.




//RAM FULL SERVER CRASH HO JATA HAI
//BHUAT CAUTIOUS RHENA HOTA HAI BUFFER KE SATH KAM KARTE HAI TOH MEMORY LEAK HO SAKTA HAI ISLIYE STREAM KA USE KARTE HAI JISSE HAMARA MEMORY EFFICIENT HOTa hai aur hamare application ki performance bhi badh jati hai.



//tabhi heavy size buffer create nhi karte hai jaha par buffer ho aur yeh hamara yeh buffer ram kaa hissa hota hai jabh bhi memory chaiyeh toh ram sai leepaee because hamari application bhaut fast run hoti hai
