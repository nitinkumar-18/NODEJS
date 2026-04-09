// file ko jabh bhi open karte hai unka alag mode hota hai

// file phele open phir write






// by default file ko jabh. bhi open karo read mode mai open hogha





import fs from "fs";






// const fd=fs.openSync("text.txt","w");// in case yaha w likh dia toh jo bhi file hoghi usko empty karega
// incase nhi hai file toh create karke empty karega







//BY DEFAULT READ HOTA HAI
// const fd=fs.openSync("text.txt","r")




// r,w ,a read write append








//append mai toh jo hai uske aagee read kardetaa hai


// w+ read and write both
//r+ isme read aur write dono but difference if file not exist then fails
//a+ read write both

// const fd=fs.openSync("text.txt","a")


// write karna hai toh write mode mai karo





// yeh w  r vagera sabh flags hote hai
const fd=fs.openSync("text.txt","w")



fs.writeFileSync(fd,"TANISH TANDONN");// bina read kare write kia tabh error aegaa yeh ->. Error: EBADF: bad file descriptor, write










