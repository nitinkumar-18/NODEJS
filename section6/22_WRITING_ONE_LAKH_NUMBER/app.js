import fs from "fs";


console.time();


const fd=fs.openSync("numbers.txt","w");



for(let i=1; i<=100000;i++){


    fs.writeSync(fd, `${i}, `);





}

// hum yeh likh kar close kar rhe hai varna matt likho toh apne aap close kardega 
fs.closeSync(fd);



console.timeEnd();




// yeh sbse jydaaa fast because sirff ek barr open ek barr close sabh likh jaega yeh sbse jyda fast hai data stream writestream sai bhi jyda fast hai



// yeh sabh disk par write ho rha hai numbers.txt vagera



// ussai acha buffer banalo aur usme likho jabh full hojae buffer tabh write karo